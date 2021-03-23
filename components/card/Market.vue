<template>
  <div>
    <div v-show="!variant" class="p-10 border rounded">
      <h4>{{ data.name }}</h4>
      <p>${{ data.cointools.market_price_usd }}</p>
      <hr class="my-10">
      <nuxt-link :to="'/coins/'+data.id" class="btn btn-primary">View</nuxt-link>
      <button class="btn" @click="deleteFromList(object)">Remove</button>
    </div>

    <nuxt-link :to="'/coins/' + data.id" v-if="variant === 'top'" class="flex items-center px-3 py-1 mr-3 text-xs border rounded-full">
      <h6 class="mb-0 text-xs uppercase">{{ data.symbol }}</h6>
      <p class="ml-2 text-xs">${{ data.cointools.market_price_usd }}</p>
    </nuxt-link>

     <nuxt-link :to="'/coins/' + data.id" v-if="variant === 'left'" class="flex items-center w-full py-2 mb-2 mr-3 text-xs">
     <div class="mr-2 bg-white rounded-full">
     <img :src="data.image.small" alt="" class="flex-grow-0 w-4"></div>
      <h6 class="mb-0 text-xs uppercase">{{ data.symbol }}</h6>
      <p class="ml-auto\ text-xs">${{ data.cointools.market_price_usd }}</p>
    </nuxt-link>

  </div>
</template>

<script>
import {$coins} from '~/constants/endpoints';

export default {
  async fetch() {
    if(this.object && this.object != undefined) {
    this.data = await fetch($coins + '/' + this.object + '/gecko').then(res => res.json())
    }
  },
  data() {
    return {
      data: {
        symbol: [],
        image: [],
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
      this.$store.commit('deleteFromList', id)
    },
    refresh() {
      this.$fetch()
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
