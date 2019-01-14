<template>
  <div class="search">
    <div class="search__container">
      <div class="search__terms">
        <input
          v-model="terms"
          @keypress="doSearch"
          placeholder="search by stream or game"
          class="text-input"
          ref="terms"
          type="text">
      </div>
      <div class="search__results">
        <SearchResult></SearchResult>
        <SearchResult
          v-for="result in searchResults"
          :result="result"
          :key="result._id">
        </SearchResult>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResult from '@/components/SearchResult.vue';

export default {
  name: 'Search',
  components: {
    SearchResult
  },
  data() {
    return {
      terms: '',
      working: false
    };
  },
  computed: {
    searchResults() {
      return this.$store.getters.searchResults;
    }
  },
  mounted() {
    this.$refs.terms.focus();
  },
  methods: {
    doSearch(event) {
      if (event.key === 'Enter' && this.terms.length >= 3 && !this.working) {
        this.working = true;
        this.$store
          .dispatch('search', {
            query: this.terms
          })
          .then(() => {
            this.working = false;
          });
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import '../styles/variables.scss';

.search {
}
</style>
