<template>
  <div class="favorites">
    Favorites go here
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
