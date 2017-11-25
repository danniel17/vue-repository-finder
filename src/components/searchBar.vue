<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'searchBar',
  data() {
      return {
          user_name: ''
      }
  },
  methods: {
      ...mapActions(['getUser','getUserRepos']),
      getUsuario(){
          this.$router.push({ path:'/' })
          this.getUser(this.user_name)
      },
  },
  computed: {
      ...mapState({
          user: state => {return state.user},
      }),
  }
}
</script>

<template>
      <div class="search-bar-container z-depth-3">
        <div class="container center search-bar-input">
            
            <input class="card" v-model="user_name" />
            
            <button class="btn btn-flat" @click="getUsuario">Search</i></button>
        </div>
      </div>
</template>


