<template>
  <div class="home flex-center">
    <div class="home__header">
      <h1>HydraStreamer</h1>
      <h2 v-if="isLoggedIn">Welcome back!</h2>
    </div>
    <div class="home__button">
      <div v-if="!isLoggedIn">
        <a v-if="!isLoggedIn" href="/auth/twitch">
          <button class="button">Login with Twitch</button>
        </a>
      </div>
      <div v-if="isLoggedIn">
        <router-link v-if="isLoggedIn" :to="{path: 'watch'}">
          <button class="button">Watch</button>
        </router-link><br>
        <a v-if="isLoggedIn" href="/logout">
          <button class="button">Logout</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push({ name: 'watch' })
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>


<style lang="scss">
@import '../styles/variables';

.home {
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  &__header {
    h1 {
      margin: 0;
      color: $bright-orange;
    }
  }

  &__button {
    button {
      margin: 10px;
    }
  }
}
</style>
