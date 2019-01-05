<template>
  <div class="home">
    <div class="home__button">
      <router-link to="/watch">
        <button class="button">Continue as Guest</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.home {
  button {
    height: 50px;
    width: 250px;

    &:hover {
      background-color: darken($fancy-blue, 15);
      color: #fff;
      cursor: pointer;
    }

    &:active {
      background-color: darken($fancy-blue, 25);
    }
  }
}
</style>

<script>
export default {
  name: 'home',
  data() {
    return {
      isFirstTime: true
    };
  },
  methods: {
    toggleUserGuest() {
      this.isFirstTime = true;
    }
  }
};
</script>
