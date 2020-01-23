/* eslint-env mocha */

import {
  assert, request, use,
} from 'chai';
import chaiHttp from 'chai-http';

const serverInitialize = require('../../server').default;

process.env.BABEL_ENV = 'test';
use(chaiHttp);

const mockTransaction = {
  id: '1',
  type: 'credit',
  amount: 350,
  effectiveDate: '2020-01-03T15:41:01.831Z',
};

describe('TRANSACTION CONTROLLER', () => {
  let server = null;
  beforeEach(async () => {
    server = serverInitialize();
  });
  it('should reply with an empty array when nothing has been found',
    async () => new Promise((resolve) => {
      request(server)
        .get('/api/v1/transactions?transactionId=20')
        .end((err, res) => {
          assert.deepEqual(res.body.transactions, []);
          assert.equal(res.status, 200);
          resolve();
        });
    }));

  it('should reply with a valid object when a transactions is found',
    async () => new Promise((resolve) => {
      request(server)
        .get(`/api/v1/transactions?transactionId=${mockTransaction.id}`)
        .end((err, res) => {
          const { transactions } = res.body;
          assert.deepEqual(transactions[0], mockTransaction);
          assert.equal(res.status, 200);
          resolve();
        });
    }));
});
