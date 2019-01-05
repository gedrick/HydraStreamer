<template>
  <div class="home">
    <LoginSignup v-if="!userIsGuest" @dismiss="toggleUserGuest"></LoginSignup>
    <HomeMenu v-if="userIsGuest"></HomeMenu>
  </div>
</template>

<script>
import LoginSignup from '@/components/LoginSignup.vue';
import HomeMenu from '@/components/HomeMenu.vue';

export default {
  name: 'home',
  components: {
    LoginSignup,
    HomeMenu
  },
  data() {
    return {
      userIsGuest: false
    };
  },
  methods: {
    toggleUserGuest() {
      this.userIsGuest = true;
    }
  }
};
</script>
