<template>
  <div class="add-channel">
    <span
      @click="showSearch"
      class="fa fa-plus-square"
      :class="{'move-to-corner': searchIsOpen || hasChannels}">
    </span>
    <div v-if="searchIsOpen">
      <Search></Search>
      <div @click="hideSearch" class="add-channel__cancel">close search</div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'AddChannel',
  components: {
    Search
  },
  props: ['hasChannels'],
  data() {
    return {
      searchIsOpen: false
    };
  },
  methods: {
    showSearch() {
      this.searchIsOpen = true;
    },
    hideSearch() {
      this.searchIsOpen = false;
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.add-channel {
  & > span {
    transition-duration: 0.2s;
    transition-property: left, top, font-size;
    color: $bright-orange;
    font-size: 120px;

    &.move-to-corner {
      position: absolute;
      top: 10px;
      left: 20px;
      font-size: 40px;
    }

    &:hover {
      color: $white;
      cursor: pointer;
    }
  }

  &__cancel {
    margin-top: 10px;
    color: $white;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
