<template>
  <div class="chat" v-if="channel">
    <iframe
      frameborder="0"
      scrolling="yes"
      id="chat_embed"
      :src="'https://www.twitch.tv/embed/' + channelName + '/chat'">
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    channel: Object
  },
  computed: {
    channelName() {
      return this.channel.hosted ? this.channel.hosted.name : this.channel.name
    }
  }
}
</script>

<style lang="scss">
.chat {
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
