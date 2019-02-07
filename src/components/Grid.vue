<template>
  <div class="grid" :style="{
    'grid-template-rows': templateRows,
    'grid-template-columns': templateColumns
  }">
    <ChannelBox
      v-for="channel in channels"
      :key="channel.name"
      :channel="channel">
    </ChannelBox>
  </div>
</template>

<script>
import ChannelBox from '@/components/ChannelBox.vue';

export default {
  components: {
    ChannelBox
  },
  props: {
    channels: Array
  },
  computed: {
    channelCount() {
      return this.channels.length;
    },
    templateRows() {
      switch(this.channelCount) {
        case 1:
          return '100%';
          break;
        case 2:
          return '50% 50%';
          break;
        case 3:
        case 4:
        case 5:
        case 6:
          return '50% 50%';
          break;
        default:
          return '33.3% 33.3% 33.3%';
          break;
      }
    },
    templateColumns() {
      switch(this.channelCount) {
        case 1:
        case 2:
          return '100%';
          break;
        case 3:
        case 4:
          return '50% 50%';
          break;
        default:
          return '33.3% 33.3% 33.3%';
          break;
      }
    }
  }
};
</script>

<style lang="scss">
@import '../styles/breakpoints';

.grid {
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;

  @include mobilePortrait {
    grid-template-rows: unset !important;
    grid-template-columns: 100% !important;
  }
}
</style>
