<template>
  <div class="game-badge" @click="searchByGame">
    <div class="game-badge__image">
      <img :src="game.box.small">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    game: Object
  },
  computed: {
    ...mapGetters(['popularGames']),
  },
  methods: {
    searchByGame() {
      return false;
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

.game-badge {
  padding: 5px;
  margin: 2px;
  background-color: $light-main;
  border-radius: 5px;
  cursor: pointer;

  &__name {
    text-align: left;
    color: $white;
    align-items: flex-start;
    max-width: 140px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
