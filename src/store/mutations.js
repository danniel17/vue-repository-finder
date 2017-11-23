export default {
    //'CHANGE_USER' (state, payload){
    //    state.user = payload
    //},
    'GET_USER' (state, payload) {
        state.user = payload
    },
    'GET_USER_REPOS' (state, payload){
        state.repos = payload
    },
    'GET_REPO' (state, payload) {
        state.user.repo = payload
    },
    'API_FAILURE'(){
        
    }
}