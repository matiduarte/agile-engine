import Transactions from '../../models';

export default {
  getTransactions: (req, res) => {
    const data = Transactions.getHistory();
    res.json({ transactions: data });
  },
};
