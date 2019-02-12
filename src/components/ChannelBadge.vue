<template>
  <div class="channel-badge" :class="{'favorite': isFavorite}" @click="toggleFavorite">
    <div class="channel-badge__error" :class="{'visible': hasError}">
      Reached max streams!
    </div>
    <div class="channel-badge__image">
      <img :src="channel.preview.small">
    </div>
    <div class="channel-badge__name">
      <span class="player-name">{{channel.channel.name}}</span><br>
      <span class="game-name">{{channel.game}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    channel: Object
  },
  data() {
    return {
      hasError: false
    }
  },
  computed: {
    ...mapGetters(['favorites', 'hiddenStreams']),
    isFavorite() {
      const channelId = this.channel.channel._id;
      return this.favorites.find(favorite => favorite.channelId === channelId) !== undefined;
    },
    channelData() {
      return {
        name: this.channel.channel.name,
        icon: this.channel.preview.small,
        game: this.channel.channel.game,
        channelId: this.channel.channel._id
      };
    }
  },
  methods: {
    ...mapMutations(['setStreamUnhidden']),
    throwError() {
      this.hasError = true;
      setTimeout(() => {
        this.hasError = false;
      }, 1500);
    },
    toggleFavorite() {
      if (this.favorites.length >= 9 && !this.isFavorite) {
        this.throwError();
      } else {
        // If the stream is hidden and they're already favorited, remove stream from hidden.
        if (this.hiddenStreams.includes(this.channelData.name)) {
          this.setStreamUnhidden({
            name: this.channelData.name
          });
        } else {
          // Otherwise, toggle the favorite.
          this.$store.dispatch('toggleFavorite', {
            channelData: this.channelData,
            toggle: !this.isFavorite
          });
        }
      }
    },
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

.channel-badge {
  display: grid;
  grid-template-columns: 50px auto;
  grid-gap: 5px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-right: 5px;
  margin: 2px;
  background-color: $light-main;
  border-radius: 0 5px 5px 0px;
  cursor: pointer;

  &__error {
    background-color: red;
    border-radius: 0 5px 5px 0px;
    width: 100%;
    height: 100%;
    z-index: 15;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition-duration: 1.5s;
    transition-property: opacity;

    &.visible {
      display: flex;
      opacity: 1;
    }
  }

  &__image {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    text-align: left;
    color: $white;
    align-items: flex-start;
    max-width: 140px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    .player-name {
      font-weight: bold;
    }
    .game-name {
      font-size: 14px;
    }
  }

  &.favorite {
    background-color: $bright-orange;
  }
}
</style>
