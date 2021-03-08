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
          <ProductCard background="#fff" borderRadius="2.5rem">
            <h2>Your Products</h2>
            <div class="products__productlist--products">
              <div
                class="products__productlist--product"
                v-for="(item, index) in products"
                :key="index"
              >
                <ProductCard
                  v-bind:background="
                    currentProduct === item.label ? '#159183' : '#fff'
                  "
                  borderRadius="1.5rem"
                >
                  <div
                    class="products__productlist--productcontent"
                    v-bind:class="{
                      active: currentProduct === item.label,
                    }"
                  >
                    <div class="products__productlist--figure">
                      <ProductCard
                        v-bind:background="item.figColor"
                        borderRadius="1.5rem"
                        v-bind:deactivate="
                          currentProduct === item.label ? true : false
                        "
                      >
                        <figure class="products__productlist--figure">
                          <img src="~/assets/products/tanker.png" alt="" />
                        </figure>
                      </ProductCard>
                    </div>
                    <div
                      class="products__productlist--right"
                      v-bind:class="{
                        active: currentProduct === item.label,
                      }"
                    >
                      <span>{{ item.label }}</span>
                      <span>{{ item.desc }}</span>
                      <span>{{ item.bottomLabel }}</span>
                    </div>
                  </div>
                </ProductCard>
              </div>
            </div>
            <button @click="open_page(addProduct)" class="products__productlist--btn">Add Product</button>
          </ProductCard>
        </div>
        <div class="products__ordersovertime products__section--card">
          <ProductCard v-bind:background="'#fff'" borderRadius="1.5rem">
          </ProductCard>
        </div>
      </div>

      <div class="products__section">
        <div class="products__averagesales">
          <ProductCard v-bind:background="'#fff'" borderRadius="1.5rem">
          </ProductCard>
        </div>
        <div class="products__salesreport">
          <ProductCard v-bind:background="'#fff'" borderRadius="1.5rem">
          </ProductCard>
        </div>
      </div>

      <div class="products__section">
        <div class="products__saleslocation">
          <ProductCard v-bind:background="'#fff'" borderRadius="1.5rem">
            <div class="products__saleslocation--body">
              <div class="products__saleslocation--left">
                <div class="products__saleslocation--title">
                  <h2>Sales Location</h2>
                  <span>2020 - 2021</span>
                </div>
                <div class="products__saleslocation--stats">
                  <div class="products__saleslocation--number">
                    <span>21.2k</span>
                    <span>Our customers</span>
                  </div>
                  <div class="products__saleslocation--percent">
                    <span></span>
                    <span>105.23 %</span>
                  </div>
                </div>
                <div class="products__saleslocation--locations">
                  <div
                    class="products__saleslocation--location"
                    v-for="(location, index) in saleslocation"
                    :key="index"
                  >
                    <div
                      v-bind:style="{
                        background: getRandomColor(),
                        position: 'absolute',
                        top: '0',
                        height: '100%',
                        width: '100%',
                        left: '0',
                        zIndex: 1,
                        opacity: '.1',
                      }"
                    ></div>
                    <div class="products__saleslocation--name">
                      <span>{{ index + 1 }}.</span>
                      <span>{{ location.name }}</span>
                    </div>
                    <div>
                      <span>{{ location.numbers }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/products/ProductCard";

export default {
  data() {
    return {
      currentProduct: "LPG",
      addProduct: "/products/addproduct"
    };
  },
  components: {
    ProductCard,
  },
  methods: {
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    open_page(page) {
      this.$router.push(page);
    },
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
          figColor: "#FFEBF6",
        },
        {
          icon:
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413",
          label: "LPG",
          desc: "9KG in Stock",
          bottomLabel: "N100/KG",
          figColor: "#CDF4FF",
        },
        {
          icon:
            "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413",
          label: "PMS",
          desc: "200,000L in Stock",
          bottomLabel: "N200/Litre",
          figColor: "#CDF4FF",
        },
      ];

      return products;
    },
    saleslocation() {
      const locations = [
        {
          flag: "Lagos",
          name: "Lagos",
          numbers: "12.8k",
        },
        {
          flag: "Lagos",
          name: "Edo",
          numbers: "5.3k",
        },
        {
          flag: "Lagos",
          name: "Portharcourt",
          numbers: "2.7k",
        },
        {
          flag: "Lagos",
          name: "Abuja",
          numbers: "1.0k",
        },
      ];

      return locations;
    },
  },
  middleware: "auth",
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

      padding: 4rem 5rem 0rem 5rem;
    }
  }

  &__productlist {
    width: 37rem;
    height: 58rem;

    &--products {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    &--product {
      display: flex;
      height: 9rem;
      width: 26rem;
      margin: 2rem 0;
      align-items: center;
      border-radius: 1.2rem;

      cursor: pointer;
    }

    &--productcontent {
      padding: 0;
      display: flex;
      align-items: center;
      height: 100%;
    }

    &--productcontent.active {
      padding: 1rem 1.5rem;
    }

    &--figure {
      height: 7rem;
      border-radius: 1.5rem;
      width: 7.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        height: 3rem;
        width: 4rem;
      }
    }

    &--right {
      display: flex;
      flex-direction: column;
      margin-left: 2.3rem;

      & span {
        font-weight: 500;
        margin-bottom: 0.8rem;

        &:nth-child(1) {
          color: #11142d;
          font-size: 1.5rem;
        }

        &:nth-child(2) {
          color: #808191;
          font-size: 1.16rem;
        }

        &:nth-child(3) {
          font-size: 1.1rem;
          background: $color-primary;
          color: #ebf2ff;
          text-align: center;
          border-radius: 0.9rem;
          padding: 0.5rem;
          display: inline-block;
          max-width: 7rem;
          margin-bottom: 0;
        }
      }

      &.active {
        & span {
          color: #ebf2ff;

          &:nth-child(3) {
            background: #ebf2ff;
            color: $color-primary;
          }
        }
      }
    }

    &--btn {
      @include btn;
      border: none;
      background: $color-blue;
      color: #fff;
      border-radius: 1.6rem;
      display: block;
      margin: 0 auto;
      height: 4.5rem;
      width: 27rem;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }

  &__ordersovertime {
    width: 77rem;
  }

  &__saleslocation {
    height: 45rem;
    width: 100%;
    position: relative;

    &--body {
      display: flex;
    }

    &--left {
      width: 30rem;
      padding: 4rem 5rem 0rem 5rem;

      & h2 {
        padding: 0;
      }
    }

    &--title {
      & span {
        color: #8f92a1;
        font-size: 1.2rem;
      }
    }

    &--stats {
      display: flex;
      justify-content: space-between;
      margin-top: 4rem;
      margin-bottom: 3rem;

      & span {
        color: #8f92a1;
        font-size: 1.2rem;
      }
    }

    &--number {
      display: flex;
      flex-direction: column;

      & span {
        &:nth-child(1) {
          color: #000000;
          font-weight: 600;
          font-size: 2rem;
        }
      }
    }

    &--percent {
      & span {
        color: $color-primary;
        font-size: 1.3rem;
        font-weight: 600;
      }
    }

    &--locations {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: -11rem;
        right: -4rem;
        height: 37.5rem;
        width: 0.4px;
        background: #8f92a1;
        opacity: 0.4;
      }
    }

    &--location {
      position: relative;
      display: flex;
      padding: 1.2rem 2rem;
      border-radius: 1.2rem;
      overflow: hidden;
      font-size: 1.3rem;
      font-weight: 600;
      margin: 1.8rem 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;

      & span {
        display: block;
        position: relative;
        z-index: 2;
      }
    }

    &--name {
      display: flex;

      & span {
        &:nth-child(1) {
          margin-right: 0.44rem;
        }
      }
    }
  }

  &__averagesales {
    flex-shrink: 0;
    height: 40rem;
    width: 74rem;
  }

  &__salesreport {
    flex-shrink: 0;
    height: 40rem;
    width: 40rem;
  }
}
</style>
