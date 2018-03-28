const state = {
  isPlay: false,
  activeTrack: 0,
  list: [],
}

const getters = {
  getTracks: (state) => state.list,
  getActiveTrack: (state) => state.activeTrack,
  getPlayerReady: (state) => state.list.length > 0,
  getIsPlayState: (state) => state.isPlay,
  showPrevArrow: (state) => state.activeTrack !== 0,
  showNextArrow: (state) => state.list.length > state.activeTrack + 1,
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
  setActiveTrack(state, payload) {
    state.activeTrack = Number(payload)
  }
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
  SET_ACTIVE_TRACK({ commit }, payload) {
    commit('setActiveTrack', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
