import { getBalance } from '../../models';

export default {
  getBalance: (req, res) => {
    const balance = getBalance();
    res.json({ success: true, balance });
  },
};
