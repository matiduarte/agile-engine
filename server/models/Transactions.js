import db from '../db/response.json';

const { data } = db;

export default class Transactions {
  static getHistory() {
    return data;
  }
}
