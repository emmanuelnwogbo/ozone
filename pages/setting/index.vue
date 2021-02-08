<template>
  <div class="settings">
    <div class="settings__body">
      <div class="settings__top">
        <h1>ADMIN DATA</h1>
        <span>Update your account information and change password.</span>
        <form action="" class="settings__form">
          <input placeholder="Email Address" type="text" />
          <input placeholder="Current Password" type="password" />
          <input placeholder="New Password" type="password" />
          <button>Save Changes</button>
        </form>
      </div>
      <div class="settings__bottom">
        <h1>NOTIFICATIONS</h1>
        <span>Control your platform notifications and automate workflow</span>
        <div class="settings__bottom--label">
          <div v-for="(item, index) in notifications" :key="index">
            <span>{{ item }}</span>
            <span class="settings__switch">
              <span></span>
            </span>
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
      notifications: [
        "Email Notifications",
        "Push Notifications",
        "Monthly Reports",
        "Electronic Receipts",
        "SMS Alerts",
      ],
    };
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

  &__switch {
    background: #0049c6;

    & span {
      border-radius: 100%;
      display: inline-block;
      height: 5rem;
      width: 5rem;
    }
  }
}
</style>