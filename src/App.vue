<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background: #000000;
  background: -moz-linear-gradient(top, #0b2338 0%, #000000 100%);
  background: -webkit-linear-gradient(top, #0b2338 0%, #000000 100%);
  background: linear-gradient(to bottom, #0b2338 0%, #000000 100%);
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
