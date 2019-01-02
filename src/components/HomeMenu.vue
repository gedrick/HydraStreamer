<template>
  <div class='home-menu'>
    <Grid :channels='channels'></Grid>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';

export default {
  components: {
    Grid
  },
  data() {
    return {
      channels: [
        {
          index: 0,
          name: 'Shepherd'
        },
        {
          index: 1,
          name: 'Hays'
        },
        {
          index: 2,
          name: 'Cox'
        },
        {
          index: 3,
          name: 'Lucile'
        },
        {
          index: 4,
          name: 'Tanisha'
        },
        {
          index: 5,
          name: 'Melendez'
        },
        {
          index: 6,
          name: 'Emma'
        },
        {
          index: 7,
          name: 'Cooley'
        },
        {
          index: 8,
          name: 'Loraine'
        },
        {
          index: 9,
          name: 'Nannie'
        },
        {
          index: 10,
          name: 'Sims'
        },
        {
          index: 11,
          name: 'Burns'
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.home-menu {
  display: flex;
  margin: auto;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
