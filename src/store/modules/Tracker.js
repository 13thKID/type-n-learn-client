const state = {
  carriagePosition: 0,
  correctHit: 0,
  falseHit: 0
};

const getters = {};

const actions = {};

const mutations = {
  // carrriage movement
  MOVE_CARRIAGE_RIGHT: state => {
    state.carriagePosition++;
  },
  RESET_CARRIAGE_POSITION: state => {
    state.carriagePosition = 0;
  },
  INCREMENT_CORRECT_HIT: state => {
    state.correctHit++;
  },
  INCREMENT_FALSE_HIT: state => {
    state.falseHit++;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};

export const TRACKER = {};
