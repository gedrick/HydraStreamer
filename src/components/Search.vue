<template>
  <div class="search">
    <div class="search__container">
      <div class="search__terms">
        <input placeholder="search by stream or game" class="text-input" type="text">
      </div>
      <div class="search__results">
        <!-- <SearchResult></SearchResult> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      results: []
    };
  }
};
</script>


<style lang="scss" scoped>
@import '../styles/variables.scss';

.search {
  &__terms {
    input {
      text-align: center;
    }
  }
}
</style>
