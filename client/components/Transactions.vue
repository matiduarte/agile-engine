<!-- eslint-disable -->
<template>
  <div style="width: 30%;">
    <div class="container">
      <div v-for="(transaction, index) in data" :key="index"
           class="card is-fullwidth card-custom" style="cursor: pointer; justify-content: space-between"
           @click="toggleAccordion(index)">
        <header class="card-header">
          <p
            class="card-header-title" style="text-transform: capitalize"
            :style="{color: transaction.type === 'debit' ? 'green' : 'red'}"
          >
            {{ transaction.type }}
          </p>
          <p class="card-header-title" style="justify-content: flex-end">
            {{ `$${transaction.amount}` }}
          </p>
        </header>
        <div class="card-content is-hidden" :ref="`accordion${index}`">
          <div class="content" style="text-align: left">
            <div>{{ `Id: ${transaction.id}` }}</div>
            <div>{{ `Type: ${transaction.type}` }}</div>
            <div>{{ `Amount: $${transaction.amount}` }}</div>
            <div>{{ `Effective Date: ${transaction.effectiveDate}` }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/* eslint-disable */

export default {
  name: 'Transactions',
  props: ['data'],
  data() {
    return {
      toggle: false,
    }
  },
  methods: {
    toggleAccordion(index) {
      const [el] = this.$refs[`accordion${index}`];
      if (el.classList.contains('is-hidden')) {
        el.classList.remove('is-hidden');
      } else {
        el.classList.add('is-hidden');
      }
    }
  }
}
</script>

<style scoped>
  .card-custom {
    margin-bottom: 20px;
  }
</style>
