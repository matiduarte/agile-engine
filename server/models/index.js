import db from '../db/response.json';
import { DEBIT, CREDIT } from '../constants';

const { data: transactions } = db;
let { accountBalance } = db;
let lockTransaction = false;

export function find(transactionId) {
  if (lockTransaction) {
    throw 'TRANSACTIONS ARE LOCKED';
  }
  return transactionId ? transactions.filter(t => t.id === transactionId) : transactions;
}

/**
 * Incremental id
 * @returns {number}
 */
function findLastId() {
  return Math.max(...transactions.map(({ id }) => parseInt(id, 10)));
}

/**
 * Creates a debit transaction and update the account balance
 * @param amount
 * @returns {{amount: *, id: number, type: string, effectiveDate: Date}}
 */
function debitTransaction(amount) {
  if (!lockTransaction) {
    lockTransaction = true;
    const transaction = {
      id: findLastId() + 1,
      type: DEBIT,
      amount,
      effectiveDate: new Date(),
    };
    transactions.push(transaction);
    accountBalance += amount;
    lockTransaction = false;
    return transaction;
  }
  throw 'TRANSACTIONS ARE LOCKED';
}

/**
 * Creates a credit transaction and updates account balance
 * @param amount
 * @returns {{amount: *, id: number, type: string, effectiveDate: Date}}
 */
function creditTransaction(amount) {
  if (!lockTransaction) {
    lockTransaction = true;
    const transaction = {
      id: findLastId() + 1,
      type: CREDIT,
      amount,
      effectiveDate: new Date(),
    };
    transactions.push(transaction);
    if (accountBalance < amount) {
      lockTransaction = false;
      throw 'BALANCE MUST BE A NON NEGATIVE VALUE';
    }
    accountBalance -= amount;
    lockTransaction = false;
    return transaction;
  }
  throw 'TRANSACTIONS ARE LOCKED';
}

/**
 * Define with transaction must be created
 * @param type
 * @param amount
 * @returns {{amount: *, id: number, type: string, effectiveDate: Date}}
 */
export function createTransaction({ type, amount }) {
  switch (type) {
    case CREDIT:
      return creditTransaction(amount);
      break;
    case DEBIT:
      return debitTransaction(amount);
      break;
    default:
      throw 'INVALID TYPE';
  }
}

export function getBalance() {
  return accountBalance;
}
