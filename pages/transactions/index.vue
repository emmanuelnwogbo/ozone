<template>
  <div class="transactions">
    <div class="transactions__body">
      <div class="transactions__left">
        <div class="transactions__topleft">
          <ProductCard background="#fff" borderRadius="2.5rem">
            <div class="transactions__topleft--top">
              <h2 class="transactions__lefth2">Transaction Chart</h2>
              <div class="transactions__topleft--graphlabels">
                <span class="deposit label"></span>
                <span>Deposit</span>
                <span class="withdrawal label"></span>
                <span>Withdrawal</span>
              </div>
            </div>
            <div class="transactions__topleft--graph">
              <BarGraph
                :colors="['#6C5DD3', '#FFA2C0']"
                :numberOfBarsPerArea="[
                  ['20%', '40%'],
                  ['20%', '30%'],
                  ['45%', '30%'],
                  ['67%', '100%'],
                  ['100%', '56%'],
                ]"
                :YScale="[60, 40, 20, 0]"
                :XScale="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                :barBodyWidth="'7rem'"
                :barWidth="'3rem'"
              />
            </div>
          </ProductCard>
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
                  <div class="transactions__bottomleftbody--heading">
                    <div class="transactions__bottomleftbody--headingtop">
                      <h2 class="transactions__lefth2">Transaction Over Time</h2>
                      <div
                        class="transactions__bottomleftbody--headingtopinput"
                      >
                        <span>
                          <input
                            type="Filter by Category"
                            placeholder="Last 12 hours"
                          />
                        </span>
                        <span
                          ><svg
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
                            </g></svg
                        ></span>
                      </div>
                    </div>
                    <div
                      class="transactions__bottomleftbody--headingbottom"
                    >
                      <div class="transactions__bottomleftbody--ordersmonths">
                        <div class="transactions__bottomleftbody--ordersmonth">
                          <span>0</span>
                          <span>Orders on May 22</span>
                        </div>
                        <div class="transactions__bottomleftbody--ordersmonth">
                          <span>0</span>
                          <span>Orders on May 21</span>
                        </div>
                      </div>

                      <div class="transactions__bottomleftbody--graphlabelss">
                        <span class="colored gray"></span>
                        <span>May 21</span>
                        <span class="colored green"></span>
                        <span>May 22</span>
                      </div>
                    </div>
                  </div>
                  <div class="transactions__bottomleftbody--chartbody">
                    <div id="transovertime"></div>
                  </div>
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

        <h2 class="transactions__right--h2">N0</h2>
        <div class="transactions__right--fundsonplatform">
          <span>
            <img src="~/assets/transactions/purple.png" alt="" />
          </span>
          <span>Funds on Platform</span>
        </div>
        <div class="transactions__right--payoutsettings">
          <p>Update your payout method in Settings</p>
        </div>
        <div class="transactions__right--barchart">
          <BarGraph
            :colors="['#6C5DD3', '#A0E7C5', '#A0D7E7']"
            :numberOfBarsPerArea="[
              ['20%', '40%', '100%'],
              ['20%', '30%', '40%'],
              ['45%', '30%', '50%'],
            ]"
            :YScale="[60, 40, 20, 0]"
            :XScale="['Oct', 'Nov', 'Dec']"
            :barBodyWidth="'8rem'"
            :barWidth="'2.3rem'"
          />
        </div>

        <div class="transactions__right--barchartlabel">
          <span class="blue colored"></span>
          <span class="label">LNG</span>
          <span class="green colored"></span>
          <span class="label">PMS</span>
          <span class="skyblue colored"></span>
          <span class="label">Diesel</span>
        </div>

        <div class="transactions__right--barchartnumbers">
          <div class="transactions__right--barchartnumber grossprofit">
            <div class="transactions__right--barchartnumbertop">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" rx="6" fill="#6C5DD3" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.48329 5.62656H9.50663C10.7366 5.62656 11.3366 6.28323 11.3333 7.62989V9.25323C11.3333 10.5399 10.54 11.3332 9.24996 11.3332H6.74663C5.46329 11.3332 4.66663 10.5399 4.66663 9.24989V6.74656C4.66663 5.36656 5.27996 4.66656 6.48996 4.66656H7.01663C7.32696 4.66323 7.61663 4.80656 7.80663 5.04989L8.09996 5.43989C8.19329 5.55656 8.33329 5.62656 8.48329 5.62656ZM6.45663 9.09655H9.54329C9.67996 9.09655 9.78996 8.98321 9.78996 8.84655C9.78996 8.70655 9.67996 8.59655 9.54329 8.59655H6.45663C6.31663 8.59655 6.20663 8.70655 6.20663 8.84655C6.20663 8.98321 6.31663 9.09655 6.45663 9.09655Z"
                    fill="white"
                  /></svg
              ></span>
              <span>Gross Profit</span>
            </div>
            <div class="transactions__right--barchartnumberbottom">
              <span>N0</span>
            </div>

            <span class="coloredstrip"></span>
            <span class="graystrip"></span>
          </div>

          <div class="transactions__right--barchartnumber productearnings">
            <div class="transactions__right--barchartnumbertop">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" rx="6" fill="#FFA2C0" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.72666 5.46984C9.72666 5.0265 10.0867 4.6665 10.53 4.6665C10.9733 4.6665 11.3333 5.0265 11.3333 5.46984C11.3333 5.91317 10.9733 6.27317 10.53 6.27317C10.0867 6.27317 9.72666 5.91317 9.72666 5.46984ZM8.44329 8.9196L9.40662 7.6766L9.39329 7.68326C9.44662 7.60993 9.45662 7.5166 9.41996 7.43326C9.38362 7.34993 9.30329 7.29326 9.21696 7.2866C9.12662 7.2766 9.03696 7.3166 8.98329 7.38993L8.17696 8.43326L7.25329 7.7066C7.19662 7.66326 7.12996 7.64626 7.06329 7.65326C6.99696 7.66326 6.93696 7.6996 6.89662 7.75293L5.91029 9.0366L5.88996 9.0666C5.83329 9.17293 5.85996 9.3096 5.95996 9.38326C6.00662 9.41326 6.05663 9.43326 6.11329 9.43326C6.19029 9.4366 6.26329 9.39626 6.30996 9.33326L7.14662 8.25626L8.09662 8.96993L8.12662 8.9896C8.23329 9.04626 8.36662 9.01993 8.44329 8.9196ZM9.14996 5.25993C9.13663 5.34327 9.12996 5.4266 9.12996 5.50993C9.12996 6.25993 9.73663 6.86627 10.4833 6.86627C10.5666 6.86627 10.6466 6.8566 10.73 6.84327V9.53293C10.73 10.6633 10.0633 11.3333 8.92996 11.3333H6.46696C5.33329 11.3333 4.66663 10.6633 4.66663 9.53293V7.0666C4.66663 5.93327 5.33329 5.25993 6.46696 5.25993H9.14996Z"
                    fill="white"
                  /></svg
              ></span>
              <span>Product Earnings</span>
            </div>
            <div class="transactions__right--barchartnumberbottom">
              <span>N0</span>
            </div>

            <span class="coloredstrip"></span>
            <span class="graystrip"></span>
          </div>

          <div class="transactions__right--barchartnumber transactionfees">
            <div class="transactions__right--barchartnumbertop">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" rx="6" fill="#3F8CFF" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.7144 7.504L10.971 9.50067C11.1614 10.804 10.4044 11.334 9.38769 11.334H6.62435C5.60469 11.334 4.82435 10.9673 5.03435 9.50067L5.29435 7.504C5.33435 7.20734 5.47769 6.93067 5.70102 6.72734C5.87135 6.57767 6.09102 6.49734 6.31769 6.49734V6.42067C6.29102 5.804 6.60802 5.22067 7.14102 4.904C7.67435 4.58734 8.34102 4.58734 8.87435 4.904C9.40769 5.22067 9.72102 5.804 9.69769 6.42067V6.49734C10.1177 6.49734 10.561 6.79067 10.7144 7.504ZM6.82435 6.42067C6.82435 5.77401 7.35102 5.24734 8.00102 5.24734C8.65435 5.24734 9.18102 5.77401 9.18102 6.42067V6.49434H6.82435V6.42067ZM6.73435 7.86401C6.73435 8.02401 6.86768 8.15734 7.03101 8.15734C7.19435 8.15734 7.32435 8.02401 7.32435 7.86401C7.32435 7.70067 7.19435 7.57067 7.03101 7.57067C6.86768 7.57067 6.73435 7.70067 6.73435 7.86401ZM8.96435 8.15734C9.04102 8.15734 9.11769 8.12734 9.17102 8.07067C9.22769 8.01734 9.25769 7.94067 9.25769 7.86401C9.25769 7.70067 9.12435 7.57067 8.96435 7.57067C8.80135 7.57067 8.66769 7.70067 8.66769 7.86401C8.66769 8.02401 8.80135 8.15734 8.96435 8.15734Z"
                    fill="white"
                  /></svg
              ></span>
              <span>Card Transaction Fees</span>
            </div>
            <div class="transactions__right--barchartnumberbottom">
              <span>N0</span>
            </div>

            <span class="coloredstrip"></span>
            <span class="graystrip"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/products/ProductCard";
import InputField from "@/components/InputField";
import BarGraph from "@/components/BarGraph";

export default {
  name: "Transactions",
  components: {
    ProductCard,
    InputField,
    BarGraph
  },
  mounted() {
    Morris.Line({
      // ID of the element in which to draw the chart.
      element: "transovertime",
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
        { day: "4am", ordersone: 50, orderstwo: 0 },
        { day: "5am", ordersone: 10, orderstwo: 5 },
        { day: "6am", ordersone: 5, orderstwo: 40 },
        { day: "7am", ordersone: 5, orderstwo: 5 },
        { day: "8am", ordersone: 30, orderstwo: 70 },
        { day: "9am", ordersone: 20, orderstwo: 65 },
        { day: "10am", ordersone: 40, orderstwo: 0 },
        { day: "11am", ordersone: 80, orderstwo: 5 },
        { day: "12pm", ordersone: 15, orderstwo: 20 },
        { day: "1pm", ordersone: 25, orderstwo: 20 },
        { day: "2pm", ordersone: 15, orderstwo: 0 },
        { day: "3pm", ordersone: 50, orderstwo: 50 },
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
    height: 34rem;
    width: 71.55rem;
    -webkit-box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
    -moz-box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);
    box-shadow: 4px 22px 20px 3px rgba(227, 230, 236, 1);

    &--graph {
      height: 85%;
      width: 96%;
      padding: 2rem;
      margin: 0 auto;
    }

    &--top {
      width: 96%;
      padding: 0 2rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3rem;
    }

    &--graphlabels {
        font-weight: 500;
        font-size: 1.3rem;
        display: flex;
        align-items: center;

      & span {
        display: inline-block;

        &.label {
          height: 1.2rem;
          width: 1.2rem;
          border-radius: 0.3rem;
          margin: 0 1rem;
        }

        &.deposit {
          background: #6c5dd3;
        }

        &.withdrawal {
          background: #ffa2c0;
          margin-left: 2rem;
        }
      }
    }
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

    &--heading {
      display: flex;
      flex-direction: column;
    }

    &--headingtop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60rem;
      padding: 3rem 0;

      & span {
        & input {
          outline: none;
          border: none;
          width: 9rem;

          &::placeholder {
            color: #808191;
            font-size: 1.2rem;
            font-weight: 500;
          }
        }
      }
    }

    &--headingtopinput {
      display: flex;
      align-items: center;
    }

    &--top {
      height: 53rem;
    }

    &--headingbottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    &--ordersmonths {
      display: flex;
      font-size: 1.2rem;
      font-weight: 500;
    }

    &--ordersmonth {
      display: flex;
      flex-direction: column;
      margin-right: 1rem;

      & span {

      &:nth-child(1) {
          font-size: 1.5rem;
      }

        &:nth-child(2) {
          font-weight: 400;
        }
      }
    }

    &--graphlabelss {
      display: flex;
      align-items: center;

      & span {
        display: inline-block;
        font-weight: 500;
        font-size: 1.1rem;

        &.colored {
          height: 1.4rem;
          width: 1.4rem;
          background: #000000;
          margin-right: 1rem;
          margin-left: 2.6rem;
          border-radius: .2rem;
        }

        &.green {
          background: $color-primary;
        }

        &.gray {
          background: #d9e1ec;
        }
      }
    }

    &--chart {
      height: 53rem;
      margin: 0 auto;
      border-radius: 2.5rem;
      box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 13px 27px 100px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &--chartbody {
      width: 94%;
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
    height: 105rem;
    padding: 3rem 2rem;

    & .transactions__search--drop {
      width: auto;
      background: rgba(227, 230, 236, 0.5);
      border-radius: 1.5rem;
    }

    &--h2 {
      font-weight: 700;
      font-size: 5rem;
      margin: 2rem 0;
    }

    &--barchart {
      height: 15rem;
      margin: 2rem 0;
    }

    &--barchartlabel {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 6rem;

      & span {
        display: inline-block;
        margin-top: 4rem;
        font-size: 1.3rem;
        font-weight: 500;
        color: #808191;

        &.colored {
          width: 1.4rem;
          height: 1.4rem;
          background: red;
          border-radius: 0.3rem;
          margin-left: 3rem;
        }

        &.label {
          margin-left: 1rem;
        }

        &.blue {
          background: #6c5dd3;
        }

        &.green {
          background: #a0e7c5;
        }

        &.skyblue {
          background: #a0d7e7;
        }
      }
    }

    &--barchartnumbers {
      border-radius: 0.6rem;
      border: 1px solid #e4e4e4;
      margin: 3rem 0;
      padding: 4rem 2rem 2rem 2rem;
    }

    &--barchartnumber {
      position: relative;
      padding-bottom: 2rem;
      margin-bottom: 5rem;

      & span {
        display: inline-block;

        &.graystrip {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #e4e4e4;
          border-radius: 1px;
          z-index: 1;
        }

        &.coloredstrip {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;

          border-radius: 1px;
          z-index: 2;
        }
      }

      &.grossprofit {
        & span {
          &.coloredstrip {
            background: #6c5dd3;
            width: 70%;
          }
        }
      }

      &.productearnings {
        & span {
          &.coloredstrip {
            background: #ffa2c0;
            width: 30%;
          }
        }
      }

      &.transactionfees {
        & span {
          &.coloredstrip {
            background: #3f8cff;
            width: 30%;
          }
        }
      }
    }

    &--barchartnumbertop {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      & span {
        display: inline-block;
        margin-right: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: #808191;
        opacity: 0.8;
      }
    }

    &--barchartnumberbottom {
      font-size: 2.5rem;
      font-weight: 500;
    }

    &--fundsonplatform {
      color: #5f75ee;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 500;
      border-bottom: 1px solid #e4e4e4;
      padding-bottom: 1.2rem;
      width: 17rem;
      margin-bottom: 2rem;

      & span {
        display: inline-block;
        margin-right: 1rem;
      }
    }

    &--payoutsettings {
      color: #B2B3BD;
      font-weight: 500;
    }
  }

  &__lefth2 {
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 0.1px;
  }
}
</style>