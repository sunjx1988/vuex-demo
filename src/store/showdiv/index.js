export default {
  state: {
    show: 1
  },
  mutations: {
    switch_show: function (state) {
      state.show += 1
      console.log(state.show)
    }
  },
  actions: {
    switch_show: function (context) {
      context.commit('switch_show')
    }
  }
}
