<template>
  <div class="header">
    <h3
      class="header__h3"
      v-if="
        this.$route.name !== 'products-productorders' &&
        this.$route.name !== 'merchants-addmerchant'
      "
    >
      Hi {{ "Druids" }},
    </h3>
    <h1 class="header__h1">{{ title }}</h1>
    <h3 class="header__h3" v-if="this.$route.name === 'products-productorders'">
      {{ "54 Orders" }},
    </h3>
  </div>
</template>

<script>
export default {
  mounted() {},
  computed: {
    title() {
      const current_route = this.$route.name;
      console.log(this.$route.name, "hello");
      switch (current_route) {
        case "products":
          return "Product Analysis";
        case "activity":
          return "Activity";
        case "customer":
          return "Customer Insight";
        case "wallet":
          return "Wallet";
        case "transactions":
          return "Transaction";
        case "merchants":
          return "Merchant Overview";
        case "support":
          return "Support";
        case "notifications":
          return "Notifications";
        case "setting":
          return "Settings";
        case "products-productorders":
          return "Your Orders";
        case "merchants-addmerchant":
          return "Add New Merchant";
        default:
          return "Welcome Back";
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  right: 0;
  width: 127rem;
  padding: 4rem 4rem 4rem 6rem;

  &__h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  &__h1 {
    font-size: 3.7rem;
    font-weight: 700;
  }
}
</style>