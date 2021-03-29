<template>
  <div class="addproduct">
    <div class="addproduct__body">
      <div class="addproduct__nav">
        <div
          class="addproduct__nav--item"
          v-for="(item, index) in nav"
          :key="index"
        >
          <div class="addproduct__nav--top">
            <div
              class="addproduct__nav--heading"
              v-bind:class="{
                last: index === 3,
                active: index <= pageTracker,
              }"
            >
              {{ item.name }}
            </div>
            <span
              v-bind:class="{
                active: index <= pageTracker,
              }"
            ></span>
          </div>
          <div class="addproduct__nav--description">{{ item.description }}</div>
        </div>
      </div>
      <div class="addproduct__content">
        <h1 class="addproduct__h1">{{ header }}</h1>
        <div class="addproduct__pages">
          <div class="addproduct__form">
            <form
              class="addproduct__form--information"
              v-if="header === 'Add Product Information'"
            >
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Product Name</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="name"
                      v-bind:style="{
                        width: '60rem',
                      }"
                      :placeholder="''"
                      type="text"
                    />
                  </div>
                </div>
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Product Ticker</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="ticker"
                      v-bind:style="{
                        width: '30rem',
                      }"
                      :placeholder="''"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="addproduct__form--formarea">
                <div
                  class="addproduct__form--flexarea addproduct__form--width100"
                >
                  <span class="addproduct__form--label">Description</span>
                  <div class="addproduct__form--descrip">
                    <div
                      v-bind:style="{
                        height: '28rem',
                      }"
                    >
                      <quill-editor
                        ref="myQuillEditor"
                        v-model="description"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                        @change="onEditorChange($event)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Category</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="category"
                      v-bind:style="{
                        width: '60rem',
                      }"
                      :placeholder="''"
                      type="text"
                    />
                  </div>
                </div>
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Tags</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="tags"
                      v-bind:style="{
                        width: '38rem',
                      }"
                      :placeholder="''"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </form>

            <form
              class="addproduct__form--information"
              v-if="header === 'Upload Product Icon'"
            >
              <div class="addproduct__form--formarea">
                <input
                  type="file"
                  class="addproduct__form--uploadinput"
                  id="addproduct__form--imgupload"
                  accept="image/*"
                  @change="handleImgUpload"
                />
                <label
                  for="addproduct__form--imgupload"
                  class="addproduct__form--uploadlabel"
                >
                  <figure class="addproduct__form--upload">
                    <img
                      v-if="!productIcon"
                      src="~/assets/products/upload.png"
                      alt=""
                    />
                    <img v-if="productIcon" :src="productIcon" alt="" />
                  </figure>
                </label>
              </div>
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--uploadset">
                  <div class="addproduct__form--uploadsettop">
                    <span>image</span>
                    <span>position</span>
                    <span>cover</span>
                  </div>
                  <div class="addproduct__form--uploadsetbottom">
                    <span></span>
                    <span>1</span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </form>

            <form
              class="addproduct__form--information"
              v-if="header === 'Pricing'"
            >
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Unit Price</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="unit_price"
                      v-bind:style="{
                        width: '60rem',
                      }"
                      :placeholder="''"
                      type="text"
                    />
                  </div>
                </div>
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Measurement</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="measurment"
                      v-bind:style="{
                        width: '30rem',
                      }"
                      :placeholder="''"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Tax Rule</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="tax"
                      v-bind:style="{
                        width: '60rem',
                      }"
                      :placeholder="'tax'"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div v-if="header === 'Coverage'">
              <form class="addproduct__form--information">
                <div
                  class="addproduct__coveragearea"
                  v-for="(item, covindex) in coverageInputAreas"
                  :key="covindex"
                >
                  <div class="addproduct__form--formarea">
                    <div class="addproduct__form--flexarea">
                      <span class="addproduct__form--label">State</span>
                      <div class="addproduct__form--input">
                        <div
                          class="addproduct__form--dropdowncontent"
                          v-bind:style="{
                            width: '60rem',
                          }"
                        >
                          <span
                            v-for="(state, index) in item.state"
                            :key="index"
                            >{{ state }}</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="addproduct__form--flexarea">
                      <span class="addproduct__form--label">City</span>
                      <div class="addproduct__form--input">
                        <div
                          class="addproduct__form--dropdowncontent"
                          v-bind:style="{
                            width: '30rem',
                          }"
                        >
                          <span
                            v-for="(city, index) in item.cities"
                            :key="index"
                            >{{ city }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="addproduct__coveragearea--btn">
                    <button
                      class="addproduct__btn addproduct__coveragearea--remove"
                      @click.prevent.stop="removeCoverage(covindex)"
                    >
                      remove
                    </button>
                  </div>
                </div>

                <div
                  v-bind:style="{
                    padding: '.5rem 0',
                  }"
                ></div>

                <div class="addproduct__form--formarea">
                  <div
                    class="addproduct__form--flexarea"
                    v-click-outside="stateClickOutside"
                  >
                    <span class="addproduct__form--label">State</span>
                    <div
                      class="addproduct__form--input"
                      @click="stateDropdown = true"
                    >
                      <div
                        class="addproduct__form--dropdowncontent"
                        v-bind:style="{
                          width: '60rem',
                        }"
                      >
                        <span
                          v-for="(item, index) in computedStates"
                          :key="index"
                          >{{ item }}</span
                        >
                      </div>
                    </div>
                    <div
                      class="addproduct__form--dropdown"
                      v-if="stateDropdown"
                    >
                      <span
                        v-for="(item, index) in states"
                        :key="index"
                        @click.stop="setStateString(item.name, item.slug)"
                      >
                        {{ item.name }}
                      </span>
                    </div>
                  </div>

                  <div
                    class="addproduct__form--flexarea"
                    v-click-outside="cityClickOutside"
                  >
                    <span class="addproduct__form--label">City</span>
                    <div
                      class="addproduct__form--input"
                      @click="cityDropdown = true"
                    >
                      <div
                        class="addproduct__form--dropdowncontent"
                        v-bind:style="{
                          width: '30rem',
                        }"
                      >
                        <span
                          v-for="(item, index) in computedCities"
                          :key="index"
                          >{{ item }}</span
                        >
                      </div>
                    </div>
                    <div
                      class="addproduct__form--dropdown"
                      v-if="cityDropdown && cities !== null"
                    >
                      <span
                        v-for="(item, index) in cities"
                        :key="index"
                        @click.stop="setCityString(item.name, item.slug)"
                      >
                        {{ item.name }}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  v-bind:style="{
                    padding: '.5rem 0',
                  }"
                ></div>

                <div class="">
                  <button
                    class="addproduct__btn addproduct__btn--colored"
                    @click.prevent="addCoverageOption"
                  >
                    Add coverage
                  </button>
                </div>

                <div
                  v-bind:style="{
                    padding: '.5rem 0',
                  }"
                ></div>

                <h1 class="addproduct__h1">{{ "Shipping" }}</h1>

                <div class="addproduct__form--formarea">
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Width</span>
                    <div class="addproduct__form--input">
                      <input
                        class="inputfield__input"
                        v-model="value"
                        v-bind:style="{
                          width: '60rem',
                        }"
                        :placeholder="'Width'"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Height</span>
                    <div class="addproduct__form--input">
                      <input
                        class="inputfield__input"
                        v-model="value"
                        v-bind:style="{
                          width: '30rem',
                        }"
                        :placeholder="'Height'"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div class="addproduct__form--formarea">
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Depth</span>
                    <div class="addproduct__form--input">
                      <input
                        class="inputfield__input"
                        v-model="value"
                        v-bind:style="{
                          width: '60rem',
                        }"
                        :placeholder="'Depth'"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Weight</span>
                    <div class="addproduct__form--input">
                      <input
                        class="inputfield__input"
                        v-model="value"
                        v-bind:style="{
                          width: '30rem',
                        }"
                        :placeholder="'Weight'"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div class="addproduct__form--formarea">
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Shipping Fee</span>
                    <div class="addproduct__form--input">
                      <input
                        class="inputfield__input"
                        v-model="shipping_fee"
                        v-bind:style="{
                          width: '60rem',
                        }"
                        :placeholder="'Shipping Fees'"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="addproduct__btns">
            <button
              class="addproduct__btn addproduct__btn--gray"
              @click="prevPage"
            >
              Cancel
            </button>
            <button
              class="addproduct__btn addproduct__btn--colored"
              @click="nextPage"
            >
              {{ header === "Coverage" ? saveBtnLabel : "Save and Proceed" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sc from "states-cities-db";
import vClickOutside from "v-click-outside";

export default {
  data() {
    return {
      chosenstates: "",
      tempstate: "",
      tempcity: "",
      addingProduct: false,
      header: "Add Product Information",
      productIcon: null,
      name: null,
      ticker: null,
      description: null,
      category: null,
      tags: null,
      unit_price: null,
      shipping_fee: null,
      tax: null,
      city: "",
      state: "",
      measurment: null,
      file: null,
      states: sc.getStates("nigeria"),
      cities: null,
      editorOption: {
        // Some Quill options...
      },
      pageTracker: 0,
      value: "",
      nav: [
        {
          name: "Step One",
          description: "Product Information",
          header: "Add Product Information",
        },
        {
          name: "Step Two",
          description: "Add Images",
          header: "Upload Product Icon",
        },
        {
          name: "Step Three",
          description: "Product Pricing",
          header: "Pricing",
        },
        {
          name: "Step Four",
          description: "Coverage and Shipping",
          header: "Coverage",
        },
      ],
      stateDropdown: false,
      cityDropdown: false,
      coverageInputAreas: [],
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    stateClickOutside(event) {
      this.stateDropdown = false;
    },
    cityClickOutside(event) {
      this.cityDropdown = false;
    },
    setStateString(option, slug) {
      const currentState = this.state;
      this.state = currentState.length ? `${currentState},${option}` : option;

      this.tempstate = option;
      this.stateDropdown = false;

      this.cities = sc.getCities(slug);
    },
    setCityString(option, slug) {
      const currentCity = this.city;
      const tempCity = this.tempcity;
      this.city = currentCity.length ? `${currentCity},${option}` : option;
      this.tempcity = tempCity.length ? `${tempCity},${option}` : option;
      this.cityDropdown = false;
    },
    addCoverageOption() {
      if (
        !this.tempstate.length ||
        !this.tempcity.length ||
        this.chosenstates.includes(this.tempstate)
      ) {
        return;
      }

      const coverageObject = {
        state: [...new Set(this.tempstate.split(","))],
        cities: [...new Set(this.tempcity.split(","))],
      };

      const coverageInputAreas = this.coverageInputAreas;
      coverageInputAreas.push(coverageObject);
      this.coverageInputAreas = coverageInputAreas;
      this.chosenstates = this.state;
      this.tempstate = "";
      this.tempcity = "";
    },
    removeCoverage(itemindex) {
      console.log(itemindex);
      const coverageInputAreas = this.coverageInputAreas;
      const filt = coverageInputAreas.filter(
        (cov, index) => index !== itemindex
      );

      const item = coverageInputAreas[itemindex];

      const state = [...new Set(this.state.split(","))];
      const filtsta = state.filter(
        (sta) => sta.trim() !== item.state[0].trim()
      );
      this.state = filtsta.toString();

      const city = [...new Set(this.city.split(","))];
      const filtcit = city.filter(
        (cit) => cit.trim() !== item.cities[0].trim()
      );
      this.city = filtcit.toString();

      this.coverageInputAreas = filt;
    },
    handleImgUpload(event) {
      const files = event.target.files;
      const FilesArray = Array.from(files);
      const file = FilesArray[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.productIcon = reader.result;
        this.file = file;
      };
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor changed here");
    },
    nextPage() {
      if (this.pageTracker !== this.nav.length - 1) {
        let pageTracker = this.pageTracker;
        pageTracker += 1;
        this.pageTracker = pageTracker;
        this.header = this.nav[this.pageTracker].header;
      } else {
        this.submitProduct();
      }
    },
    prevPage() {
      if (this.pageTracker !== 0) {
        let pageTracker = this.pageTracker;
        pageTracker -= 1;
        this.pageTracker = pageTracker;
        this.header = this.nav[this.pageTracker].header;
      }
    },
    submitProduct() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("ticker", this.ticker);
      formData.append("description", this.description);
      formData.append("merchant_id", "2");
      formData.append("unit_price", this.unit_price);
      formData.append("measurment", this.measurment);
      formData.append("image", this.file);
      formData.append("shipping_fee", this.shipping_fee);
      formData.append("tax", this.tax);
      formData.append(
        "coverage",
        JSON.stringify({
          city: this.city,
          state: this.state,
        })
      );
      formData.append("tags", JSON.stringify(this.tags.split(",")));

      this.addingProduct = true;

      this.$store
        .dispatch("submitProduct", formData)
        .then((res) => {
          console.log(res);
          this.addingProduct = false;
          this.$store.dispatch(
            "currentNotification",
            "Product successfully added"
          );
          this.$router.push("/products");
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data);
        });
    },
  },
  mounted() {
    console.log(this.states);
  },
  computed: {
    computedStates() {
      return this.tempstate.length
        ? [...new Set(this.tempstate.split(","))]
        : [];
    },
    computedCities() {
      return this.tempcity.length ? [...new Set(this.tempcity.split(","))] : [];
    },
    saveBtnLabel() {
      return this.addingProduct ? "Adding Product..." : "Add New Product";
    },
  },
  middleware: "auth",
};
</script>

<style lang="scss">
.inputfield {
  position: relative;
  height: 100%;

  &__input {
    background: #ffffff;
    border: 1px solid #f3f4f6;
    box-sizing: border-box;
    border-radius: 0.6rem;
    height: 100%;
    padding: 1.5rem 2rem;
    cursor: pointer;

    &:focus {
      outline: none;
      border: 1px solid $color-primary;
    }

    &::-webkit-input-placeholder {
      color: $color-gray;
    }
  }

  &__dropdowns {
    position: absolute;
    width: 100%;
    left: 0;
    border: 1px solid #f3f4f6;
    background: #fff;
    z-index: 3;
    overflow: scroll;
    overflow-x: hidden;
    height: 20rem;
    bottom: -20.1rem !important;
  }

  &__dropicon {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 2rem; */
    padding-right: 2rem;
  }

  &__drop {
    position: relative;
    font-weight: 500;
    font-size: 1.4rem;
    color: #2f3147;
    background: #ffffff;
    border-bottom: 1px solid #f3f4f6;
    letter-spacing: 1.2px;
    padding: 0.5rem 2rem;
    z-index: 3;
    cursor: pointer;
    height: 4.2rem;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;

    &:hover {
      background: rgba(178, 190, 195, 0.1);
    }
  }
}

.addproduct {
  padding-left: 21rem;

  &__body {
    padding: 15rem 4.5rem 0 10rem;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 2.4rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.1);
    height: 18rem;
    padding: 3rem 6rem;
    align-items: center;

    &--top {
      display: flex;
      align-items: center;
    }

    &--item {
      width: 28rem;

      &:nth-child(4) {
        width: auto;
      }
    }

    &--heading {
      color: $color-gray;
      font-size: 1.65rem;
      position: relative;
      margin-bottom: 0.5rem;
      font-weight: 600;
      margin-right: 3rem;

      &.active {
        color: $color-primary;
      }

      & + span {
        width: 15rem;
        height: 2px;
        background: #e4e4e4;
        display: inline-block;
        border-radius: 3rem;

        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: $color-primary;
          transition: all 0.5s ease-in;
        }

        &.active {
          &::before {
            width: 100%;
          }
        }
      }

      &.last {
        & + span {
          display: none;
        }
      }
    }

    &--description {
      color: $color-gray;
      font-size: 1.56rem;

      font-weight: 600;
    }
  }

  &__content {
    background: #fff;
    border-radius: 2.4rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.1);
    padding: 3rem 6rem;
    margin-top: 5.7rem;
  }

  &__h1 {
    font-weight: 500;
    font-size: 2rem;
    margin-top: 1.8rem;
    margin-bottom: 4rem;
  }

  &__form {
    &--formarea {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5rem;
    }

    &--uploadinput {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
    }

    &--uploadlabel {
      width: 100%;
    }

    &--flexarea {
      flex-shrink: 0;
      position: relative;
      cursor: pointer;
    }

    &--dropdown {
      display: flex;
      flex-direction: column;
      font-size: 1.3rem;
      font-weight: 400;
      height: 29rem;
      overflow: scroll;
      position: absolute;
      width: 100%;
      overflow-x: hidden;
      background: #fff;
      top: 6.6rem;
      border: 0.5px solid rgba(0, 0, 0, 0.1);
      z-index: 9;

      & span {
        &:nth-child(1) {
          border-top: 0.5px solid rgba(0, 0, 0, 0.1);
        }

        padding: 1.3rem 0 1.3rem 2.3rem;
        cursor: pointer;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
      }
    }

    &--dropdowncontent {
      min-height: 4rem;
      background: #ffffff;
      border: 1px solid #f3f4f6;
      box-sizing: border-box;
      border-radius: 0.6rem;
      padding: 0 2rem;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      max-height: 10rem;
      overflow: scroll;
      overflow-x: hidden;

      & span {
        background: rgba(0, 0, 0, 0.1);
        padding: 0.8rem 1.3rem;
        border-radius: 1.9rem;
        display: inline-block;
        margin: 0rem 1rem 1rem 0rem;
        font-size: 1.3rem;
      }
    }

    &--label {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      color: #2f3147;
    }

    &--input {
      height: 4.2rem;
      cursor: pointer;
    }

    &--width100 {
      width: 100%;
    }

    &--descrip {
      border-radius: 1.8rem;
      width: 100%;
      position: relative;
      overflow: hidden;
      padding: 2rem 3rem;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #8f92a1;
        opacity: 0.1;
      }
    }

    &--upload {
      height: 29rem;
      width: 100%;
      overflow: hidden;
      border-radius: 1.5rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        height: auto !important;
      }
    }

    &--uploadset {
      border-radius: 1.8rem;
      width: 100%;
      height: 24rem;
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #8f92a1;
        opacity: 0.1;
      }
    }

    &--uploadsettop {
      display: flex;
      justify-content: space-between;
      padding: 2rem 26rem 2.4rem;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.5rem;
      color: #2f3147;
    }

    &--uploadsetbottom {
      position: relative;
      margin: 0 auto;
      background: #fff;
      border-radius: 1.8rem;
      width: 79rem;
      height: 13rem;
      z-index: 1;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    margin: 13rem 0 6rem 0;
  }

  &__btn {
    background: rgba(223, 230, 233, 0.3);
    cursor: pointer;
    border: none;
    font-weight: 600;
    color: #2f3147;
    height: 4.6rem;
    min-width: 17rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;

    &:focus,
    &:active {
      outline: none;
    }

    &--colored {
      background: $color-primary;
      color: #fff;
      width: 25rem;
    }
  }

  &__coveragearea {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 5rem;

    & > .addproduct__form--flexarea {
      margin-bottom: 0;
    }

    &--btn {
      height: 4rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }

    &--remove {
      background: rgba(223, 230, 233, 0.6);
      min-width: 8rem !important;
      height: 3rem;
      margin: 0;
      font-weight: 300;
    }
  }
}

.ql-editor {
  min-height: 21rem !important;
  background: #ffff;
}

.ql-container.ql-snow {
  border: none !important;
}

.ql-toolbar.ql-snow {
  border: none !important;
}
</style>