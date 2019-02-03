<template>
  <div class="popular-games">
    <p v-if="isLoading">Querying for the most popular games...</p>
    <GameBadge v-for="gameResult in popularGames" :key="gameResult.game.name" :game="gameResult.game"></GameBadge>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameBadge from '@/components/GameBadge';

export default {
  components: {
    GameBadge
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['popularGames'])
  },
  mounted() {
    this.isLoading = true;
    this.$store.dispatch('getPopularGames').then(() => {
      this.isLoading = false;
    });
  }
}
</script>

<style lang="scss">
.popular-games {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 98vw;
}
</style>
