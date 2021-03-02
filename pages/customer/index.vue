<template>
  <div class="customer">
    <div class="customer__body">
      <div class="customer__top">
        <div class="customer__topleft">
          <div class="customer__toplefttop">
            <ProductCard
              v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)'"
              borderRadius="1.5rem"
            >
              <div class="customer__toplefttop--body">
                <div class="customer__toplefttop--top">
                  <h2>Customer Purchase Report</h2>
                  <div class="customer__toplefttop--indicators">
                    <div class="customer__toplefttop--indicator">
                      <span></span>
                      <span>LNG</span>
                    </div>
                    <div class="customer__toplefttop--indicator">
                      <span></span>
                      <span>Diesel</span>
                    </div>
                  </div>
                </div>
              </div>
            </ProductCard>
          </div>
          <div class="customer__topleftbottom">
            <ProductCard
              v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)'"
              borderRadius="1.5rem"
            >
              <div class="customer__topleftbottom--body">
                <h2>O-Zone Customers</h2>
              </div>
            </ProductCard>
          </div>
        </div>
        <div class="customer__topright">
          <ProductCard
            v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)'"
            borderRadius="1.5rem"
          >
            <div class="customer__topright--body">
              <h2>Gender Representation</h2>
              <div class="customer__topright--numbers">479.4</div>
              <div class="customer__topright--indicators">
                <div class="customer__topright--indicator">
                  <span></span>
                  <span>4,000 Male</span>
                </div>
                <div class="customer__topright--indicator">
                  <span></span>
                  <span>3,800 Female</span>
                </div>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>
      <div class="customer__bottom">
        <ProductCard
          v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.3), white)'"
          borderRadius="1.5rem"
        >
          <div class="customer__bottom--body">
            <div class="customer__bottom--top">
              <h2>Customer Database</h2>
            </div>
            <div class="customer__bottom--heading">
              <div class="customer__bottom--name">
                <div></div>
                <div>Name</div>
              </div>
              <span>Username</span>
              <span>Account Type</span>
              <span>Location</span>
              <span>Email</span>
              <span>Action</span>
            </div>
            <div class="customer__bottom--container">
              <div
                class="customer__bottom--tile"
                v-for="(item, index) in customers"
                :key="index"
              >
                <div class="customer__bottom--name">
                  <div></div>
                  <div>{{ item.name }}</div>
                </div>
                <span>{{ item.name }}</span>
                <span>{{ item.accountType }}</span>
                <span>Lagos, Ikoyi</span>
                <span>{{ item.email }}</span>
                <span>Manage</span>
              </div>
            </div>

            <div class="customer__bottom--btn">
              <button>Load More</button>
            </div>
          </div>
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/products/ProductCard";

export default {
  component: {
    ProductCard,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getCustomers");
  },
  computed: {
    customers() {
      const customers = this.$store.getters.customers.filter(
        (item) => item.accountType !== "admin"
      );
      return customers;
    },
  },
};
</script>

<style lang="scss">
.customer {
  padding-left: 21rem;
  min-height: 159vh;

  &__body {
    padding: 15rem 4.5rem 0 10rem;
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__topleft {
    width: 80rem;
    flex-shrink: 0;
  }

  &__topright {
    width: 32rem;
    flex-shrink: 0;
    position: relative;

    &--body {
      position: relative;
      height: 100%;
      padding: 3rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      & h2 {
        text-align: center;
      }
    }

    &--numbers {
      font-size: 8rem;
      font-weight: 500;
    }

    &--indicator {
      display: flex;
      align-items: center;

      & span {
        font-weight: 500;
        font-size: 1.3rem;
        display: inline-block;

        &:nth-child(1) {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 0.4rem;
          cursor: pointer;
          background: #6c5dd3;
        }

        &:nth-child(2) {
          margin-left: 1rem;
        }
      }

      &:nth-child(2) {
        & span:nth-child(1) {
          background: #ffa2c0;
        }
      }
    }

    &--indicators {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      width: 80%;
      font-size: 1.3rem;
      position: absolute;
      bottom: 4rem;
    }
  }

  &__toplefttop {
    height: 29rem;
    width: 100%;
    position: relative;

    &--body {
      padding: 3rem;
    }

    &--top {
      display: flex;
      justify-content: space-between;
    }

    &--indicators {
      display: flex;
    }

    &--indicator {
      margin-left: 5rem;
      display: flex;
      align-items: center;

      & span {
        font-weight: 500;
        font-size: 1.3rem;
        display: inline-block;

        &:nth-child(1) {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 0.4rem;
          cursor: pointer;
          background: #159183;
        }

        &:nth-child(2) {
          margin-left: 1rem;
        }
      }

      &:nth-child(2) {
        & span:nth-child(1) {
          background: #0049c6;
        }
      }
    }
  }

  &__topleftbottom {
    margin-top: 4rem;
    height: 20rem;
    width: 100%;
    position: relative;

    &--body {
      padding: 3rem;
    }
  }

  &__bottom {
    margin-top: 4rem;
    width: 100%;

    &--body {
      padding: 3rem;
      background: linear-gradient(to bottom, rgba(248, 248, 248, 0.3), white);
      border-radius: 1.5rem;
    }

    &--heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgba(128, 129, 145, 0.9);
      font-size: 1.4rem;
      font-weight: 500;
      padding: 3rem 0;
      margin-top: 1rem;
      padding-bottom: 2rem;

      & span {
        display: inline-block;
        flex-shrink: 0;

        &:nth-child(2) {
          width: 20rem;
        }

        &:nth-child(3) {
          width: 16rem;
        }
        &:nth-child(4) {
          width: 17rem;
        }
        &:nth-child(5) {
          width: 23rem;
        }
        &:nth-child(6) {
          width: 13rem;
        }
      }
    }

    &--tile {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.4rem;
      font-weight: 400;
      cursor: pointer;
      padding: 2rem 0;
      margin-top: 1rem;
      border-top: 0.2px solid rgba(47, 54, 64, 0.2);

      & span {
        display: inline-block;
        flex-shrink: 0;

        &:nth-child(2) {
          width: 20rem;
        }

        &:nth-child(3) {
          width: 16rem;
        }
        &:nth-child(4) {
          width: 17rem;
        }
        &:nth-child(5) {
          width: 26rem;
        }
        &:nth-child(6) {
          width: 10rem;
          height: 3rem;
          color: #fff;
          background: #0049c6;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }

    &--btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5rem 0;
      border-top: 0.2px solid rgba(47, 54, 64, 0.2);

      & button {
        font-weight: 600;
        background: #1b1d21;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        border: none;
        font-size: 1.3rem;
        border-radius: 1.2rem;
        height: 4.5rem;
        width: 14rem;
      }
    }

    &--name {
      width: 20rem;
      flex-shrink: 0;
    }
  }
}

h2 {
  width: 100%;
  font-size: 1.7rem;
  font-weight: 500;
}
</style>