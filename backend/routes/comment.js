// routes/comments.js
const express = require('express');
const Comment = require('../models/Comment');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// Ruta para obtener todos los comentarios
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find(); // Obtener todos los comentarios
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los comentarios' });
    }
});

// Ruta para agregar un comentario
router.post('/', requireAuth, async (req, res) => {
    const { message } = req.body;

    try {
        const newComment = new Comment({
            userId: req.userId,  // ID del usuario que comenta
            username: req.username, // Nombre del usuario (lo puedes enviar desde Clerk)
            message,
        });

        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el comentario' });
    }
});

module.exports = router;
