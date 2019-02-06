<template>
  <div class="warning-screen expand-to-fit">
    <div>
      <eva-icon name="arrow-circle-left" fill="white"></eva-icon><br>
      <span>Rotate<br>your device!</span>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables';
@import '../styles/breakpoints';

.warning-screen {
  display: none;
  z-index: 15;
  justify-content: center;
  align-items: center;
  background-color: rgba($black, 1);

  @media (max-width: 768px) and (orientation: portrait) {
    display: flex;
  }

  svg.eva {
    width: 100px;
    height: 100px;
    fill: $light-main;
    animation-duration: 3s;
    animation-name: wiggle;
    animation-iteration-count: infinite;
  }

  span {
    color: $white;
    font-size: 50px;
  }
}
</style>
