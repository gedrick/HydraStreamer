<template>
  <div class="watch flex-center">
    <div class="watch__icon watch__settings-icon">
      <span @click="settingsVisible = !settingsVisible" class="fa fa-gear"></span>
    </div>
    <div class="watch__icon watch__chat-icon">
      <span @click="chatVisible = !chatVisible" class="fa fa-comments-o"></span>
    </div>
    <div v-if="settingsVisible || !favorites.length" class="watch__add expand-to-fit">
      <div class="watch__actions" @click.self="settingsVisible = false">
        <div class="watch__action-items" :class="{'minimized': showSearch || showFavorites}">
          <MyFavorites @open="toggleFavorites"></MyFavorites>
          <SearchChannels @open="toggleSearch"></SearchChannels>
        </div>
        <div class="watch__search">
          <Follows v-if="showFavorites"></Follows>
          <Search v-if="showSearch"></Search>
        </div>
        <div v-if="showFavorites || showSearch" @click="hideSearch" class="watch__close-search">
          close search
        </div>
      </div>
    </div>
    <div class="watch__view" :class="{'chat-open': chatVisible}">
      <div class="watch__videos">
        <Grid v-if="favorites.length" :channels="favorites"></Grid>
      </div>
      <div class="watch__chat" v-if="chatVisible">
        <ChatPanel v-if="favorites.length" :channels="favorites"></ChatPanel>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';
import ChatPanel from '@/components/ChatPanel.vue';
import SearchChannels from '@/components/SearchChannels.vue';
import MyFavorites from '@/components/MyFavorites.vue';
import Search from '@/components/Search.vue';
import Follows from '@/components/Follows.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Watch',
  components: {
    Grid,
    ChatPanel,
    MyFavorites,
    SearchChannels,
    Search,
    Follows
  },
  data() {
    return {
      settingsVisible: false,
      chatVisible: false,

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
  width: 100vw;
  height: 100vh;

  &__icon span {
    &:hover {
      color: $bright-orange;
    }
  }

  &__settings-icon,
  &__chat-icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    padding: 10px;

    span {
      color: $white;
      font-size: 50px;
      cursor: pointer;
    }
  }

  &__chat-icon {
    left: unset;
    right: 0;
  }

  &__add {
    background-color: rgba($black, 0.9);
    z-index: 15;
  }

  &__view {
    display: grid;
    justify-content: center;
    grid-template-columns: 100%;
    padding: 50px 20px 0 20px;
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);

    &.chat-open {
      grid-template-columns: 80% 20%;
    }
  }

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
