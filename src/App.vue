<template>
  <div id="app">
    <Header />
    <Main />
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
  letter-spacing: -0.5px;
  position: relative;
}
p {
  font-size: 0.775rem;
  line-height: 1.7;
}
</style>
