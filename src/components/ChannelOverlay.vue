<template>
  <div class="channel-overlay">
    <div class="channel-overlay__controls">
      <span v-if="playerIsPaused" class="fa fa-play" @click="onPlay"></span>
      <span v-if="!playerIsPaused" class="fa fa-pause" @click="onPause"></span>
      <span class="fas fa-volume-down" @click="onVolumeDown"></span>
      <span class="fas fa-volume-mute" @click="onToggleMute"></span>
      <span class="fas fa-volume-up" @click="onVolumeUp"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onPlay: Function,
    onPause: Function,
    onMute: Function,
    onVolumeUp: Function,
    onVolumeDown: Function,

    player: Object
  },
  computed: {
    playerIsPaused() {
      return this.player.isPaused();
    },
    playerVolume() {
      return this.player.getVolume();
    },
    playerIsMuted() {
      return this.player.getMuted();
    }
  },
  methods: {
    onToggleMute() {
      if (this.player.getMuted()) {
        this.onMute(false);
      } else {
        this.onMute(true);
      }
    }
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
    background-color: rgba(#000, 0.4);
    padding: 10px;

    span {
      font-size: $button-font-size;
      color: #fff;
      margin-right: 10px;
      transition-property: color;
      transition-duration: 0.12s;
      cursor: pointer;

      &:hover {
        color: $fancy-blue;
      }
    }
  }
}
</style>
