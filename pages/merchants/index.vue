<template>
  <div class="merchants">
    <div class="merchants__body">
      <div class="merchants__ordercards">
        <div class="merchants__ordercard">
          <div class="merchants__ordercard--order">Orders Today</div>
          <div class="merchants__ordercard--middle">
            <h2 class="merchants__ordercard--h2">469 Orders</h2>
            <div class="merchants__ordercard--percent">
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
              <span>6%</span>
            </div>
          </div>
          <div class="merchants__ordercard--date">02-Nov-2020</div>
        </div>
        <div class="merchants__ordercard">
          <div class="merchants__ordercard--order">Fulfilled Orders</div>
          <div class="merchants__ordercard--middle">
            <h2 class="merchants__ordercard--h2">46 Orders</h2>
            <div class="merchants__ordercard--percent">
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
              <span>6%</span>
            </div>
          </div>
          <div class="merchants__ordercard--date">02-Nov-2020</div>
        </div>
        <div class="merchants__ordercard">
          <div class="merchants__ordercard--order">Pending Today</div>
          <div class="merchants__ordercard--middle">
            <h2 class="merchants__ordercard--h2">469 Orders</h2>
            <div class="merchants__ordercard--percent">
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
              <span class="merchants__ordercard--pendingpercent">6%</span>
            </div>
          </div>
          <div class="merchants__ordercard--date">02-Nov-2020</div>
        </div>
      </div>

      <div class="merchants__table">
        <div class="merchants__head">
          <div class="merchants__head--h2">
            <h2>Merchant Database</h2>
          </div>
          <div class="merchants__head--search">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684 20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231 6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908 16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z"
                  fill="#11142D"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for merchant, account type and location"
            />
          </div>
          <div class="merchants__head--dropdown">
            <input type="text" placeholder="Filter by category" />
            <span>
              <svg
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
                    d="M5.61411 7.02878C5.34145 7.30144 5.32048 7.73047 5.55119 8.02719L5.61411 8.09844L9.39593 11.8803C9.66859 12.1529 10.0976 12.1739 10.3943 11.9432L10.4656 11.8803L14.2474 8.09844C14.5428 7.80307 14.5428 7.32416 14.2474 7.02878C13.9748 6.75613 13.5457 6.73515 13.249 6.96586L13.1777 7.02878L9.93076 10.2752L6.68377 7.02878C6.41111 6.75613 5.98208 6.73515 5.68537 6.96586L5.61411 7.02878Z"
                    fill="#7E84A3"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div class="merchants__head--addmerchant" @click="addMerchant">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.16667 0.5V7.16667H0.5V8.83333H7.16667V15.5H8.83333V8.83333H15.5V7.16667H8.83333V0.5H7.16667Z"
                  fill="#159183"
                />
              </svg>
            </span>
            <span>Add Merchant</span>
          </div>
        </div>
        <div class="merchants__tabletop">
          <span class="checkbox">
            <input type="checkbox" id="" name="" value="" />
          </span>
          <span>Merchant</span>
          <span>Total Orders</span>
          <span>Pending Orders</span>
          <span>Phone Number</span>
          <span>Email</span>
          <span>Action</span>
        </div>
        <div class="merchants__table--body">
          <div
            class="merchants__card"
            v-for="(item, index) in merchants"
            :key="index"
          >
            <span class="checkbox">
              <input type="checkbox" id="" name="" value="" />
            </span>
            <span>{{ item.businessName }}</span>
            <span>2324</span>
            <span>12</span>
            <span>{{ item["user.phoneNumber"] }}</span>
            <span>{{ item.businessEmail }}</span>
            <span>Manage</span>
            <span class="menu">
              <span class="actions">Actions</span>
              <span class="accept option">
                <span class="">View Merchant</span>
                <span></span>
              </span>
              <span class="decline option">
                <span class="">Delete Merchant</span>
                <span></span>
              </span>
            </span>
          </div>
        </div>
        <div class="merchants__loadmore">
          <button>Load More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Merchants",
  mounted() {
    this.$store.dispatch("getMerchants");
  },
  computed: {
    merchants() {
      const merchants = this.$store.getters.merchants.filter(
        (item) => item.accountType !== "admin"
      );
      return merchants;
    },
  },
  methods: {
    addMerchant() {
      this.$router.push("/merchants/addmerchant");
    },
  },
};
</script>

<style lang="scss">
.merchants {
  padding-left: 21rem;
  min-height: 160vh;

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
          color: #6979f8;

          &.merchants__ordercard--pendingpercent {
            color: #ffa26b;
          }
        }
      }
    }
  }

  &__table {
    padding: 3rem;
    min-height: 30rem;
    border-radius: 1.8rem;
    margin-top: 3rem;
    background: linear-gradient(to bottom, rgba(248, 248, 248, 0.1), white);
  }

  &__tabletop {
    display: flex;
    font-weight: 500;
    font-size: 1.35rem;
    padding: 1rem 0 1rem 0;
    position: relative;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.4);

    & span {
      display: inline-block;
      width: 20rem;

      &.checkbox {
        width: 4rem;
      }

      &:nth-child(7) {
        height: 3rem;
        width: 10rem;
      }
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    & span {
      display: inline-block;
    }

    &--h2 {
      & h2 {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }

    &--search {
      border-radius: 1.4rem;
      background: rgba(0, 0, 0, 0.03);
      width: 46rem;
      position: relative;

      & span {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 2rem;
      }

      & input {
        padding: 0 2rem 0rem 5.4rem;
        border: none;
        outline: none;
        height: 4.5rem;
        background: transparent;
        width: 100%;

        &::placeholder {
          font-weight: 500;
        }
      }
    }

    &--dropdown {
      border-radius: 1.4rem;
      width: 17rem;
      position: relative;

      & span {
        position: absolute;
        right: 2rem;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 2rem;
      }

      & input {
        border: none;
        outline: none;
        height: 4.5rem;
        background: transparent;
        width: 100%;
        padding: 0 2rem;
      }
    }

    &--addmerchant {
      color: $color-primary;
      font-weight: 500;
      font-size: 1.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 11rem;
      cursor: pointer;

      & span {
        &:nth-child(1) {
          transform: translateY(0.2rem);
        }
      }
    }
  }

  &__card {
    display: flex;
    font-weight: 500;
    font-size: 1.35rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0 2.5rem 0;
    position: relative;
    align-items: center;

    & span {
      display: inline-block;
      width: 20rem;

      &.checkbox {
        width: 4rem;
      }

      &:nth-child(7) {
        color: #fff;
        border-radius: 0.5rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;
        cursor: pointer;
        background: #0049c6;

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
        width: 25rem;
        bottom: -13rem;
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