<template>
  <div class="game-badge" @click="$emit('select')">
    <div class="game-badge__image">
      <img class="mobile-only" :src="game.box.small">
      <img class="desktop-only" :src="game.box.medium">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: Object
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
