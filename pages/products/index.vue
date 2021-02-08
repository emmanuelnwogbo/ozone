<template>
  <div class="products">
    <div class="products__body">
      <figure class="products__img">
        <img src="~/assets/products/bg-img.png" alt="" />
        <div class="products__promos">
          <div class="products__promos--pagination">
            <span></span>
            <span class="current"></span>
            <span></span>
            <span></span>
          </div>
          <h1 class="products__promos--header">Promotional Headers</h1>
          <p class="products__promos--sub">
            Enter Promotional Banner Description Here
          </p>
          <button class="products__promos--btn">Edit Banner</button>
        </div>
      </figure>

      <div class="products__section">
        <div class="products__productlist products__section--card">
          <h2>Your Products</h2>
          <div class="products__productlist--products">
            <div
              class="products__productlist--product"
              v-for="(item, index) in products"
              :key="index"
              v-bind:class="{
                active: currentProduct === item.label,
              }"
            >
              <div class="products__productlist--product-left">
                <figure>
                  <img src="~/assets/products/tanker.png" alt="" />
                </figure>
              </div>
              <div class="products__productlist--product-right">
                <span>{{ item.label }}</span>
                <span>{{ item.desc }}</span>
                <span>{{ item.bottomLabel }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="products__section--ordersovertime products__section--card">
          j
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentProduct: "LPG",
    };
  },
  computed: {
    products() {
      const products = [
        {
          icon:
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413",
          label: "AGO",
          desc: "200,000L in Stock",
          bottomLabel: "N200/Litre",
        },
        {
          icon:
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413",
          label: "LPG",
          desc: "9KG in Stock",
          bottomLabel: "N100/KG",
        },
        {
          icon:
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413",
          label: "PMS",
          desc: "200,000L in Stock",
          bottomLabel: "N200/Litre",
        },
      ];

      return products;
    },
  },
};
</script>

<style lang="scss">
.products {
  padding-left: 21rem;

  &__body {
    padding: 15rem 4.5rem 0 10rem;
  }

  &__img {
    position: relative;
    height: 32rem;
    overflow: hidden;
    border-radius: 3rem;

    &::before {
      content: "";
      @include absolutePos;
    }
  }

  &__promos {
    padding: 6rem 5rem 0 5rem;
    color: $color-white;
    @include absolutePos;

    &--pagination {
      position: absolute;
      top: 3rem;
      right: 5rem;
      display: flex;
      align-items: center;

      & span {
        transition: $transition-primary;
        display: inline-block;
        background: #fff;
        border-radius: 100%;
        height: 0.4rem;
        width: 0.4rem;
        cursor: pointer;
        margin: 0 0.7rem;

        &.current {
          border: 2px solid #0049c6;
          height: 0.9rem;
          width: 0.9rem;
        }
      }
    }

    &--header {
      font-weight: 600;
      font-size: 4rem;
      line-height: 6rem;
      letter-spacing: -1px;
    }

    &--sub {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    &--btn {
      width: 13rem;
      height: 4.5rem;
      background: #ffffff;
      border-radius: 1.3rem;
      margin-top: 2rem;
      border: none;
      font-weight: bold;

      @include btn;
    }
  }

  &__section {
    @include section;

    & h2 {
      @include sectionCardHeader;
    }

    &--card {
      @include sectionCard;
    }

    &--ordersovertime {
      width: 72rem;
    }
  }

  &__productlist {
    width: 42rem;
    height: 51rem;
    padding: 6rem;

    &--products {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &--product {
      display: flex;
      height: 8rem;
      width: 30rem;
      margin: 2rem 0;
      align-items: center;
      border-radius: 1.2rem;

      &.active {
        background: $color-primary;
      }

      &-left {
        flex-shrink: 0;
        margin-right: 2rem;

        & figure {
          width: 3rem;
          height: 3rem;
        }
      }

      &-right {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;

        & span {
          &:nth-child(1) {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
          }

          &:nth-child(2) {
            font-style: normal;
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.6rem;

            color: #808191;
          }

          &:nth-child(3) {
            font-weight: 600;
            font-size: 1.3rem;
            line-height: 1.8rem;
          }
        }
      }
    }
  }
}
</style>
