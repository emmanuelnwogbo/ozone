<template>
  <div
    class="productcard"
    v-bind:style="{
      background,
      borderRadius,
    }"
  >
    <div class="productcard__under productcard__body">
      <div
        class="productcard__under--design"
        v-bind:class="{
          deactivate,
        }"
      ></div>
    </div>
    <div class="productcard__top productcard__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    background: String,
    borderRadius: String,
    deactivate: Boolean,
    top_color: String,
    under_color: String,
  },
};
</script>

<style lang="scss">
.productcard {
  height: 100%;
  width: 100%;
  position: relative;

  flex-shrink: 0;

  &__body {
    border-radius: 2.4rem;
    background: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__top {
    z-index: 2;
  }

  &__under {
    z-index: 1;
    opacity: 0.4;
    display: flex;
    justify-content: center;
    border-radius: inherit;

    &--design {
      background: inherit;
      transform: translateY(7px);
      width: 96%;
      height: 100%;
      border-radius: inherit;

      &.deactivate {
        background: transparent;
      }
    }
  }
}
</style>