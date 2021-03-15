<template>
  <div class="border rounded p-10">
    <h4>{{data.name}}</h4>
    <p>${{ data.cointools.market_price_usd }}</p>
    <hr class="my-10">
    <nuxt-link :to="'/coins/'+data.id" class="btn btn-primary">View</nuxt-link>
    <button @click="deleteFromList(object)" class="btn">Remove</button>
  </div>
</template>

<script>
import { $coins } from '~/constants/endpoints';
export default {

  data() {
    return {
        data: {
          cointools: []
        }
    }
  },
  mounted() {
    this.$axios.get($coins + '/' + this.object + '/gecko').then(res => {
      this.data = res.data
    })
  },
  props: [
      'object'
  ],
  computed: {

  },
  methods: {
    deleteFromList(id) {
      this.$store.commit('localStorage/deleteFromList', id)
    }
  },
}
</script>
