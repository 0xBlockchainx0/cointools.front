<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead >
            <tr>
              <th v-for="(item, index) in head" :index="index" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{item}}
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100">
            <tr v-for="(item, index) in body" :index="index">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                <div class="mr-4">
                  <button v-if="coinIsAdded(item.id)" @click="addToList(item.id)" class="fas fa-star text-gray-200"></button>
                  <button v-else @click="deleteFromList(item.id)" class="fas fa-star text-yellow-300"></button>
                </div>
                <span class="mr-4">{{item.market_cap_rank}}</span>
                <nuxt-link class="flex items-center" :to="'/coins/' + item.id">
                  <img class="h-8 mr-4" :src="item.image" alt="">
                  {{item.name}} ({{item.symbol.toUpperCase()}})
                </nuxt-link>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                {{ item.current_price }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
              {{ parseFloat(item.price_change_percentage_1h_in_currency).toFixed(2) + '%' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                {{ parseFloat(item.price_change_percentage_24h_in_currency).toFixed(2) + '%' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                {{ parseFloat(item.price_change_percentage_7d_in_currency).toFixed(2) + '%' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                {{ item.total_volume }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                {{ item.market_cap }}
              </td>
              <td>
                <nuxt-link :to="'/coins/' + item.id" class="btn btn-primary">View</nuxt-link>
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
