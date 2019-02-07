<template>
  <div class="loading-box">
    <div class="loading-box__loader">
      <div class="loading-box__loader--large"></div>
      <div class="loading-box__loader--small"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables';

$hollowBoxSize: 3em;
$hollowLight: $loading-box-light;
$hollowDark: $loading-box-dark;
$hollowTiming: 0.75s;

.loading-box {
  @extend .flex-center;

  &__loader {
    width: $hollowBoxSize;
    height: $hollowBoxSize;
    animation: loaderAnim $hollowTiming infinite ease-in-out;
    outline: 1px solid transparent;

    &--large {
      height: $hollowBoxSize;
      width: $hollowBoxSize;
      background-color: $hollowLight;
      outline: 1px solid transparent;
      position: fixed;
    }

    &--small {
      height: $hollowBoxSize;
      width: $hollowBoxSize;
      background-color: $hollowDark;
      position: fixed;
      z-index: 1;
      outline: 1px solid transparent;
      animation: smallBoxAnim $hollowTiming alternate infinite ease-in-out;
    }
  }
}

@keyframes smallBoxAnim {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(0.75);
  }
}

@keyframes loaderAnim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
</style>
