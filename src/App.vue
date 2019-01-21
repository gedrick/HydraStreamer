<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './styles/variables.scss';

body {
  margin: 0;
  background-color: $background-color;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $light-main;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
