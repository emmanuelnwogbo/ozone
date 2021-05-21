<template>
  <div class="notifications">
    <div class="notifications__body">
      <div class="notifications__sectionone">
        <div class="notifications__search">
          <!-- <div class="notifications__search--input">
            <input type="text" placeholder="Recent notifications" />
            <span class="recentnots">
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
          </div> -->
          <!-- <div class="notifications__search--input">
            <span class="search"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.61154 0C4.30323 0 0 4.20819 0 9.39926C0 14.5903 4.30323 18.7985 9.61154 18.7985C11.8819 18.7985 13.9684 18.0287 15.613 16.7415L18.7371 19.7886L18.8202 19.8586C19.1102 20.0685 19.5214 20.0446 19.7839 19.7873C20.0726 19.5043 20.072 19.0459 19.7825 18.7636L16.6952 15.7523C18.2649 14.0794 19.2231 11.8487 19.2231 9.39926C19.2231 4.20819 14.9198 0 9.61154 0ZM9.61154 1.44774C14.1022 1.44774 17.7426 5.00776 17.7426 9.39926C17.7426 13.7908 14.1022 17.3508 9.61154 17.3508C5.12086 17.3508 1.48044 13.7908 1.48044 9.39926C1.48044 5.00776 5.12086 1.44774 9.61154 1.44774Z"
                  fill="#11142D"
                ></path></svg
            ></span>
            <input class="search" type="text" placeholder="Search" />
          </div> -->
        </div>
        <!-- <div class="notifications__buttons">
          <button
            v-bind:class="{
              active: currentBtn === item,
            }"
            class="notifications__buttons--btn"
            v-for="(item, index) in buttons"
            :key="index"
          >
            {{ item }}
          </button>
        </div> -->

        <div class="notifications__recent">
          <h2 class="notifications__recent--h2">Recent Notifications</h2>

          <div
            class="notifications__none"
            v-if="!notifications || !notifications.length"
          >
            You have no notifications
          </div>

          <div  v-if="notifications && notifications.length" class="notifications__cards">
            <div
              class="notifications__card"
             
              v-for="(item, index) in notifications"
               :key="index"
              
              
            >
              <!-- <div  class="notifications__card--left" >
                <figure class="notifications__card--img">
                  <span>
                    <img src="~/assets/notifications/comment.png" alt="" />
                  </span>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </figure>
              </div> -->
              <div 
             
                 class="notifications__card--right">
                <div v-if="item.title" class="notifications__card--top">
                  <h2>{{item.title}}</h2>
                </div>
                <div v-else class="notifications__card--top">
                  <h2>{{item.description}}</h2>
                </div>
                 <div class="notifications__card--preview">
                  <p>{{item.details}}</p>
                </div>
                <div class="notifications__card--middle">
                  <span>{{item.status}}</span>
                  <span>{{formatDate(item.createdAt)}}</span>
                </div>
               
                <!-- <div class="notifications__card--bottom">
                  <span>
                    <img src="~/assets/notifications/bubble.png" alt="" />
                  </span>
                  <span>
                    <img src="~/assets/notifications/thumb.png" alt="" />
                  </span>
                  <span>
                    <img src="~/assets/notifications/star.png" alt="" />
                  </span>
                  <span>
                    <img src="~/assets/notifications/trail.png" alt="" />
                  </span>
                </div> -->
              </div>
            </div>
          </div>
        </div>
       
        <div v-if="max > sliceSize" class="notifications__loadmore">
          <button @click="loadMore">Load More</button>
        </div>
      </div>

      <!-- <div class="notifications__sectiontwo">
        <h2>Filter</h2>

        <div class="notifications__filters">
          <div class="notifications__filter">
            <span>
              <input type="checkbox" name="" id="" />
            </span>
            <span>Deposit</span>
          </div>
          <div class="notifications__filter">
            <span>
              <input type="checkbox" name="" id="" />
            </span>
            <span>Purchase</span>
          </div>
          <div class="notifications__filter">
            <span>
              <input type="checkbox" name="" id="" />
            </span>
            <span>Withdrawal</span>
          </div>
          <div class="notifications__filter">
            <span>
              <input type="checkbox" name="" id="" />
            </span>
            <span>Card</span>
          </div>
          <div class="notifications__filter">
            <span>
              <input type="checkbox" name="" id="" />
            </span>
            <span>Admin</span>
          </div>
          <div class="notifications__filter">
            <span>
              <input type="checkbox" name="" id="" />
            </span>
            <span>Other</span>
          </div>
        </div>

        <div class="notifications__btns">
          <button
            v-bind:class="{
              active: unselectall,
            }"
          >
            Unselect All
          </button>
          <button
            v-bind:class="{
              active: !unselectall,
            }"
          >
            Select All
          </button>
        </div>

        <div class="notifications__from">
          <h2>From</h2>

          <div class="notifications__radios">
            <div class="notifications__radio merchants">
              <span
                class="radio"
                v-bind:class="{
                  active: from === 'merchants',
                }"
                @click="toggleFrom('merchants')"
              >
                <span></span>
              </span>
              <span class="">Merchants</span>
            </div>
            <div class="notifications__radio admins">
              <span
                class="radio"
                v-bind:class="{
                  active: from === 'admins',
                }"
                @click="toggleFrom('admins')"
              >
                <span></span>
              </span>
              <span class="">Admins</span>
            </div>
          </div>

          <div class="notifications__reset" @click="reset">
            <p>Reset all filters</p>
          </div>
        </div>
      </div> -->
    
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  components: {},
  data() {
    return {
      currentBtn: "Merchants",
      unselectall: true,
      from: "merchants",
      sliceSize: 4,
      max: 0,
      buttons: [
        "Merchants",
        "Products",
        "Administrator",
        "Sales",
        "Withdrawals",
      ],
    };
  },
  middleware: "auth",
  mounted() {
    this.$store.dispatch("currentNotification");
  },
  computed: {
    notifications() {
      const data = this.$store.getters.currentNotification
      this.max = data.length
    
      return data.slice(0, this.sliceSize)

    },
    
  },
  methods: {
    loadMore(){
      const newSize = this.sliceSize + 4
      this.sliceSize = newSize
     
    },
    toggleFrom(from) {
      this.from = from;
    },
    formatDate: function (data){
      const event = new Date(data);
      return event.toString().split("GMT")[0]

    },
    reset(from) {
      this.from = from;
    },
  },
};
</script>

<style lang="scss">
.notifications {
  @include pageStyle;

  &__body {
    display: flex;
    justify-content: space-between;
  }
  &__cards {
      height: 600px;
    overflow-y: scroll;

  }
  &__cards::-webkit-scrollbar {
  width: 5px;
  border-radius: 2px;
  background: #ccc;
  transition: all 0.3s ease;
}

  &__search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;

    &--input {
      position: relative;
      flex-basis: 35rem;

      & span {
        position: absolute;
        top: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.recentnots {
          right: 0;
          padding-right: 2rem;
        }

        &.search {
          left: 0;
          padding-left: 2rem;
        }
      }

      & input {
        border: none;
        outline: none;
        background: rgba(220, 221, 225, 1);
        border-radius: 0.9rem;
        height: 4.5rem;
        padding: 2rem;
        width: 100%;

        &.search {
          padding-left: 4rem;
        }

        &::placeholder {
          font-weight: 500;
        }
      }
    }
  }

  &__sectionone {
    &::before {
      content: "";
      position: fixed;
      height: 100%;
      width: 1px;
      top: 0;
      right: 42rem;
      /* background: rgba(0, 0, 0, 0.1); */
      /* border: solid red 2px; */
    }
  }

  &__sectiontwo {
    width: 32rem;
    background: #fff;
    height: 57rem;
    border-radius: 2.4rem;
    flex-shrink: 0;

    padding: 3rem;

    & h2 {
      font-weight: 500;
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }
  }

  &__filters {
  }

  &__filter {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    & span {
      display: inline-block;

      &:nth-child(1) {
        transform: translateY(0.25rem);
        margin-right: 1rem;
        cursor: pointer;
      }

      &:nth-child(2) {
        color: #838a96;
        font-weight: 500;
        font-size: 1.5rem;
      }
    }
  }

  &__none {
    margin: 0 auto;
    width: 42rem;
    text-align: center;
    padding: 5rem 0;
    font-weight: 500;
    font-size: 2rem;
    opacity: 0.4;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 3rem;

    & button {
      width: 12rem;
      font-weight: 600;
      color: #000000;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      cursor: pointer;
      border: none;
      font-size: 1.3rem;
      border-radius: 1.2rem;
      height: 4rem;

      &.active {
        background: #159183;
        color: #fff;
      }
    }
  }

  &__from {
    margin-top: 3rem;

    & h2 {
      font-weight: 500;
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
  }

  &__reset {
    color: #838a96;
    font-weight: 500;
    font-size: 1.4rem;
    margin-top: 4rem;
    cursor: pointer;
  }

  &__radios {
    display: flex;
    color: #838a96;
    font-weight: 400;
    font-size: 1.2rem;
    justify-content: space-between;
  }

  &__radio {
    display: flex;
    align-items: center;

    &.merchants {
      color: #000000;
    }

    &.admins {
      color: #838a96;
    }

    & span {
      display: inline-block;

      &.radio {
        border-radius: 100%;
        height: 2rem;
        width: 2rem;
        cursor: pointer;
        background: #e4e4e4;
        margin-right: 0.5rem;

        & span {
        }
      }

      &.active {
        display: flex;
        justify-content: center;
        align-items: center;
        background: $color-primary;

        & span {
          height: 1rem;
          width: 1rem;
          background: #fff;
          border-radius: 100%;
        }
      }
    }
  }

  &__recent {
    @include sectionCard;
    margin-top: 4rem;
    padding: 3rem;
    margin-bottom: 10rem;
    /* border: solid red 2px; */
  

    &--h2 {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.4rem;

      color: #11142d;
    }
  }
  &__recent::-webkit-scrollbar {
  width: 5px;
  border-radius: 2px;
  background: #ccc;
  transition: all 0.3s ease;
}

  &__buttons {
    display: flex;

    &--btn {
      padding: 0.8rem 1.8rem;

      border: 2px solid #0049c6;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 1.2rem;
      margin: 0 1.8rem;

      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2rem;

      text-align: center;
      letter-spacing: 0.6px;
      color: #11142d;

      &:nth-child(1) {
        margin: 0 1.8rem 0 0;
      }

      @include btn;

      &.active {
        background: #159183;
        border: 2px solid #159183;
        color: #fff;
      }
    }
  }

  &__card {
    width: 67rem;
    display: flex;
    margin-top: 7rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5rem;
   

    &--left {
      margin-right: 3rem;
    }

    &--top {
      margin-bottom: 1rem;

      & h2 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 1.9rem;

        color: #11142d;
      }
    }

    &--middle {
      margin-bottom: 1.9rem;

      & span {
        font-size: 1.5rem;
        line-height: 1.8rem;
        margin-right: 0.8rem;

        &:nth-child(1) {
          font-weight: 500;
         color: #5f75ee;
         text-transform: capitalize;
          font-size: 1.4rem;
        }

        &:nth-child(2) {
          font-weight: 600;
          
         color: #808191;
        }

        &:nth-child(3) {
          font-weight: 600;
          color: #808191;
        }
      }
    }

    &--img {
      position: relative;
      height: 5rem;
      width: 5rem;
      border-radius: 100%;

      & img {
        border-radius: 100%;
      }

      & span {
        position: absolute;
        top: 0.4rem;
        right: -0.1rem;
        display: inline-block;
        height: 1.7rem;
        width: 1.7rem;
        border-radius: 100%;
        overflow: hidden;
      }
    }

    &--preview {
      font-size: 1.5rem;
      color: #808191;
      margin-bottom: 2rem;
    }

    &--bottom {
      display: flex;
      align-items: center;

      & span {
        cursor: pointer;
        height: 3.4rem;
        display: inline-block;
        width: 3.4rem;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 1.5rem;
      }
    }
  }

  &__loadmore {
    display: flex;
    justify-content: center;

    & button {
      @include btn;
      height: 4.4rem;
      background: #1b1d21;
      border-radius: 1.6rem;
      color: #fff;
      width: 14rem;
      border: none;
    }
  }
}
</style>