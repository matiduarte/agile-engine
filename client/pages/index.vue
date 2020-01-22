<template>
  <div class="container">
    <div class="title">{{ `Balance: $${balance}` }}</div>
    <transactions :data="transactions" />
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';
import Transactions from '../components/Transactions.vue';
export default {
  name: 'Home',
  async asyncData({ store }) {
    return await Promise.all(
      [
        store.dispatch('getTransactions'),
        store.dispatch('getBalance'),
      ],
    );
  },
  components: {
    Transactions,
  },
  computed: {
    ...mapState(['transactions', 'balance']),
  }
};
</script>

<style scoped>

  .container {
    margin: 0 auto;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 30px;
    color: #35495e;
    justify-content: flex-start;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

<style scopded>

</style>
