<template>
  <div class="channel-box">
    {{channel.name}}
  </div>
</template>

<script>
export default {
  props: ['channel']
};
</script>


<style lang="scss">
.channel-box {
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: #fff;
}
</style>
