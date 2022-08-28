import express from 'express';
import * as postController from '../controllers/postController.js';

const router = express.Router();

// GET /posts
router.get('/', postController.getPosts);

// GET /posts/:id
router.get('/:id', postController.getPost);

export default router;