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
                    <InputField
                      v-bind:inputValidator="inputValidator"
                      v-bind:name="'Product Name'"
                      v-bind:type="'text'"
                      v-bind:width="'60rem'"
                    />
                  </div>
                </div>
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Product Ticker</span>
                  <div class="addproduct__form--input">
                    <InputField
                      v-bind:inputValidator="inputValidator"
                      v-bind:name="'Product Ticker'"
                      :block="true"
                      :dropIconSize="'18'"
                      v-bind:values="[
                        'Test',
                        'Test2',
                        'Test',
                        'Test2',
                        'Test',
                        'Test2',
                      ]"
                      v-bind:type="'dropdown'"
                      v-bind:width="'30rem'"
                      v-bind:bottom="'-26rem'"
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
                        v-model="content"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Category</span>
                  <div class="addproduct__form--input">
                    <InputField
                      v-bind:inputValidator="inputValidator"
                      v-bind:name="'Category'"
                      v-bind:type="'text'"
                      v-bind:width="'60rem'"
                    />
                  </div>
                </div>
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Tags</span>
                  <div class="addproduct__form--input">
                    <InputField
                      v-bind:inputValidator="inputValidator"
                      v-bind:name="'Tags'"
                      v-bind:type="'text'"
                      v-bind:width="'38rem'"
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
                    <InputField
                      v-bind:inputValidator="inputValidator"
                      v-bind:name="'Unit Price'"
                      v-bind:type="'text'"
                      v-bind:width="'60rem'"
                    />
                  </div>
                </div>
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Per</span>
                  <div class="addproduct__form--input">
                    <InputField
                      v-bind:inputValidator="inputValidator"
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
                      v-bind:width="'30rem'"
                      v-bind:bottom="'-26rem'"
                    />
                  </div>
                </div>
              </div>
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--flexarea">
                  <span class="addproduct__form--label">Tax Rule</span>
                  <div class="addproduct__form--input">
                    <InputField
                      v-bind:inputValidator="inputValidator"
                      v-bind:name="'Tax Rule'"
                      v-bind:type="'text'"
                      v-bind:width="'60rem'"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div v-if="header === 'Coverage'">
              <form class="addproduct__form--information">
                <div class="addproduct__form--formarea">
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">City</span>
                    <div class="addproduct__form--input">
                      <InputField
                        v-bind:inputValidator="inputValidator"
                        v-bind:name="'City'"
                        v-bind:type="'text'"
                        v-bind:width="'60rem'"
                      />
                    </div>
                  </div>
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">State</span>
                    <div class="addproduct__form--input">
                      <InputField
                        v-bind:inputValidator="inputValidator"
                        v-bind:name="'State'"
                        v-bind:type="'text'"
                        v-bind:width="'30rem'"
                      />
                    </div>
                  </div>
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
                      <InputField
                        v-bind:inputValidator="inputValidator"
                        v-bind:name="'Width'"
                        v-bind:type="'text'"
                        v-bind:width="'60rem'"
                      />
                    </div>
                  </div>
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Height</span>
                    <div class="addproduct__form--input">
                      <InputField
                        v-bind:inputValidator="inputValidator"
                        v-bind:name="'Height'"
                        v-bind:type="'text'"
                        v-bind:width="'30rem'"
                      />
                    </div>
                  </div>
                </div>

                <div class="addproduct__form--formarea">
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Depth</span>
                    <div class="addproduct__form--input">
                      <InputField
                        v-bind:inputValidator="inputValidator"
                        v-bind:name="'Depth'"
                        v-bind:type="'text'"
                        v-bind:width="'60rem'"
                      />
                    </div>
                  </div>
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Weight</span>
                    <div class="addproduct__form--input">
                      <InputField
                        v-bind:inputValidator="inputValidator"
                        v-bind:name="'Weight'"
                        v-bind:type="'text'"
                        v-bind:width="'30rem'"
                      />
                    </div>
                  </div>
                </div>

                <div class="addproduct__form--formarea">
                  <div class="addproduct__form--flexarea">
                    <span class="addproduct__form--label">Shipping Fee</span>
                    <div class="addproduct__form--input">
                      <InputField
                        v-bind:inputValidator="inputValidator"
                        v-bind:name="'Shipping Fee'"
                        v-bind:type="'text'"
                        v-bind:width="'60rem'"
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
              {{
                header === "Coverage" ? "Add New Product" : "Save and Proceed"
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/InputField";

import axios from "axios";

export default {
  data() {
    return {
      header: "Add Product Information",
      productIcon: null,
      formData: {
        name: "",
        ticker: "",
        description: "",
        //category: "",
        measurment: "",
        tax: "",
        unit_price: "",
        coverage: {
          state: "",
          city: "",
        },
        shipping_fee: "",
        tags: ["test"],
        image: null,
      },
      content: "",
      editorOption: {
        // Some Quill options...
      },
      pageTracker: 0,
      value: "",
      options: [
        "Select option",
        "options",
        "selected",
        "mulitple",
        "label",
        "searchable",
        "clearOnSelect",
        "hideSelected",
        "maxHeight",
        "allowEmpty",
        "showLabels",
        "onChange",
        "touched",
      ],
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
    };
  },
  components: {
    InputField,
  },
  methods: {
    handleImgUpload(event) {
      console.log(event, "trigger the image upload");
      const files = event.target.files;
      const FilesArray = Array.from(files);
      const file = FilesArray[0];
      console.log(FilesArray);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
        this.productIcon = reader.result;
        const formData = this.formData;
        formData.image = file;
        this.formDate = formData;
      };
    },
    inputValidator(value, name) {
      console.log(value, name);
      const formData = this.formData;

      switch (name) {
        case "Product Name":
          console.log(value, "this isa rea ts");
          formData.name = value;
          this.formData = formData;
          break;
        case "Product Ticker":
          console.log(value, "this isa rea ts");
          formData.ticker = value;
          this.formData = formData;
          break;
        /*case "Description":
          console.log(value, 'this isa rea ts')
          formData.description = value;
          this.formData = formData;
          break;
        /*case "Category":
          formData.category = value;
          this.formData = formData;
          break;*/
        case "Unit Price":
          formData.unit_price = value;
          this.formData = formData;
          break;
        case "Tax Rule":
          formData.tax = value;
          this.formData = formData;
          break;
        case "Shipping Fee":
          formData.shipping_fee = value;
          this.formData = formData;
          break;
        case "City":
          formData.coverage.city = value;
          this.formData = formData;
          break;
        case "State":
          formData.coverage.state = value;
          this.formData = formData;
          break;
        default:
        // code block
      }
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
      console.log("editor change!", quill, html, text);
      console.log("the change:", text);
      const formData = this.formData;
      formData.description = html;
      this.formData = formData;
      console.log(this.formData);
      this.content = html;
      //this.inputValidator(this.content, "Description");
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
      const formContent = this.formData;

      this.$store.dispatch("submitProduct", this.formData);
      //this.$router.push("/products");
    },
  },
  mounted() {},
  middleware: "auth",
};
</script>

<style lang="scss">
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
    }

    &--label {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      color: #2f3147;
    }

    &--input {
      height: 4.2rem;
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