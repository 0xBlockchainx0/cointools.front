<template>
    <div class="tradingview-widget-container">
      <div id="tradingview_nuxt" style="height:600px;"></div>
    </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      coinData: [],
      isLive: false
    };
  },
  computed: {
    getTradingPair() {
      return this.data.symbol + 'USD'
    },
    chartDarkMode() {
      if(this.$store.state.darkMode) {
        return 'dark'
      }
      return 'light'
    }
  },
  methods: {
    async initTradingView() {
      if(this.data.symbol) {
      new TradingView.widget({
        autosize: true,
        symbol: this.getTradingPair,
        interval: "D",
        timezone: "Etc/UTC",
        theme: this.chartDarkMode,
        style: "2",
        locale: "uk",
        "range": "1M",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        "withdateranges": true,
        container_id: "tradingview_nuxt"
      });
      }
    },
  },
    mounted() {
      this.initTradingView()
    },
    watch: {
      data: function(newVal, oldVal) {
        if(!this.isLive) {
        this.initTradingView()
        this.isLive = true
        }
      }
    }
};
</script>

<style lang="scss" scoped>
</style>