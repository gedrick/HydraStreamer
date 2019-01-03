<template>
  <div class="channel-box">
    <LoadingBox v-if="isLoading"></LoadingBox>
    <div v-if="!isLoading && isLoaded" class="channel-box__overlay">
      <ChannelOverlay
        :onPlay="playerPlay"
        :onPause="playerPause">
      </ChannelOverlay>
    </div>
    <div v-show="!isLoading" class="channel-box__container" :id="'container--' + channel.name"></div>
  </div>
</template>

<script>
import LoadingBox from '@/components/LoadingBox.vue';
import ChannelOverlay from '@/components/ChannelOverlay.vue';

const twitch = window.Twitch;

export default {
  components: {
    LoadingBox,
    ChannelOverlay
  },
  props: ['channel'],
  data() {
    return {
      // Switches
      isLoading: true,
      isLoaded: false,

      // The player element itself.
      player: null,

      // Player data for further reference.
      qualities: null,

      // Bound functions for event listeners.
      bPlaying: null,
      bPaused: null,
      bEnded: null
    };
  },
  mounted() {
    const options = {
      width: '100%',
      height: '100%',
      channel: this.channel.name,
      muted: true,
      autoplay: true,
      controls: false
    };

    this.bindFunctions();

    this.player = new twitch.Player(`container--${this.channel.name}`, options);

    this.player.addEventListener(twitch.Player.PLAYING, this.bPlaying);
    this.player.addEventListener(twitch.Player.PAUSED, this.bPaused);
    this.player.addEventListener(twitch.Player.ENDED, this.bEnded);
  },
  beforeDestroy() {
    if (this.player && this.player.removeEventListener) {
      this.player.removeEventListener(twitch.Player.PLAYING, this.bPlaying);
      this.player.removeEventListener(twitch.Player.PAUSED, this.bPaused);
      this.player.removeEventListener(twitch.Player.ENDED, this.bEnded);
    }
  },
  methods: {
    bindFunctions() {
      this.bPlaying = this.playing.bind(this);
      this.bPaused = this.paused.bind(this);
      this.bEnded = this.ended.bind(this);
    },
    playing() {
      this.isLoading = false;
      this.isLoaded = true;
      this.qualities = this.player.getQualities();

      console.log(`player ${this.channel.name} has started playing`);
    },
    paused() {
      console.log(`player ${this.channel.name} has paused`);
    },
    ended() {
      console.log(`player ${this.channel.name} has ended`);
    },
    playerPlay() {
      console.log('playerPlay');
      this.player.play();
    },
    playerPause() {
      console.log('playerPause');
      this.player.pause();
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.channel-box {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;

  &__overlay,
  &__container {
    @include fullSizeCentered;
  }

  &__overlay {
    z-index: 10;
    transition-property: border;
    transition-duration: 0.12s;
    border: $box-border-width solid transparent;
    border-radius: 5px;

    &:hover {
      border: $box-border-width solid #0078f0;
    }
  }

  &__container {
    z-index: 5;
  }
}
</style>
