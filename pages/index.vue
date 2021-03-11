<template>
  <div class="container py-20 text-center">
    <div class="mb-10">
      <h1 class="my-0 text-primary"><b>Cointools</b>.app</h1>
      <p class="my-0">Smarter analytics and community for your crypto-decisions</p>
    </div>
    <div v-for="(coin, index) in coins" :key="index" class="text-left border rounded p-5 mb-2">
      <h5 class="mb-0">{{coin['rank']}}. {{coin['name']}}</h5>
      <p>${{coin['symbol']}}</p>
      <p>Slug: {{coin['slug']}}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const coins = await $axios.$get('https://api.cointools.app/api/coins')
    return { coins }
  }
}
</script>
