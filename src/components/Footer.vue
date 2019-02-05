<template>
  <div class="footer">
    <div class="footer__left">
      <div v-if="stats" class="footer__stats">
        <div class="footer__user-image">
          <img :src="user.avatar">
        </div>
        <span>Welcome, <b>{{user.username}}</b>! There are
          <span class="orange">{{stats.online}}</span> users online,
          watching <span class="orange">{{stats.activeStreams}}</span> stream<span v-if="stats.activeStreams > 1">s</span>.
        </span>
      </div>
    </div>

    <div class="footer__right">
      <div class="footer__icon">
        <span class="footer__version">v1.0.0</span>
      </div>
      <div class="footer__icon">
        <a href="https://github.com/gedrick/HydraStreamer" target="_blank">
          <eva-icon name="github"></eva-icon>
        </a>
      </div>
      <div class="footer__icon">
        <a href="https://twitter.com/nostalgiatriggr" target="_blank">
          <eva-icon name="twitter"></eva-icon>
        </a>
      </div>
      <div class="footer__icon">
        <a href="/logout">
          <eva-icon name="log-out"></eva-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['stats', 'user'])
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left {
    padding-left: 5px;
  }

  &__right {
    padding-right: 5px;
    display: flex;
    justify-content: flex-end;
  }

  &__stats {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__user-image {
    width: 30px;
    height: 30px;
    margin-right: 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    cursor: pointer;

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
  }

  &__version {
    font-size: 11px;
  }

  svg.eva {
    width: 30px;
    height: 30px;
    fill: #fff;
    &:hover {
      fill: $bright-orange;
    }
  }
}
</style>
