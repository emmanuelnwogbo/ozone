<template>
  <div class="inputfield">
    <input
      v-if="type === 'text'"
      class="inputfield__input"
      v-model="value"
      v-bind:style="{
        width,
      }"
      :placeholder="placeholder"
      type="text"
    />
    <input
      v-if="type === 'dropdown'"
      :value="value"
      @click.stop="opendropdown"
      class="inputfield__input inputfield__input--dropdown"
      v-bind:style="{
        width,
      }"
      :placeholder="placeholder"
      type="text"
    />
    <div class="inputfield__dropicon" v-if="type === 'dropdown'">
      <span v-if="!block">
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
              d="M5.61423 7.02866C5.34158 7.30132 5.3206 7.73035 5.55131 8.02707L5.61423 8.09832L9.39605 11.8801C9.66871 12.1528 10.0977 12.1738 10.3945 11.9431L10.4657 11.8801L14.2475 8.09832C14.5429 7.80294 14.5429 7.32404 14.2475 7.02866C13.9749 6.75601 13.5458 6.73503 13.2491 6.96574L13.1779 7.02866L9.93088 10.2751L6.68389 7.02866C6.41124 6.75601 5.9822 6.73503 5.68549 6.96574L5.61423 7.02866Z"
              fill="#000000"
            />
          </g>
        </svg>
      </span>
      <span v-if="block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :width="dropIconSize"
          :height="dropIconSize"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M4 9L12 17L20 9H4Z" fill="#2F3147" />
        </svg>
      </span>
    </div>
    <div
      v-if="dropOpen"
      class="inputfield__dropdowns"
    >
      <div
        class="inputfield__drop"
        v-for="(item, index) in values"
        :key="index"
        @click="selectValue(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      dropOpen: false,
    };
  },
  watch: {
    value: function (new_val, old_val) {
      this.inputValidator(new_val, this.name);
    },
  },
  props: {
    type: String,
    width: String,
    placeholder: String,
    values: Array,
    inputValidator: Function,
    name: String,
    dropIconColor: String,
    block: Boolean,
    dropIconSize: String,
  },
  methods: {
    selectValue(val) {
      this.value = val;
      this.dropOpen = false;
    },
    opendropdown() {
      this.dropOpen ? (this.dropOpen = false) : (this.dropOpen = true);
    },
  },
};
</script>

<style lang="scss">
.inputfield {
  position: relative;
  height: 100%;

  &__input {
    background: #ffffff;
    border: 1px solid #f3f4f6;
    box-sizing: border-box;
    border-radius: 0.6rem;
    height: 100%;
    padding: 1.5rem 2rem;

    &:focus {
      outline: none;
      border: 1px solid $color-primary;
    }

    &::-webkit-input-placeholder {
      color: $color-gray;
    }
  }

  &__dropdowns {
    position: absolute;
    width: 100%;
    left: 0;
    border: 1px solid #f3f4f6;
    background: #fff;
    z-index: 3;
    overflow: scroll;
    overflow-x: hidden;
    height: 20rem;
    bottom: -20.1rem !important;
  }

  &__dropicon {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 2rem; */
    padding-right: 2rem;
  }

  &__drop {
    position: relative;
    font-weight: 500;
    font-size: 1.4rem;
    color: #2f3147;
    background: #ffffff;
    border-bottom: 1px solid #f3f4f6;
    letter-spacing: 1.2px;
    padding: 0.5rem 2rem;
    z-index: 3;
    cursor: pointer;
    height: 4.2rem;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;

    &:hover {
      background: rgba(178, 190, 195, 0.1);
    }
  }
}
</style>