// routes/songs.js
const express = require('express');
const Song = require('../models/Song');
const { requireAuth, checkRole } = require('../middleware/auth');

const router = express.Router();

// Ruta para obtener todas las canciones
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find(); // Obtener todas las canciones
        res.json(songs);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener las canciones' });
    }
});

// Ruta para crear una nueva canción (solo admin)
router.post('/', requireAuth, checkRole('admin'), async (req, res) => {
    const { title, artists, description, url } = req.body;

    try {
        const newSong = new Song({
            title,
            artists,
            description,
            url,
            addedBy: req.userId, // ID del admin que sube la canción
        });

        await newSong.save();
        res.status(201).json(newSong);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear la canción' });
    }
});

// Ruta para obtener una canción por su ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const song = await Song.findById(id); // Buscar la canción por ID
        if (!song) {
            return res.status(404).json({ message: 'Canción no encontrada' });
        }
        res.json(song);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener la canción' });
    }
});

// Ruta para eliminar una canción (solo admin)
router.delete('/:id', requireAuth, checkRole('admin'), async (req, res) => {
    const { id } = req.params;

    try {
        const song = await Song.findByIdAndDelete(id); // Eliminar la canción por ID
        if (!song) {
            return res.status(404).json({ message: 'Canción no encontrada' });
        }
        res.json({ message: 'Canción eliminada' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar la canción' });
    }
});

module.exports = router;
