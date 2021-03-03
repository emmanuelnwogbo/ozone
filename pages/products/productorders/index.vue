<template>
  <div class="yourorders">
    <div class="yourorders__body">
      <div class="yourorders__ordercards">
        <div class="yourorders__ordercard">
          <div class="yourorders__ordercard--order">Orders Today</div>
          <div class="yourorders__ordercard--middle">
            <h2 class="yourorders__ordercard--h2">
              {{ orders.length }} Orders
            </h2>
            <div class="yourorders__ordercard--percent">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle
                    cx="11.0103"
                    cy="10.7265"
                    r="10.1695"
                    fill="#6979F8"
                  />
                  <path
                    d="M7.62109 12.4215L11.0109 9.03168L14.4007 12.4215"
                    stroke="white"
                    stroke-width="2.54237"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                :style="{
                  color: '#6979F8',
                }"
                >6%</span
              >
            </div>
          </div>
          <div class="yourorders__ordercard--date">02-Nov-2020</div>
        </div>
        <div class="yourorders__ordercard">
          <div class="yourorders__ordercard--order">Pending Orders</div>
          <div class="yourorders__ordercard--middle">
            <h2 class="yourorders__ordercard--h2">
              {{ orders.filter((item) => item.status === "pending").length }}
              Orders
            </h2>
            <div class="yourorders__ordercard--percent">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <circle cx="11.0105" cy="11.064" r="10.1695" fill="#FF647C" />
                  <path
                    d="M7.62112 12.759L11.011 9.36921L14.4008 12.759"
                    stroke="white"
                    stroke-width="2.54237"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                :style="{
                  color: '#FF647C',
                }"
                >6%</span
              >
            </div>
          </div>
          <div class="yourorders__ordercard--date">02-Nov-2020</div>
        </div>
        <div class="yourorders__ordercard">
          <div class="yourorders__ordercard--order">Cancelled Orders</div>
          <div class="yourorders__ordercard--middle">
            <h2 class="yourorders__ordercard--h2">
              {{ orders.filter((item) => item.status === "canceled").length }}
              Orders
            </h2>
            <div class="yourorders__ordercard--percent">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle
                    cx="11.0103"
                    cy="10.7265"
                    r="10.1695"
                    fill="#FFA26B"
                  />
                  <path
                    d="M7.62109 12.4215L11.0109 9.03168L14.4007 12.4215"
                    stroke="white"
                    stroke-width="2.54237"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                class="yourorders__ordercard--pendingpercent"
                :style="{
                  color: '#FFA26B',
                }"
                >6%</span
              >
            </div>
          </div>
          <div class="yourorders__ordercard--date">02-Nov-2020</div>
        </div>
      </div>

      <div class="yourorders__table">
        <div class="yourorders__table--body">
          <div class="yourorders__tabletop">
            <div class="yourorders__tabletop--section">
              <div
                class="yourorders__tabletop--area1 yourorders__tabletop--arealeft"
              >
                <input type="text" placeholder="Status: All" />
              </div>
              <div
                class="yourorders__tabletop--area2 yourorders__tabletop--arealeft"
              >
                <input type="text" placeholder="Search ID Number" />
              </div>
            </div>

            <div class="yourorders__tabletop--section">
              <div
                class="yourorders__tabletop--area3 yourorders__tabletop--arearight"
              >
                <input type="text" :placeholder="dateone" />
              </div>
              <div class="yourorders__tabletop--to">To</div>
              <div
                class="yourorders__tabletop--area4 yourorders__tabletop--arearight"
              >
                <input type="text" :placeholder="datetwo" />
              </div>
            </div>
          </div>

          <div class="yourorders__tabletop--labels">
            <span class="checkbox">
              <input type="checkbox" id="" name="" value="" />
            </span>
            <span>Order ID</span>
            <span>Date Created</span>
            <span>Customer</span>
            <span>Price</span>
            <span>Status</span>
            <span style="width: 10rem">Action</span>
          </div>

          <div
            class="yourorders__tablecard yourorders__tabletop--labels"
            v-for="(item, index) in orders"
            :key="index"
          >
            <span class="checkbox">
              <input type="checkbox" id="" name="" value="" />
            </span>
            <span>{{ item.transaction_id }}</span>
            <span>21-Oct-2020</span>
            <span>{{ item.sender_name }}</span>
            <span>23,000</span>
            <span>{{ item.status }}</span>
            <span>Action</span>
            <span class="menu">
              <span class="actions">Actions</span>
              <span class="accept option" @click="acceptOrder()">
                <span class="">Accept Order</span>
                <span></span>
              </span>
              <span
                class="decline option"
                @click="cancelOrder(item.id)"
                v-if="item.status !== 'canceled'"
              >
                <span class="">Decline Order</span>
                <span></span>
              </span>
              <span class="delete option">
                <span class="">Delete Order</span>
                <span></span>
              </span>
            </span>
          </div>

          <div class="yourorders__loadmore">
            <button>Load More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YourOrders",
  data() {
    return {
      dateone: "30-Oct-2020",
      datetwo: "30-Oct-2020",
    };
  },
  mounted() {
    this.$store.dispatch("getOrders");
  },
  methods: {
    acceptOrder(data) {
      this.$store.dispatch("acceptOrder", data);
    },
    cancelOrder(order_id) {
      console.log(order_id);
      this.$store
        .dispatch("cancelOrder", order_id)
        .then((res) => {
          this.$store.dispatch("getOrders");
        })
        .catch((err) => {
          console.log(err, "this is a err");
        });
    },
  },
  computed: {
    orders() {
      const orders = this.$store.getters.orders;
      return orders;
    },
  },
};
</script>

<style lang="scss" scoped>
.yourorders {
  padding-left: 21rem;

  &__body {
    padding: 19rem 4.5rem 0 10rem;
  }

  &__ordercards {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__ordercard {
    width: 37rem;
    height: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 3rem;
    flex-shrink: 0;

    @include typicalCard;

    &--middle {
      margin: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--h2 {
      font-size: 2.9rem;
    }

    &--order {
      font-weight: 600;
      font-size: 1.7rem;
      color: #838a96;
    }

    &--date {
      font-size: 1.3rem;
      color: #838a96;
      opacity: 0.8;
    }

    &--percent {
      display: flex;
      align-items: center;

      & span {
        display: inline-block;

        &:nth-child(2) {
          font-weight: 500;
          margin-left: 0.5rem;
          font-size: 1.5rem;

          &.merchants__ordercard--pendingpercent {
            color: #ffa26b;
          }
        }
      }
    }
  }

  &__table {
    background: linear-gradient(to bottom, rgba(248, 248, 248, 0.2), white);
    box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    border-radius: 1.5rem;
    margin-top: 3rem;
    min-height: 20rem;
  }

  &__tabletop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & input {
      border: none;
      outline: none;
      background: transparent;
      height: 4.5rem;
      width: 100%;
      padding: 1rem 3rem;

      &::placeholder {
        font-weight: 600;
        font-size: 1.3rem;
        color: rgba(47, 54, 64, 0.5);
      }
    }

    &--section {
      display: flex;
      justify-content: space-between;

      &:nth-child(1) {
        width: 57rem;
      }
    }

    &--arealeft {
      border: 1px solid rgba(47, 54, 64, 0.1);
      border-radius: 3rem;
    }

    &--arearight {
      background: rgba(0, 4, 10, 0.1);
      border-radius: 3rem;
    }

    &--to {
      display: flex;
      width: 5rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      opacity: 0.3;
      font-size: 1.7rem;
    }

    &--area1 {
      width: 15rem;
    }

    &--area2 {
      width: 40rem;
    }

    &--area3 {
      width: 15rem;
    }

    &--area4 {
      width: 15rem;
    }

    &--labels {
      display: flex;
      align-items: center;
      height: 6rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: rgba(0, 4, 10, 0.4);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-top: 2rem;

      & span {
        display: block;
        width: 20rem;

        &.checkbox {
          width: 4rem;
        }
      }
    }
  }

  &__tablecard {
    color: #000000;
    padding: 1rem 0 3rem 0;
    height: auto;
    font-size: 1.35rem;
    position: relative;

    & span {
      width: 20rem;

      &:nth-child(7) {
        box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        color: #6979f8;
        border-radius: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;
        cursor: pointer;

        &:hover {
          & + span.menu {
            display: block;
          }
        }
      }

      &.menu {
        position: absolute;
        right: 0;
        background: #fff;
        width: 23rem;
        bottom: -17rem;
        border-radius: 0.9rem;
        padding: 2rem;
        box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.1);
        display: none;
        z-index: 3;

        &:hover {
          display: block;
        }

        & span {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          &.actions {
            font-size: 1rem;
            border: none;
            opacity: 0.5;
            font-weight: 500;
          }

          &.option {
            border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
            padding: 2rem 0rem 1rem 0;
            cursor: pointer;
            position: relative;
            font-weight: 600 !important;
          }

          &.accept {
            color: $color-primary;
          }

          &.decline {
            color: #0049c6;
          }

          &.delete {
            color: #ff647c;
            border: none;
          }
        }
      }
    }
  }

  &__loadmore {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0 3rem 0;
    margin-top: 3rem;

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
}
</style>