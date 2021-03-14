export const state = () => ({
  list: []
});

export const mutations = {
  addToList(state, item) {
    if(!state.list.includes(item)) {
      state.list.push(item)
      console.log(item + ' added.')
    } else {
      console.log(item + ' is already in your list.')
    }
  },
  deleteFromList(state, item) {
    const itemFind = state.list.findIndex(result => result == item)
    console.log(itemFind)
    state.list.splice(item, 1)
  }
};
