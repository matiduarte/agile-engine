import { find, createTransaction } from '../../models';

export default {
  getTransactions: (req, res) => {
    const { transactionId } = req.query;
    const data = find(transactionId);
    res.json({ success: true, transactions: data });
  },
  postTransaction: (req, res) => {
    const { type, amount } = req.body;
    let data;
    try {
      data = createTransaction({ type: type.toLowerCase(), amount: parseInt(amount, 10) });
    } catch (error) {
      return res.status(422).json({ success: false, msg: error });
    }
    return res.json({ success: true, transactions: data });
  },
};
