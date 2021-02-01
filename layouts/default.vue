<template>
  <div>
    <Header />
    <Sidenav />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidenav from "@/components/Sidenav";
export default {
  components: {
    Header,
    Sidenav,
  },
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0px;
    opacity: 0;
  }

  &::-moz-scrollbar {
    width: 0px;
    opacity: 0;
  }
}
</style>
