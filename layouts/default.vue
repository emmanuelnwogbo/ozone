<template>
  <div>
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
};
</script>

<style lang="scss">
$breakpoints: (
  "xs": 480px,
  "sm": 768px,
  "md": 992px,
  "lg": 1200px,
  "xl": 1600px,
);

$breakpoints-count: length($breakpoints);

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

  @for $i from 1 through 1824 {
    @media screen and (min-width: #{$i}px) {
      
    }
  }
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
