import * as types from './mutation-types'

const mutations = {
  [types.SET_CURRENT_MOVIE_ID](state, currentMovieId) {
    state.currentMovieId = currentMovieId
  }
}

export default mutations
