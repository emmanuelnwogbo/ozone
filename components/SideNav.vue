<template>
  <div class="sidenav" v-if="adminToken !== null || token !== null">
    <figure class="sidenav__logo">
      <img src="~/assets/sidenav/logo.png" alt="" />
    </figure>
    <div class="sidenav__sec">
      <h2 class="sidenav__h2">Admin tools</h2>
      <div class="sidenav__btns">
        <span
          @click="open_page(item.page)"
          v-bind:class="{
            active: item.page_name === current_route,
          }"
          class="sidenav__btns--btn"
          v-for="(item, index) in admintools"
          :key="'admintools' + index"
          >{{ item.name }}</span
        >
      </div>
      <!--<div class="sidenav__bottom1">
        <div class="sidenav__bottom1--strip"></div>
      </div>-->
    </div>
    <div class="sidenav__sec">
      <h2 class="sidenav__h2">Insights</h2>
      <div class="sidenav__btns">
        <span
          @click="open_page(item.page)"
          v-bind:class="{
            active: item.page_name === current_route,
          }"
          class="sidenav__btns--btn"
          v-for="(item, index) in insights"
          :key="'insights' + index"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidenav",
  data() {
    return {
      token: null,
      admintools: [
        {
          name: "Overview",
          page: "/overview",
          page_name: "overview",
        },
        {
          name: "Products",
          page: "/products",
          page_name: "products",
        },
        {
          name: "Activity",
          page: "/activity",
          page_name: "activity",
        },
        {
          name: "Customer",
          page: "/customer",
          page_name: "customer",
        },
        {
          name: "Wallet",
          page: "/wallet",
          page_name: "wallet",
        },
        {
          name: "Transactions",
          page: "/transactions",
          page_name: "transactions",
        },
        {
          name: "Merchants",
          page: "/merchants",
          page_name: "merchants",
        },
      ],
      insights: [
        {
          name: "Support",
          page: "/support",
          page_name: "support",
        },
        {
          name: "Notifications",
          page: "/notifications",
          page_name: "notifications",
        },
        {
          name: "Settings",
          page: "/setting",
          page_name: "setting",
        },
      ],
    };
  },
  mounted() {
    const token = localStorage.getItem("hebhukvyaew");
    console.log(token);
    if (token) {
      this.token = token;
    }
  },
  watch: {
    adminToken(newValue) {
      const token = localStorage.getItem("hebhukvyaew");
      this.token = token;
      //this.$router.push("/overview");
    },
  },
  computed: {
    current_route() {
      return this.$route.name;
    },
    adminToken() {
      const token = this.$store.getters.adminToken;
      return token;
    },
  },
  methods: {
    open_page(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 26rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  background: #e5e5e5;

  &__logo {
    height: 9rem;
    width: 9rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  &__sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:nth-child(1) {
      padding-bottom: 4rem;
      margin-bottom: 2rem;
    }
  }

  &__h2 {
    width: 100%;
    padding: 0 3rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 1.2rem;
  }

  &__btns {
    display: flex;
    flex-direction: column;

    &--btn {
      color: rgba(0, 0, 0, 0.6);
      font-weight: 500;
      font-size: 1.4rem;
      padding: 1.2rem 2rem;
      margin: 0.2rem 0;
      cursor: pointer;
      width: 17rem;
      transition: all 0.1s ease-in;

      &.active {
        color: #fff;
        background: #159183;
        border-radius: 1.2rem;
      }
    }
  }

  &__bottom1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;

    &--strip {
      position: relative;
      width: 13rem;

      &::before {
        content: "";
        position: absolute;
        bottom: 2rem;
        left: 0;
        height: 0.4px;
        width: 100%;
        //background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>