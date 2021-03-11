<template>
<div>
  <vue-simple-complete
      :items="items"
      :objectMatchkey="objectMatchkey"
      :template="template"
      placeholder="hey"
      @inputChanged="onInputChanged">
  </vue-simple-complete>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      objectMatchkey: "searchId",
      template: {
        keys: ['name'],
        separator: ','
      },
      changedInput: ""
    }
  },
  methods: {
    onInputChanged(value) {
      this.changedInput = value;
      console.log('changed to' + value)
    }
  },
  async fetch() {
    this.items = await fetch('https://api.cointools.app/api/coins').then(res => res.json())
  }
}
</script>

<style lang="scss">
.sc__container {
  input {
    @apply border rounded p-2 bg-white w-64;
  }
}
</style>
