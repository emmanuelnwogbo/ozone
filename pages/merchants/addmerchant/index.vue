<template>
  <div class="addmerchant">
    <div class="addmerchant__body">
      <form action="" class="addmerchant__form">
        <div class="addmerchant__h2">
          <h2>Merchant Registration</h2>
        </div>
        <div class="addmerchant__formbody">
          <div class="addmerchant__formarea">
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '72rem',
              }"
            >
              <label for="">Name/Business Name</label>
              <input type="text" v-model="businessName" />
            </div>
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '31rem',
              }"
            >
              <label for="">Number of Outlets</label>
              <input type="text" v-model="outlets" />
            </div>
          </div>
          <div class="addmerchant__formarea">
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '100%',
              }"
            >
              <label for="">Full Business Address</label>
              <input type="text" v-model="address" />
            </div>
          </div>
          <div class="addmerchant__formarea">
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '72rem',
              }"
            >
              <label for="">Is it a Registered Business</label>
              <input type="text" />
            </div>
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '31rem',
              }"
            >
              <label for="">RC Number</label>
              <input type="text" v-model="RCnumber" />
            </div>
          </div>
          <div class="addmerchant__formarea">
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '47%',
              }"
            >
              <label for="">Contact Name</label>
              <input type="text" />
            </div>
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '47%',
              }"
            >
              <label for="">Contact Email</label>
              <input type="text" v-model="email" />
            </div>
          </div>
          <div class="addmerchant__formarea">
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '47%',
              }"
            >
              <label for="">Business Email</label>
              <input type="text" v-model="businessEmail" />
            </div>
            <div
              class="addmerchant__inputarea"
              :style="{
                width: '47%',
              }"
            >
              <label for="">Phone Number</label>
              <input type="text" v-model="phoneNumber" />
            </div>
          </div>
          <div class="addmerchant__formarea addmerchant__buttonarea">
            <div class="addmerchant__button">
              <button>Cancel</button>
            </div>
            <div class="addmerchant__button">
              <button @click.prevent="createMerchant">
                {{ submitting ? "Adding Merchant" : "Save and Proceed" }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMerchant",
  data() {
    return {
      email: "",
      password: "dummytext",
      phoneNumber: "",
      fullName: "",
      address: "",
      RCnumber: "",
      businessName: "",
      businessEmail: "",
      outlets: "",

      submitting: false,
    };
  },
  middleware: "auth",
  methods: {
    createMerchant() {
      this.submitting = true;
      this.$store
        .dispatch("createMerchant", {
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          fullName: this.businessName,
          address: this.address,
          RCnumber: this.RCnumber,
          businessName: this.businessName,
          businessEmail: this.businessEmail,
          outlets: this.outlets,
        })
        .then((res) => {
          console.log(res);
          this.submitting = false;
          this.$router.push("/merchants");
        })
        .catch((err) => {
          console.log(err, "there is an err");
        });
    },
  },
};
</script>

<style lang="scss">
.addmerchant {
  padding-left: 21rem;
  min-height: 160vh;

  &__body {
    padding: 19rem 4.5rem 0 10rem;
  }

  &__form {
    background: linear-gradient(to bottom, rgba(248, 248, 248, 0.1), white);
    box-shadow: -3px 0 20px rgba(0, 0, 0, 0.01);
    -webkit-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.01);
    -moz-box-shadow: -3px 0 20px rgba(0, 0, 0, 0.01);
    padding: 3rem;
    border-radius: 1.5rem;
    min-height: 20rem;

    display: flex;
    flex-direction: column;
  }

  &__formbody {
    display: flex;
    flex-direction: column;
  }

  &__h2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7.5rem;

    h2 {
      width: 100%;
      font-size: 1.9rem;
      font-weight: 500;
    }
  }

  &__formarea {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;

    & input {
      height: 4.8rem;
      border: 1.4px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
      background: transparent;
      outline: none;
      font-size: 1.4rem;
      font-weight: 500;
      padding: 0 2rem;
      width: 100%;
    }
  }

  &__buttonarea {
    margin-top: 4rem;
  }

  &__inputarea {
    display: flex;
    flex-direction: column;

    & label {
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
      color: black;
    }
  }

  &__button {
    & button {
      font-weight: 600;
      background: #159183;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      cursor: pointer;
      border: none;
      font-size: 1.3rem;
      border-radius: 0.6rem;
      height: 4.5rem;
      width: 29rem;
    }

    &:nth-child(1) {
      & button {
        color: #000000;
        background: rgba(0, 0, 0, 0.1);
        width: 25rem;
      }
    }
  }
}
</style>