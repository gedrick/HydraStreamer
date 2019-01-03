<template>
  <div class="channel-box">
    <LoadingBox v-if="isLoading"></LoadingBox>
    <div v-if="!isLoading && isLoaded" class="channel-box__overlay">
    </div>
    <div v-hide="isLoading" class="channel-box__container" :id="'container--' + channel.name">
    </div>
  </div>
</template>

<script>
import LoadingBox from '@/components/LoadingBox.vue';

const twitch = window.Twitch;

export default {
  components: {
    LoadingBox
  },
  props: ['channel'],
  data() {
    return {
      isLoading: true,
      isLoaded: false,
      player: null
    };
  },
  mounted() {
    const options = {
      width: '100%',
      height: '100%',
      channel: this.channel.name,
      controls: false,
      // autoplay: false
    };
    this.player = new twitch.Player(`container--${this.channel.name}`, options);

    this.player.addEventListener(twitch.Player.PLAYING, () => {
      this.isLoading = false;
      this.isLoaded = true;
    });
  },
  methods: {

  }
};
</script>

<style lang="scss">
$box-border-width: 2px;

.channel-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: #fff;
  position: relative;
  border-radius: 10px;

  &__overlay,
  &__container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  &__overlay {
    z-index: 10;
    transition-property: border;
    transition-duration: 0.25s;
    border: $box-border-width solid transparent;

    &:hover {
      border: $box-border-width solid #7abcff;
    }
  }

  &__container {
    z-index: 5;
  }
}
</style>
