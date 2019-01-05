<template>
  <div class="home flex-center">
    <div class="home__button">
      <router-link to="/watch">
        <button class="button">Continue as Guest</button>
      </router-link>
    </div>
  </div>
</template>

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
