<script>
import searchBar from '../searchBar'
import userDetails from '../userDetails'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name:'layout',
  data(){
    return {
      message:''
    }
  },
  components: {
    searchBar,
    userDetails
  },
  
  computed:{
    ...mapGetters(['hasUser'])
  }
}
</script>

<template>
  <div>
    <div class="body-container">
      <searchBar/>
      <userDetails v-if="hasUser" />
      <router-view v-if="hasUser" />
      
      <div class="has-not-user-container card" v-else>
        Pesquise por um usuário válido do Github.  
      </div>
    </div>
  </div>

</template>

<style lang="sass">
@import 'style'
</style>
