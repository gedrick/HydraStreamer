<template>
  <div class="channel-overlay">
    <div class="channel-overlay__controls">
      <div @click="onPlay">Play</div>
      <div @click="onPause">Pause</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onPlay: Function,
    onPause: Function
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.channel-overlay {
  @include fullSizeCentered;

  &__controls {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
