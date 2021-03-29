<template>
  <div class="sidenav" v-if="adminToken !== null || token !== null">
    <figure class="sidenav__logo">
      <img src="~/assets/sidenav/logo.png" alt="" />
    </figure>

    <div class="sidenav__area sidenav__top">
      <h3 class="sidenav__area--h3">Admin tools</h3>
      <div class="sidenav__toplabels">
        <div
          class="sidenav__toplabel"
          v-bind:class="{
            current: current_route.includes('overview'),
          }"
          @click="open_page('/overview')"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                :opacity="current_route.includes('overview') ? '1' : '0.4'"
                d="M7.24487 14.7815L10.238 10.8914L13.6522 13.5733L16.5813 9.79297"
                :stroke="
                  current_route.includes('overview') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                :opacity="current_route.includes('overview') ? '1' : '0.4'"
                cx="19.9954"
                cy="4.20027"
                r="1.9222"
                :stroke="
                  current_route.includes('overview') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                :opacity="current_route.includes('overview') ? '1' : '0.4'"
                d="M14.9245 3.12012H7.65679C4.64535 3.12012 2.77808 5.25284 2.77808 8.26428V16.3467C2.77808 19.3581 4.60874 21.4817 7.65679 21.4817H16.2609C19.2724 21.4817 21.1396 19.3581 21.1396 16.3467V9.30776"
                :stroke="
                  current_route.includes('overview') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
          <span>Overview</span>
        </div>
        <div
          class="sidenav__toplabel"
          @click="open_page('/products')"
          v-bind:class="{
            current: current_route.includes('products'),
          }"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g :opacity="current_route.includes('products') ? '1' : '0.4'">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.0136 22H8.66579C5.59943 22 3.24703 20.8925 3.91522 16.4348L4.69325 10.3936C5.10515 8.16937 6.52392 7.31812 7.76877 7.31812H17.9473C19.2104 7.31812 20.5468 8.23345 21.0228 10.3936L21.8008 16.4348C22.3683 20.3891 20.08 22 17.0136 22Z"
                  :stroke="
                    current_route.includes('products') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.151 7.09848C17.151 4.71241 15.2167 2.77812 12.8306 2.77812V2.77812C11.6816 2.77325 10.578 3.22628 9.76381 4.03703C8.94963 4.84778 8.49193 5.94947 8.49194 7.09848V7.09848"
                  :stroke="
                    current_route.includes('products') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7962 11.602H15.7505"
                  :stroke="
                    current_route.includes('products') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.96566 11.602H9.91989"
                  :stroke="
                    current_route.includes('products') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g></svg
          ></span>
          <span>Products</span>
        </div>
      </div>
      <div
        class="sidenav__toplabel"
        @click="open_page('/activity')"
        v-bind:class="{
          current: current_route.includes('activity'),
        }"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g :opacity="current_route.includes('activity') ? '1' : '0.4'">
              <path
                d="M7.37145 10.2017V17.0618"
                :stroke="
                  current_route.includes('activity') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0382 6.91919V17.0619"
                :stroke="
                  current_route.includes('activity') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6285 13.8269V17.0619"
                :stroke="
                  current_route.includes('activity') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
                :stroke="
                  current_route.includes('activity') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g></svg
        ></span>
        <span>Activity</span>
      </div>
      <div
        class="sidenav__toplabel"
        @click="open_page('/customer')"
        v-bind:class="{
          current: current_route.includes('customer'),
        }"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <g :opacity="current_route.includes('customer') ? '1' : '0.4'">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.27002 13.9519L8.8627 8.8627L13.9519 7.27002L12.3593 12.3593L7.27002 13.9519Z"
                :stroke="
                  current_route.includes('customer') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="10.611"
                cy="10.611"
                r="9.61098"
                :stroke="
                  current_route.includes('customer') ? '#fff' : '#11142D'
                "
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g></svg
        ></span>
        <span>Customer</span>
      </div>
      <div
        class="sidenav__toplabel"
        @click="open_page('/wallet')"
        v-bind:class="{
          current: current_route.includes('wallet'),
        }"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              :opacity="current_route.includes('wallet') ? '1' : '0.4'"
              d="M21.6389 14.3957H17.5906C16.1042 14.3948 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01409 17.5906 9.01318H21.6389"
              :stroke="current_route.includes('wallet') ? '#fff' : '#11142D'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              :opacity="current_route.includes('wallet') ? '1' : '0.4'"
              d="M18.0485 11.6429H17.7369"
              :stroke="current_route.includes('wallet') ? '#fff' : '#11142D'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              :opacity="current_route.includes('wallet') ? '1' : '0.4'"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z"
              :stroke="current_route.includes('wallet') ? '#fff' : '#11142D'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              :opacity="current_route.includes('wallet') ? '1' : '0.4'"
              d="M7.03564 7.5382H12.4346"
              :stroke="current_route.includes('wallet') ? '#fff' : '#11142D'"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
        <span>Wallet</span>
      </div>
      <div
        class="sidenav__toplabel"
        @click="open_page('/transactions')"
        v-bind:class="{
          current: current_route.includes('transactions'),
        }"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              :opacity="current_route.includes('transactions') ? '1' : '0.4'"
              d="M15.7161 16.2234H8.49609"
              :stroke="
                current_route.includes('transactions') ? '#fff' : '#11142D'
              "
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              :opacity="current_route.includes('transactions') ? '1' : '0.4'"
              d="M15.7161 12.0369H8.49609"
              :stroke="
                current_route.includes('transactions') ? '#fff' : '#11142D'
              "
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              :opacity="current_route.includes('transactions') ? '1' : '0.4'"
              d="M11.2511 7.86011H8.49609"
              :stroke="
                current_route.includes('transactions') ? '#fff' : '#11142D'
              "
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              :opacity="current_route.includes('transactions') ? '1' : '0.4'"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.9085 2.74976C15.9085 2.74976 8.23149 2.75376 8.21949 2.75376C5.45949 2.77076 3.75049 4.58676 3.75049 7.35676V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.35676C20.4155 4.57276 18.6925 2.74976 15.9085 2.74976Z"
              :stroke="
                current_route.includes('transactions') ? '#fff' : '#11142D'
              "
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
        <span>Transactions</span>
      </div>
      <div
        class="sidenav__toplabel"
        @click="open_page('/merchants')"
        v-bind:class="{
          current: current_route.includes('merchants'),
        }"
      >
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23"
            viewBox="0 0 24 23"
            :stroke="current_route.includes('merchants') ? '#fff' : '#11142D'"
          >
            <path
              :opacity="current_route.includes('merchants') ? '1' : '0.4'"
              d="M11.9915 0.439791C11.9167 0.440935 11.8432 0.459555 11.7768 0.494166L1.69684 5.77417C1.61925 5.81491 1.55429 5.87611 1.50901 5.95114C1.46373 6.02616 1.43985 6.11216 1.43996 6.19979V7.63979C1.43997 7.76709 1.49055 7.88917 1.58056 7.97919C1.67058 8.0692 1.79266 8.11978 1.91996 8.11979H3.35621V16.7598H2.39996C2.27266 16.7598 2.15058 16.8104 2.06056 16.9004C1.97055 16.9904 1.91997 17.1125 1.91996 17.2398V18.1998H1.43996C1.31266 18.1998 1.19058 18.2504 1.10056 18.3404C1.01055 18.4304 0.959974 18.5525 0.959961 18.6798V20.1198C0.959974 20.2471 1.01055 20.3692 1.10056 20.4592C1.19058 20.5492 1.31266 20.5998 1.43996 20.5998H11.52V19.6398H1.91996V19.1598H2.39996C2.52726 19.1598 2.64934 19.1092 2.73936 19.0192C2.82937 18.9292 2.87995 18.8071 2.87996 18.6798V17.7198H3.78184C3.80112 17.7222 3.82053 17.7235 3.83996 17.7235H5.75996C5.77846 17.7233 5.79692 17.7221 5.81527 17.7198H8.58184C8.60112 17.7222 8.62053 17.7235 8.63996 17.7235H10.56C10.5785 17.7233 10.5969 17.7221 10.6153 17.7198H11.52V16.7598H11.0437V8.11979H12.9562V13.6089C13.2529 13.4773 13.5791 13.4017 13.9237 13.4007V8.12354H14.8762V13.3998H15.8437V8.11979H17.7562V13.3998H18.7237V8.12354H19.6762V13.3998H20.6437V8.11979H22.08C22.2073 8.11978 22.3293 8.0692 22.4194 7.97919C22.5094 7.88917 22.5599 7.76709 22.56 7.63979V6.19979C22.5601 6.11216 22.5362 6.02616 22.4909 5.95114C22.4456 5.87611 22.3807 5.81491 22.3031 5.77417L12.2231 0.494166C12.1517 0.456902 12.0721 0.438203 11.9915 0.439791ZM12 1.4626L21.6 6.49042V7.15979H20.1787C20.1721 7.15952 20.1666 7.15604 20.16 7.15604H18.24C18.2333 7.15604 18.2278 7.15952 18.2212 7.15979H15.3787C15.3721 7.15952 15.3666 7.15604 15.36 7.15604H13.44C13.4333 7.15604 13.4278 7.15952 13.4212 7.15979H10.6181C10.5988 7.15737 10.5794 7.15612 10.56 7.15604H8.63996C8.62147 7.15623 8.603 7.15748 8.58465 7.15979H5.81809C5.7988 7.15737 5.77939 7.15612 5.75996 7.15604H3.83996C3.82147 7.15623 3.803 7.15748 3.78465 7.15979H2.39996V6.49042L12 1.4626ZM12 2.83979C10.9453 2.83979 10.08 3.70509 10.08 4.75979C10.08 5.81449 10.9453 6.67979 12 6.67979C13.0547 6.67979 13.92 5.81449 13.92 4.75979C13.92 3.70509 13.0547 2.83979 12 2.83979ZM12 3.79979C12.5358 3.79979 12.96 4.22391 12.96 4.75979C12.96 5.29567 12.5358 5.71979 12 5.71979C11.4641 5.71979 11.04 5.29567 11.04 4.75979C11.04 4.22391 11.4641 3.79979 12 3.79979ZM6.24371 8.11979H8.15621V16.7598H6.24371V8.11979ZM4.32371 8.12354H5.27621V16.756H4.32371V8.12354ZM9.12371 8.12354H10.0762V16.756H9.12371V8.12354ZM13.92 14.3598C13.1602 14.3598 12.48 14.9468 12.48 15.7351V20.6645C12.48 21.4242 13.1159 22.0398 13.8759 22.0398H22.124C22.8835 22.0398 23.5207 21.4236 23.52 20.6626V15.7351C23.52 14.9471 22.8399 14.3598 22.08 14.3598H13.92ZM13.92 15.3198H22.08C22.3328 15.3198 22.56 15.5343 22.56 15.7351V20.6635C22.5602 20.8943 22.3764 21.0798 22.124 21.0798H13.8759C13.6231 21.0798 13.44 20.8936 13.44 20.6645V15.7351C13.44 15.5346 13.6679 15.3198 13.92 15.3198ZM19.995 16.2798C19.8207 16.2798 19.68 16.4087 19.68 16.5676V17.432C19.68 17.5909 19.8212 17.7198 19.995 17.7198H21.2559C21.4301 17.7198 21.5714 17.5909 21.5718 17.432V16.5676C21.5718 16.4087 21.4301 16.2798 21.2559 16.2798H19.995ZM14.88 18.6798C14.8164 18.6789 14.7532 18.6906 14.6942 18.7144C14.6352 18.7381 14.5814 18.7733 14.5361 18.818C14.4908 18.8626 14.4549 18.9158 14.4303 18.9745C14.4058 19.0332 14.3931 19.0962 14.3931 19.1598C14.3931 19.2234 14.4058 19.2864 14.4303 19.3451C14.4549 19.4037 14.4908 19.457 14.5361 19.5016C14.5814 19.5463 14.6352 19.5815 14.6942 19.6052C14.7532 19.6289 14.8164 19.6407 14.88 19.6398H15.36C15.4236 19.6407 15.4867 19.6289 15.5457 19.6052C15.6048 19.5815 15.6585 19.5463 15.7038 19.5016C15.7491 19.457 15.7851 19.4037 15.8096 19.3451C15.8342 19.2864 15.8468 19.2234 15.8468 19.1598C15.8468 19.0962 15.8342 19.0332 15.8096 18.9745C15.7851 18.9158 15.7491 18.8626 15.7038 18.818C15.6585 18.7733 15.6048 18.7381 15.5457 18.7144C15.4867 18.6906 15.4236 18.6789 15.36 18.6798H14.88ZM16.8 18.6798C16.7364 18.6789 16.6732 18.6906 16.6142 18.7144C16.5552 18.7381 16.5014 18.7733 16.4561 18.818C16.4108 18.8626 16.3749 18.9158 16.3503 18.9745C16.3258 19.0332 16.3131 19.0962 16.3131 19.1598C16.3131 19.2234 16.3258 19.2864 16.3503 19.3451C16.3749 19.4037 16.4108 19.457 16.4561 19.5016C16.5014 19.5463 16.5552 19.5815 16.6142 19.6052C16.6732 19.6289 16.7364 19.6407 16.8 19.6398H17.28C17.3436 19.6407 17.4067 19.6289 17.4657 19.6052C17.5248 19.5815 17.5785 19.5463 17.6238 19.5016C17.6691 19.457 17.7051 19.4037 17.7296 19.3451C17.7542 19.2864 17.7668 19.2234 17.7668 19.1598C17.7668 19.0962 17.7542 19.0332 17.7296 18.9745C17.7051 18.9158 17.6691 18.8626 17.6238 18.818C17.5785 18.7733 17.5248 18.7381 17.4657 18.7144C17.4067 18.6906 17.3436 18.6789 17.28 18.6798H16.8ZM18.72 18.6798C18.6564 18.6789 18.5932 18.6906 18.5342 18.7144C18.4752 18.7381 18.4214 18.7733 18.3761 18.818C18.3308 18.8626 18.2949 18.9158 18.2703 18.9745C18.2458 19.0332 18.2331 19.0962 18.2331 19.1598C18.2331 19.2234 18.2458 19.2864 18.2703 19.3451C18.2949 19.4037 18.3308 19.457 18.3761 19.5016C18.4214 19.5463 18.4752 19.5815 18.5342 19.6052C18.5932 19.6289 18.6564 19.6407 18.72 19.6398H19.2C19.2636 19.6407 19.3267 19.6289 19.3857 19.6052C19.4448 19.5815 19.4985 19.5463 19.5438 19.5016C19.5891 19.457 19.6251 19.4037 19.6496 19.3451C19.6742 19.2864 19.6868 19.2234 19.6868 19.1598C19.6868 19.0962 19.6742 19.0332 19.6496 18.9745C19.6251 18.9158 19.5891 18.8626 19.5438 18.818C19.4985 18.7733 19.4448 18.7381 19.3857 18.7144C19.3267 18.6906 19.2636 18.6789 19.2 18.6798H18.72ZM20.64 18.6798C20.5764 18.6789 20.5132 18.6906 20.4542 18.7144C20.3952 18.7381 20.3414 18.7733 20.2961 18.818C20.2508 18.8626 20.2149 18.9158 20.1903 18.9745C20.1658 19.0332 20.1531 19.0962 20.1531 19.1598C20.1531 19.2234 20.1658 19.2864 20.1903 19.3451C20.2149 19.4037 20.2508 19.457 20.2961 19.5016C20.3414 19.5463 20.3952 19.5815 20.4542 19.6052C20.5132 19.6289 20.5764 19.6407 20.64 19.6398H21.12C21.1836 19.6407 21.2467 19.6289 21.3057 19.6052C21.3648 19.5815 21.4185 19.5463 21.4638 19.5016C21.5091 19.457 21.5451 19.4037 21.5696 19.3451C21.5942 19.2864 21.6068 19.2234 21.6068 19.1598C21.6068 19.0962 21.5942 19.0332 21.5696 18.9745C21.5451 18.9158 21.5091 18.8626 21.4638 18.818C21.4185 18.7733 21.3648 18.7381 21.3057 18.7144C21.2467 18.6906 21.1836 18.6789 21.12 18.6798H20.64Z"
              :fill="current_route.includes('merchants') ? '#fff' : '#11142D'"
            /></svg
        ></span>
        <span>Merchants</span>
      </div>
    </div>
    <div class="sidenav__area sidenav__bottom">
      <h3 class="sidenav__area--h3">Insights</h3>
      <div class="sidenav__bottomlabels">
        <div
          class="sidenav__bottomlabel"
          @click="open_page('/support')"
          v-bind:class="{
            current: current_route.includes('support'),
          }"
        >
          <div class="sidenav__bottomlabel--left">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  :opacity="current_route.includes('support') ? '1' : '0.4'"
                  d="M17.2678 8.56104L13.0024 11.9953C12.1952 12.6282 11.0636 12.6282 10.2564 11.9953L5.95435 8.56104"
                  :stroke="
                    current_route.includes('support') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  :opacity="current_route.includes('support') ? '1' : '0.4'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z"
                  :stroke="
                    current_route.includes('support') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
            <span>Support</span>
          </div>
          <div class="sidenav__bottomlabel--right"><span>18</span></div>
        </div>
        <div
          class="sidenav__bottomlabel"
          @click="open_page('/notifications')"
          v-bind:class="{
            current: current_route.includes('notifications'),
          }"
        >
          <div class="sidenav__bottomlabel--left">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  :opacity="
                    current_route.includes('notifications') ? '1' : '0.4'
                  "
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.50083 12.7871V12.5681C1.53295 11.9202 1.7406 11.2925 2.10236 10.7496C2.7045 10.0975 3.1167 9.29831 3.29571 8.43598C3.29571 7.7695 3.29571 7.0935 3.35393 6.42703C3.65469 3.21842 6.82728 1 9.96106 1H10.0387C13.1725 1 16.345 3.21842 16.6555 6.42703C16.7137 7.0935 16.6555 7.7695 16.704 8.43598C16.8854 9.3003 17.2972 10.1019 17.8974 10.7591C18.2618 11.2972 18.4698 11.9227 18.4989 12.5681V12.7776C18.5206 13.648 18.2208 14.4968 17.6548 15.1674C16.907 15.9515 15.8921 16.4393 14.8024 16.5384C11.607 16.8812 8.38303 16.8812 5.18762 16.5384C4.09914 16.435 3.08576 15.9479 2.33521 15.1674C1.778 14.4963 1.48224 13.6526 1.50083 12.7871Z"
                  :stroke="
                    current_route.includes('notifications') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
            <span>Notifications</span>
          </div>
          <div class="sidenav__bottomlabel--right"><span>6</span></div>
        </div>
        <div
          class="sidenav__bottomlabel"
          @click="open_page('/setting')"
          v-bind:class="{
            current: current_route.includes('setting'),
          }"
        >
          <div class="sidenav__bottomlabel--left">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  :opacity="current_route.includes('setting') ? '1' : '0.4'"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.8067 7.62361L20.1842 6.54352C19.6577 5.6296 18.4907 5.31432 17.5755 5.83872V5.83872C17.1399 6.09534 16.6201 6.16815 16.1307 6.04109C15.6413 5.91402 15.2226 5.59752 14.9668 5.16137C14.8023 4.88415 14.7139 4.56839 14.7105 4.24604V4.24604C14.7254 3.72922 14.5304 3.2284 14.17 2.85767C13.8096 2.48694 13.3145 2.27786 12.7975 2.27808H11.5435C11.037 2.27807 10.5513 2.47991 10.194 2.83895C9.83669 3.19798 9.63717 3.68459 9.63961 4.19112V4.19112C9.6246 5.23693 8.77248 6.07681 7.72657 6.0767C7.40421 6.07336 7.08846 5.98494 6.81123 5.82041V5.82041C5.89606 5.29601 4.72911 5.61129 4.20254 6.52522L3.53435 7.62361C3.00841 8.53639 3.3194 9.70261 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.8891C5.18653 12.5725 4.8219 13.2041 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1454V16.1454L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6516 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6717C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5001 14.7055 20.6491 14.7105 19.5962V19.5962C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6807 16.6236 17.6831C16.9452 17.6917 17.2596 17.7798 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1544 20.1476 17.2438V17.2438L20.8067 16.1454C21.0618 15.7075 21.1318 15.186 21.0012 14.6964C20.8706 14.2067 20.5502 13.7894 20.111 13.5367V13.5367C19.6718 13.284 19.3514 12.8666 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.928C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70289 21.3264 8.54349 20.8067 7.63277V7.63277V7.62361Z"
                  :stroke="
                    current_route.includes('setting') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  :opacity="current_route.includes('setting') ? '1' : '0.4'"
                  cx="12.175"
                  cy="11.8891"
                  r="2.63616"
                  :stroke="
                    current_route.includes('setting') ? '#fff' : '#11142D'
                  "
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
            <span>Settings</span>
          </div>
        </div>
        <div class="sidenav__bottomlabel" @click="logout">
          <div class="sidenav__bottomlabel--left">
            <span
              v-bind:style="{
                height: '2rem',
                width: '2rem',
              }"
            >
              <img src="~/assets/svg/off-btn.svg" alt="" />
            </span>
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidenav",
  data() {
    return {
      token: null,
      admintools: [
        {
          name: "Overview",
          page: "/overview",
          page_name: "overview",
        },
        {
          name: "Products",
          page: "/products",
          page_name: "products",
        },
        {
          name: "Activity",
          page: "/activity",
          page_name: "activity",
        },
        {
          name: "Customer",
          page: "/customer",
          page_name: "customer",
        },
        {
          name: "Wallet",
          page: "/wallet",
          page_name: "wallet",
        },
        {
          name: "Transactions",
          page: "/transactions",
          page_name: "transactions",
        },
        {
          name: "Merchants",
          page: "/merchants",
          page_name: "merchants",
        },
      ],
      insights: [
        {
          name: "Support",
          page: "/support",
          page_name: "support",
        },
        {
          name: "Notifications",
          page: "/notifications",
          page_name: "notifications",
        },
        {
          name: "Settings",
          page: "/setting",
          page_name: "setting",
        },
      ],
    };
  },
  mounted() {
    const token = localStorage.getItem("hebhukvyaew");
    if (token) {
      this.token = token;
    }
  },
  watch: {
    adminToken(newValue) {
      if (newValue !== null) {
        const token = localStorage.getItem("hebhukvyaew");
        this.token = token;
      }
    },
  },
  computed: {
    current_route() {
      return this.$route.name;
    },
    adminToken() {
      const token = this.$store.getters.adminToken;
      return token;
    },
  },
  methods: {
    open_page(page) {
      this.$router.push(page);
    },
    logout() {
      //this.$router.push("/");
      this.$store.dispatch("authLogOut");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 26rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  background: #e5e5e5;

  &__logo {
    height: 8rem;
    width: 8rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  &__top {
  }

  &__bottom {
    margin-top: 4rem;
  }

  &__area {
    width: 16rem;

    &--h3 {
      opacity: 0.7;
      font-size: 1.3rem;
      font-weight: 500;
      margin-bottom: 1.8rem;
    }
  }

  &__toplabel {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.4rem;
    color: #11142d;
    margin-bottom: 2rem;
    cursor: pointer;
    position: relative;

    height: 3rem;

    & span {
      display: inline-block;

      &:nth-child(2) {
        opacity: 0.7;
        margin-left: 2rem;
      }
    }

    &.current {
      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #159183;
        transform: scaleX(1.2) scaleY(1.7);
        border-radius: 0.5rem;
      }

      color: #fff;
      opacity: 1 !important;

      & span {
        display: inline-block;

        &:nth-child(2) {
          opacity: 1;
          margin-left: 2rem;
        }
      }
    }
  }

  &__bottomlabel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 1.4rem;
    color: #11142d;
    position: relative;
    margin-bottom: 2.5rem;
    cursor: pointer;
    height: 3rem;

    &.current {
      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #159183;
        transform: scaleX(1.2) scaleY(1.7);
        border-radius: 0.5rem;
      }

      color: #fff;
      opacity: 1 !important;

      & span {
        &:nth-child(2) {
          opacity: 1;
          margin-left: 2rem;
        }
      }
    }

    &.current {
      background: #159183;
      color: #fff;
      opacity: 1 !important;
      border-radius: 0.4rem;

      & span {
        &:nth-child(2) {
          opacity: 1;
          margin-left: 2rem;
        }
      }
    }

    &--left {
      display: flex;
      align-items: center;
    }

    & span {
      display: inline-block;

      &:nth-child(2) {
        opacity: 0.7;
        margin-left: 2rem;
      }
    }

    &--right {
      display: flex;
      align-items: center;

      & span {
        border-radius: 100%;
        height: 2rem;
        width: 2rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0049c6;
        color: #fff;

        font-size: 1rem;
      }
    }
  }
}
</style>