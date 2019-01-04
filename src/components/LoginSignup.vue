<template>
  <div class="login-signup">
    <h1>Login or Guest</h1>
    <div class="login-signup__button">
      <router-link to="/login"><button>Login to Save</button></router-link>
    </div>
    <div class="login-signup__button">
      <button @click="continueAsGuest">Continue as Guest</button>
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
    background-color: $fancy-blue;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border: 2px solid #fff;
    border-radius: 2px;
    margin-bottom: 10px;
    transition-property: background-color, color;
    transition-duration: 0.25s;
    outline: none;

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
