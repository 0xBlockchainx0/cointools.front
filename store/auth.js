// import { auth } from '~/plugins/firebase.js'

// export const state = () => ({
//     user: '',
// })

// export const getters = {
//   user(state) {
//     return state.user
//   },
//   isAuthenticated(state) {
//     return !!state.user
//   }
// }

// export const mutations = {
//   setUser(state, payload) {
//     state.user = payload
//   }
// }

// export const actions = {
//   signUp({commit}, {email, password}) {
//     console.log(email + password)
//     return auth.createUserWithEmailAndPassword(email, password)
//   },
//   signInWithEmail({commit}, {email, password}) {
//     return auth.signInWithEmailAndPassword(email, password)
//   },
//   signOut() {
//     return auth.signOut()
//   }
// }