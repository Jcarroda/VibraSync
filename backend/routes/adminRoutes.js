const express = require('express');
const { Song } = require('../models/Song');
const { checkAdminRole } = require('../middleware/checkRole');
const { withAuth } = require('@clerk/nextjs/api');
const router = express.Router();

// Ruta para agregar una nueva canción (solo admin)
router.post('/songs', withAuth, checkAdminRole, async (req, res) => {
    const { title, artist, description, releaseDate, genre } = req.body;
    try {
        const newSong = new Song({ title, artist, description, releaseDate, genre });
        await newSong.save();
        res.status(201).json({ message: 'Canción añadida exitosamente', song: newSong });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la canción' });
    }
});

// Ruta para modificar una canción (solo admin)
router.put('/songs/:id', withAuth, checkAdminRole, async (req, res) => {
    const { id } = req.params;
    const { title, artist, description, releaseDate, genre } = req.body;
    try {
        const song = await Song.findById(id);
        if (!song) return res.status(404).json({ error: 'Canción no encontrada' });
        song.title = title || song.title;
        song.artist = artist || song.artist;
        song.description = description || song.description;
        song.releaseDate = releaseDate || song.releaseDate;
        song.genre = genre || song.genre;
        await song.save();
        res.status(200).json({ message: 'Canción actualizada exitosamente', song });
    } catch (err) {
        res.status(500).json({ error: 'Error al modificar la canción' });
    }
});

// Ruta para eliminar una canción (solo admin)
router.delete('/songs/:id', withAuth, checkAdminRole, async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Song.findByIdAndDelete(id);
        if (!song) return res.status(404).json({ error: 'Canción no encontrada' });
        res.status(200).json({ message: 'Canción eliminada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la canción' });
    }
});

// Ruta para obtener todas las canciones (para todos los usuarios)
router.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las canciones' });
    }
});

module.exports = router;
