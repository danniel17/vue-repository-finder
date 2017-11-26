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
      ...mapActions(['getUser']),
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
      <div class="search-bar-container z-depth-2">
        <div class="container center search-bar-input">
            
            <input  v-model="user_name"
            v-on:keyup.enter="getUsuario" placeholder="Pesquise por um nome de usuário no Github" />
            
            <button class="btn btn-flat" @click="getUsuario">
                <i class="material-icons">search</i>
            </button>
        </div>
      </div>
</template>


