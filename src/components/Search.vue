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
        <ChannelResult
          v-for="result in searchResults"
          :result="result"
          :key="result._id">
        </ChannelResult>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelResult from '@/components/ChannelResult.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  components: {
    ChannelResult
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
    align-items: center;
    justify-content: center;
  }

  &__results {
    max-height: 40vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
