import express from 'express';
import { trackReferral } from '../controllers/referralController.js';
const router = express.Router();

router.post('/track', trackReferral);

export default router;
