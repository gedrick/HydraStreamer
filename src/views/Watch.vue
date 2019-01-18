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
  components: {
    Grid,
    AddChannel
  },
  data() {
    return {
      channels: []
    }
  },
  beforeMount() {
    this.$store.dispatch('getUserChannels', {
      userID: this.user.id
    });
  },
  computed: {
    ...mapGetters(['user', 'favorites'])
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
