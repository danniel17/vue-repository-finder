<script>
import { mapState,mapGetters } from 'vuex'

export default {
  name:'repoList',
  created: function() {
      this.$store.watch(
          (state,getters) => {
                if(getters.hasUser){
                     this.$store.dispatch('getUserRepos',state.user.repos_url)
                     //this.sortByStar()
                }
          })
  },
  
  computed:{
      ...mapState({
          repos: state => { return state.repos },
      }),
      ...mapGetters(['hasUser'])
  },
  mounted(){
      
  },
  methods: {
      sortByStar(){
          this.repos.sort(function(a, b){return b.stargazers_count - a.stargazers_count })
      },
      sortByStarReverse(){
          this.repos.sort(function(a, b){return a.stargazers_count - b.stargazers_count })
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
        <div class="repo-list-container">
            <div class="repo-list" v-if="hasUser">
                    <ul class="collection with-header" >
                        <li class="collection-header">
                            <h6 align="center">Repositórios:</h6>
                            <br>
                            <label>ordernar-por:</label>
                            <select class="btn btn-flat">
                              <option disabled selected>Escolha uma opçao</option>
                              <option @click="sortByStar">N°estrelas</option>
                              <option @click="sortByStarReverse">N°estrelas(cresc.)</option>
                              <option @click="sortByName">Nome</option>
                              <option @click="sortByNameReverse">Nome(decresc.)</option>
                            </select>
                        </li>
                        <li v-for="(repo,index) in repos" class="collection-item" v-bind:key="index">
                            <router-link  :to="{path: '/repo', query:{'full_name': repo.full_name}}">
                             {{repo.name}}
                            </router-link>
                            <div align="right">
                              {{repo.stargazers_count}}
                              <i class="material-icons">star</i>
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</template>
