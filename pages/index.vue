<template>
  <div class="auth">
    <div class="auth__left auth__side">
      <h2>Login as Admin</h2>
    </div>
    <div class="auth__right auth__side">
      <div class="auth__right auth__form">
        <h2>Admin Login</h2>
        <div class="auth__input">
          <label for="">Email</label>
          <span class="error" v-if="emailError">{{ emailError }}</span>
           <span
            class="error"
            v-if="error && error === 'wrong credentials, please try again'"
            >{{ error }}</span
          ></span>
          <input
            v-model="email"
            type="email"
            placeholder="Enter Your email"
            name=""
          />
        </div>
        <div class="auth__input">
          <div>
            <label for="">Password</label>
          </div>
          <span class="error" v-if="passwordError">{{ passwordError }}</span>
          <span
            class="error"
            v-if="error && error === 'wrong credentials, please try again'"
            >{{ error }}</span
          >
          <input
            v-model="password"
            type="password"
            placeholder="Enter a strong password"
            name=""
          />
        </div>
        <div class="auth__submit">
          <button @click.prevent="login">
            {{ loading ? "PLEASE WAIT..." : "LOGIN" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validator from "validator";

export default {
  data() {
    return {
      email: "",
      password: "",
      accountType: "admin",
      emailError: false,
      passwordError: false,
      loading: false,
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
      const { isEmail } = validator;
      if (!isEmail(this.email)) {
        return (this.emailError = "Please use a valid Email");
      }

      if (!this.password.length) {
        return (this.passwordError = "Password field is empty");
      }

      this.loading = true;
      this.$store.dispatch("authSignIn", {
        email: this.email,
        password: this.password,
      });
    },
  },
  watch: {
    adminToken(newValue) {
      this.loading = false;
      this.$router.push("/overview");
    },
    email(newValue) {
      const { isEmail } = validator;
      isEmail(newValue) ? (this.emailError = false) : "";
      this.passwordError = false;
      this.$store.commit("error", false);
    },
    password(newValue) {
      this.passwordError = false;
      this.$store.commit("error", false);
    },
    error(newValue) {
      this.loading = false;
    },
  },
  computed: {
    adminToken() {
      const token = this.$store.getters.adminToken;
      return token;
    },
    error() {
      const error = this.$store.getters.error;
      return error;
    },
  },
};
</script>

<style lang="scss">
.auth {
  background: #e5e5e5;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;

  &__side {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  &__left {
    background: $color-primary;
    flex-basis: 62%;
    -webkit-clip-path: polygon(0 0, 84% 0, 63% 100%, 0% 100%);
    clip-path: polygon(0 0, 84% 0, 63% 100%, 0% 100%);
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 3rem 29rem 0rem 0rem;
    font-size: 1.5rem;

    & h2 {
      font-weight: 400;
      font-size: 2.5rem;
    }

    & button {
      font-weight: 400;
      background: #fff;
      color: #159183;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 0;
      cursor: pointer;
      border: none;
      font-size: 1.6rem;
      height: 5.5rem;
      width: 20rem;
      margin-top: 2rem;
    }
  }

  &__right {
    flex-basis: 50%;

    & h2 {
      font-weight: 400;
      font-size: 2rem;
      margin-bottom: 5rem;
    }
  }

  &__form {
    transform: translateX(-5rem);
  }

  &__input {
    display: flex;
    flex-direction: column;
    width: 47rem;
    margin-bottom: 3rem;

    & span {
      display: inline-block;

      &.error {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: red;
      }
    }

    & label {
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
      color: #000;
      display: block;

      &:nth-child(2) {
        color: red;
      }
    }

    & input {
      width: 100%;
      height: 4.8rem;
      border: 1.4px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
      background: transparent;
      outline: none;
      font-size: 1.4rem;
      font-weight: 500;
      padding: 0 2rem;

      &::placeholder {
        font-weight: 500;
        font-size: 1.3rem;
      }
    }
  }

  &__submit {
    & button {
      font-weight: 400;
      background: #159183;
      color: #fff;
      outline: none;
      cursor: pointer;
      border: none;
      font-size: 1.5rem;
      height: 5.5rem;
      width: 100%;
    }
  }
}
</style>