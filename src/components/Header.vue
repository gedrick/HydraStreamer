<template>
  <div class="header">
    <div @click="$emit('onToggleSettings')" class="header__icon header__settings-icon">
      <eva-icon name="plus-square"></eva-icon>
      <span>Add a Stream</span>
    </div>
    <div class="spacer"></div>
    <div @click="$emit('onToggleChat')" class="header__icon header__chat-icon">
      <span>Toggle Chat</span>
      <eva-icon name="message-square"></eva-icon>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  padding: 5px;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 3px;
    padding: 0 5px;
    cursor: pointer;

    span {
      opacity: 0;
      transition-duration: 0.2s;
      transition-property: opacity;
    }

    &:hover {
      background-color: rgba($black, 0.2);
      span {
        opacity: 1;
      }
    }
  }

  svg.eva {
    width: 50px;
    height: 50px;
    fill: $white;
    &:hover {
      fill: $bright-orange;
    }
  }
}
</style>
