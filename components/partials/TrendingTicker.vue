<template>
  <div class="w-full p-1 py-1 overflow-x-auto border rounded-full sideScrollNoBars">
    <div class="flex items-center wrapper">
      <h5 class="mx-4 mb-0 text-xs uppercase">Trending today</h5>
      <nuxt-link :to="'/coins/' + item.item.id" class="flex-shrink-0 px-3 py-1 text-xs rounded-full cursor-pointer hover:bg-primary hover:text-white group" v-for="item in data" :key="item.item.id">
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
