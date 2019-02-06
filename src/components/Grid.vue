<template>
  <div class="grid" :style="{
    'grid-template-rows': templateRows,
    'grid-template-columns': templateColumns
  }">
    <ChannelBox
      v-for="(channel, index) in favorites"
      :index="index"
      :key="channel.name"
      :channel="channel">
    </ChannelBox>
  </div>
</template>

<script>
import ChannelBox from '@/components/ChannelBox.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ChannelBox
  },
  computed: {
    ...mapGetters(['favorites']),
    channelCount() {
      return this.favorites.length;
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
.grid {
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
