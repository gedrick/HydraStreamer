<template>
  <div class="home-menu">
    <Grid :channels="channels"></Grid>
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
          name: 'shroud'
        }
        // {
        //   index: 1,
        //   name: 'ninja'
        // }
        // {
        //   index: 2,
        //   name: 'meclipse'
        // },
        // {
        //   index: 3,
        //   name: 'tsm_myth'
        // },
        // {
        //   index: 4,
        //   name: 'tfue'
        // },
        // {
        //   index: 5,
        //   name: 'riotgames'
        // },
        // {
        //   index: 6,
        //   name: 'dakotaz'
        // },
        // {
        //   index: 7,
        //   name: 'yoda'
        // },
        // {
        //   index: 8,
        //   name: 'voyboy'
        // },
        // {
        //   index: 9,
        //   name: 'taketv'
        // },
        // {
        //   index: 10,
        //   name: 'playhearthstone'
        // },
        // {
        //   index: 11,
        //   name: 'reckful'
        // }
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
