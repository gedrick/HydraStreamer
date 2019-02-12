<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      userPingInterval: null,
      liveStatsInterval: null
    };
  },
  mounted() {
    this.userPingInterval = setInterval(this.userPing, 1 * 60 * 1000);  // every 1 minute
    this.liveStatsInterval = setInterval(this.liveStats, 1 * 60 * 1000); // every 1 minute
  },
  beforeMount() {
    this.$store.dispatch('getMe')
      .then(this.$store.dispatch('getStats'));
  },
  beforeDestroy() {
    clearInterval(this.userPingInterval);
    clearInterval(this.liveStatsInterval);
  },
  methods: {
    userPing() {
      this.$store.dispatch('getMe');
    },
    liveStats() {
      this.$store.dispatch('getStats');
    }
  }
}
</script>

<style lang="scss">
@import './styles/variables.scss';

body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  font-family: $base-font;
  color: $white;
  background: rgb(73,155,234);
  background: -moz-linear-gradient(-45deg, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(73,155,234,1) 0%,rgba(32,124,229,1) 100%);
  background: linear-gradient(135deg, rgba(73,155,234,1) 0%,rgba(32,124,229,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#207ce5',GradientType=1 );

  textarea:focus,
  input:focus,
  button:focus {
    outline: none;
  }

  @include mobilePortrait {
    overflow-y: scroll;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
