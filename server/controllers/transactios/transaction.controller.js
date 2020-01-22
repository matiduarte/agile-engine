import Transactions from '../../models';

export default {
  getTransactions: (req, res) => {
    const { transactionId } = req.query;
    const data = Transactions.find(transactionId);
    res.json({ transactions: data });
  },
  postTransaction: (req, res) => {
    const { type, amount } = req.body;
    let data;
    try {
      data = Transactions.doTransaction({ type, amount: parseInt(amount, 10) });
    } catch (error) {
      return res.status(422).send('Invalid Params');
    }
    return res.json({ transactions: data });
  },
};
