export default {
  setTab({ commit, state }, payload) {
    // const tabs = JSON.parse(JSON.stringify(state.markers))
    // const tab = tabs.find(item => {
    //     return item.title === payload
    //   })
      commit("setMarkPosition", payload);
    }
  };