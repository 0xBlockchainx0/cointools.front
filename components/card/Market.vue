<template>
  <div class="border rounded p-10">
    <p>{{object}}</p>
<!--    <p>{{object.name}}</p>-->
<!--    <h2>{{object.current_price}}</h2>-->
<!--    <nuxt-link :to="'/coins/'+object.id" class="btn btn-primary">View</nuxt-link>-->
    <button @click="deleteFromList(object)" class="btn">Remove</button>
  </div>
</template>

<script>
export default {
  props: [
      'object'
  ],
  methods: {
    deleteFromList(id) {
      this.$store.commit('localStorage/deleteFromList', id)
    }
  },
}
</script>
