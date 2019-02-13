<template>
  <div class="grid" :style="{
    'grid-template-rows': templateRows,
    'grid-template-columns': templateColumns,
    'grid-template-areas': templateAreas
  }">
    <ChannelBox
      v-for="(channel, index) in favorites"
      :style="{'grid-area': 'channel-area-' + (index + 1)}"
      :key="channel.name"
      :channel="channel">
    </ChannelBox>
  </div>
</template>

<script>
import ChannelBox from '@/components/ChannelBox.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    ChannelBox
  },
  watch: {
    favorites: {
      immediate: true,
      handler: function(newVal, oldVal) {
        if (oldVal) {
          this.setLayout({
            layout: this.generateLayout(newVal.length)
          });
        }
      }
    }
  },
  methods: {
    ...mapMutations(['setLayout']),
    generateLayout(streamCount) {
      let counter = 1;
    }
  },
  computed: {
    ...mapGetters(['favorites']),
    channelCount() {
      return this.favorites.length;
    },
    templateRows() {
      if (this.channelCount === 1) {
        return '1fr';
      } else if (this.channelCount <= 6) {
        return '1fr 1fr';
      } else {
        return '1fr 1fr 1fr';
      }
    },
    templateColumns() {
      if (this.channelCount <= 2) {
        return '1fr';
      } else if (this.channelCount === 3 || this.channelCount === 4) {
        return '1fr 1fr';
      } else {
        return '1fr 1fr 1fr';
      }
    },
    templateAreas() {
      if (this.channelCount === 1) {
        return 'channel-area-1';
      } else if (this.channelCount === 2) {
        return '"channel-area-1 channel-area-1" "channel-area-2 channel-area-2"';
      } else {
        return '"channel-area-1 channel-area-1" "channel-area-2 channel-area-3"';
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
