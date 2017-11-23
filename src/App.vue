<script>
import searchUser from './components/searchUser'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
    }
  },
  mount(){
   
  
  },
  components: {
    searchUser
  },
  computed: {
    ...mapState({
      user: state => {
        const { name, bio, repos_url } = state.user
        return `O nome de usuário  é ${name} e possui a bio: ${bio}.`
        },
    }),
    ...mapActions(['getUserRepos']),
  },
  methods: {
    hasUser() {
      const hasUser = this.$state.user.name !== '' 
      if(hasUser)
      
      return hasUser
    }
  }
}
</script>

<template>
  <div>
    <searchUser></searchUser>
    <h1>Welcome to Vuex</h1>
    <h4>
      {{ user }}
    </h4>
    <ul >
      <li v-for="repo in repos">
        {{repo.full_name}}
      </li>
    </ul>
  </div>
</template>

