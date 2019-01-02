<template>
  <div class="grid" :style="{
    'grid-template-rows': templateRows,
    'grid-template-columns': templateColumns
  }">
    <ChannelBox
      v-for="channel in channels"
      :key="channel.id"
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
  props: ['channels'],
  data() {
    return {
      channelCount: this.channels.length
    };
  },
  computed: {
    templateRows() {
      if (this.channelCount <= 2) {
        return '100%';
      } else if (this.channelCount <= 4) {
        return '50% 50%';
      }
    },
    templateColumns() {
      if (this.channelCount === 1) {
        return '100%';
      } else if (this.channelCount <= 4) {
        return '50% 50%';
      } else if (this.channelCount <= 9) {
        return '33.3% '.repeat(3);
      } else {
        return '25% '.repeat(4);
      }
    }
  }
};
</script>

<style lang="scss">
.grid {
  display: grid;
  width: 95vw;
  height: 80vh;
  background-color: rgba(#000000, 0.4);
}
</style>
