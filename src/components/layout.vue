<script>
import searchBar from './searchBar'
import userDetails from './userDetails'
import { mapState, mapActions } from 'vuex'

export default {
  name:'layout',
  components: {
    searchBar,
    userDetails
  },
}
</script>

<template>
  <div>
    <searchBar></searchBar>
    <div class="body-container">
    <userDetails></userDetails>
      <router-view  />
    </div>
  </div>

</template>

<style lang="sass">
@import 'style'
</style>
