<template>
  <div class="customerprofile">
    <div class="customerprofile__body">
      <div class="customerprofile__left customerprofile__section">
        <figure class="customerprofile__avatar">
          <img src="~/assets/customer/icon-avatar-default.png" alt="" />
        </figure>
        <div class="customerprofile__names">
          <h3>{{ customer ? customer.name : "" }}</h3>
          <span>{{ customer ? customer.accountType : "" }} Member</span>
        </div>
        <div class="customerprofile__btns">
          <button
            @click="switchCurrentTrue"
            v-bind:class="{
              active: currentleft,
            }"
          >
            View Profile
          </button>
          <button
            @click="switchCurrentFalse"
            v-bind:class="{
              active: !currentleft,
            }"
          >
            View KYC Details
          </button>
        </div>
        <div class="customerprofile__leftcontainer">
          <div v-if="currentleft && customer">
            <div class="customerprofile__leftitem">
              <span>email</span>
              <span>{{ customer.email }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>username</span>
              <span>{{ customer.name }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>date of birth</span>
              <span>31-July-1994</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>phone number</span>
              <span>{{ customer.phoneNumber }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>gender</span>
              <span>Male</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>status</span>
              <span>{{ customer.status }}</span>
            </div>
          </div>
          <div v-if="!currentleft && customer">
            <div class="customerprofile__leftitem">
              <span>residential address</span>
              <span>{{ customer.email }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>office address</span>
              <span>{{ customer.name }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>id card</span>
              <span class="colored">Screenshot 74737.png</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>utility bil</span>
              <span class="colored">IEIEKM.png</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>occupation</span>
              <span>Product Designer</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>bvn</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="customerprofile__right customerprofile__section">
        <div class="customerprofile__fuelcard">
          <div class="customerprofile__fuelcard--top">
            <span>Fuel Card</span>
            <span>
              <figure>
                <img src="~/assets/sidenav/logo.png" alt="" />
              </figure>
            </span>
          </div>
          <div class="customerprofile__fuelcard--scanner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="42"
              viewBox="0 0 55 42"
              fill="none"
            >
              <g opacity="0.6">
                <rect
                  x="54.5103"
                  y="0.457031"
                  width="41.0705"
                  height="53.9553"
                  rx="4.02652"
                  transform="rotate(90 54.5103 0.457031)"
                  fill="#ECECEC"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
                <rect
                  x="32.7671"
                  y="6.09399"
                  width="28.1856"
                  height="11.2742"
                  rx="4.02652"
                  transform="rotate(90 32.7671 6.09399)"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
                <path
                  d="M0.445312 8.50977L22.9723 8.50977"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
                <path
                  d="M31.895 8.50977L54.422 8.50977"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
                <path
                  d="M0.445312 20.6062L21.7296 20.6062"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
                <path
                  d="M33.105 20.6062L54.3892 20.6062"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
                <path
                  d="M0.445312 32.7021L22.9723 32.7021"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
                <path
                  d="M31.895 32.7021L54.422 32.7021"
                  stroke="#397026"
                  stroke-width="0.805303"
                />
              </g>
            </svg>
          </div>
          <div class="customerprofile__fuelcard--name">
            <p>{{ customer ? customer.name : "" }}</p>
          </div>
          <div class="customerprofile__fuelcard--bottom">
            <div class="customerprofile__fuelcard--validthrough">
              <span>Valid Through</span>
              <span>11/22</span>
            </div>
            <div class="customerprofile__fuelcard--logo">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div class="customerprofile__history"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerProfile",
  data() {
    return {
      currentleft: true,
    };
  },
  computed: {
    customer() {
      const customers = this.$store.getters.customers.filter(
        (item) => item.accountType !== "admin"
      );
      return customers.filter(
        (customer) => customer.id == this.$route.params.index
      )[0];
    },
  },
  methods: {
    switchCurrentTrue() {
      this.currentleft = true;
    },
    switchCurrentFalse() {
      this.currentleft = false;
    },
  },
};
</script>

<style lang="scss">
.customerprofile {
  padding-left: 21rem;

  &__body {
    padding: 15rem 4.5rem 0 10rem;
    display: flex;
    justify-content: space-between;
  }

  &__section {
    background: linear-gradient(to bottom, rgba(248, 248, 248, 0.4), white);
    border-radius: 1.5rem;
    box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    padding: 3rem;
  }

  &__names {
    text-align: center;
    padding: 2rem 0 0 0;
    font-size: 1.9rem;
    font-weight: 400;

    & h3 {
      font-weight: 500;
    }

    & span {
      color: #838a96;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3.5rem;

    & button {
      background: #e5fffc;
      border: none;
      outline: none;
      cursor: pointer;
      color: $color-primary;
      font-weight: 600;
      height: 4rem;
      width: 16rem;
      border-radius: 0.5rem;
      font-size: 1.1rem;

      &.active {
        background: $color-primary;
        color: #fff;
      }
    }
  }

  &__left {
    flex-basis: 50rem;
  }

  &__leftitem {
    display: flex;
    flex-direction: column;
    line-height: 2.2rem;
    margin-bottom: 2.5rem;

    & span {
      display: inline-block;
      font-weight: 500;

      &:nth-child(1) {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #838a96;
      }

      &:nth-child(2) {
        font-size: 1.3rem;
        font-weight: 400;
      }

      &.colored {
        color: #6979f8;
      }
    }
  }

  &__avatar {
    height: 10rem;
    width: 10rem;
    margin: 0 auto;
  }

  &__right {
    flex-basis: 64rem;
    display: flex;
    flex-direction: column;
  }

  &__fuelcard {
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 34rem;
    border-radius: 1.5rem;
    box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    padding: 0 3rem;

    &--top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #838a96;
      font-weight: 500;
      font-size: 1.8rem;
      text-transform: uppercase;

      & span {
        &:nth-child(2) {
          & figure {
            height: 8rem;
            width: 8rem;
          }
        }
      }
    }

    &--name {
      font-size: 2.5rem;
      font-weight: 500;
      margin: 2rem 0;
    }

    &--validthrough {
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;

      & span {
        &:nth-child(1) {
          color: #838a96;
        }
      }
    }

    &--bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &--logo {
      & span {
        display: inline-block;
        border-radius: 100%;
        height: 4rem;
        width: 4rem;
        position: relative;

        &:nth-child(1) {
          background: #d50000;
          transform: translateX(2rem);
          z-index: 1;
        }

        &:nth-child(2) {
          background: #ff9800;
          z-index: 2;
          opacity: 0.6;
        }
      }
    }
  }
}
</style>