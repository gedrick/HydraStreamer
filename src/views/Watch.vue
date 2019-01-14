<template>
  <div class="watch">
    <Grid v-if="channels.length" :channels="channels"></Grid>
    <AddChannel :hasChannels="channels.length > 0">
    </AddChannel>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import AddChannel from '@/components/AddChannel.vue';
import { TestChannels } from '@/data/TestData.js';

const testChannels = TestChannels.splice(0, 1);
export default {
  components: {
    Grid,
    AddChannel
  },
  mounted() {
    console.log(document.cookie);
  },
  data() {
    return {
      // channels: TestChannels.splice(0, 1)
      channels: [],
      // testChannels: testChannels
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
