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
import axios from 'axios';

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
      user: null,
      channels: []
      // channels: TestChannels.splice(0, 1)
      // testChannels: testChannels,
    };
  },
  beforeMount() {
    axios.get('/api/me').then(data => {
      console.log('beforeMount:', data);
    });
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
