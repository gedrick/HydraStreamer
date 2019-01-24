<template>
  <div class="channel-box flex-center" v-if="channel">
    <LoadingBox v-if="isLoading"></LoadingBox>
    <div v-if="isOffline" class="channel-box__offline flex-center">
      <button @click="launchPlayer" class="button">
        <span class="orange">{{channel.name}}</span> <br>is offline. Reload?
      </button>
      <div class="horizontal">
        <button @click="hideChannel" class="button--small">Hide for Now</button>
        <button @click="playerRemoveChannel" class="button--small">Remove Channel</button>
      </div>
    </div>
    <div
      v-if="!isLoading && isLoaded"
      class="channel-box__overlay expand-to-fit">
      <ChannelOverlay
        :onPlay="playerPlay"
        :onPause="playerPause"
        :onMute="playerToggleMuted"
        :onRemoveChannel="playerRemoveChannel"
        :player="player">
      </ChannelOverlay>
    </div>
    <div
      v-show="!isLoading && !isOffline"
      class="channel-box__container expand-to-fit"
      :id="'container--' + channel.name">
    </div>
  </div>
</template>

<script>
import LoadingBox from '@/components/LoadingBox.vue';
import ChannelOverlay from '@/components/ChannelOverlay.vue';
import { mapGetters } from 'vuex';

const twitch = window.Twitch;

export default {
  components: {
    LoadingBox,
    ChannelOverlay
  },
  props: {
    channel: Object
  },
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
      bOffline: null,

      // Extra settings
      playerLoadTimeout: 5000
    };
  },
  computed: {
    ...mapGetters(['userID'])
  },
  mounted() {
    this.launchPlayer();
  },
  methods: {
    playerRemoveChannel() {
      const channelId = this.channel.id;
      this.$store.dispatch('unfavorite', {
        userID: this.userID,
        channelData: this.channel
      });
    },
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

      this.player.setVolume(1);
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
      this.isLoaded = false;
      this.isOffline = true;
      console.log(`player ${this.channel.name} has gone or is offline`);
    },
    playerPlay() {
      this.player.play();
    },
    playerPause() {
      this.player.pause();
    },
    playerToggleMuted(muted) {
      this.player.setMuted(muted);
    },
  },
  beforeDestroy() {
    if (this.player && this.player.removeEventListener) {
      this.player.pause();
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
  color: $white;
  position: relative;

  &__offline {
    color: $white;
    flex-direction: column;
  }

  &__overlay {
    opacity: 0;
    z-index: 10;
    border: $box-border-width solid transparent;

    &:hover {
      border: $box-border-width solid $channel-box-highlight-color;
      opacity: 1;
    }
  }

  &__container {
    z-index: 5;
  }
}
</style>
