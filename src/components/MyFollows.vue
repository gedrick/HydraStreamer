<template>
  <div class="my-follows">
    <div class="action-button flex-center">
      <span
        @click="showSearch"
        class="icon fa fa-list"
        :class="{'move-to-corner': searchIsOpen}">
      </span>
      <span class="label">My Favorites</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchIsOpen: false
    };
  },
  methods: {
    showSearch() {

    }
  }
}
</script>
