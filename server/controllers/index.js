import express from 'express';

import transactionsRoutes from './transactios/transaction.router';

const router = express.Router();

router.use('/api/v1/transactions', transactionsRoutes);

export default router;
