<template>
  <div class="container py-10">
    <nuxt-link class="btn cursor-pointer" to="/">Back</nuxt-link>
    <div class="flex items-center">
      <img :src="profile.gecko.image['small']" alt="" class="mr-5 flex-grow-0">
        <h1>{{ profile.gecko.name }}</h1>

    </div>
    <p>{{ profile.paprika.description }}</p>
    <p>Ticker & Exchange: {{ tickerID }}</p>
    <hr class="my-10">


    <div class="tradingview-widget-container">
      <div id="tradingview_nuxt" class="h-96"></div>
    </div>

<!--        <vue-json-pretty :data="profile.paprika" deep="2"></vue-json-pretty>-->

<!--        <vue-json-pretty :data="profile.gecko" deep="2"></vue-json-pretty>-->

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
    this.profile.paprika = await fetch($coins + '/' + this.$route.params.slug + '/paprika').then(res => res.json())
    this.profile.gecko = await fetch($coins + '/' + this.$route.params.slug + '/gecko').then(res => res.json())
  },
  computed: {
    tickerID() {
      return this.profile.gecko.tickers[0].base + 'USD';
    }
  },
  beforeMount() {
    new TradingView.widget(
        {
          "autosize": true,
          "symbol": this.tickerID,
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "uk",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "tradingview_nuxt"
        }
    );
  },
}
</script>
