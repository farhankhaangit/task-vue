<template>
    <div class="left-nav py-3">
        <div class="menu_items text-center">
            <router-link to="/" class="my-3" @click="toggleMenu"><img src="@/assets/images/left-nav/home-run.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/bell.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/box.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/card.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/badge.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/doc.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/bell.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/box.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/card.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/badge.png" alt=""></router-link>
            <router-link to="" class="my-3"><img src="@/assets/images/left-nav/doc.png" alt=""></router-link>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
      toggleMenu(){
          this.$parent.manualShowHide();
      }
  }
}
</script>
<style lang="scss">
    .left-nav{
        background-color: #283848;
        width: 70px;
        height: 100%;

        a{
            display: block;

            img{
                max-width: 40px;
                height: auto;
            }
        }
    }
</style>