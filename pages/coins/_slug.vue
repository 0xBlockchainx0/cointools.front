<template>
  <div class="container py-10">
    <a class="btn cursor-pointer" @click="goBack()">Back</a>
    <div class="flex items-center">
      <img :src="profile.gecko.image['small']" alt="" class="mr-5 flex-grow-0">
        <h1 class="mb-0">{{ profile.gecko.name }}</h1>

    </div>
    <p>{{ profile.paprika.description }}</p>
    <hr class="my-10">
    <div class="flex">
      <div>
        <h3>Coinpaprika</h3>
        <vue-json-pretty :data="profile.paprika" deep="2"></vue-json-pretty>
      </div>
      <div>
        <h3>CoinGecko</h3>
        <vue-json-pretty :data="profile.gecko" deep="2"></vue-json-pretty>
      </div>
    </div>
  </div>
</template>

<script>
import { $coins } from '~/constants/endpoints';
export default {
  data() {
    return {
      profile: {
        gecko: [],
        paprika: []
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  async fetch() {
    this.profile.paprika = await fetch($coins + '/' + this.$route.params.slug).then(res => res.json())
    this.profile.gecko = await fetch($coins + '/' + this.$route.params.slug + '/gecko').then(res => res.json())
  }
}
</script>
