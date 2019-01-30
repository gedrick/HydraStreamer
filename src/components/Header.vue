<template>
  <div class="header">
    <div class="header__icon header__settings-icon">
      <eva-icon class="icon" @click="$emit('onToggleSettings')" name="plus-square"></eva-icon>
    </div>
    <div class="spacer"></div>
    <div class="header__icon header__chat-icon">
      <eva-icon class="icon" @click="$emit('onToggleChat')" name="message-square"></eva-icon>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  padding: 5px;

  svg.eva {
    width: 50px;
    height: 50px;
    fill: $white;
    cursor: pointer;
    &:hover {
      fill: $bright-orange;
    }
  }
}
</style>
