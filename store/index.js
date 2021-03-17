import VuexPersistence from 'vuex-persist'
export const plugins = [new VuexPersistence().plugin];

export const state = () => ({
  list: [],
  darkMode: false
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
  darkModeOff() {
    state.darkMode = false
  },
  darkModeOn() {
    state.darkMode = true
  },
  darkToggle() {
    console.log(state.darkMode)
    state.darkMode = !state.darkMode
  }
};

export const getters = {
  list: state => state.list,
  darkMode: state => state.darkMode
}
