export default {
    'GET_USER' (state, payload) {
        state.user = payload
    },
    'GET_USER_REPOS' (state, payload){
        state.repos = payload
    },
    'GET_REPO' (state, payload) {
        state.repo = payload
    },
    'API_MESSAGE'(state, payload){
        state.apiMessage = payload
    },
    'API_FAILURE'(){
        state.apiFailure = payload
    }
}