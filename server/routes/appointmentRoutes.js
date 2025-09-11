import express from 'express';
const router = express.Router();
router.get('/', (req, res) => res.send('Appointment route'));
export default router;