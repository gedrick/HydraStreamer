<template>
  <div class="search-result" @click="toggleFavorite(result.channel.name)" v-if="result">
    <div class="search-result__image">
      <div class="search-result__image-preview">
        <img :src="previewImage">
        <div class="search-result__viewers">{{result.viewers}} viewers</div>
      </div>
    </div>
    <div class="search-result__title">
      <div class="search-result__streamer-name">{{result.channel.display_name}}</div>
      <div class="search-result__streamer-game">playing {{result.channel.game}}</div>
    </div>
    <div class="search-result__favorite">
      <span class="" :class="{
        'far fa-heart': !resultIsFavorited,
        'fas fa-heart': resultIsFavorited
      }"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    result: Object
  },
  computed: {
    ...mapGetters(['favorites']),
    previewImage() {
      if (this.result && this.result.preview && this.result.preview.small) {
        return this.result.preview.small;
      }
      return '';
    },
    resultIsFavorited() {
      return this.favorites.includes(this.result.channel.name);
    }
  },
  methods: {
    toggleFavorite(name) {
      this.$store.dispatch('toggleFavorite', {
        userID: this.userID,
        name: this.result.channel
      });
    }
  },
  computed: {
    ...mapGetters(['userID'])
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.search-result {
  display: grid;
  grid-template-columns: 90px auto 50px;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0;
  border: 3px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: $light-main;
  }

  &__image {
    margin-right: 10px;
  }

  &__image-preview {
    position: relative;
  }

  &__viewers {
    position: absolute;
    bottom: 3px;
    width: 100%;
    font-size: 13px;
    color: $white;
    background-color: rgba($black, 0.5);
  }

  &__title {
    color: $white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  &__streamer-name {
    font-weight: bold;
  }

  &__streamer-game {
    font-style: italic;
    font-size: 14px;
  }

  &__favorite {
    span {
      font-size: 26px;
      color: $white;
      &.favorite {
        color: $bright-orange;
      }
    }
  }
}
</style>
