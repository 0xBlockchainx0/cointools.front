<template>
<div class="flex-grow mx-10">
  <multiselect
      v-model="value.name"
      label="name"
      track-by="id"
      :options="options"
      placeholder="Search"
      :preselect-first="true"
      :preserve-search="false"
      @select="onSelect"
      :internal-search="false"
      @search-change="search"
  ></multiselect>
</div>
</template>

<style lang="scss" scoped>
.multiselect__tags {
  padding-top:4px !important;
}
.multiselect__placeholder {
  margin:0 !important;
  padding:0 !important;
}
</style>

<script>
import { $coins } from '~/constants/endpoints';
export default {
  // async fetch() {
  //   this.coins = await fetch($coins).then(res => res.json())
  // },
  data() {
    return {
      value: [],
      optionArray: [],
      options: []
    }
  },
  methods: {
    onSelect(option, id) {
      this.$router.push('/coins/' + option.id)
    },
    search(query) {
      this.options = this.optionArray.filter(e => e.searchId.startsWith(query))
    }
  },
  mounted() {
    this.$axios.get($coins).then(response => {
      this.optionArray = response.data
    })
  }
}
</script>
