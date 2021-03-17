<template>
  <div>

    <PartialsMarketHeader />

    <div class="container grid grid-cols-4 items-start gap-5 py-10">
      <div class="col-span-3 border rounded p-10">
        <div class="tradingview-widget-container">
          <div id="tradingview_nuxt" style="height:600px;"></div>
        </div>
      </div>
      <div class="col-span-1 border rounded p-10">
        <h5>About {{profile.gecko.name}}</h5>
        
      </div>
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
        gecko: {
          image: [],
          cointools: [],
          tickers: {
          }
        },
        paprika: []
      }
    }
  },
  async fetch() {
    this.profile.paprika = await fetch($coins + '/' + this.$route.params.slug + '/paprika').then(res => res.json())
    this.profile.gecko = await fetch($coins + '/' + this.$route.params.slug + '/gecko').then(res => res.json())
  },
  computed: {
    tickerID() {
      if(this.profile.gecko.tickers[0]) {
        return this.profile.gecko.tickers[0].base + 'USD'
      }
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    refresh() {
      this.$fetch()
    },
    async loadTradingView(tickerID) {
      await fetch($coins + '/' + this.$route.params.slug + '/gecko').then(res => res.json())
      new TradingView.widget(
          {
            "autosize": true,
            "symbol": tickerID,
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
  },
  mounted() {
    this.loadTradingView(this.tickerID)
  },
}
</script>
