import express from 'express';
import controller from './account.controller';

const router = express.Router();

router.get('/account/', controller.getBalance);

export default router;
