<template>
  <div class="grid grid-cols-2 md:grid-cols-3 topstats">

    <div class="border p-8 topstatsitem">
      <h5 class="mb-0">Active coins</h5>
      <h3 class="my-0">{{stats.quick['active']}}</h3>
    </div>
    <div class="border p-8 topstatsitem">
      <h5 class="mb-0">Total Volume</h5>
      <h3 class="my-0">{{stats.quick['total_volume']}}</h3>
    </div>
    <div class="border p-8 topstatsitem">
      <h5 class="mb-0">Total market cap</h5>
      <h3 class="my-0">{{stats.quick['total_market_cap']}}</h3>
    </div>
    <div class="border p-8 topstatsitem">
      <h5 class="mb-0">Market Cap %</h5>
      <h3 class="my-0">{{stats.quick['market_cap_percentage']['btc'].toFixed(2)}}% (BTC)</h3>
    </div>
    <div class="border p-8 topstatsitem">
      <h5 class="mb-0">Market Cap Change (24hr)</h5>
      <h3 class="my-0">{{stats.quick['market_cap_change_24']}}</h3>
    </div>
    <div class="border p-8 topstatsitem">
      <h5 class="mb-0">Ongoing ICOs</h5>
      <h3 class="my-0">{{stats.quick['ongoing_icos']}}</h3>
    </div>
  </div>

</template>

<script>
import { $coins } from '~/constants/endpoints';
export default {
  async fetch() {
    this.stats = await fetch($coins + '/global').then(res => res.json())
  },
  data() {
    return {
      stats: {
        quick: {
          market_cap_percentage: {
            btc: []
          }
        }
      }
    }
  },
  mounted() {
    console.log($coins)
  }
}
</script>

<style lang="scss" scoped>
  .topstats {
    > div:nth-child(1) {
      @apply rounded-tl;
    }
    > div:nth-child(3) {
      @apply rounded-tr;
    }
    > div:nth-child(4) {
      @apply rounded-bl;
    }
    > div:nth-child(6) {
      @apply rounded-br;
    }
  }
  .topstatsitem {
    margin-bottom:-1px;
    margin-right:-1px;
  }
</style>
