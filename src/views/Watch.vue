<template>
  <div class="watch">
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
  mounted() {
    console.log('checking cookies');
    console.log(document.cookie);
  },
  data() {
    return {
      channels: TestChannels.splice(0, 1)
    };
  }
};
</script>

<style lang="scss">
.watch {
  display: flex;
  margin: auto;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
