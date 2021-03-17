import VuexPersistence from 'vuex-persist'
export const plugins = [new VuexPersistence().plugin];

export const state = () => ({
  list: [],
  darkMode: true
});


export const mutations = {
  addToList(state, item) {
    if (!state.list.includes(item)) {
      state.list.push(item)
      console.log(item + ' added.')
    } else {
      console.log(item + ' is already in your list.')
    }
  },
  deleteFromList(state, item) {
    const itemFind = state.list.indexOf(item)
    const removedItem = state.list.splice(itemFind, 1)
    console.log(removedItem)
  },
  darkToggle(state) {
    state.darkMode = !state.darkMode
  }
};
