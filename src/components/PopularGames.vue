<template>
  <div class="popular-games">
    <p v-if="isLoading">Querying for the most popular games...</p>
    <div class="popular-games__games">
      <GameBadge
        v-for="gameResult in popularGames"
        @select="setSearchTerm(gameResult.game.name)"
        :key="gameResult.game.name"
        :game="gameResult.game">
      </GameBadge>
    </div>
    <div class="popular-games__channels">
      <ChannelBadge
        v-for="channel in channels"
        :channel="channel"
        :key="channel.channel._id">
      </ChannelBadge>
    </div>
  </div>
</template>

<script>
import GameBadge from '@/components/GameBadge';
import ChannelBadge from '@/components/ChannelBadge';
import { mapGetters } from 'vuex';

export default {
  components: {
    GameBadge,
    ChannelBadge
  },
  data() {
    return {
      isLoading: false,
      currentSearchTerm: null
    }
  },
  computed: {
    ...mapGetters(['popularGames', 'popularGameStreams']),
    channels() {
      if (!this.currentSearchTerm) {
        return [];
      } else {
        return this.popularGameStreams[this.currentSearchTerm];
      }
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.$store.dispatch('getPopularGames').then(() => {
      this.isLoading = false;
    });
  },
  methods: {
    setSearchTerm(game) {
      this.currentSearchTerm = game;

      // Only dispatch if data doesn't exist.
      if (!this.channels) {
        this.$store.dispatch('getPopularGameStreams', {
          game: this.currentSearchTerm
        });
      }
    }
  }
}
</script>

<style lang="scss">
.popular-games {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 98vw;

  &__games,
  &__channels {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
