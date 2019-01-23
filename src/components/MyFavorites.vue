<template>
  <div class="my-follows">
    <div class="action-button flex-center">
      <span @click="showFavorites" class="icon fa fa-list"></span>
      <span class="label">Online People I Follow</span>
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
    showFavorites() {
      this.$emit('open');
    }
  }
}
</script>
