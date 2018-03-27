const state = {
  isPlay: false,
  activeTrack: 0,
  list: [],
}

const getters = {
  getTracks:(state) => state.list,
  getActiveTrack:(state) => state.activeTrack,
  getPlayerReady:(state) => state.list.length > 0,
  getIsPlayState:(state) => state.isPlay,
}

const mutations = {
  setTracks(state, payload) {
    state.list = payload
  },
  clearState() {
    state.list = []
  },
  toggleIsPlay(state, payload) {
    state.isPlay = payload
  },
}

const actions = {
  SET_TRACKS({ commit }, payload) {
    commit('setTracks', payload)
  },
  CLEAR_STATE({ commit }) {
    commit('clearState')
  },
  PLAY_TRACK({ commit }, payload) {
    commit('toggleIsPlay', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
