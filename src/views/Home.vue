<template>
  <div class="home flex-center">
    <div class="home__header">
      <h1>MultiTwitch</h1>
    </div>
    <div class="home__button">
      <a href="/auth/twitch">
        <button class="button">Login with Twitch</button>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

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
