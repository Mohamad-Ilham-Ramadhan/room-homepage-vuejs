<template>
  <div id="app">
    <Header />
    <img src="./assets/images/mobile-image-hero-1.jpg" width="100%" alt="" />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
// @import "./assets/scss/variables";
#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkGray;
}
</style>
