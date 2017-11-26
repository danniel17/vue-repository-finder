<script>
import {mapState, mapGetters} from 'vuex'

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
  <div class="user-details-container">
    <div class="user-details z-depth-5">
      <div class="user-details-img">
          <img :src="user.avatar_url" class="responsive-img"  alt="">
      </div>
      <div class="user-details-content">
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
  </div>
</template>

