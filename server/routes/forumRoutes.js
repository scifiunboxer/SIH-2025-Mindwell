import express from 'express';
const router = express.Router();
// We will add controller logic later
router.get('/', (req, res) => res.send('Forum route'));
export default router;
