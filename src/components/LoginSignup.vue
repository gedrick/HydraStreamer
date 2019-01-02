<template>
  <div class="login-signup">
    <h1>Login or Guest</h1>
    <div class="login-signup__button">
      <button>Login to Save</button>
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
.login-signup {
  button {
    height: 50px;
    width: 250px;
    background-color: #2484b5;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border: 3px solid #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    transition-property: background-color, color;
    transition-duration: 0.25s;

    &:hover {
      background-color: #fff;
      color: #2484b5;
      cursor: pointer;
    }
  }
}
</style>
