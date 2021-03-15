<template>
  <div class="grid grid-cols-2 md:grid-cols-3 topstats">
    <div v-for="item in 6" class="border p-8 topstatsitem">
      <h5 class="mb-0">Title</h5>
      <h3 class="mt-0">Value</h3>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .topstats {
    > div:nth-child(1) {
      @apply rounded-tl;
    }
    > div:nth-child(3) {
      @apply rounded-tr;
    }
    > div:nth-child(4) {
      @apply rounded-bl;
    }
    > div:nth-child(6) {
      @apply rounded-br;
    }
  }
  .topstatsitem {
    margin-bottom:-1px;
    margin-right:-1px;
  }
</style>
