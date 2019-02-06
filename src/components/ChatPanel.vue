<template>
  <div class="chat-panel">
    <div class="chat-panel__tabs">
      <div
        v-for="channel in favorites"
        class="chat-panel__tab"
        :class="{'selected': activeChannel === channel.channelId}"
        @click="selectChat(channel.channelId)"
        :key="channel.channelId">
        {{channel.hosted ? channel.hosted.name : channel.name}}
      </div>
    </div>
    <div class="chat-panel__container">
      <Chat :channel="getActiveChannel"></Chat>
    </div>
  </div>
</template>

<script>
import Chat from '@/components/Chat.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Chat
  },
  data() {
    return {
      activeChannel: false
    }
  },
  computed: {
    ...mapGetters(['favorites']),
    getActiveChannel() {
      return this.favorites.find(channel => channel.channelId === this.activeChannel);
    }
  },
  methods: {
    selectChat(channelId) {
      this.activeChannel = channelId;
    }
  },
  mounted() {
    this.selectChat(this.favorites[0].channelId);
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.chat-panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__tab {
    background-color: $light-main;
    border-radius: 5px;
    color: $white;
    padding: 0 5px;
    margin: 1px;
    cursor: pointer;
    user-select: none;
    &.selected {
      background-color: $bright-orange;
      color: $background-color;
    }
  }

  &__container {
    width: 100%;
    height: 100%;
  }
}
</style>
