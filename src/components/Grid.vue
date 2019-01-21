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
  data() {
    return {
      channelCount: this.channels.length
    };
  },
  computed: {
    templateRows() {
      if (this.channelCount <= 2) {
        return '100%';
      }

      return '50% 50%';
    },
    templateColumns() {
      if (this.channelCount === 1) {
        return '100%';
      } else if (this.channelCount <= 4) {
        return '50% 50%';
      } else if (this.channelCount <= 9) {
        return '33.3% '.repeat(3);
      }

      return '25% '.repeat(4);
    }
  }
};
</script>

<style lang="scss">
.grid {
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;
  // border-radius: 10px;
}
</style>
