<template>
  <div class="customer">
    <div class="customer__body">
      <div class="customer__top">
        <div class="customer__topleft">
          <div class="customer__toplefttop">
            <ProductCard
              v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)'"
              borderRadius="1.5rem"
            >
              <div class="customer__toplefttop--body">
                <div class="customer__toplefttop--top">
                  <h2>Customer Purchase Report</h2>
                  <div class="customer__toplefttop--indicators">
                    <div class="customer__toplefttop--indicator">
                      <span></span>
                      <span>LNG</span>
                    </div>
                    <div class="customer__toplefttop--indicator">
                      <span></span>
                      <span>Diesel</span>
                    </div>
                  </div>
                </div>

                <div class="customer__toplefttop--graph">
                  <BarGraph
                    :colors="['#159183', '#0049c6']"
                    :numberOfBarsPerArea="[
                      ['100%', '40%'],
                      ['20%', '30%'],
                      ['45%', '30%'],
                      ['67%', '100%'],
                      ['70%', '56%'],
                      ['50%', '56%'],
                      ['100%', '56%'],
                    ]"
                    :YScale="[60, 40, 20, 0]"
                    :XScale="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
                    :barBodyWidth="'7rem'"
                    :barWidth="'3rem'"
                  />
                </div>
              </div>
            </ProductCard>
          </div>
          <div class="customer__topleftbottom">
            <ProductCard
              v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)'"
              borderRadius="1.5rem"
            >
              <div class="customer__topleftbottom--body">
                <h2>O-Zone Customers</h2>
                <span></span>

                <div class="customer__topleftbottom--sections">
                  <div class="customer__topleftbottom--section others">
                    <div class="customer__topleftbottom--sectionarea">
                      <span class="accounttype">Lite</span>
                      <span class="iconfigure">
                        <span class="coloredsvg">
                          <span class="coloredicon"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <circle
                                cx="6.73806"
                                cy="6.73684"
                                r="6.73684"
                                fill="#6979F8"
                              />
                              <path
                                d="M4.49243 7.85986L6.73805 5.61425L8.98366 7.85986"
                                stroke="white"
                                stroke-width="1.68421"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              /></svg
                          ></span>
                          <span class="percent">8%</span>
                        </span>
                      </span>
                    </div>
                    <div class="customer__topleftbottom--sectionarea">
                      <p class="number">8000</p>
                    </div>
                    <div class="customer__topleftbottom--sectionarea">
                      <span class="date">02-Nov-2020</span>
                      <span class="blackrighticon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 8L18 12L14 16"
                            stroke="#11142D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18 12L7.6709 12"
                            stroke="#11142D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <div class="customer__topleftbottom--section middle">
                    <div class="customer__topleftbottom--middlegraph">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="90"
                          height="40"
                          viewBox="0 0 90 40"
                          fill="none"
                        >
                          <g clip-path="url(#clip0)">
                            <path
                              d="M0.5 40C0.5 40 4.42012 28.2514 14.8349 28.2514C25.2498 28.2514 22.2408 40 29.1699 40C36.099 40 40.6658 21 51.6448 21C59.9067 21 62.9208 34.5349 74.8009 34.5349C84.6674 34.5349 82.5962 22.477 89.5 22.477"
                              stroke="#A0D7E7"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            <path
                              d="M0.5 40C0.5 40 6.43749 25.344 14.1923 25.344C21.9471 25.344 21.0996 34.2017 29.0189 34.2017C36.9382 34.2017 40.3688 0 51.6448 0C62.9208 0 65.3426 31.5915 74.8009 31.5915C82.1693 31.5915 84.0539 20 89.5 20"
                              stroke="#6C5DD3"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="89"
                                height="40"
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div class="customer__topleftbottom--sectionarea">
                      <span class="accounttype">Family</span>
                      <span class="iconfigure">
                        <span class="coloredsvg">
                          <span class="coloredicon"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <circle
                                cx="6.73806"
                                cy="6.73684"
                                r="6.73684"
                                fill="#6979F8"
                              />
                              <path
                                d="M4.49243 7.85986L6.73805 5.61425L8.98366 7.85986"
                                stroke="white"
                                stroke-width="1.68421"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              /></svg
                          ></span>
                          <span class="percent">8%</span>
                        </span>
                      </span>
                    </div>
                    <div class="customer__topleftbottom--sectionarea">
                      <p class="number">8000</p>
                    </div>
                    <div class="customer__topleftbottom--sectionarea">
                      <span class="date">02-Nov-2020</span>
                      <span class="blackrighticon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 8L18 12L14 16"
                            stroke="#11142D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18 12L7.6709 12"
                            stroke="#11142D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          /></svg
                      ></span>
                    </div>
                  </div>
                  <div class="customer__topleftbottom--section others">
                    <div class="customer__topleftbottom--sectionarea">
                      <span class="accounttype">Pro</span>
                      <span class="iconfigure">
                        <span class="coloredsvg">
                          <span class="coloredicon"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <circle
                                cx="6.73806"
                                cy="6.73684"
                                r="6.73684"
                                fill="#6979F8"
                              />
                              <path
                                d="M4.49243 7.85986L6.73805 5.61425L8.98366 7.85986"
                                stroke="white"
                                stroke-width="1.68421"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              /></svg
                          ></span>
                          <span class="percent">8%</span>
                        </span>
                      </span>
                    </div>
                    <div class="customer__topleftbottom--sectionarea">
                      <p class="number">8000</p>
                    </div>
                    <div class="customer__topleftbottom--sectionarea">
                      <span class="date">02-Nov-2020</span>
                      <span class="blackrighticon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 8L18 12L14 16"
                            stroke="#11142D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18 12L7.6709 12"
                            stroke="#11142D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          /></svg
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </ProductCard>
          </div>
        </div>
        <div class="customer__topright">
          <ProductCard
            v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.6), white)'"
            borderRadius="1.5rem"
          >
            <div class="customer__topright--body">
              <div class="customer__topright--circlegraph">
                <div id="gender-graph"></div>
              </div>
              <h2>Gender Representation</h2>
              <div class="customer__topright--numbers">479.4</div>
              <div class="customer__topright--indicators">
                <div class="customer__topright--indicator">
                  <span></span>
                  <span>4,000 Male</span>
                </div>
                <div class="customer__topright--indicator">
                  <span></span>
                  <span>3,800 Female</span>
                </div>
              </div>
            </div>
          </ProductCard>
        </div>
      </div>
      <div class="customer__bottom">
        <ProductCard
          v-bind:background="'linear-gradient(to bottom, rgba(248, 248, 248, 0.3), white)'"
          borderRadius="1.5rem"
        >
          <div class="customer__bottom--body">
            <div class="customer__bottom--top">
              <h2>Customer Database</h2>
            </div>
            <div class="customer__bottom--heading">
              <div class="customer__bottom--name">
                <div></div>
                <div>Name</div>
              </div>
              <span>Username</span>
              <span>Account Type</span>
              <span>Location</span>
              <span>Email</span>
              <span>Action</span>
            </div>
            <div class="customer__bottom--container">
              <div
                class="customer__bottom--tile"
                v-for="(item, index) in customers"
                :key="index"
              >
                <div class="customer__bottom--name">
                  <div></div>
                  <div>{{ item.name }}</div>
                </div>
                <span>{{ item.name }}</span>
                <span>{{ item.accountType }}</span>
                <span>Lagos, Ikoyi</span>
                <span>{{ item.email }}</span>
                <span>Manage</span>
                <div class="customer__bottom--manage">
                  <div class="customer__bottom--optionactions">Actions</div>
                  <div
                    class="customer__bottom--option"
                    @click="viewprofile(item)"
                  >
                    <span>View Account</span><span></span>
                  </div>
                  <div class="customer__bottom--option">
                    <span>Freeze Account</span><span></span>
                  </div>
                  <div class="customer__bottom--option">
                    <span>Delete Account</span><span></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="customer__bottom--btn">
              <button>Load More</button>
            </div>
          </div>
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/products/ProductCard";

import CircleChart from "circle-chart";
import BarGraph from "@/components/BarGraph";

export default {
  component: {
    ProductCard,
    CircleChart,
    BarGraph,
  },
  data() {
    return {};
  },
  mounted() {
    new CircleChart({
      $container: document.getElementById("gender-graph"),
      ringProportion: 0.42,
      tooltips: true,
      staticTotal: true,
      total: 100,
      middleCircleColor: "#fff",
      background: "#6C5DD3",
      definition: [
        { label: "Temperature", name: "temp", color: "#FFA2C0", value: 43.98 },
      ],
    });
  },
  middleware: "auth",
  methods: {
    viewprofile(item) {
      this.$router.push("customer/profile/" + item.id);
    },
  },
  computed: {
    customers() {
      const customers = this.$store.getters.customers.filter(
        (item) => item.accountType !== "admin" && item.accountType !== "merchant"
      );
      return customers;
    },
  },
};
</script>

<style lang="scss">
.customer {
  padding-left: 21rem;
  min-height: 200rem;

  &__body {
    padding: 15rem 4.5rem 0 10rem;
  }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__topleft {
    width: 80rem;
    flex-shrink: 0;
  }

  &__topright {
    width: 32rem;
    flex-shrink: 0;
    position: relative;

    &--body {
      position: relative;
      height: 100%;
      padding: 3rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      & h2 {
        text-align: center;
      }
    }

    &--circlegraph {
      height: 27.5rem;
      margin-top: 3rem;
      margin-bottom: 1rem;
      width: 100%;
    }

    &--numbers {
      font-size: 8rem;
      font-weight: 500;
    }

    &--indicator {
      display: flex;
      align-items: center;

      & span {
        font-weight: 500;
        font-size: 1.3rem;
        display: inline-block;

        &:nth-child(1) {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 0.4rem;
          cursor: pointer;
          background: #6c5dd3;
        }

        &:nth-child(2) {
          margin-left: 1rem;
        }
      }

      &:nth-child(2) {
        & span:nth-child(1) {
          background: #ffa2c0;
        }
      }
    }

    &--indicators {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      width: 80%;
      font-size: 1.3rem;
      position: absolute;
      bottom: 4rem;
    }
  }

  &__toplefttop {
    height: 36rem;
    width: 100%;
    position: relative;

    &--body {
      padding: 3rem;
    }

    &--top {
      display: flex;
      justify-content: space-between;
    }

    &--indicators {
      display: flex;
    }

    &--indicator {
      margin-left: 5rem;
      display: flex;
      align-items: center;

      & span {
        font-weight: 500;
        font-size: 1.3rem;
        display: inline-block;

        &:nth-child(1) {
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 0.4rem;
          cursor: pointer;
          background: #159183;
        }

        &:nth-child(2) {
          margin-left: 1rem;
        }
      }

      &:nth-child(2) {
        & span:nth-child(1) {
          background: #0049c6;
        }
      }
    }

    &--graph {
      width: 100%;
      height: 20rem;
      margin-top: 7rem;
    }
  }

  &__topleftbottom {
    margin-top: 4rem;
    height: 22rem;
    width: 100%;
    position: relative;

    &--body {
      padding: 3rem;
    }

    &--sections {
      display: flex;
      margin-top: 2rem;
      justify-content: space-between;
      align-items: center;
    }

    &--section {
      border-radius: 1.2rem;
      padding: 2rem;
      width: 18rem;
      height: 12rem;
      justify-content: space-between;
      display: flex;
      flex-direction: column;

      &.others {
        box-shadow: 7px 14px 20px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 7px 14px 20px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 7px 14px 20px rgba(0, 0, 0, 0.2);
      }

      &.middle {
        position: relative;
        width: 33rem;
        border: 1px solid #a8a8a8;
        background: #fff;

        &::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 98%;
          top: 0;
          left: 0.3rem;
          border-radius: 1.2rem;
          z-index: -1;
          border: 1px solid #a8a8a8;
          transform: translateY(0.7rem);
        }
      }
    }

    &--middlegraph {
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 1.2rem;
      border: none;
      height: 78%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
    }

    &--sectionarea {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & span {
        display: inline-block;

        &.iconfigure {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 500;
        }

        &.coloredicon {
          transform: translateY(0.2rem);
        }

        &.accounttype {
          color: #808191;
          font-size: 1.4rem;
        }

        &.date {
          color: #808191;
          opacity: 0.7;
          font-weight: 500;
        }
      }

      & p {
        &.number {
          font-size: 2rem;
          font-weight: 500;
        }
      }
    }
  }

  &__bottom {
    margin-top: 4rem;
    width: 100%;

    &--body {
      padding: 3rem;
      background: linear-gradient(to bottom, rgba(248, 248, 248, 0.3), white);
      border-radius: 1.5rem;
    }

    &--heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: rgba(128, 129, 145, 0.9);
      font-size: 1.4rem;
      font-weight: 500;
      padding: 3rem 0;
      margin-top: 1rem;
      padding-bottom: 2rem;

      & span {
        display: inline-block;
        flex-shrink: 0;

        &:nth-child(2) {
          width: 20rem;
        }

        &:nth-child(3) {
          width: 16rem;
        }
        &:nth-child(4) {
          width: 17rem;
        }
        &:nth-child(5) {
          width: 23rem;
        }
        &:nth-child(6) {
          width: 13rem;
        }
      }
    }

    &--tile {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.4rem;
      font-weight: 400;
      cursor: pointer;
      padding: 2rem 0;
      margin-top: 1rem;
      border-top: 0.2px solid rgba(47, 54, 64, 0.2);

      & span {
        display: inline-block;
        flex-shrink: 0;

        &:nth-child(2) {
          width: 20rem;
        }

        &:nth-child(3) {
          width: 16rem;
        }
        &:nth-child(4) {
          width: 17rem;
        }
        &:nth-child(5) {
          width: 26rem;
        }
        &:nth-child(6) {
          width: 10rem;
          height: 3rem;
          color: #fff;
          background: #0049c6;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          &:hover {
            & + .customer__bottom--manage {
              display: block;
              z-index: 10;
            }
          }
        }
      }
    }

    &--btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5rem 0;
      border-top: 0.2px solid rgba(47, 54, 64, 0.2);

      & button {
        font-weight: 600;
        background: #1b1d21;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        border: none;
        font-size: 1.3rem;
        border-radius: 1.2rem;
        height: 4.5rem;
        width: 14rem;
      }
    }

    &--name {
      width: 20rem;
      flex-shrink: 0;
    }

    &--manage {
      position: absolute;
      right: 0;
      top: 5rem;
      background: #fff;
      width: 23rem;
      height: 24rem;
      border-radius: 0.5rem;
      padding: 4rem 2rem 3rem 2rem;
      box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);

      display: none;
      z-index: -1;

      &:hover {
        display: block;
        z-index: 10;
      }
    }

    &--optionactions {
      color: #808191;
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: 1rem;
    }

    &--option {
      border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
      padding: 1rem 0rem 0 0;
      cursor: pointer;
      position: relative;
      font-weight: 600 !important;

      &:nth-child(2) {
        color: $color-primary;
      }

      &:nth-child(3) {
        color: #0049c6;
      }

      &:nth-child(4) {
        border: none;
        color: #ff647c;
      }
    }
  }
}

h2 {
  width: 100%;
  font-size: 1.7rem;
  font-weight: 500;
}
</style>