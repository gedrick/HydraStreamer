<template>
  <div class="home flex-center">
    <h1>MultiTwitch</h1>
    <div class="home__button">
      <input type="text" v-model="userName">
      <button @click="getUserId">get user id</button>
      <router-link to="/watch">
        <button class="button">Fetch My Subscriptions</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isFirstTime: true,
      userName: 'g3ddylee'
    };
  },
  methods: {
    getUserId() {
      this.$store.dispatch('getUserIdByUserName', {
        userName: this.userName
      });
    },
    toggleUserGuest() {
      this.isFirstTime = true;
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.home {
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  h1 {
    color: $light-main;
  }
}
</style>
