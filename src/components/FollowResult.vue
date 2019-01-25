<template>
  <div class="follow-result" :class="{'favorite': isFavorite}" @click="toggleFavorite">
    <div class="follow-result__name">{{channel.channel.name}}</div>
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
@import '../styles/variables.scss';

.follow-result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px;
  margin: 2px;
  background-color: $light-main;
  border-radius: 5px;
  cursor: pointer;

  &.favorite {
    background-color: $bright-orange;
  }

  &__name {
    color: $white;
  }
}
</style>
