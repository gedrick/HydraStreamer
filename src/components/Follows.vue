<template>
  <div class="follows">
    <p v-if="!followedLive.length">Doesn't look like anyone you follow is online. Maybe try searching for a new streamer?</p>
    <ChannelBadge
      v-for="channel in followedLive"
      :channel="channel"
      :key="channel.channel._id">
    </ChannelBadge>
  </div>
</template>

<script>
import ChannelBadge from '@/components/ChannelBadge.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ChannelBadge
  },
  computed: {
    ...mapGetters(['followed', 'followedLive'])
  },
  mounted() {
    // Loop through followed and search query for all.
    if (!this.followedLive.length) {
      const followedIds = [];
      this.followed.map(follow => followedIds.push(follow.channel._id));
      this.$store.dispatch('getFollowedStatus', {
        channel: followedIds.join(',')
      });
    }
  }
}
</script>

<style lang="scss">
.follows {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 98vw;
}
</style>
