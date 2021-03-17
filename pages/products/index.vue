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
            <button
              @click="open_page(addProduct)"
              class="products__productlist--btn"
            >
              Add Product
            </button>
          </ProductCard>
        </div>
        <div class="products__ordersovertime products__section--card">
          <ProductCard v-bind:background="'#fff'" borderRadius="1.5rem">
            <div class="products__sec--body">
              <div class="products__sec--top">
                <div class="products__sec--topleft">
                  <h3>Orders Over Time</h3>
                </div>
                <div class="products__sec--topright">
                  <span>
                    <input type="text" v-model="ordersOverTime" />
                  </span>
                  <span>
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
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div class="products__ordersovertime--top">
                <div
                  class="products__ordersovertime--topleft products__ordersovertime--toparea"
                >
                  <div
                    class="products__ordersovertime--topleftarea products__ordersovertime--toparea"
                  >
                    <span>645</span>
                    <span>Orders on May 22</span>
                  </div>
                  <div
                    class="products__ordersovertime--topleftarea products__ordersovertime--toparea"
                  >
                    <span>472</span>
                    <span>Orders on May 21</span>
                  </div>
                </div>
                <div
                  class="products__ordersovertime--topright products__ordersovertime--toparea"
                >
                  <div class="products__ordersovertime--toprightarea">
                    <span class="left"></span>
                    <span>May 21</span>
                  </div>
                  <div class="products__ordersovertime--toprightarea">
                    <span class="right"></span>
                    <span>May 22</span>
                  </div>
                </div>
              </div>

              <div class="products__ordersovertime--linegraph">
                <div
                  class="products__ordersovertime--linegraphbody"
                  id="pushups"
                ></div>
              </div>

              <div class="products__ordersovertime--bottom">
                <h3>Your earning this month</h3>
                <p>N0</p>
                <button>View Orders</button>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>

      <div class="products__section">
        <div class="products__averagesales">
          <ProductCard v-bind:background="'#fff'" borderRadius="1.5rem">
            <div class="products__averagesales--body products__sec--body">
              <div class="products__averagesales--top products__sec--top">
                <div
                  class="products__averagesales--topleft products__sec--topleft"
                >
                  <h3>Average Total Sales</h3>
                  <span>2020-2021</span>
                </div>
                <div
                  class="products__averagesales--topright products__sec--topright"
                >
                  <span>
                    <input type="text" v-model="averageSalesValue" />
                  </span>
                  <span>
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
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div class="products__averagesales--graphs">
                <div class="products__averagesales--graph">
                  <div class="products__averagesales--graphbody">
                    <div class="products__averagesales--figure"><p>50%</p></div>
                    <div
                      id="one-value"
                      class="products__averagesales--graphcircle"
                    ></div>
                  </div>
                  <div class="products__averagesales--graphdesc">
                    <span><p>120,000KG</p></span
                    ><span>
                      <p>LPG</p>
                    </span>
                  </div>
                </div>

                <div class="products__averagesales--graph">
                  <div class="products__averagesales--graphbody">
                    <div class="products__averagesales--figure"><p>80%</p></div>
                    <div
                      id="two-value"
                      class="products__averagesales--graphcircle"
                    ></div>
                  </div>
                  <div class="products__averagesales--graphdesc">
                    <span><p>120,000KG</p></span
                    ><span>
                      <p>AGO</p>
                    </span>
                  </div>
                </div>

                <div class="products__averagesales--graph">
                  <div class="products__averagesales--graphbody">
                    <div class="products__averagesales--figure"><p>70%</p></div>
                    <div
                      id="three-value"
                      class="products__averagesales--graphcircle"
                    ></div>
                  </div>
                  <div class="products__averagesales--graphdesc">
                    <span><p>120,000KG</p></span
                    ><span>
                      <p>PMS</p>
                    </span>
                  </div>
                </div>
              </div>

              <div class="products__averagesales--description">
                <div>
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115ZM11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
                        fill="#0052CC"
                      /></svg
                  ></span>
                </div>
                <div class="products__averagesales--desctext">
                  <p>
                    Net sales found on the income statement are used to
                    calculate this ration returns and refunds must be backed out
                    of total sales measure the truly measusre the firm's assets
                    abilty to generate assets
                  </p>
                </div>
              </div>
            </div>
          </ProductCard>
        </div>
        <div class="products__salesreport">
          <ProductCard v-bind:background="'#fff'" borderRadius="1.5rem">
            <div class="products__sec--body">
              <div class="products__sec--top">
                <div class="products__sec--topleft">
                  <h3>Sales Reporrt</h3>
                  <span>2020-2021</span>
                </div>
                <div
                  class="products__salesreport--topright products__sec--topright"
                >
                  <span>
                    <input type="text" v-model="salesReport" />
                  </span>
                  <span>
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
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div class="products__salesreport--graph">
                <BarGraph
                  :colors="['#159183', '#0049C6', '#144A91']"
                  :numberOfBarsPerArea="[
                    ['20%', '70%', '60%'],
                    ['80%', '50%', '20%'],
                  ]"
                  :YScale="['100k', '60k', '40k', '20k', '0']"
                  :XScale="['October', 'September']"
                  :barBodyWidth="'11rem'"
                  :barWidth="'3rem'"
                />
              </div>

              <div class="products__salesreport--graphlabels">
                <div class="products__salesreport--graphlabel">
                  <span class="blocks one"></span>
                  <span class="label">ago</span>
                </div>
                <div class="products__salesreport--graphlabel">
                  <span class="blocks two"></span>
                  <span class="label">lpg</span>
                </div>
                <div class="products__salesreport--graphlabel">
                  <span class="blocks three"></span>
                  <span class="label">pms</span>
                </div>
              </div>
            </div>
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
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="18"
                        viewBox="0 0 12 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.6569 5.96207L10.2394 7.373L6.9845 4.10273L6.9708 17.7078L4.9708 17.7058L4.9844 4.13793L1.75416 7.3531L0.343262 5.93559L6.0133 0.291992L11.6569 5.96207Z"
                          fill="#00875A"
                        />
                      </svg>
                    </span>
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

import CircleChart from "circle-chart";
import BarGraph from "@/components/BarGraph";

export default {
  data() {
    return {
      currentProduct: "LPG",
      addProduct: "/products/addproduct",
      averageSalesValue: "Last 12 Hours",
      ordersOverTime: "Last 12 Hours",
      salesReport: "Filter by Volume",
      values: [10, 9],
      names: ["Apple", "Google"],
    };
  },
  components: {
    ProductCard,
    CircleChart,
    BarGraph,
  },
  mounted() {
    new CircleChart({
      $container: document.getElementById("one-value"),
      ringProportion: 0.42,
      tooltips: true,
      staticTotal: true,
      total: 100,
      middleCircleColor: "#fff",
      background: "#E4E4E4",
      definition: [
        { label: "Temperature", name: "temp", color: "#6C5DD3", value: 50.98 },
      ],
    });

    new CircleChart({
      $container: document.getElementById("two-value"),
      ringProportion: 0.42,
      tooltips: true,
      staticTotal: true,
      total: 100,
      middleCircleColor: "#fff",
      background: "#E4E4E4",
      definition: [
        { label: "Temperature", name: "temp", color: "#FFB7F5", value: 80.98 },
      ],
    });

    new CircleChart({
      $container: document.getElementById("three-value"),
      ringProportion: 0.42,
      tooltips: true,
      staticTotal: true,
      total: 100,
      middleCircleColor: "#fff",
      background: "#E4E4E4",
      definition: [
        { label: "Temperature", name: "temp", color: "#0049C6", value: 70.98 },
      ],
    });

    Morris.Line({
      // ID of the element in which to draw the chart.
      element: "pushups",
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
        { day: "4am", ordersone: 5, orderstwo: 0 },
        { day: "5am", ordersone: 10, orderstwo: 5 },
        { day: "6am", ordersone: 5, orderstwo: 5 },
        { day: "7am", ordersone: 5, orderstwo: 5 },
        { day: "8am", ordersone: 5, orderstwo: 10 },
        { day: "9am", ordersone: 5, orderstwo: 5 },
        { day: "10am", ordersone: 10, orderstwo: 0 },
        { day: "11am", ordersone: 5, orderstwo: 5 },
        { day: "12pm", ordersone: 5, orderstwo: 0 },
        { day: "1pm", ordersone: 5, orderstwo: 0 },
        { day: "2pm", ordersone: 5, orderstwo: 0 },
        { day: "3pm", ordersone: 5, orderstwo: 5 },
      ],
      // The name of the data record attribute that contains x-values.
      xkey: "day",
      parseTime: false,
      // A list of names of data record attributes that contain y-values.
      ykeys: ["ordersone", "orderstwo"],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ["May 21", "May 22"],
      lineColors: ["#159183", "#d9e1ec"],
    });
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

      border-radius: 1rem;
      display: block;
      margin: 0 auto;
      height: 4.9rem;
      width: 27rem;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }

  &__ordersovertime {
    width: 77rem;

    &--top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 1.4rem;
      line-height: 1.8rem;
    }

    &--toparea {
      display: flex;

      &:nth-child(2) {
        margin-left: 3rem;
      }
    }

    &--topleftarea {
      flex-direction: column;
      text-align: left;

      & span {
        &:nth-child(1) {
          font-weight: 500;
          font-size: 1.6rem;
        }

        &:nth-child(2) {
          font-size: 1rem;
          color: #5a607f;
          opacity: 0.9;
        }
      }
    }

    &--toprightarea {
      display: flex;
      align-items: center;

      & span {
        display: inline-block;

        &.left {
          background: #d9e1ec;
        }

        &.right {
          background: #159183;
        }

        &:nth-child(1) {
          height: 1.1rem;
          width: 1.1rem;
          border-radius: 0.4rem;
        }

        &:nth-child(2) {
          margin-left: 1rem;
        }
      }

      &:nth-child(2) {
        margin-right: 0.2rem;
        margin-left: 2.5rem;
      }
    }

    &--linegraph {
      height: 27.5rem;
    }

    &--linegraphbody {
      height: 27.5rem;
      width: 100%;
      max-width: 100%;
      padding: 1rem;
    }

    &--bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height: 17rem;

      & h3 {
        font-size: 1.8rem;
        font-weight: 500;
      }

      & p {
        font-size: 6rem;
        font-weight: 500;
        color: #0049c6;
      }

      & button {
        outline: none;
        cursor: pointer;
        border: none;
        background: #159183;
        color: #fff;
        border-radius: 1rem;
        display: block;
        margin: 0 auto;
        height: 4.8rem;
        width: 17rem;
        font-size: 1.3rem;
        font-weight: 600;

        margin-top: 2rem;
      }
    }
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
      display: flex;
      align-items: flex-start;

      & span {
        color: $color-primary;
        font-size: 1.3rem;
        font-weight: 600;

        &:nth-child(2) {
          margin-left: 1rem;
        }
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

  &__sec {
    &--body {
      padding: 4rem 5rem 0rem 5rem;
    }

    &--top {
      display: flex;
      justify-content: space-between;
    }

    &--topleft {
      & h3 {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      & span {
        color: #8f92a1;
        font-size: 1.2rem;
      }
    }

    &--topright {
      display: flex;

      & span {
        position: relative;
        display: flex;
        align-items: center;

        &:nth-child(1) {
          & input {
            border: none;
            outline: none;
            color: #8f92a1;
            font-size: 1.2rem;
            height: 2rem;
            width: 8rem;
          }
        }

        &:nth-child(2) {
        }
      }
    }
  }

  &__averagesales {
    flex-shrink: 0;
    height: 44rem;
    width: 67rem;

    &--graphs {
      display: flex;
      justify-content: space-between;
    }

    &--graph {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      margin: 3rem 0;
    }

    &--graphbody {
      position: relative;
      height: 10rem;
      width: 10rem;
    }

    &--figure {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 500;
      font-size: 1.7rem;
    }

    &--graphdesc {
      font-size: 1.4rem;
      font-weight: 500;
      margin-top: 2rem;
    }

    &--graphcircle {
      height: 10rem;
      width: 10rem;

      z-index: 2;
    }

    &--description {
      position: relative;
      font-size: 1.2rem;
      font-weight: 500;
      padding: 1.5rem;
      border-radius: 1.4rem;
      color: #131523;
      overflow: hidden;

      display: flex;

      &::before {
        content: "";
        top: 0;
        left: 0;
        background: #0052cc;
        opacity: 0.2;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
      }
    }

    &--desctext {
      width: 58rem;
      margin-left: 1rem;
    }
  }

  &__salesreport {
    flex-shrink: 0;
    height: 44rem;
    width: 47rem;

    &--topright {
      & span {
        &:nth-child(1) {
          & input {
            width: 10rem;
          }
        }
      }
    }

    &--graph {
      height: 22rem;
      width: 33rem;
      margin-top: 3rem;
    }

    &--graphlabels {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;

      & span.blocks {
        display: inline-block;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 0.3rem;
        margin-left: 1.4rem;

        &.one {
          background: #159183;
        }

        &.two {
          background: #0049c6;
        }

        &.three {
          background: #144a91;
        }
      }
    }

    &--graphlabel {
      display: flex;
      text-transform: uppercase;
      align-items: center;
      font-weight: 500;
      font-size: 1.4rem;

      margin-left: 1.4rem;

      & span {
        &.label {
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
