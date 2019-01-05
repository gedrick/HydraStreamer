<template>
  <div class="login-signup">
    <h1>Login or Guest</h1>
    <div class="login-signup__button">
      <router-link to="/login"><button class="button">Login to Save</button></router-link>
    </div>
    <div class="login-signup__button">
      <button @click="continueAsGuest" class="button">Continue as Guest</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    continueAsGuest() {
      this.$emit('dismiss');
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../styles/variables.scss';

.login-signup {
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
