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
  <div>
      <label>Nome:</label> <br>
      {{repo.name}} <br>
      <label>Descricao:</label> <br>
      {{repo.description}} <br>
      <label>Linguagem principal:</label> <br>
      {{repo.language}} <br>
      <a :href="repo.html_url">Conferir Repositorio no Github</a>
  </div>
</template>

