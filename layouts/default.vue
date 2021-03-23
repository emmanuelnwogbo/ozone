<template>
  <div id="main">
    <Header />
    <Sidenav />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidenav from "@/components/SideNav";

import axios from "axios";

const environment = process.env.NODE_ENV;
const baseURL =
  environment === "development"
    ? process.env.BASE_DEV_URL
    : process.env.BASE_PROD_URL;

export default {
  components: {
    Header,
    Sidenav,
  },
  middleware: "auth",
  mounted() {
    const val = window.screen.availWidth * 0.041;
    document.getElementsByTagName("html")[0].style.fontSize = val + "%";

    const userData = JSON.parse(localStorage.getItem("jhbfgehgwbhef"));
    const token = localStorage.getItem("hebhukvyaew");

    axios({
      method: "get",
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-type": "application/json",
        token: token,
      },
      baseURL,
      url: "/getOrders",
    })
      .then((res) => {
        if (this.$route.name === "index") {
          this.$router.push("/overview");
          setTimeout(function () {
            document.getElementsByTagName("html")[0].style.opacity = "1";
          }, 600);

          return;
        }

        document.getElementsByTagName("html")[0].style.opacity = "1";
      })
      .catch((err) => {
        this.$router.push("/");
        localStorage.removeItem("hebhukvyaew");
        localStorage.removeItem("jhbfgehgwbhef");
        document.getElementsByTagName("html")[0].style.opacity = "1";
      });

    this.$store.commit("updateUser", userData);
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

  opacity: 0;
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
