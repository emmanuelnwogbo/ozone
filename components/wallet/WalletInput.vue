<template>
  <div
    class="walletinput"
    v-bind:style="{
      width,
    }"
  >
    <div class="walletinput__label">
      <label for="">{{ label }}</label>
    </div>
    <div class="walletinput__input">
      <input type="text" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletInput",
  props: {
    label: String,
    placeholder: String,
    width: String,
  },
};
</script>

<style lang="scss">
.walletinput {
  &__label {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
    color: rgba(0, 0, 0, 1);
  }

  &__input {
    width: 100%;

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
        color: rgba(0, 0, 0, 0.4);
        font-weight: 400;
        font-size: 1.3rem;
      }

      &:valid {
      }
    }
  }
}
</style>