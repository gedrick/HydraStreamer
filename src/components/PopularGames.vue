<template>
  <div class="popular-games">
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
  computed: {
    ...mapGetters(['popularGames'])
  },
  beforeMount() {
    this.$store.dispatch('getPopularGames');
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
