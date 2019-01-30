<template>
  <div class="chat-panel">
    <div class="chat-panel__tabs">
      <div
        class="chat-panel__tab"
        @click="selectChat(channel.channelId)"
        :class="{'selected': activeChannel === channel.channelId}"
        v-for="channel in channels"
        :key="channel.channelId">
        {{channel.name}}
      </div>
    </div>
    <div class="chat-panel__container">
      <Chat :channel="getActiveChannel"></Chat>
    </div>
  </div>
</template>

<script>
import Chat from '@/components/Chat.vue';

export default {
  components: {
    Chat
  },
  props: {
    channels: Array
  },
  data() {
    return {
      activeChannel: false
    }
  },
  computed: {
    getActiveChannel() {
      return this.channels.find(channel => channel.channelId === this.activeChannel);
    }
  },
  methods: {
    selectChat(channelId) {
      this.activeChannel = channelId;
    }
  },
  mounted() {
    this.activeChannel = this.channels[0].channelId;
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

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
