<template>
  <div class="watch">
    <Grid v-if="favorites.length" :channels="favorites"></Grid>
    <div class="watch__actions">
      <div class="watch__action-items">
        <MyFollows @open="minimizeActionItems"></MyFollows>
        <SearchChannels @open="minimizeActionItems"></SearchChannels>
      </div>
    </div>
    <div v-if="searchIsOpen" @click="hideSearch" class="add-channel__cancel">
      close search
    </div>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import SearchChannels from '@/components/SearchChannels.vue';
import MyFollows from '@/components/MyFollows.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Watch',
  components: {
    Grid,
    MyFollows,
    SearchChannels
  },
  data() {
    return {
      searchIsOpen: false
    }
  },
  beforeMount() {
    this.$store.dispatch('getUserChannels', {
      userID: this.twitchID
    });
  },
  methods: {
    minimizeActionItems() {
      this.searchIsOpen = true;
    }
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

  &__actions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__action-items {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
