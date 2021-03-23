<template>
  <div>
    <PartialsMarketHeader />

    <div class="container grid items-start grid-cols-4 gap-5 py-10">
      <div class="col-span-3 rounded">
        <PartialsMarketChart :data="profile.gecko" />
      </div>
      <div class="col-span-1 p-10 border rounded">
        <h5>About {{profile.gecko.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { $coins } from "~/constants/endpoints";
export default {
  data() {
    return {
      profile: {
        gecko: {
          image: [],
          cointools: [],
          tickers: {}
        },
        paprika: []
      }
    };
  },
  async fetch() {
    if(this.$route.params.slug != undefined) {
    this.profile.gecko = await fetch(
      $coins + "/" + this.$route.params.slug + "/gecko"
    ).then(res => res.json());
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    refresh() {
      this.$fetch();
    },
    refresh20s() {
      // Call fetch again if last fetch more than 30 sec ago
        setInterval(() => {
          this.refresh()
        }, 20000)
    }
  },
  created() {
    this.refresh20s()
  }
};
</script>
