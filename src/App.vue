<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch('getMe');
  }
}
</script>

<style lang="scss">
@import './styles/variables.scss';

body {
  -webkit-font-smoothing: antialiased;
  margin: 0;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $white;

  background: rgb(73,155,234);
  background: -moz-linear-gradient(-45deg, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(73,155,234,1) 0%,rgba(32,124,229,1) 100%);
  background: linear-gradient(135deg, rgba(73,155,234,1) 0%,rgba(32,124,229,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#207ce5',GradientType=1 );
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
