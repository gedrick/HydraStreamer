<template>
  <div class="watch">
    <div>Welcome, {{user.username}}!</div>
    <Grid v-if="favorites.length" :channels="favorites"></Grid>
    <AddChannel :hasChannels="favorites.length > 0">
    </AddChannel>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import AddChannel from '@/components/AddChannel.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Watch',
  components: {
    Grid,
    AddChannel
  },
  beforeMount() {
    this.$store.dispatch('getUserChannels', {
      userID: this.twitchID
    });
  },
  computed: {
    ...mapGetters(['user', 'twitchID', 'favorites'])
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
