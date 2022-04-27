<template>
  <div class="top-bar mb-1">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="d-flex justify-content-between">
        <div class="py-2 px-3">
            <button><img src="@/assets/images/top-bar/basket.png" alt="" class="mx-2 basket"></button>
            <button @click="toggleMenu"><img src="@/assets/images/top-bar/menu.png" alt="" class="mx-2 menu"></button>
        </div>
        <div class="py-2 px-3">
            <button><img src="@/assets/images/top-bar/user.png" alt="" class="mx-2 user"></button>
            <button><img src="@/assets/images/top-bar/search.png" alt="" class="mx-2 search"></button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'TopBar',
  methods: {
      toggleMenu(){
          this.$parent.manualShowHide();
      }
  }
};
</script>
<style lang="scss">
.top-bar{
    width: 100%;
    background-color: #283848;

    button{
        background: none;
        border: none;
    }
    .basket, .user{
        max-height: 50px;
    }
    .menu, .search{
        max-height: 20px;
    }
    .user{
        border-radius: 50%;
    }
}
</style>
