<template>
  <div class="border-b py-10">
    <div class="container">
      <div class="breadcrumbs flex items-center text-sm mb-10">
        <nuxt-link to="/">Coins</nuxt-link>
        <i class="fas text-xs fa-chevron-right mx-3 opacity-50"></i>
        <p class="text-sm">{{profile.gecko.name}}</p>
      </div>
      <div class="flex justify-between">
        <div class="market_profile_header_left">
          <div class="flex items-center">
            <img :src="profile.gecko.image.small" alt="" class="mr-2 flex-grow-0 w-6">
            <h1 class="text-xl font-bold mb-0">{{ profile.gecko.name }} <span class="uppercase font-normal opacity-50">({{profile.gecko.symbol}})</span></h1>
          </div>
          <h2>${{profile.gecko.cointools.market_price_usd}}</h2>
          <div class="mr-4">
            <button v-if="coinIsAdded(profile.gecko.id)" @click="addToList(profile.gecko.id)" class="fas fa-star text-gray-500"><span class="font-body font-normal ml-1">Add</span></button>
            <button v-else @click="deleteFromList(profile.gecko.id)" class="fas fa-check text-green-800"><span class="ml-1 text-green-800 font-body font-normal">Tracking</span></button>
          </div>
        </div>
        <div class="market_profile_header_right flex items-end">
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
      @apply bg-gray-100;
    }
  }
}
</style>

<script>
import { $coins } from '~/constants/endpoints';
export default {
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
  async fetch() {
    this.profile.gecko = await fetch($coins + '/' + this.$route.params.slug + '/gecko').then(res => res.json())
  },
  mounted() {
    this.refresh20s()
  }
}
</script>
