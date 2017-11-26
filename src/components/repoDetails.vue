<script>
import { mapActions, mapState } from 'vuex'
export default {
  name:'repoDetails',

  created: function(){
        this.getRepo(this.$route.query.full_name)
      },
  methods:{
      ...mapActions(['getRepo'])
  },
  computed: {
      ...mapState({
          repo: state => {return state.repo}
      })
  }
}
</script>


<template>
  <div class="repo-details-container">
      <h2 align="center">{{repo.name}}</h2> 
      <hr>
      <label>Descricao:</label> <br>
      {{repo.description}} <br>
      <label>Linguagem principal:</label> <br>
      {{repo.language}} <br>
      <a :href="repo.html_url" class="btn blue">Conferir Repositorio no Github</a>
  </div>
</template>

