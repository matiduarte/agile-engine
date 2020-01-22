/* eslint-disable */

import Vue from 'vue';
import request from '../libs/ajax';

export const state = () => ({
  transactions: [],
  balance: [],
});

export const mutations = {
  setTransactions(localState, data) {
    Vue.set(localState, 'transactions', data);
  },
  setBalance(localState, data) {
    Vue.set(localState, 'balance', data);
  },
};

export const actions = {
  async getTransactions({ commit }) {
    try {
      const { data: { transactions } } = await request('GET', 'transactions');
      commit('setTransactions', transactions);
    } catch (error) {
      console.error(error);
    }
  },
  async getBalance({ commit }) {
    try {
      const { data: { balance } } = await request('GET', 'account');
      commit('setBalance', balance);
    } catch (error) {
      console.error(error);
    }
  },
};
