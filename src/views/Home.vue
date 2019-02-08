<template>
  <div class="home">
    <div class="home__top">
      <div class="home__header">
        <h1>HydraStreamer</h1>
      </div>
      <div class="home__button">
        <div v-if="!isLoggedIn">
          <a v-if="!isLoggedIn" href="/auth/twitch">
            <button class="button">Login with Twitch</button>
          </a>
        </div>
        <div v-if="isLoggedIn">
          <router-link v-if="isLoggedIn" :to="{path: 'watch'}">
            <button class="button">Resume</button>
          </router-link><br>
        </div>
      </div>
    </div>
    <div class="home__bottom">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import { mapGetters } from 'vuex';

export default {
  components: {
    Footer
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'user'])
  }
}
</script>


<style lang="scss">
@import '../styles/variables';

.home {
  display: grid;
  grid-template-rows: auto 40px;
  width: 100vw;
  height: 100vh;

  &__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__header {
    h1 {
      margin: 0;
      color: $bright-orange;
      font-family: $header-font;
      font-size: 72px;
    }
  }

  &__button {
    button {
      margin: 10px;
    }
  }
}
</style>
