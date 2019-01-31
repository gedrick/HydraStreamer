<template>
  <div
    class="channel-overlay expand-to-fit"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
    @click="toggleOverlay"
    :class="{'visible': overlayIsVisible}">
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
  data() {
    return {
      overlayIsVisible: false
    }
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
    toggleOverlay(flag) {
      this.overlayIsVisible = !this.overlayIsVisible;
    },
    showOverlay() {
      this.overlayIsVisible = true;
    },
    hideOverlay() {
      this.overlayIsVisible = false;
    },
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
@import '../styles/variables';
@import '../styles/breakpoints';

.channel-overlay {
  flex-direction: column;
  justify-content: space-between;

  opacity: 0;
  z-index: 10;
  border: $box-border-width solid transparent;

  &.visible {
    border: $box-border-width solid $channel-box-highlight-color;
    opacity: 1;

    @include mq('tablet-wide', 'max') {
      border: none;
    }
  }

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
