<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'searchUser',
  data() {
      return {
          newUser: {}
      }
  },
  methods: {
      ...mapActions(['getUser','getUserRepos']),
      getUsuario(){
          this.getUser(this.newUser.name)
      },
      getRepos(){
          this.getUserRepos(this.$store.state.user.repos_url)
      }
  },
  computed: {
      ...mapState({
          user: state => {return state.user},
          repos: state => {return state.repos}
      }),
  }
}
</script>



<template>
  <div>
      <h1>Find User: {{user.name}} {{user.email}}</h1>
      <input type="text" v-model="newUser.name">
      <button @click="getUsuario">Search</button>
      <img :src="user.avatar_url" alt="">
      <button @click="getRepos">GETREPOS</button>
      <ul>
         <li v-for="repo in repos">
              {{repo.full_name}}
         </li>
      </ul>
  </div>
</template>
