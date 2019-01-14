<template>
  <div class="search-result">
    <div class="search-result__title">{{result.channel.display_name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
};
</script>
