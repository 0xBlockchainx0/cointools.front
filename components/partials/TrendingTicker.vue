<template>
  <div class="w-full rounded-full p-1 py-2 overflow-x-auto sideScrollNoBars bg-bg-dark">
    <div class="wrapper flex items-center">
      <h5 class="text-xs uppercase mb-0 mx-4">Trending today</h5>
      <nuxt-link :to="'/coins/' + item.item.id" class="py-1 px-3 rounded-full hover:bg-primary hover:text-white group cursor-pointer flex-shrink-0 text-xs" v-for="item in data" :key="item.item.id">
        {{item.item.symbol}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { $coins } from '~/constants/endpoints.js'
export default {
  data() {
    return {
      data: []
    }
  },
  async fetch() {
    this.data = await fetch($coins + '/trending').then(res => res.json())
  }
}
</script>
