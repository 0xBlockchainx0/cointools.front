<template>
<div>
  <multiselect
      v-model="value.name"
      label="name"
      track-by="id"
      :options="options"
      placeholder="Search"
      :preselect-first="true"
      :preserve-search="false"
      @select="onSelect"
  ></multiselect>
</div>
</template>

<script>
import { $coins } from '~/constants/endpoints';
export default {
  // async fetch() {
  //   this.coins = await fetch($coins).then(res => res.json())
  // },
  data() {
    return {
      value: [],
      options: []
    }
  },
  methods: {
    onSelect(option, id) {
      this.$router.push('/coins/' + option.id)
    }
  },
  mounted() {
    this.$axios.get($coins).then(response => {
      this.options = response.data
    })
  }
}
</script>
