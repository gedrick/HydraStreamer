<template>
  <div class="follows">
    <FollowResult
      v-for="channel in followedLive"
      :channel="channel"
      :key="channel._id">
    </FollowResult>
  </div>
</template>

<script>
import FollowResult from '@/components/FollowResult.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    FollowResult
  },
  computed: {
    ...mapGetters(['followed', 'followedLive'])
  },
  mounted() {
    // Loop through followed and search query for all.
    const followedIds = [];
    this.followed.map(follow => followedIds.push(follow.channel._id));
    this.$store.dispatch('getFollowedStatus', {
      channel: followedIds.join(',')
    });
  }
}
</script>

<style lang="scss">
.follows {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 50vw;
  max-height: 40vh;
  flex-wrap: wrap;
}
</style>
