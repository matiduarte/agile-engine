import express from 'express';
import controller from './transaction.controller';

const router = express.Router();

router.get('/', controller.getTransactions);

export default router;
