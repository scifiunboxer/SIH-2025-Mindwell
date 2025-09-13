import express from 'express';
const router = express.Router();
import { processMessage } from '../controllers/chatbotController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/message').post(protect, processMessage);

export default router;