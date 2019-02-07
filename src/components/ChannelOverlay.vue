<template>
  <div
    class="channel-overlay expand-to-fit"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
    @touchstart.self="overlayIsVisible = !overlayIsVisible"
    :class="{'visible': overlayIsVisible}">
    <div class="channel-overlay__controls">
      <div class="channel-overlay__controls-left">
        <eva-icon @click="onPlayToggle" :name="player.isPaused() ? 'play-circle' : 'pause-circle'"></eva-icon>
        <eva-icon @click="onMuteToggle" :name="player.getMuted() ? 'volume-off' : 'volume-up'"></eva-icon>
      </div>
      <div class="channel-overlay__controls-center">
      </div>
      <div class="channel-overlay__controls-right">
        <eva-icon @click="toggleFullscreen" :name="isFullscreen ? 'collapse' : 'expand'"></eva-icon>
        <eva-icon @click="onHideChannel" name="eye-off"></eva-icon>
        <eva-icon @click="onRemoveChannel" name="close-square"></eva-icon>
      </div>
    </div>
    <div class="channel-overlay__info">
      <span>{{getChannelName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onPlayToggle: Function,
    onMuteToggle: Function,
    onFullscreenToggle: Function,
    onHideChannel: Function,
    onRemoveChannel: Function,

    player: Object
  },
  data() {
    return {
      overlayIsVisible: false,
      isFullscreen: false
    }
  },
  computed: {
    getChannelName() {
      return this.player.getChannel();
    }
  },
  methods: {
    showOverlay() {
      this.overlayIsVisible = true;
    },
    hideOverlay() {
      this.overlayIsVisible = false;
    },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen
      this.onFullscreenToggle(this.isFullscreen);
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/breakpoints';

.channel-overlay {
  display: flex;
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
    background-color: rgba($black, $overlay-opacity);
    padding: 10px;
  }

  &__info {
    background-color: rgba($black, $overlay-opacity);
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
  }
}
</style>
