<template>
  <div class="chat" v-if="channel">
    <iframe
      frameborder="0"
      scrolling="yes"
      id="chat_embed"
      :src="'https://www.twitch.tv/embed/' + channel.name + '/chat'">
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    channel: Object
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
