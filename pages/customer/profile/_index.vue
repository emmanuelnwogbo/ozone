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
              <span>
                <input
                  v-bind:class="{
                    focused: editcard,
                  }"
                  type="text"
                  v-model="validthrough"
                />
              </span>
            </div>
            <div class="customerprofile__fuelcard--logo">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div class="customerprofile__editlockcard" v-if="!editcard">
          <div class="customerprofile__editlockcard--area">
            <span class="customerprofile__editlockcard--switch">
              <span></span>
            </span>
            <label>Lock Card</label>
          </div>
          <div
            class="customerprofile__editlockcard--area"
            @click="toggleditcard"
          >
            <span class="customerprofile__lockcard--chip">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <circle cx="19" cy="19" r="19" fill="#159183" />
                  <g clip-path="url(#clip0)">
                    <path
                      d="M26.9223 12.7512H11.9175C10.768 12.7512 9.8335 13.6858 9.8335 14.8352V24.0048C9.8335 25.1543 10.768 26.0888 11.9175 26.0888H26.9223C28.0718 26.0888 29.0063 25.1543 29.0063 24.0048V14.8352C29.0063 13.6858 28.0718 12.7512 26.9223 12.7512ZM12.3343 16.5024C12.3343 16.2729 12.5215 16.0856 12.7511 16.0856H14.4183C14.6479 16.0856 14.8351 16.2729 14.8351 16.5024V17.7528C14.8351 17.9824 14.6479 18.1696 14.4183 18.1696H12.7511C12.5215 18.1696 12.3343 17.9824 12.3343 17.7528V16.5024ZM12.7511 20.6704H14.8351C15.0647 20.6704 15.2519 20.856 15.2519 21.0872C15.2519 21.3184 15.0647 21.504 14.8351 21.504H12.7511C12.5215 21.504 12.3343 21.3184 12.3343 21.0872C12.3343 20.856 12.5215 20.6704 12.7511 20.6704ZM18.1695 23.588H12.7511C12.5215 23.588 12.3343 23.4024 12.3343 23.1712C12.3343 22.94 12.5215 22.7544 12.7511 22.7544H18.1695C18.3991 22.7544 18.5863 22.94 18.5863 23.1712C18.5863 23.4024 18.3991 23.588 18.1695 23.588ZM18.5863 21.504H16.5023C16.2727 21.504 16.0855 21.3184 16.0855 21.0872C16.0855 20.856 16.2727 20.6704 16.5023 20.6704H18.5863C18.8159 20.6704 19.0031 20.856 19.0031 21.0872C19.0031 21.3184 18.8159 21.504 18.5863 21.504ZM22.3375 21.504H20.2535C20.0223 21.504 19.8367 21.3184 19.8367 21.0872C19.8367 20.856 20.0223 20.6704 20.2535 20.6704H22.3375C22.5687 20.6704 22.7543 20.856 22.7543 21.0872C22.7543 21.3184 22.5687 21.504 22.3375 21.504ZM26.0887 21.504H24.0047C23.7735 21.504 23.5879 21.3184 23.5879 21.0872C23.5879 20.856 23.7735 20.6704 24.0047 20.6704H26.0887C26.3199 20.6704 26.5055 20.856 26.5055 21.0872C26.5055 21.3184 26.3199 21.504 26.0887 21.504ZM26.0887 17.336H20.6703C20.4391 17.336 20.2535 17.1488 20.2535 16.9192C20.2535 16.6897 20.4391 16.5024 20.6703 16.5024H26.0887C26.3199 16.5024 26.5055 16.6897 26.5055 16.9192C26.5055 17.1488 26.3199 17.336 26.0887 17.336Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="20.84"
                        height="20.84"
                        fill="white"
                        transform="translate(9 9)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </span>
            <label class="editcard">Edit Card</label>
          </div>
        </div>

        <div class="customerprofile__history" v-if="!editcard">
          <div class="customerprofile__history--header">
            <h2>Transaction History</h2>
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
                <label for="">Cardholder name</label>
                <input
                  v-model="cardholdername"
                  type="text"
                  placeholder="Cardholder name"
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
                <label for="">Set Card Limit</label>
                <input
                  v-model="cardlimit"
                  class="limit"
                  type="text"
                  placeholder="Card limit"
                />
              </div>
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
export default {
  name: "CustomerProfile",
  data() {
    return {
      currentleft: true,
      editcard: false,
      cardholdername: null,
      validthrough: null,
      cardlimit: null,
    };
  },
  mounted() {
    if (this.cardlimit === null) {
      this.$store.dispatch("getCustomers");
    }
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
      const customers = this.$store.getters.customers.filter(
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