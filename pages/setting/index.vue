<template>
  <div class="settings">
    <div class="settings__body">
      <div class="settings__top">
        <h1>ADMIN DATA</h1>
        <div class="settings__formarea">
          <span>Update your account information and change password.</span>
          <form action="" class="settings__form">
            <div class="settings__inputarea">
              <input placeholder="Email Address" type="email" />
              <label for="">Email Address</label>
            </div>
            <div class="settings__inputarea">
              <span class="eye" @click="toggleInputType('currentpassword')">
                <img src="~/assets/settings/see.png" alt="" />
              </span>
              <input
                placeholder="Current Password"
                :type="viewCurrentPassword ? 'text' : 'password'"
              />
              <label for="">Current Password</label>
            </div>
            <div class="settings__inputarea">
              <span class="eye" @click="toggleInputType('newpassword')">
                <img src="~/assets/settings/see.png" alt="" />
              </span>
              <input
                placeholder="New Password"
                :type="viewNewPassword ? 'text' : 'password'"
              />
              <label for="">New Password</label>
            </div>
            <button>Save Changes</button>
          </form>
        </div>
      </div>
      <div class="settings__bottom">
        <h1>NOTIFICATIONS</h1>
        <div class="settings__settingsarea">
          <span>Control your platform notifications and automate workflow</span>
          <div class="settings__bottom--label">
            <div
              class="settings__switcharea"
              v-for="(item, index) in notifications"
              :key="index"
            >
              <span>{{ item }}</span>
              <span
                class="settings__switch"
                @click="click(item)"
                v-bind:class="{
                  notactive: !clicked.includes(item),
                }"
              >
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      viewNewPassword: false,
      viewCurrentPassword: false,
      clicked: [],
      notifications: [
        "Email Notifications",
        "Push Notifications",
        "Monthly Reports",
        "Electronic Receipts",
        "SMS Alerts",
      ],
    };
  },
  methods: {
    click(option) {
      const options = this.clicked;
      const index = options.indexOf(option);

      if (options.includes(option)) {
        if (index > -1) {
          options.splice(index, 1);
          this.clicked = options;
        }
      } else {
        options.push(option);
        this.clicked = options;
      }
    },
    toggleInputType(type) {
      if (type === "currentpassword") {
        this.viewCurrentPassword
          ? (this.viewCurrentPassword = false)
          : (this.viewCurrentPassword = true);
      } else {
        this.viewNewPassword
          ? (this.viewNewPassword = false)
          : (this.viewNewPassword = true);
      }
    },
  },
};
</script>

<style lang="scss">
.settings {
  @include pageStyle;

  &__body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &__top {
    @include sectionCard;
    padding: 3rem 5rem;
    margin-bottom: 4rem;

    & h1 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.6rem;

      color: $color-gray;
    }

    & span {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.2rem;
      display: inline-block;
      margin: 2rem 0 4.8rem 0;
    }
  }

  &__formarea {
    padding: 0 3rem;
  }

  &__settingsarea {
    padding: 0 3rem;
  }

  &__inputarea {
    margin-bottom: 6rem;
    position: relative;

    & span.eye {
      top: -0.6rem;
      right: 2rem;
      display: inline-block;
      position: absolute;
      width: 2rem;
      cursor: pointer;
    }
  }

  &__bottom {
    @include sectionCard;
    padding: 3rem 5rem;

    & h1 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.6rem;
      color: #838a96;
    }

    & span {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.2rem;
      display: inline-block;
      margin: 2rem 0 4.8rem 0;
    }

    &--label {
      display: flex;
      flex-wrap: wrap;
      width: 70rem;
      height: 20rem;
    }
  }

  &__switcharea {
    display: flex;
    width: 29rem;
    justify-content: space-between;
    padding-right: 4rem;
    margin-right: 3rem;
    height: 7rem;
  }

  &__switch {
    background: $primary-color-blue;
    border-radius: 3rem;
    height: 2.9rem;
    width: 5.4rem;
    cursor: pointer;
    position: relative;
    transition: $transition-primary;

    & span {
      border-radius: 100%;
      display: inline-block;
      height: 2.1rem;
      width: 2.1rem;
      background: #fff;
      position: absolute;
      top: 0;
      left: 3rem;
      transform: translateY(-1.55rem);
      z-index: 1;
      transition: $transition-primary;
    }

    &.notactive {
      background: #cfd6df;

      & span {
        left: 0.4rem;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 40rem;

    & input {
      background: #ffffff;
      border: 1px solid #f3f4f6;
      border-radius: 0.6rem;
      height: 4.8rem;
      padding: 2rem;
      width: 100%;

      &:placeholder-shown + label {
        transform: translateY(3.5rem) translateX(2.1rem);
        opacity: 0;
        visibility: hidden;
        font-size: 1.4rem;
      }

      &:active,
      &:focus {
        outline: none;
        border: 1px solid #f3f4f6;
        border-radius: 0.6rem;
      }
    }

    & label {
      display: inline-block;
      color: #2f3147;
      position: absolute;
      top: -2.1rem;
      left: 0;
      font-size: 1.2rem;
      transition: $transition-primary;

      transform: translateY(-1rem);
    }

    & button {
      @include btn;

      background: $color-primary;
      width: 100%;
      height: 5rem;
      background: #159183;
      border-radius: 0.6rem;
      color: #fff;
      border: none;

      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.7rem;
    }
  }
}
</style>