<template>
  <div class="add-channel">
    <div class="action-button flex-center">
      <span @click="showSearch" class="icon fa fa-search"></span>
      <span class="label">Search</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddChannel',
  props: ['hasChannels'],
  data() {
    return {
      searchIsOpen: false
    };
  },
  methods: {
    showSearch() {
      this.$emit('open');
    }
  }
};
</script>

<style lang="scss">
.add-channel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
</style>
