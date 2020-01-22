import db from '../db/response.json';
import { DEBIT, CREDIT } from '../constants';

const { data } = db;
let { accountBalance } = db;

export default class Transactions {
  static find(transactionId) {
    return transactionId ? data.filter(t => t.id === transactionId) : data;
  }

  static doTransaction({ type, amount }) {
    switch (type) {
      case CREDIT:
        accountBalance -= amount;
        break;
      case DEBIT:
        accountBalance += amount;
        break;
      default:
        throw new Error('INVALID_TYPE');
    }
    return accountBalance;
  }
}
