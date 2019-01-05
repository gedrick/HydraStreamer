<template>
  <div class="home-menu">
    <Grid :channels="channels"></Grid>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import { TestChannels } from '@/data/TestData.js';

export default {
  components: {
    Grid
  },
  data() {
    return {
      channels: TestChannels.splice(0, 2)
    };
  }
};
</script>

<style lang='scss'>
.home-menu {
  display: flex;
  margin: auto;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
