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
import { mapGetters } from 'vuex';

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
    ...mapGetters(['searchResults'])
  },
  mounted() {
    this.$refs.terms.focus();
  },
  methods: {
    doSearch() {
      if (this.terms.length >= 3 && !this.working) {
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
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__results {
    max-height: 40vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
