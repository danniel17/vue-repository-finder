<script>
import {mapState} from 'vuex'

export default {
  name:'userDetails',
  computed: {
    ...mapState({
      user: state => {return state.user },

    }),
  },
}
</script>



<template>
  <div class="user-details-container z-depth-2">
    <div class="user-details z-depth-2">
      <div class="user-details-img">
      <img :src="user.avatar_url"  alt="">
      </div>
      <label>Username</label> <br>
      {{user.login}} <br>
      <label>Email:</label> <br>
      {{user.email}} <br>
      <label>Bio:</label> <br>
      {{user.bio}} <br>
      <label>Seguidores:</label> <br>
      {{user.followers}} <br>
      <label>Seguindo:</label> <br>
      {{user.following}} <br>
    </div>
  </div>
</template>

