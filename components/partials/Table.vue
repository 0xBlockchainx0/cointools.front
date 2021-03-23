<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border shadow sm:rounded-lg">
          <table class="min-w-full divide-y divide-border">
            <thead >
            <tr>
              <th v-for="(item, index) in head" :index="index" scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
                {{item}}
              </th>
            </tr>
            </thead>
            <tbody class="divide-y bg-bg divide-border">
            <tr v-for="(item, index) in body" :index="index">
              <td class="flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap">
                <div class="mr-4">
                  <button v-if="coinIsAdded(item.id)" @click="addToList(item.id)" class="text-gray-200 fas fa-star"></button>
                  <button v-else @click="deleteFromList(item.id)" class="text-yellow-300 fas fa-star"></button>
                </div>
                <span class="mr-4">{{item.market_cap_rank}}</span>
                <nuxt-link class="flex items-center" :to="'/coins/' + item.id">
                  <img class="h-8 mr-4" :src="item.image" alt="">
                  {{item.name}} ({{item.symbol.toUpperCase()}})
                </nuxt-link>
              </td>
              <td class="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                {{ item.current_price }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
              {{ parseFloat(item.price_change_percentage_1h_in_currency).toFixed(2) + '%' }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                {{ parseFloat(item.price_change_percentage_24h_in_currency).toFixed(2) + '%' }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                {{ parseFloat(item.price_change_percentage_7d_in_currency).toFixed(2) + '%' }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                {{ item.total_volume }}
              </td>
              <td class="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                {{ item.market_cap }}
              </td>
            </tr>

            <!-- More items... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: [
      'head',
      'body'
  ],
  computed: {
  },
  methods: {
    coinIsAdded(id) {
      // console.log(id)
      return this.$store.state.list.indexOf(id) < 0;
    },
    addToList(item) {
      this.$store.commit('addToList', item)
    },
    deleteFromList(id) {
      this.$store.commit('deleteFromList', id)
    },
  }
}
</script>
