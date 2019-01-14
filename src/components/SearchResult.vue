<template>
  <div class="search-result" v-if="result">
    <div class="search-result__image"><img :src="previewImage"></div>
    <div class="search-result__title">
      <div class="search-result__streamer-name">{{result.channel.display_name}}</div>
      <div class="search-result__streamer-game">playing {{result.channel.game}}</div>
    </div>
    <div class="search-result__favorite"></div>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  },
  computed: {
    previewImage() {
      if (this.result && this.result.preview && this.result.preview.small) {
        return this.result.preview.small;
      }
      return '';
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.search-result {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 2px 0px;
  border: 3px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: $light-main;
  }

  &__image {
    padding-right: 10px;
  }

  &__title {
    color: $white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  &__streamer-game {
    font-style: italic;
    font-size: 14px;
  }
}
</style>
