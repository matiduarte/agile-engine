import express from 'express';

import transactionsRoutes from './transactios/transaction.router';
import accountRoutes from './accounts/account.router';

const router = express.Router();

router.use('/api/v1', transactionsRoutes);
router.use('/api/v1', accountRoutes);

export default router;
