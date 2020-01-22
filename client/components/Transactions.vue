<!-- eslint-disable -->
<template>
  <div style="width: 30%;">
    <div class="container">
      <div v-for="(transaction, index) in data" :key="index"
           class="card is-fullwidth card-custom" style="cursor: pointer; justify-content: space-between"
           @click="toggleAcordion()">
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
        <div class="card-content" :class="{'is-hidden': !toggle}">
          <div class="content" style="text-align: left">
            <div>{{ `id: ${transaction.id}` }}</div>
            <div>{{ `Type: ${transaction.type}` }}</div>
            <div>{{ `Amount: ${transaction.amount}` }}</div>
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
    toggleAcordion() {
      this.toggle = !this.toggle;
    }
  }
}
</script>

<style scoped>
  .card-custom {
    margin-top: 15px;
  }
</style>
