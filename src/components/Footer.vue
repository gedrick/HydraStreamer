<template>
  <div class="footer">
    <div class="footer__icon">
      <span class="footer__version">v1.0.0</span>
    </div>
    <div class="footer__icon">
      <a href="https://github.com/gedrick/HydraStreamer" target="_blank">
        <eva-icon name="github" fill="white"></eva-icon>
      </a>
    </div>
    <div class="footer__icon">
      <a href="https://twitter.com/nostalgiatriggr" target="_blank">
        <eva-icon name="twitter" fill="white"></eva-icon>
      </a>
    </div>
    <div class="footer__icon">
      <a href="/logout">
        <eva-icon name="log-out" fill="white"></eva-icon>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
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
    &:hover {
      fill: $bright-orange;
    }
  }
}
</style>
