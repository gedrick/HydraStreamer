<template>
  <div class="watch">
    <Grid v-if="favorites.length" :channels="favorites"></Grid>
    <div class="watch__actions">
      <div class="watch__action-items" :class="{'minimized': showSearch || showFavorites}">
        <MyFavorites @open="toggleFavorites"></MyFavorites>
        <SearchChannels @open="toggleSearch"></SearchChannels>
      </div>
      <div class="watch__search">
        <Favorites v-if="showFavorites"></Favorites>
        <Search v-if="showSearch"></Search>
      </div>
      <div v-if="showFavorites || showSearch" @click="hideSearch" class="watch__close-search">
        close search
      </div>
    </div>

  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import SearchChannels from '@/components/SearchChannels.vue';
import MyFavorites from '@/components/MyFavorites.vue';
import Search from '@/components/Search.vue';
import Favorites from '@/components/Favorites.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Watch',
  components: {
    Grid,
    MyFavorites,
    SearchChannels,
    Search,
    Favorites
  },
  data() {
    return {
      showSearch: false,
      showFavorites: false
    }
  },
  methods: {
    toggleSearch() {
      this.showFavorites = false;
      this.showSearch = !this.showSearch;
    },
    toggleFavorites() {
      this.showSearch = false;
      this.showFavorites = !this.showFavorites;
    },
    hideSearch() {
      this.showFavorites = false;
      this.showSearch = false;
    }
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
@import '../styles/variables.scss';

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

    &.minimized .action-button {
      .icon {
        font-size: 50px;
      }
      .label {
        font-size: 15px;
      }
    }
  }

  &__close-search {
    margin-top: 10px;
    color: $white;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
