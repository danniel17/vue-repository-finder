import  Vue from 'vue'

export default {
    // payload = user.login
    getUser(context, payload){
        Vue.http.get(`https://api.github.com/users/${payload}?client_id=8a0e97c9682800812270&client_secret=6d812c1f71aab47a11ede32d2efb7b28fc0a1cae`)
            .then((response) =>   context.commit('GET_USER', response.body))
    },

    // payload = user.repos_url
    getUserRepos(context, payload){
        Vue.http.get(`${payload}?client_id=8a0e97c9682800812270&client_secret=6d812c1f71aab47a11ede32d2efb7b28fc0a1cae`)
            .then((response) => context.commit('GET_USER_REPOS', response.body))
    },

    // payload = repo.full_name
    getRepo(context, payload){
        Vue.http.get(`https://api.github.com/repos/${payload}?client_id=8a0e97c9682800812270&client_secret=6d812c1f71aab47a11ede32d2efb7b28fc0a1cae`)
            .then((response) => context.commit('GET_REPO',response.body))
    }
    
}