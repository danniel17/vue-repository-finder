<script>
import { mapState,mapGetters } from 'vuex'

export default {
  name:'repoList',
  created: function() {
      this.$store.watch(
          (state,getters) => {
                if(getters.hasUser){
                    this.$store.dispatch('getUserRepos',state.user.repos_url)
                } 
          }
      )
  },
  computed:{
      ...mapState({
          repos: state => { return state.repos },
      }),
      ...mapGetters(['hasUser'])
  },
  methods: {
      sortByStar(){
          this.repos.sort(function(a, b){return b.stargazers_count - a.stargazers_count})
      },
      sortByStarReverse(){
          this.repos.sort(function(a, b){return a.stargazers_count - b.stargazers_count})
      },
      sortByName(){
          this.repos.sort(function(a,b){return a.name.localeCompare(b.name) })
      },
      sortByNameReverse(){
          this.repos.sort(function(a,b){return b.name.localeCompare(a.name) })
      }
  }
}
</script>


<template>
    <div class="repo-container">
    <div class="repo-list-container" v-if="hasUser">
            <ul class="collection with-header">
                <li class="collection-header">List 
                        <button class="btn btn-flat"  @click="sortByStar">sortByStar</button>
                        <button class="btn btn-flat"  @click="sortByStarReverse">sortByStarAscending</button>
                        <button class="btn btn-flat"  @click="sortByName">sortByName</button>
                        <button class="btn btn-flat"  @click="sortByNameReverse">sortByNameReverse</button>
                        
                
                </li>
                
                
                <li v-for="(repo,index) in repos" class="collection-item" v-bind:key="index">
                    <router-link  :to="{path: '/repo', query:{'full_name': repo.full_name}}">
                     {{repo.name}}
                    </router-link>
                    {{repo.stargazers_count}}
                </li>
            </ul>
        </div>
        <div v-else class="user-not-found">pesquise por um usuario Valido</div>
    </div>
</template>
