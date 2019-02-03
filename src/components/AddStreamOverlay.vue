<template>
  <div class="add-stream-overlay expand-to-fit">
    <div class="add-stream-overlay__container">
      <span v-if="favorites.length > 0" @click="$emit('closeOverlay')" class="add-stream-overlay__close icon fa fa-close"></span>

      <div class="add-stream-overlay__section">
        <h2 @click="followsVisible = !followsVisible"><span class="icon fa fa-list"></span> Online Streamers You Follow</h2>
        <Follows v-if="followsVisible && followed.length"></Follows>
      </div>

      <div class="add-stream-overlay__section">
        <h2 @click="popularGamesVisible = !popularGamesVisible"><span class="icon fa fa-list"></span> Most Popular Games <span class="online-only">(click to search by game)</span></h2>
        <PopularGames v-if="popularGamesVisible"></PopularGames>
      </div>

      <div class="add-stream-overlay__section">
        <h2 @click="searchVisible = !searchVisible"><span class="icon fa fa-search"></span> Search</h2>
        <Search v-if="searchVisible"></Search>
      </div>
    </div>
  </div>
</template>

<script>
import Follows from '@/components/Follows.vue';
import Search from '@/components/Search.vue';
import PopularGames from '@/components/PopularGames.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Follows,
    Search,
    PopularGames
  },
  data() {
    return {
      followsVisible: true,
      popularGamesVisible: true,
      searchVisible: true
    }
  },
  computed: {
    ...mapGetters(['followed', 'favorites', 'twitchID'])
  },
  beforeMount() {
    this.$store.dispatch('getUserChannels', {
      userID: this.twitchID
    });
  }
}
</script>


<style lang="scss">
@import '../styles/variables';

.add-stream-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(#000, 0.95);
  z-index: 15;
  padding: 0;
  overflow: hidden;

  &__container {
    padding: 26px 10px 10px 10px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 50px;
    color: #fff;
    z-index: 15;
  }

  h2 {
    font-family: $base-font;
    text-align: left;
    justify-content: center;

    .online-only {
      font-size: 12px;
    }
  }
  .icon {
    color: $bright-orange;
  }
}


</style>
