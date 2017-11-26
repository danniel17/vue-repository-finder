export default {
    'GET_USER' (state, payload) {
        state.user = payload
    },
    'GET_USER_REPOS' (state, payload){
        state.repos = payload
    },
    'GET_REPO' (state, payload) {
        state.repo = payload
    }
}