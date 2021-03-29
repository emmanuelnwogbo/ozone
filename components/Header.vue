<template>
  <div class="header">
    <div
      class="header__notification"
      v-bind:class="{
        visible: currentNotification !== null,
      }"
    >
      <div class="header__notification--content">
        {{ "the notification here" }}
      </div>
    </div>
    <div class="header__left">
      <h3
        class="header__h3"
        v-if="
          this.$route.name !== 'products-productorders' &&
          this.$route.name !== 'merchants-addmerchant'
        "
      >
        {{ this.$route.name === "customer-profile" ? "User" : "Hi," }}
        {{ user === null ? "" : user.name }}
      </h3>
      <h1 class="header__h1">{{ title }}</h1>
      <h3
        class="header__h3"
        v-if="this.$route.name === 'products-productorders'"
      >
        {{ "54 Orders" }},
      </h3>
    </div>
    <div class="header__right">
      <div class="header__input">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.61154 0C4.30323 0 0 4.20819 0 9.39926C0 14.5903 4.30323 18.7985 9.61154 18.7985C11.8819 18.7985 13.9684 18.0287 15.613 16.7415L18.7371 19.7886L18.8202 19.8586C19.1102 20.0685 19.5214 20.0446 19.7839 19.7873C20.0726 19.5043 20.072 19.0459 19.7825 18.7636L16.6952 15.7523C18.2649 14.0794 19.2231 11.8487 19.2231 9.39926C19.2231 4.20819 14.9198 0 9.61154 0ZM9.61154 1.44774C14.1022 1.44774 17.7426 5.00776 17.7426 9.39926C17.7426 13.7908 14.1022 17.3508 9.61154 17.3508C5.12086 17.3508 1.48044 13.7908 1.48044 9.39926C1.48044 5.00776 5.12086 1.44774 9.61154 1.44774Z"
              fill="#11142D"
            ></path>
          </svg>
        </span>
        <span>
          <input type="text" placeholder="Search" />
        </span>
      </div>
      <div class="header__bell">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 11V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V11C5 14.3 2 15.1 2 17C2 18.7 5.9 20 12 20C18.1 20 22 18.7 22 17C22 15.1 19 14.3 19 11Z"
              stroke="#11142D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21.9999C10.989 21.9999 10.039 21.9659 9.14502 21.8999C9.53619 23.1477 10.6924 23.9969 12 23.9969C13.3077 23.9969 14.4639 23.1477 14.855 21.8999C13.961 21.9659 13.011 21.9999 12 21.9999Z"
              fill="#1B1D21"
            />
          </svg>
        </span>
        <span>6</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.$store.dispatch("getCustomers");
  },
  watch: {
    userDatails(newValue) {
      const user = localStorage.getItem("jhbfgehgwbhef");
      this.user = JSON.parse(user);
      //this.$store.dispatch("updateUser", this.user);
    },
    currentNotification(newValue) {
      if (newValue !== null) {
        setTimeout(() => {
          this.dispatch("currentNotification", null);
        }, 9000);
      }
    },
    adminToken(newValue) {
      if (newValue === null) {
        console.log("logged out");
        this.$router.push("/")
      }
      //newValue === null ? this.$router.push("/") : "";
    },
  },
  computed: {
    adminToken() {
      const token = this.$store.getters.adminToken;
      return token;
    },
    currentNotification() {
      this.$store.getters.currentNotification;
    },
    userDatails() {
      const user = this.$store.getters.user;
      return user;
    },
    customerDetails() {
      return this.$store.getters.customers !== null
        ? this.$store.getters.customers
            .filter((item) => item.accountType !== "admin")
            .filter((customer) => customer.id == this.$route.params.index)[0]
        : "";
    },
    title() {
      const current_route = this.$route.name;
      switch (current_route) {
        case "products":
          return "Product Analysis";
        case "activity":
          return "Activity";
        case "customer":
          return "Customer Insight";
        case "customer-profile":
          return this.$store.getters.customers.length
            ? this.$store.getters.customers
                .filter((item) => item.accountType !== "admin")
                .filter(
                  (customer) => customer.id == this.$route.params.index
                )[0].name
            : "";
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
  width: 126rem;
  padding: 4rem 5rem 4rem 6rem;

  display: flex;
  justify-content: space-between;

  &__notification {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: $color-primary;
    padding-top: 1rem;
    transition: all 0.3s ease;
    transform: translateY(-100%);

    .visible {
      transform: translateY(0);
    }

    &--content {
      background: #fff;
      height: 80%;
      padding: 3rem;
      border-radius: 1rem;
      box-shadow: -3px 0 20px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.2);
    }
  }

  &__h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  &__h1 {
    font-size: 3.7rem;
    font-weight: 700;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__input {
    position: relative;
    display: flex;
    align-items: center;

    & span {
      display: inline-block;

      &:nth-child(2) {
        & input {
          outline: none;
          border: none;
          background: transparent;
          padding: 1.4rem;
          width: 16rem;

          &::placeholder {
            font-weight: 500;
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  &__bell {
    position: relative;
    cursor: pointer;

    & span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      &:nth-child(1) {
        height: 4rem;
        width: 4rem;
        background: #fff;
        box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
      }

      &:nth-child(2) {
        position: absolute;
        top: -0.5rem;
        right: -0.7rem;
        height: 2.3rem;
        width: 2.3rem;
        background: #0049c6;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}
</style>