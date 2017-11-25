import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import RepoList from '../components/repoList'
import RepoDetails from '../components/repoDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'repoList',
      component: RepoList
    },
    {
      path:'/repo/',
      name:'repoDetails',
      component: RepoDetails
    }
  ]
})
