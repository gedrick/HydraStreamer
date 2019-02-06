<template>
  <div class="grid-selector">
    <div class="grid-selector__two">

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['favorites'])
  }
}
</script>

<style lang="scss">
.grid-selector {

}
</style>
