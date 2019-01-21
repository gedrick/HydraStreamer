<template>
  <div class="add-channel">
    <div class="action-button flex-center">
      <span
        @click="showSearch"
        class="icon fa fa-search"
        :class="{'move-to-corner': searchIsOpen || hasChannels}">
      </span>
      <span class="label">Search</span>
    </div>
    <div v-if="searchIsOpen">
      <Search></Search>
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  &__cancel {
    margin-top: 10px;
    color: $white;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
