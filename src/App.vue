<template>
  <div id="app">
    <Header />
    <img src="./assets/images/mobile-image-hero-1.jpg" width="100%" alt />
    <!-- <Main /> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
export default {
  name: "App",
  components: {
    Header,
    Main
  }
};
</script>

<style lang="scss">
#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkGray;
}
</style>
