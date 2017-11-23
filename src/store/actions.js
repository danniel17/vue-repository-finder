import Vue from 'vue'

export default {
    // payload = user.login
    getUser(context, payload){
        Vue.http.get(`https://api.github.com/users/${payload}`)
            .then((response) => context.commit('GET_USER', response.body))
            .catch(((error) => context.commit('API_FAILURE',error)))
    },

    // payload = user.repos_url
    getUserRepos(context, payload){
        Vue.http.get(payload)
            .then((response) => context.commit('GET_USER_REPOS', response.body))
            .catch((error) => context.commit('API_FAILURE', response))
    }
    
}