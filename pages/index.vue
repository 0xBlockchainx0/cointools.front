<template>
  <div class="container py-10">

    <PartialsTrendingTicker class="mb-10"></PartialsTrendingTicker>

    <PartialsTopStats class="mb-10"></PartialsTopStats>

    <h3>Top 100 Cryptos</h3>
    <PartialsTable :head="['Coin', 'Price', '1h', '24h', '7d', '24h Volume', 'Mkt Cap']"
                    :body="markets"
    ></PartialsTable>
<!--    <div v-for="(coin, index) in markets" :key="index" class="flex items-center justify-between p-5 mb-2 text-left border rounded">-->
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
  methods: {
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
