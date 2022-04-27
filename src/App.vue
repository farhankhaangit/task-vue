<template>
<div>
  
  <top-bar/>
  <div class="d-flex position-relative">
    <div :class="{offCanvas: hidden}" v-show="navbarVisible">
      <left-nav/>
    </div>
    <div class="px-3 w-100">
      <router-view />
    </div>
  </div>
  
</div>
</template>

<script>
import TopBar from '@/components/top-bar.vue';
import LeftNav from '@/components/nav-bar.vue';
export default {
  components : {TopBar,LeftNav},
  data(){
    return{
      navbarVisible: true,
      hidden: false
    }
  },
  created() {
    this.showHide(window.screen.width);
    window.addEventListener("resize", this.resizeHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler(e) {
     this.showHide(e.target.outerWidth);
    },
    showHide(width){
      if(width < 768){
        this.navbarVisible = false;
        this.hidden = true
      }
      else {
        this.navbarVisible = true;
        this.hidden = false
      }
    },
    manualShowHide(){
      if(window.screen.width < 768){
        this.navbarVisible = !this.navbarVisible;
      }
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

*{
  font-family: 'Nunito', sans-serif;
}
body{
  margin: 0;
  padding: 0;
  background-color: #F7F7F7;
}
.offCanvas {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.336);
  z-index: 99;
}
// .simple
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// @media screen and (max-width:768px) {
//   .left-nav-parent{
//     display: none;
//   }
// }
</style>
