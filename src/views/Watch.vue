<template>
  <div class="watch">
    <div>Welcome, {{user.username}}!</div>
    <Grid v-if="channels.length" :channels="channels"></Grid>
    <AddChannel :hasChannels="channels.length > 0">
    </AddChannel>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import AddChannel from '@/components/AddChannel.vue';
import { mapGetters } from 'vuex';
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
      channels: []
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>

<style lang="scss">
.watch {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
