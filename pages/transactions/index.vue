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
              <div class="transactions__search--input">
                <div class="transactions__search--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.61154 0C4.30323 0 0 4.20819 0 9.39926C0 14.5903 4.30323 18.7985 9.61154 18.7985C11.8819 18.7985 13.9684 18.0287 15.613 16.7415L18.7371 19.7886L18.8202 19.8586C19.1102 20.0685 19.5214 20.0446 19.7839 19.7873C20.0726 19.5043 20.072 19.0459 19.7825 18.7636L16.6952 15.7523C18.2649 14.0794 19.2231 11.8487 19.2231 9.39926C19.2231 4.20819 14.9198 0 9.61154 0ZM9.61154 1.44774C14.1022 1.44774 17.7426 5.00776 17.7426 9.39926C17.7426 13.7908 14.1022 17.3508 9.61154 17.3508C5.12086 17.3508 1.48044 13.7908 1.48044 9.39926C1.48044 5.00776 5.12086 1.44774 9.61154 1.44774Z"
                      fill="#11142D"
                    />
                  </svg>
                </div>
                <input placeholder="Search ID Number" type="text" />
              </div>
              <div class="transactions__search--drop">
                <InputField
                  v-bind:inputValidator="inputValidator"
                  :placeholder="'Filter by Category'"
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

          <div class="transactions__bottomleftbody">
            <div class="transactions__bottomleftbody--top">
              <ProductCard background="#fff" borderRadius="2.5rem">
                <div class="transactions__bottomleftbody--chart">
                  <div class="transactions__bottomleftbody--chartbody"></div>
                </div>
              </ProductCard>
            </div>

            <div class="transactions__history">
              <div class="transactions__history--header">
                <h2>Transaction History</h2>
                <div class="transactions__search--drop">
                  <InputField
                    v-bind:inputValidator="inputValidator"
                    :placeholder="'Sort by Date'"
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

              <div class="transactions__history--content">
                <div class="transactions__card">
                  <div class="transactions__card--top">
                    <div class="transactions__card--topleft">
                      8 Nov 2020, 18:44
                    </div>
                    <div class="transactions__card--topright">SUCCESSFUL</div>
                  </div>
                  <div class="transactions__card--bottom">
                    <div class="transactions__card--bottomleft">
                      <span>Gas(LPG)</span>
                      <span>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
                    </div>
                    <div class="transactions__card--bottomright">N2,600</div>
                  </div>
                </div>
                <div class="transactions__card">
                  <div class="transactions__card--top">
                    <div class="transactions__card--topleft">
                      8 Nov 2020, 18:44
                    </div>
                    <div class="transactions__card--topright">SUCCESSFUL</div>
                  </div>
                  <div class="transactions__card--bottom">
                    <div class="transactions__card--bottomleft">
                      <span>Gas(LPG)</span>
                      <span>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
                    </div>
                    <div class="transactions__card--bottomright">N2,600</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="transactions__btn">
          <button>Load More</button>
        </div>
      </div>
      <div class="transactions__right">
        <div class="transactions__search--drop">
          <InputField
            v-bind:inputValidator="inputValidator"
            :placeholder="'Sort by Date'"
            v-bind:name="'Per'"
            v-bind:values="['Test', 'Test2', 'Test', 'Test2', 'Test', 'Test2']"
            v-bind:type="'dropdown'"
            v-bind:width="'100%'"
          />
        </div>
      </div>
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
  middleware: "auth",
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
    display: flex;
    justify-content: space-between;

    &::before {
      content: "";
      right: 44rem;
      position: fixed;
      top: 0;
      width: 1px;
      opacity: 0.1;
      background: #000000;
      height: 97%;
    }
  }

  &__left {
    flex-shrink: 0;
  }

  &__topleft {
    height: 30rem;
    width: 71.55rem;
    -webkit-box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
    -moz-box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
    box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
  }

  &__bottomleft {
    width: 71.55rem;
    border-radius: 2.5rem;
    margin-top: 5.7rem;

    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }
  }

  &__search {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 3rem;

    &--input {
      width: 56rem;
      height: 5rem;
      flex-shrink: 0;
      position: relative;

      & input {
        height: 100%;
        width: 100%;
        background: rgba(227, 230, 236, 0.3);
        color: #2f3147;
        border-radius: 1.2rem;
        border: none;
        outline: none;
        padding: 1rem 3rem;
        padding-left: 4.5rem;
        box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.1);

        &::placeholder {
          color: #808191;
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
    }

    &--icon {
      position: absolute;
      top: 0;
      left: 2rem;
      height: 100%;
      display: flex;
      align-items: center;

      & svg {
        height: 1.5rem;
      }
    }

    &--drop {
      width: 15rem;
      height: 5rem;
      flex-shrink: 0;

      & input {
        border: none;
        background: rgba(227, 230, 236, 0) !important;

        &:focus {
          outline: none;
          border: none;
        }

        &::placeholder {
          font-size: 1.1rem;
        }
      }
    }
  }

  &__bottomleftbody {
    margin: 3rem 0;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 2.5rem;
    background: linear-gradient(
      to bottom,
      rgba(248, 248, 248, 0.1),
      rgba(255, 255, 255, 1)
    );

    &--top {
      height: 30rem;
    }

    &--chart {
      height: 30rem;
      margin: 0 auto;
      border-radius: 2.5rem;
      box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
    }
  }

  &__btn {
    width: 71.55rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
      @include btnLoadMore;
    }
  }

  &__history {
    margin-top: 6rem;

    &--header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & h2 {
        font-weight: 600;
        font-size: 2rem;
        letter-spacing: 0.1px;
      }
    }

    &--content {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
      }
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    padding: 2rem 0 4rem 0;

    &--top {
      padding-bottom: 1.2rem;
      position: relative;
      display: flex;
      justify-content: space-between;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        opacity: 0.1;
        background: #000000;
        height: 1px;
      }
    }

    &--topleft {
      font-weight: 500;
      font-size: 1.2rem;
      opacity: 0.9;
    }

    &--topright {
      color: $color-primary;
      font-weight: 500;
      font-size: 1.3rem;
    }

    &--bottom {
      position: relative;
      display: flex;
      padding-top: 1rem;
      justify-content: space-between;
    }

    &--bottomleft {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      line-height: 2.5rem;

      & span {
        display: inline-block;

        &:nth-child(1) {
          font-weight: 500;
        }
      }
    }

    &--bottomright {
      color: $color-primary;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }

  &__right {
    position: relative;
    flex-shrink: 0;
    width: 37rem;
    min-height: 20rem;
    background: #fff;
    border-radius: 2.5rem;
    height: 80rem;
    padding: 3rem 2rem;

    & .transactions__search--drop {
      width: auto;
      background: rgba(227, 230, 236, .5);
    border-radius: 1.5rem;
    }
  }
}
</style>