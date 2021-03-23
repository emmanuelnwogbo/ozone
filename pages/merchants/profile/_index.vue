<template>
  <div class="customerprofile">
    <div class="customerprofile__body">
      <div class="customerprofile__left customerprofile__section">
        <figure class="customerprofile__avatar">
          <img src="~/assets/customer/icon-avatar-default.png" alt="" />
        </figure>
        <div class="customerprofile__names">
          <h3>
            {{
              customer ? customer["user.name"] && customer["user.uuidz"] : ""
            }}
          </h3>
          <span>{{ customer ? customer["user.accountType"] : "" }} Member</span>
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
              <span>business email</span>
              <span>{{ customer.businessEmail }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>business name</span>
              <span>{{ customer.businessName }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>account created at</span>
              <span>{{ moment(customer.createdAt).format("MMM Do YY") }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>account updated at</span>
              <span>{{ moment(customer.updatedAt).format("MMM Do YY") }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>phone number</span>
              <span>{{ customer["user.phoneNumber"] }}</span>
            </div>

            <div class="customerprofile__leftitem">
              <span>status</span>
              <span>{{ customer.status }}</span>
            </div>
          </div>
          <div v-if="!currentleft && customer">
            <div class="customerprofile__leftitem">
              <span>residential address</span>
              <span>{{ customer["user.email"] }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>card balance</span>
              <span>{{ customer["user.wallet"] }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>Ozone ID</span>
              <span class="colored">{{ customer["user.uuidz"] }}</span>
            </div>
            <div class="customerprofile__leftitem">
              <span>cards</span>
              <span>{{ customer["user.cards"] }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="customerprofile__right customerprofile__section">
        <div class="customerprofile__fuelcard">
          <div
            class="customerprofile__fuelcard--graph"
            id="transovertime"
          ></div>
          <div class="customerprofile__fuelcard--btn">
            <button>View Orders</button>
          </div>
        </div>

        <div class="customerprofile__history" v-if="!editcard">
          <div class="customerprofile__history--header">
            <h2>Order History</h2>
            <div class="customerprofile__history--search">
              <span>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <g opacity="0.9">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.61423 7.02866C5.34158 7.30132 5.3206 7.73035 5.55131 8.02707L5.61423 8.09832L9.39605 11.8801C9.66871 12.1528 10.0977 12.1738 10.3945 11.9431L10.4657 11.8801L14.2475 8.09832C14.5429 7.80294 14.5429 7.32404 14.2475 7.02866C13.9749 6.75601 13.5458 6.73503 13.2491 6.96574L13.1779 7.02866L9.93088 10.2751L6.68389 7.02866C6.41124 6.75601 5.9822 6.73503 5.68549 6.96574L5.61423 7.02866Z"
                        fill="#000000"
                      ></path>
                    </g></svg
                ></span>
              </span>
              <input type="text" placeholder="Sort by Date" />
            </div>
          </div>

          <div class="customerprofile__transactions">
            <div class="customerprofile__transactioncard">
              <div class="customerprofile__transactioncard--heading">
                <span>gas(lpg)</span>
              </div>
              <div
                class="customerprofile__transactioncard--top customerprofile__transactioncard--area"
              >
                <span>
                  <p>1901 Thornridge Cir, Shiloh hAWAII 81062</p>
                </span>
                <span>
                  <p>N2,600</p>
                </span>
              </div>
              <div
                class="customerprofile__transactioncard--bottom customerprofile__transactioncard--area"
              >
                <span>
                  <p>8 Nov 2020, 15:37</p>
                </span>
                <span class="pending">
                  <p>pending</p>
                </span>
              </div>
            </div>
            <div class="customerprofile__transactioncard">
              <div class="customerprofile__transactioncard--heading">
                <span>gas(lpg)</span>
              </div>
              <div
                class="customerprofile__transactioncard--top customerprofile__transactioncard--area"
              >
                <span>
                  <p>1901 Thornridge Cir, Shiloh hAWAII 81062</p>
                </span>
                <span>
                  <p>N2,600</p>
                </span>
              </div>
              <div
                class="customerprofile__transactioncard--bottom customerprofile__transactioncard--area"
              >
                <span>
                  <p>8 Nov 2020, 15:37</p>
                </span>
                <span class="pending">
                  <p>pending</p>
                </span>
              </div>
            </div>
            <div class="customerprofile__transactioncard">
              <div class="customerprofile__transactioncard--heading">
                <span>gas(lpg)</span>
              </div>
              <div
                class="customerprofile__transactioncard--top customerprofile__transactioncard--area"
              >
                <span>
                  <p>1901 Thornridge Cir, Shiloh hAWAII 81062</p>
                </span>
                <span class="successful">
                  <p>N2,600</p>
                </span>
              </div>
              <div
                class="customerprofile__transactioncard--bottom customerprofile__transactioncard--area"
              >
                <span>
                  <p>8 Nov 2020, 15:37</p>
                </span>
                <span class="successful">
                  <p>succesful</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="customerprofile__editcardform" v-if="editcard">
          <div class="customerprofile__editcardform--inputs">
            <div
              class="customerprofile__editcardform--top customerprofile__editcardform--area"
            >
              <div class="customerprofile__editcardform--input">
                <label for="">Name on Card</label>
                <input
                  v-model="cardholdername"
                  type="text"
                  placeholder="Name on Card"
                />
              </div>
            </div>
            <div
              class="customerprofile__editcardform--bottom customerprofile__editcardform--area"
            >
              <div class="customerprofile__editcardform--input">
                <label for="">Card Validity</label>
                <input
                  v-model="validthrough"
                  class="validity"
                  type="text"
                  placeholder="Card validity"
                />
              </div>
              <div class="customerprofile__editcardform--input">
                <label for="">Card Number</label>
                <input class="limit" type="text" placeholder="Card Number" />
              </div>
            </div>
            <div
              class="customerprofile__editcardform--bottom customerprofile__editcardform--area"
            >
              <div class="customerprofile__editcardform--input">
                <label for="">CVV</label>
                <input class="validity" type="text" placeholder="CVV" />
              </div>
              <!--<div class="customerprofile__editcardform--input">
                <label for="">Set Card Limit</label>
                <input
                  v-model="cardlimit"
                  class="limit"
                  type="text"
                  placeholder="Card limit"
                />
              </div>-->
            </div>
          </div>
          <div class="customerprofile__editcardform--btns">
            <button @click="toggleditcard">Cancel</button>
            <button>Save O-ZONE Card</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CustomerProfile",
  data() {
    return {
      moment,
      currentleft: true,
      editcard: false,
      cardholdername: null,
      validthrough: null,
      cardlimit: null,
    };
  },
  mounted() {
    if (this.cardlimit === null) {
      this.$store.dispatch("getMerchants");
    }

    Morris.Line({
      // ID of the element in which to draw the chart.
      element: "transovertime",
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
        { day: "4am", ordersone: 50, orderstwo: 0 },
        { day: "5am", ordersone: 10, orderstwo: 5 },
        { day: "6am", ordersone: 5, orderstwo: 40 },
        { day: "7am", ordersone: 5, orderstwo: 5 },
        { day: "8am", ordersone: 30, orderstwo: 70 },
        { day: "9am", ordersone: 20, orderstwo: 65 },
        { day: "10am", ordersone: 40, orderstwo: 0 },
        { day: "11am", ordersone: 80, orderstwo: 5 },
        { day: "12pm", ordersone: 15, orderstwo: 20 },
        { day: "1pm", ordersone: 25, orderstwo: 20 },
        { day: "2pm", ordersone: 15, orderstwo: 0 },
        { day: "3pm", ordersone: 50, orderstwo: 50 },
      ],
      // The name of the data record attribute that contains x-values.
      xkey: "day",
      parseTime: false,
      // A list of names of data record attributes that contain y-values.
      ykeys: ["ordersone", "orderstwo"],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ["May 21", "May 22"],
      lineColors: ["#159183", "#d9e1ec"],
    });
  },
  watch: {
    customer(new_val, old_val) {
      this.cardholdername = new_val.name;
      this.validthrough = "11/22";
      this.cardlimit = "₦ 240,000";
    },
  },
  computed: {
    customer() {
      const customers = this.$store.getters.merchants.filter(
        (item) => item.accountType !== "admin"
      );
      return customers.filter(
        (customer) => customer.id == this.$route.params.index
      )[0];
    },
  },
  methods: {
    toggleditcard() {
      this.editcard ? (this.editcard = false) : (this.editcard = true);
    },
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
    height: 45rem;
    width: 58rem;
    border-radius: 1.5rem;
    box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.07);
    position: relative;
    padding: 0 1rem;
    margin-bottom: 3rem;

    &--graph {
      height: 25rem;
      width: 100%;
    }

    &--btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 3rem;
      width: 100%;

      & button {
        cursor: pointer;
        border: none;
        background: #0049c6;
        color: #fff;
        border-radius: 1rem;
        display: block;
        margin: 0 auto;
        height: 4.5rem;
        width: 21rem;
        font-size: 1.3rem;
        font-weight: 600;
        outline: none;
      }
    }

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
      font-size: 1.6rem;
      line-height: 2.9rem;

      & span {
        &:nth-child(1) {
          color: #838a96;
        }

        &:nth-child(2) {
          & input {
            outline: none;
            background: transparent;
            border: 0px solid transparent;
            font-size: 1.3rem;

            &:focus {
              border: 1.4px solid $color-primary;
              height: 5rem;
              border-radius: 0.3rem;
              padding: 0 2rem;
              width: 10rem;
              font-size: 1.5rem;
            }

            &.focused {
              border: 1.4px solid $color-primary;
              height: 5rem;
              border-radius: 0.3rem;
              padding: 0 2rem;
              width: 10rem;
              font-size: 1.5rem;
            }
          }
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

  &__editlockcard {
    display: flex;
    justify-content: space-between;
    padding: 5rem 9rem;
    font-size: 1.65rem;
    font-weight: 500;

    &--area {
      display: flex;
      align-items: center;

      &:nth-child(2) {
        cursor: pointer;
      }

      & label {
        display: inline-block;
        margin-left: 1.4rem;

        &.editcard {
          cursor: pointer;
        }
      }
    }

    &--switch {
      display: inline-block;
      width: 5.5rem;
      height: 2.8rem;
      border-radius: 3rem;
      background: #fff;
      background: #0049c6;
      cursor: pointer;
      position: relative;

      & span {
        display: inline-block;
        height: 2.8rem;
        width: 2.8rem;
        background: #fff;
        border-radius: 100%;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  &__history {
    &--header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 1.2rem;

      & h2 {
        font-size: 2.2rem;
      }
    }

    &--search {
      position: relative;

      & span {
        position: absolute;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
      }

      & input {
        border: none;
        padding: 1rem 2rem;
        background: transparent;
        width: 11rem;
        outline: none;

        &::placeholder {
          font-size: 1.2rem;
          color: #838a96;
        }
      }
    }
  }

  &__transactioncard {
    position: relative;
    padding-bottom: 2rem;
    padding-top: 1.3rem;
    font-size: 1.3rem;
    font-weight: 400;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      opacity: 0.1;
      background: #000000;
      height: 0.3px;
    }

    &:last-child {
      &::before {
        background: #fff;
      }
    }

    &--heading {
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    &--top {
      margin-top: 1rem;

      & span {
        &:nth-child(2) {
          text-transform: uppercase;
          color: $color-primary;
          font-weight: 500;
        }

        &.successful {
          color: #0049c6;
        }
      }
    }

    &--bottom {
      margin-top: 5rem;

      & span {
        &.pending {
          text-transform: uppercase;
          color: #838a96;
          font-weight: 500;
        }

        &.successful {
          text-transform: uppercase;
          color: $color-primary;
          font-weight: 500;
        }
      }
    }

    &--area {
      display: flex;
      justify-content: space-between;
    }
  }

  &__editcardform {
    margin-top: 2rem;

    &--area {
      margin-bottom: 4rem;

      & label {
        font-size: 1.3rem;
        display: inline-block;
        margin-bottom: 1rem;
      }
    }

    &--top {
    }

    &--bottom {
      display: flex;
      justify-content: space-between;
    }

    &--input {
      display: flex;
      flex-direction: column;

      & input {
        height: 4.8rem;
        border: 1.4px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        background: transparent;
        outline: none;
        font-size: 1.4rem;
        font-weight: 500;
        padding: 0 2rem;

        &.validity {
          width: 12rem;
        }

        &.limit {
          width: 42rem;
        }

        &::placeholder {
          font-size: 1.3rem;
          color: #838a96;
          font-weight: 400;
        }

        &:focus {
          border: 1.4px solid $color-primary;
        }
      }
    }

    &--btns {
      display: flex;
      justify-content: space-between;

      & button {
        outline: none;
        border: none;
        font-weight: 600;
        height: 4.5rem;
        padding: 0 3rem;
        border-radius: 0.5rem;
        cursor: pointer;

        &:nth-child(1) {
          background: rgba(223, 230, 233, 0.4);
          width: 14rem;
        }

        &:nth-child(2) {
          color: #fff;
          background: $color-primary;
        }
      }
    }
  }
}
</style>