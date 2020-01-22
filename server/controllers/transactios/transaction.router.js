import express from 'express';
import controller from './transaction.controller';

const router = express.Router();

router.get('/transactions/', controller.getTransactions);
router.post('/transactions/', controller.postTransaction);

export default router;
