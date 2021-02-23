<template>
  <div class="merchants">
    <div class="merchants__body">
      <div class="merchants__ordercards">
        <div class="merchants__ordercard">
          <div class="merchants__ordercard--order">Orders Today</div>
          <div class="merchants__ordercard--middle">
            <h2 class="merchants__ordercard--h2">469 Orders</h2>
            <div class="merchants__ordercard--percent">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle
                    cx="11.0103"
                    cy="10.7265"
                    r="10.1695"
                    fill="#6979F8"
                  />
                  <path
                    d="M7.62109 12.4215L11.0109 9.03168L14.4007 12.4215"
                    stroke="white"
                    stroke-width="2.54237"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>6%</span>
            </div>
          </div>
          <div class="merchants__ordercard--date">02-Nov-2020</div>
        </div>
        <div class="merchants__ordercard">
          <div class="merchants__ordercard--order">Fulfilled Orders</div>
          <div class="merchants__ordercard--middle">
            <h2 class="merchants__ordercard--h2">46 Orders</h2>
            <div class="merchants__ordercard--percent">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle
                    cx="11.0103"
                    cy="10.7265"
                    r="10.1695"
                    fill="#6979F8"
                  />
                  <path
                    d="M7.62109 12.4215L11.0109 9.03168L14.4007 12.4215"
                    stroke="white"
                    stroke-width="2.54237"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>6%</span>
            </div>
          </div>
          <div class="merchants__ordercard--date">02-Nov-2020</div>
        </div>
        <div class="merchants__ordercard">
          <div class="merchants__ordercard--order">Pending Today</div>
          <div class="merchants__ordercard--middle">
            <h2 class="merchants__ordercard--h2">469 Orders</h2>
            <div class="merchants__ordercard--percent">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <circle
                    cx="11.0103"
                    cy="10.7265"
                    r="10.1695"
                    fill="#FFA26B"
                  />
                  <path
                    d="M7.62109 12.4215L11.0109 9.03168L14.4007 12.4215"
                    stroke="white"
                    stroke-width="2.54237"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="merchants__ordercard--pendingpercent">6%</span>
            </div>
          </div>
          <div class="merchants__ordercard--date">02-Nov-2020</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.merchants {
  padding-left: 21rem;
  min-height: 160vh;

  &__body {
    padding: 19rem 4.5rem 0 10rem;
  }

  &__ordercards {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__ordercard {
    width: 37rem;
    height: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 3rem;
    flex-shrink: 0;

    @include typicalCard;

    &--middle {
      margin: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--h2 {
      font-size: 2.9rem;
    }

    &--order {
      font-weight: 600;
      font-size: 1.7rem;
      color: #838a96;
    }

    &--date {
      font-size: 1.3rem;
      color: #838a96;
      opacity: 0.8;
    }

    &--percent {
      display: flex;
      align-items: center;

      & span {
        display: inline-block;

        &:nth-child(2) {
          font-weight: 500;
          margin-left: 0.5rem;
          font-size: 1.5rem;
          color: #6979f8;

          &.merchants__ordercard--pendingpercent {
            color: #ffa26b;
          }
        }
      }
    }
  }
}
</style>