<template>
  <div class="channel-overlay">
    <div class="channel-overlay__controls">
      <span v-if="playerIsPaused" class="fa fa-play" @click="onPlay"></span>
      <span v-if="!playerIsPaused" class="fa fa-pause" @click="onPause"></span>
      <span
        class="fas"
        :class="{'fa-volume-mute': playerIsMuted, 'fa-volume-up': !playerIsMuted}"
        @click="onToggleMute">
      </span>
      <span class="fa fa-close" @click="onRemoveChannel"></span>
    </div>
    <div class="channel-overlay__info">
      <span>{{getChannelName}}</span>
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
    onRemoveChannel: Function,

    player: Object
  },
  computed: {
    playerIsPaused() {
      return this.player.isPaused();
    },
    playerIsMuted() {
      return this.player.getMuted();
    },
    getChannelName() {
      return this.player.getChannel();
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
  flex-direction: column;
  justify-content: space-between;

  &__controls {
    display: flex;
    justify-content: space-between;
    background-color: rgba(#000, 0.2);
    padding: 10px;

    span {
      font-size: $button-font-size;
      color: $white;
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        color: $overlay-icon-highlight-color;
      }

      &.fa-volume-mute.muted {
        color: $overlay-icon-highlight-color;
      }
    }
  }

  &__info {
    background-color: rgba(#000, 0.2);
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
  }
}
</style>
