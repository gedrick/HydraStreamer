<template>
  <div class="channel-box flex-center" v-if="channel" :class="{'fullscreen': isFullscreen}">
    <LoadingBox v-if="isLoading"></LoadingBox>
    <div v-if="isOffline && !hostedChannel" class="channel-box__offline flex-center">
      <button @click="launchPlayer" class="button">
        <span class="orange">{{channelData.name}}</span> <br>is offline. Reload?
      </button>
      <div class="horizontal">
        <button @click="hideChannel" class="button--small">Hide for Now</button>
        <button @click="playerRemoveChannel" class="button--small">Unfavorite</button>
      </div>
    </div>
    <div v-if="isOffline && hostedChannel" class="channel-box__offline flex-center">
      <button class="button" @click="watchHostedStreamer">
        <span class="orange">{{channelData.name}}</span> <br>is hosting <span class="orange">{{hostedChannel.name}}</span>. Tune in?
      </button>
      <div class="horizontal">
        <button @click="hideChannel" class="button--small">Hide for Now</button>
        <button @click="playerRemoveChannel" class="button--small">Unfavorite</button>
      </div>
    </div>
    <div v-if="!isLoading && isLoaded">
      <ChannelOverlay
        :onPlayToggle="playerPlayToggle"
        :onMuteToggle="playerMuteToggle"
        :onFullscreenToggle="playerFullscreenToggle"
        :onHideChannel="hideChannel"
        :onRemoveChannel="playerRemoveChannel"
        :index="index"
        :player="player">
      </ChannelOverlay>
    </div>
    <div
      ref="playerContainer"
      v-show="!isLoading && !isOffline"
      class="channel-box__container"
      :id="'container--' + channelData.name">
    </div>
  </div>
</template>

<script>
import LoadingBox from '@/components/LoadingBox.vue';
import ChannelOverlay from '@/components/ChannelOverlay.vue';
import axios from 'axios';
import { mapMutations } from 'vuex';

const twitch = window.Twitch;

export default {
  components: {
    LoadingBox,
    ChannelOverlay
  },
  props: {
    channel: Object,
    index: Number
  },
  data() {
    return {
      hostedChannel: false,

      // Switches
      isLoading: true,
      isLoaded: false,
      isOffline: false,
      isFullscreen: false,

      // The player element itself.
      player: null,

      // Player data for further reference.
      qualities: null,
      volume: 0,

      // Bound functions for event listeners.
      bPlaying: null,
      bEnded: null,
      bOffline: null,

      // Extra settings
      playerLoadTimeout: 5000
    };
  },
  computed: {
    channelData() {
      return this.channel;
    }
  },
  mounted() {
    this.launchPlayer();
  },
  beforeDestroy() {
    if (this.player && this.player.removeEventListener) {
      this.player.pause();
      this.player.removeEventListener(twitch.Player.PLAYING, this.bPlaying);
      this.player.removeEventListener(twitch.Player.ENDED, this.bEnded);
      this.player.removeEventListener(twitch.Player.OFFLINE, this.bOffline);
    }
  },
  methods: {
    ...mapMutations(['setUserHost']),
    watchHostedStreamer() {
      if (!this.hostedChannel) {
        return;
      }

      this.player = null;

      this.setUserHost({
        channelId: this.channelData.channelId,
        hostedChannelData: this.hostedChannel
      });

      this.launchPlayer();
    },
    hideChannel() {
      this.$store.commit('setHidden', { name: this.channel.name });
      this.$store.commit('unfavorite', this.channelData);
    },
    playerRemoveChannel() {
      const channelId = this.channelData.id;
      this.$store.dispatch('unfavorite', {
        channelData: this.channelData
      });
    },
    launchPlayer() {
      this.isLoading = true;
      this.isLoaded = false;
      this.isOffline = false;

      const channelName = this.channelData.hosted ? this.channelData.hosted.name : this.channelData.name;
      const options = {
        width: '100%',
        height: '100%',
        channel: channelName,
        muted: true,
        autoplay: true,
        controls: false,
        preload: 'metadata'
      };

      this.bindFunctions();

      const containerId = `container--${this.channelData.name}`;
      this.player = new twitch.Player(containerId, options);

      this.player.setVolume(1);
      this.player.setMuted(true);

      this.player.addEventListener(twitch.Player.PLAYING, this.bPlaying);
      this.player.addEventListener(twitch.Player.ENDED, this.bEnded);
      this.player.addEventListener(twitch.Player.OFFLINE, this.bOffline);
    },
    bindFunctions() {
      this.bPlaying = this.playing.bind(this);
      this.bEnded = this.ended.bind(this);
      this.bOffline = this.offline.bind(this);
    },
    playing() {
      this.isLoading = false;
      this.isLoaded = true;
      this.qualities = this.player.getQualities();
    },
    ended() {
      console.log(`player ${this.channelData.name} has ended`);
    },
    offline() {
      this.isLoading = false;
      this.isLoaded = false;
      this.isOffline = true;

      this.player = null;

      // Empty existing player container, if it exists.
      const oldPlayer = this.$refs['playerContainer'];
      while (oldPlayer.firstChild) oldPlayer.removeChild(oldPlayer.firstChild);

      axios
        .get(`/data/userIsHosting?channelId=${this.channelData.channelId}`)
        .then(result => {
          const channel = result.data;
          if (channel.isHosting) {
            this.hostedChannel = channel;
          }
        });
    },
    playerPlayToggle() {
      if (this.player.isPaused()) {
        this.player.play();
      } else {
        this.player.pause();
      }
    },
    playerFullscreenToggle(fullscreen) {
      this.isFullscreen = fullscreen;
    },
    playerMuteToggle() {
      if (this.player.getMuted()) {
        this.player.setMuted(false);
      } else {
        this.player.setMuted(true);
      }
    },
  }
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/breakpoints';

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

      @include mq('tablet-wide', 'max') {
        border: none;
      }
    }
  }

  &__container {
    width: calc(100% * (16/9));
    height: 100%;
    z-index: 5;
  }

  &.fullscreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
  }
}
</style>
