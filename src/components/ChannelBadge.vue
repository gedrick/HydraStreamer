<template>
  <div class="channel-badge" :class="{'favorite': isFavorite}" @click="toggleFavorite">
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
import { mapGetters } from 'vuex';

export default {
  props: {
    channel: Object
  },
  computed: {
    ...mapGetters(['favorites']),
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
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', {
        channelData: this.channelData,
        toggle: !this.isFavorite
      });
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

  padding-right: 5px;
  margin: 2px;
  background-color: $light-main;
  border-radius: 0 5px 5px 0px;
  cursor: pointer;

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
      font-size: 12px;
    }
  }

  &.favorite {
    background-color: $bright-orange;
  }
}
</style>
