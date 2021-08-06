const state = {
  setId: null,
  expressions: [],
  activeExpressionIndex: 0,
  finishedExpressions: []
}

const getters = {
  setIsPresent: state => {
    return state.setId && state.expressions.length
  },
  nextExpression: state => {
    const nextExpressionIndex = state.activeExpressionIndex + 1
    if (nextExpressionIndex < state.expressions.length) {
      return state.expressions[nextExpressionIndex]
    } else {
      return null
    }
  },
  activeExpression: state => state.expressions[state.activeExpressionIndex]
}

const actions = {}

const mutations = {
  SET_NEW_SET: (state, { id, expressions }) => {
    state.setId = id
    state.expressions = expressions
  },
  PUSH_FINISHED_EXPRESSION: (state, expression) => {
    state.finishedExpressions.push(expression)
  },
  GET_NEXT_EXPRESSION: state => {
    if (state.activeExpressionIndex + 1 < state.expressions.length) {
      state.activeExpressionIndex++
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
