// export const state = () => ({
//     menu: []
// })

// export const mutations = {
//     SET_MENU(state, menu) {
//         this.state.menu = menu
//     }
// }

// export const actions = {
//     nuxtServerInit(context) {
//         return this.$axios.$get('https://localhost:44307/api/Objects/getall')
//             .then((response) => {
//                 context.commit('SET_MENU', response)
//             })
//     }
// }