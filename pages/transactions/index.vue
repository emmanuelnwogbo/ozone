<template>
  <div class="transactions">
    <div class="transactions__body">
      <div class="transactions__left">
        <div class="transactions__topleft">
          <ProductCard background="#fff" borderRadius="2.5rem"> </ProductCard>
        </div>
        <div class="transactions__bottomleft">
          <div class="transactions__bottomleft--header">
            <div class="transactions__search">
              <input placeholder="Search ID Number" type="text" />
            </div>
            <div class="transactions__">
              <InputField
                v-bind:inputValidator="inputValidator"
                v-bind:name="'Per'"
                v-bind:values="[
                  'Test',
                  'Test2',
                  'Test',
                  'Test2',
                  'Test',
                  'Test2',
                ]"
                v-bind:type="'dropdown'"
                v-bind:width="'100%'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="transactions__right"></div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/products/ProductCard";
import InputField from "@/components/InputField";

export default {
  name: "Transactions",
  components: {
    ProductCard,
    InputField,
  },
  methods: {
    inputValidator(value, name) {},
  },
};
</script>

<style lang="scss">
.transactions {
  padding-left: 21rem;

  &__body {
    padding: 15rem 4.5rem 0 10rem;
  }

  &__topleft {
    height: 30rem;
    width: 61rem;
    -webkit-box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
    -moz-box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
    box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
  }

  &__bottomleft {
    height: 80rem;
    width: 61rem;
    background: #fff;
    border-radius: 2.5rem;
    margin-top: 5.7rem;

    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 3rem;
      background: red;
    }
  }
}
</style>