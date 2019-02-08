<template>
  <div class="footer">
    <div class="footer__left">
      <div v-if="isLoggedIn && stats" class="footer__stats">
        <div class="footer__user-image">
          <img :src="user.avatar">
        </div>
        <span>Welcome, <b>{{user.username}}</b>! There <span v-if="stats.online <= 1">is</span><span v-if="stats.online > 1">are</span>
          <span class="orange"> {{stats.online}}</span> user<span v-if="stats.online > 1">s</span> online,
          watching <span class="orange">{{stats.activeStreams}}</span> stream<span v-if="stats.activeStreams > 1">s</span>.
        </span>
      </div>
    </div>

    <div class="footer__right">
      <div class="footer__link">
        <router-link to="privacy-policy">Privacy Policy</router-link>
      </div>
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
      <div v-if="isLoggedIn" class="footer__icon">
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
    ...mapGetters(['stats', 'user', 'isLoggedIn'])
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;

  &__left {
    padding-left: 5px;
  }

  &__right {
    padding-right: 5px;
    display: flex;
    justify-content: flex-end;
  }

  &__stats {
    @extend .flex-center;
    flex-direction: row;
    text-align: left;
    line-height: 16px;
    font-size: 16px;

    @include mq('tablet-wide', 'max') {
      font-size: 12px;
      line-height: 12px;
    }

    @include orientation(portrait) {
      display: none;
    }
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
    @extend .flex-center;
    margin-left: 5px;
    cursor: pointer;

    a {
      color: $white;
      font-weight: bold;
      text-decoration: none;
    }
  }

  &__link {
    @extend .flex-center;
    font-size: 12px;
    line-height: 12px;
    a {
      color: $bright-orange;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__version {
    font-size: 11px;
  }

  svg.eva {
    width: 30px;
    height: 30px;
    fill: $white;
    &:hover {
      fill: $bright-orange;
    }
  }
}
</style>
