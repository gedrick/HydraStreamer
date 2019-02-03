<template>
  <div class="watch">
    <Header
      @onToggleSettings="settingsVisible = !settingsVisible"
      @onToggleChat="chatVisible = !chatVisible">
    </Header>

    <div class="watch__view" :class="{'chat-open': chatVisible}">
      <div class="watch__videos">
        <Grid v-if="favorites.length" :channels="favorites"></Grid>
      </div>
      <div class="watch__chat" v-if="chatVisible">
        <ChatPanel v-if="favorites.length" :channels="favorites"></ChatPanel>
      </div>
    </div>

    <Footer></Footer>

    <WarningScreen></WarningScreen>

    <AddStreamOverlay
      v-if="!favorites.length || (favorites.length && settingsVisible)"
      @closeOverlay="settingsVisible = false">
    </AddStreamOverlay>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import WarningScreen from '@/components/WarningScreen.vue';
import AddStreamOverlay from '@/components/AddStreamOverlay.vue';
import Grid from '@/components/Grid.vue';
import ChatPanel from '@/components/ChatPanel.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Watch',
  components: {
    Header,
    Footer,
    WarningScreen,
    AddStreamOverlay,
    Grid,
    ChatPanel
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
  computed: {
    ...mapGetters(['user', 'favorites'])
  }
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/breakpoints';

.watch {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto 40px;

  &__add {
    background-color: rgba($black, 0.9);
    z-index: 15;
  }

  &__view {
    display: grid;
    justify-content: center;
    grid-template-columns: 100%;

    &.chat-open {
      grid-template-columns: 80% 20%;

      // 480px
      @include mq('phone-wide', 'max') {
        grid-template-columns: 60% 40%;
      }
      // 1024px
      @include mq('tablet-wide', 'max') {
        grid-template-columns: 70% 30%;
      }
    }
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
