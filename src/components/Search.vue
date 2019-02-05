<template>
  <div class="search">
    <div class="search__container">
      <div class="search__terms">
        <input
          v-model="terms"
          @keypress="triggerSearch"
          placeholder="start typing..."
          class="text-input"
          ref="terms"
          type="text">
      </div>
      <div class="search__results">
        <ChannelBadge
          v-for="channel in searchResults"
          :channel="channel"
          :key="channel._id">
        </ChannelBadge>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelBadge from '@/components/ChannelBadge.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  components: {
    ChannelBadge
  },
  data() {
    return {
      terms: '',
      working: false,

      searchTimeout: null
    };
  },
  computed: {
    ...mapGetters(['searchResults'])
  },
  methods: {
    triggerSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(this.doSearch, 300);
    },
    doSearch() {
      this.$store.dispatch('search', {
        query: this.terms
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../styles/variables';

.search {
  &__terms {
    background-color: $light-main;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 22px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__results {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
