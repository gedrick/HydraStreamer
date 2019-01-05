<template>
  <div class="channel-box flex-center">
    <LoadingBox v-if="isLoading"></LoadingBox>
    <div v-if="isOffline" class="channel-box__offline flex-center">
      Channel is Offline
      <button @click="launchPlayer" class="button">Try Again</button>
    </div>
    <div v-if="!isLoading && isLoaded" class="channel-box__overlay expand-to-fit">
      <ChannelOverlay
        :onPlay="playerPlay"
        :onPause="playerPause"
        :onMute="playerToggleMuted"
        :onVolumeUp="playerVolumeUp"
        :onVolumeDown="playerVolumeDown"
        :player="player">
      </ChannelOverlay>
    </div>
    <div v-show="!isLoading && !isOffline" class="channel-box__container expand-to-fit" :id="'container--' + channel.name"></div>
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
      isOffline: false,

      // The player element itself.
      player: null,

      // Player data for further reference.
      qualities: null,
      volume: 0,

      // Bound functions for event listeners.
      bPlaying: null,
      bPaused: null,
      bEnded: null,
      bOffline: null
    };
  },
  mounted() {
    this.launchPlayer();
  },
  methods: {
    launchPlayer() {
      this.isLoading = true;
      this.isLoaded = false;
      this.isOffline = false;

      const options = {
        width: '100%',
        height: '100%',
        channel: this.channel.name,
        muted: true,
        autoplay: true,
        controls: false
      };

      this.bindFunctions();

      const containerId = `container--${this.channel.name}`;
      this.player = new twitch.Player(containerId, options);

      this.playerToggleMuted(true);

      this.player.addEventListener(twitch.Player.PLAYING, this.bPlaying);
      this.player.addEventListener(twitch.Player.PAUSED, this.bPaused);
      this.player.addEventListener(twitch.Player.ENDED, this.bEnded);
      this.player.addEventListener(twitch.Player.OFFLINE, this.bOffline);
    },
    bindFunctions() {
      this.bPlaying = this.playing.bind(this);
      this.bPaused = this.paused.bind(this);
      this.bEnded = this.ended.bind(this);
      this.bOffline = this.offline.bind(this);
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
    offline() {
      this.isLoading = false;
      this.isOffline = true;
      console.log(`player ${this.channel.name} has gone or is offline`);
    },
    playerPlay() {
      console.log('playerPlay');
      this.player.play();
    },
    playerPause() {
      console.log('playerPause');
      this.player.pause();
    },
    playerToggleMuted(muted) {
      this.player.setMuted(muted);
    },
    playerVolumeUp() {
      if (this.volume < 1) {
        this.volume += 0.25;
        this.player.setVolume(this.volume);
      }
    },
    playerVolumeDown() {
      if (this.volume > 0) {
        this.volume -= 0.25;
        this.player.setVolume(this.volume);
      }
    }
  },
  beforeDestroy() {
    if (this.player && this.player.removeEventListener) {
      this.player.removeEventListener(twitch.Player.PLAYING, this.bPlaying);
      this.player.removeEventListener(twitch.Player.PAUSED, this.bPaused);
      this.player.removeEventListener(twitch.Player.ENDED, this.bEnded);
      this.player.removeEventListener(twitch.Player.OFFLINE, this.bOffline);
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.channel-box {
  color: #fff;
  position: relative;

  &__offline {
    color: #fff;
  }

  &__overlay {
    opacity: 0;
    z-index: 10;
    transition-property: border, opacity;
    transition-duration: 0.12s;
    border: 0px solid transparent;
    border-radius: 5px;

    &:hover {
      border: $box-border-width solid #0078f0;
      opacity: 1;
    }
  }

  &__container {
    z-index: 5;
  }
}
</style>
