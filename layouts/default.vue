<template>
  <div id="test">
    <Header />
    <Sidenav />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidenav from "@/components/SideNav";
export default {
  components: {
    Header,
    Sidenav,
  },
  middleware: "auth",
  mounted() {
    console.log(window.screen.availWidth * 0.041);
    const val = window.screen.availWidth * 0.041;
    document.getElementsByTagName('html')[0].style.fontSize = val+'%';
  },
};
</script>

<style lang="scss">
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media only screen and (max-width: 37.5em) {
      @content;
    } //600px
  }
  @if $breakpoint == tab-port {
    @media only screen and (max-width: 56.25em) {
      @content;
    } //900px
  }
  @if $breakpoint == tab-land {
    @media only screen and (max-width: 75em) {
      @content;
    } //1200px
  }
  @if $breakpoint == big-desktop {
    @media only screen and (min-width: 112.5em) {
      @content;
    } //1800
  }
}

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

  /*@include respond(tab-land) {
    // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) {
    // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 78%; //1rem = 12, 12/16
  }*/
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
  background: #e5e5e5;
  padding-bottom: 3rem;

  color: $color-black-font;
  padding-bottom: 10rem;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
