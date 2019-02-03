<template>
  <div class="follows">
    <p v-if="isLoading">Checking if any of your follows are online...</p>
    <p v-if="!isLoading && !followedLive.length">Doesn't look like anyone you follow is online. Maybe try searching for a new streamer?</p>
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
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapGetters(['followed', 'followedLive'])
  },
  beforeMount() {
    // Loop through followed and search query for all.
    this.isLoading = true;
    const followedIds = [];
    this.followed.map(follow => followedIds.push(follow.channel._id));

    this.$store.dispatch('getFollowedStatus', {
      channel: followedIds.join(',')
    }).then((channels) => {
      this.isLoading = false;
    });
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
