<template>
  <div class="header">
    <div @click="$emit('onToggleSettings')" class="header__icon header__settings-icon">
      <eva-icon name="plus-square"></eva-icon>
      <span>Add a Stream</span>
    </div>

    <GridSelector></GridSelector>

    <div class="spacer"></div>
    <div @click="$emit('onToggleChat')" class="header__icon header__chat-icon">
      <span>Toggle Chat</span>
      <eva-icon name="message-square"></eva-icon>
    </div>
  </div>
</template>

<script>
import GridSelector from '@/components/GridSelector.vue';

export default {
  components: {
    GridSelector
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    padding: 0 5px;
    cursor: pointer;
    background-color: rgba($black, 0.1);

    &:hover {
      svg.eva {
        fill: $bright-orange;
      }
    }
  }

  svg.eva {
    width: 50px;
    height: 50px;
    fill: $white;
  }
}
</style>
