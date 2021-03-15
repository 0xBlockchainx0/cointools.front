<template>
  <div>
    <div v-if="!variant" class="border rounded p-10">
      <h4>{{ data.name }}</h4>
      <p>${{ data.cointools.market_price_usd }}</p>
      <hr class="my-10">
      <nuxt-link :to="'/coins/'+data.id" class="btn btn-primary">View</nuxt-link>
      <button class="btn" @click="deleteFromList(object)">Remove</button>
    </div>

    <nuxt-link :to="'/coins/' + data.id" v-if="variant === 'top'" class="px-3 flex items-center">
      <h6 class="mb-0">{{ data.symbol.toUpperCase() }}</h6>
      <p class="ml-4">${{ data.cointools.market_price_usd }}</p>
    </nuxt-link>

  </div>
</template>

<script>
import {$coins} from '~/constants/endpoints';

export default {
  async fetch() {
    this.data = await fetch($coins + '/' + this.object + '/gecko').then(res => res.json())
  },
  data() {
    return {
      data: {
        symbol: [],
        cointools: []
      }
    }
  },
  props: [
    'object',
    'variant'
  ],
  computed: {},
  methods: {
    deleteFromList(id) {
      this.$store.commit('localStorage/deleteFromList', id)
    },
    refresh() {
      this.$fetch()
      console.log('refetching')
    },
    refresh20s() {
      // Call fetch again if last fetch more than 30 sec ago
      setInterval(() => {
        this.refresh()
      }, 20000)
    }
  },
  created() {
    this.refresh20s()
  }
}
</script>
