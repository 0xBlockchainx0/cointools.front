<template>
  <div class="container-lg py-20 text-center">
    <PartialsTable :head="['Coin', 'Price', '1h', '24h', '7d', '24h Volume', 'Mkt Cap', 'Link']"
                    :body="markets"
    ></PartialsTable>
<!--    <div v-for="(coin, index) in markets" :key="index" class="text-left border rounded p-5 mb-2 flex items-center justify-between">-->
<!--      <div>-->
<!--        <h5 class="mb-0">{{index + 1}}. {{coin['name']}}</h5>-->
<!--        <p>${{coin['symbol']}}</p>-->
<!--      </div>-->
<!--      <nuxt-link tag="a" class="btn btn-primary" :to="'/coins/'+ coin['id']">View</nuxt-link>-->
<!--    </div>-->
  </div>
</template>

<script>
import { $markets } from '~/constants/endpoints';
export default {
  data() {
    return {
      markets: [],
    }
  },
  async fetch() {
    this.markets = await fetch($markets).then(res => res.json())
  },
}
</script>
