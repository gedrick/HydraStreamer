<template>
  <div class="channel-overlay expand-to-fit">
    <div class="channel-overlay__controls">
      <span v-if="playerIsPaused" class="fa fa-play" @click="onPlay"></span>
      <span v-if="!playerIsPaused" class="fa fa-pause" @click="onPause"></span>
      <span
        class="fas"
        :class="{'fa-volume-mute': playerIsMuted, 'fa-volume-up': !playerIsMuted}"
        @click="onToggleMute">
      </span>
      <span class="fas fa-window-close"></span>
    </div>
    <div class="channel-overlay__info">
      <span></span>
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
  &__controls {
    display: flex;
    justify-content: space-between;
    background-color: rgba(#000, 0.4);
    padding: 10px;

    span {
      font-size: $button-font-size;
      color: #fff;
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        color: $light-purple;
      }

      &.fa-volume-mute.muted {
        color: $light-purple;
      }
    }
  }
}
</style>
