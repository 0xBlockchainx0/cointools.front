<template>
  <div class="py-10 border-b">
    <div class="container">
      <div class="flex items-center mb-10 text-sm breadcrumbs">
        <nuxt-link to="/">Coins</nuxt-link>
        <i class="mx-3 text-xs opacity-50 fas fa-chevron-right"></i>
        <p class="text-sm">{{profile.gecko.name}}</p>
      </div>
      <div class="flex justify-between">
        <div class="market_profile_header_left">
          <div class="flex items-center">
            <img :src="profile.gecko.image.small" alt="" class="flex-grow-0 w-6 mr-2">
            <h1 class="mb-0 text-xl font-bold">{{ profile.gecko.name }} <span class="font-normal uppercase opacity-50">({{profile.gecko.symbol}})</span></h1>
          </div>
          <h2>${{profile.gecko.cointools.market_price_usd}}</h2>
          <div class="mr-4">
            <button v-if="coinIsAdded(profile.gecko.id)" @click="addToList(profile.gecko.id)" class="text-gray-500 fas fa-star"><span class="ml-1 font-normal font-body">Add</span></button>
            <button v-else @click="deleteFromList(profile.gecko.id)" class="text-green-500 fas fa-check"><span class="ml-1 font-normal text-green-500 font-body">Tracking</span></button>
          </div>
        </div>
        <div class="flex items-end market_profile_header_right">
          <ul class="flex list-none market_menu">
            <nuxt-link tag="li" :to="'/coins/'+profile.gecko.id">Overview</nuxt-link>
            <nuxt-link tag="li" :to="linkUrl+'/markets'">Markets</nuxt-link>
            <nuxt-link tag="li" :to="linkUrl+'/trading'">Trading View</nuxt-link>
            <nuxt-link tag="li" :to="linkUrl+'/historical'">Historical</nuxt-link>
            <nuxt-link tag="li" :to="linkUrl+'/events'">Events</nuxt-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.market_menu {
  li {
    @apply list-none mx-2 p-1 px-3 rounded-full cursor-pointer;
    &:hover {
      @apply bg-light;
    }
  }
}
</style>

<script>
import { $coins } from '~/constants/endpoints';
export default {
  props: ['data'],
  data() {
    return {
      profile: {
        gecko: {
          image: [],
          cointools: [],
          tickers: {
          }
        }
      }
    }
  },
  computed: {
    linkUrl() {
      return '/coins/' + this.$route.params.slug
    }
  },
  methods: {
    coinIsAdded(id) {
      // console.log(id)
      return this.$store.state.list.indexOf(id) < 0;
    },
    addToList(item) {
      this.$store.commit('addToList', item)
    },
    deleteFromList(id) {
      this.$store.commit('deleteFromList', id)
    },
    getData() {
      if(this.$route.params.slug != undefined) {
      this.$axios.get($coins + '/' + this.$route.params.slug + '/gecko').then(response => {
      this.profile.gecko = response.data
      })
      }
    },
    refresh20s() {
      // Call fetch again if last fetch more than 30 sec ago
      setInterval(() => {
        this.getData()
      }, 20000)
    }
  },
  mounted() {
    this.refresh20s()
    this.getData()
  }
}
</script>
