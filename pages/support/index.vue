<template>
     

    <div class="support">
    <div class="support__body">
        <input ref="cardExpInput" class="no-show" type="text">
        
            <!-- <h1  class="headerdddss">{{currentSupport}}</h1> -->
        <div v-if="currentSupport === 'Supports'">
            <div   v-for="item in supports" :key="item" class="support-card">
           
            <div class="title_details">
                {{item.subject}}
            </div>
            <div class="support__date">
                <div>
                    <span>{{formatDate(item.createdAt)}}</span>
                </div>
                <div>
                    <button class="button" @click="handleReply(item.id)">
                        Reply
                    </button>
                </div>
            </div>
        </div>

        </div>
    

        <div v-if="currentSupport === 'Reply Message'" class="reply">
            <div v-if="supportReplys.length" class="reply-messages">
                <div   v-for="item in supportReplys" :key="item" class="support-card__reply">
                    <div class="row__one">
                          <div class="title_details">
                            {{item.subject}}
                        </div>
                        <div class="support__date">
                            <div>
                                <span>{{formatDate(item.createdAt)}}</span>
                            </div>
                        
                        </div>

                    </div>
           
          
            <div>
                <h2 v-if="item.user_id">Customer</h2>
                <h2 v-if="item.admin_id">Admin</h2>
            </div>
            <p class="reply_message">
                {{item.message}}
            </p>
            
        </div>

            </div>
            <div class="reply-form">

             <div class="addproduct">
    <div class="addproduct__body">
      
      <div class="addproduct__content">
        <div class="addproduct__pages">
          <div class="addproduct__form">
            <form
              class="addproduct__form--information"
            >
              <div class="addproduct__form--formarea">
                <div class="addproduct__form--flexarea">
                  
                  <span class="addproduct__form--label">Title</span>
                  <div class="addproduct__form--input">
                    <input
                      class="inputfield__input"
                      v-model="name"
                      v-bind:style="{
                        width: '60rem',
                      }"
                      :placeholder="''"
                      type="text"
                      required
                    />
                  </div>
                  <span class="error">{{nameError}}</span>
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
                        v-model="descriptionData"
                       
                      />
                    </div>
                    <span class="error">{{descriptionError}}</span>
                  </div>
                </div>
              </div>
             
            </form>

           
          </div>

          
        </div>
      </div>
    </div>

    <div class="button-wrapper">
         <button class="button cancel" @click="handleCancel">
                        Cancel
                    </button>
                     <button class="button" @click="sendReply">
                        Send Reply
                    </button>
    </div>
  </div>
       


            </div>
           

        </div>
       
        
    </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'
const environment = process.env.NODE_ENV;
const baseURL =
  environment === "development"
    ? process.env.BASE_DEV_URL
    : process.env.BASE_PROD_URL;
export default {
    data() {
    return {
      currentSupport: "Supports",
      name: "",
      supportId: "",
      descriptionData: "",
      editorOption: {
        // Some Quill options...
      },
      supportReplys: []
      
    };
  },
  mounted() {
    this.$store.dispatch("getSupports");
  },
  methods: {
      formatDate: function (data){
      const event = new Date(data);
      return event.toString().split("GMT")[0]

    },
    sendReply(){
    

           const token = localStorage.getItem("hebhukvyaew");
       axios({
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-type": "application/json",
        token: token,
      },
      baseURL,
      url: "/replySupportMessages",
      data: {
          support_id: this.supportId,
            message: this.descriptionData.slice(3, -4),
            subject: this.name
          } 
    }).then(async({data}) => {
         this.name = ''
         this.descriptionData = ''
      
    
    await Swal.fire(
        'Success!',
        'Message sent Successfully',
        'success'
      ) 

       window.location.reload();

    
    }).catch(e => console.log(e))


        },
    handleCancel(){
        this.currentSupport = 'Supports'
        this.$refs.cardExpInput.focus();
        },

    handleReply(id){
          this.supportId = id
          const token = localStorage.getItem("hebhukvyaew");
       axios({
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-type": "application/json",
        token: token,
      },
      baseURL,
      url: "/getSupportMessages",
      data: {
          support_id: id
          } 
    }).then(({data}) => {
         this.currentSupport = 'Reply Message'
      
      this.supportReplys = data.data
    
    }).catch(e => console.log(e))


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
      console.log("editor changed here");
      console.log("editor changed here");
      console.log("editor changed here");
    },
  },
  computed: {
      supports() {
      const supports = this.$store.getters.supports;
     
      const newSupports = supports.length ? supports: []

      return newSupports;
    },

  },
    
}
</script>

<style lang="scss" >
.no-show{
    visibility: hidden;
}
 .button{
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
        .cancel{
            background: rgba(143, 146, 161, 0.21);
            color: #000000;
        }
        .button-wrapper{
            display: flex;
            align-items: center;

        }
    .support {
       padding-left: 21rem;
  min-height: 160vh;
         &__body {
             padding: 19rem 4.5rem 0 10rem;
        }
    };
    .support-card{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #FEFEFE;
        mix-blend-mode: multiply;
        border: 1px solid #EDE6E6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        margin: 15px 0px;
        padding: 10px;
        .title{
            border: solid red 2px;
            font-weight: 600;
            font-size: 26px;
            line-height: 54px;
            color: #838A96;

        }
        .title_details{
            font-weight: bold;
            font-size: 26px;
            line-height: 54px;

            color: #000000;
        }
       
    }
    .reply{
        background: #FEFEFE;
        mix-blend-mode: multiply;
        padding: 20px;

    }
    .reply-messages{
        border: solid #ccc 1px;
        height: 500px;
        overflow-y: scroll;
        padding-bottom: 20px;


    }
    .reply-messages::-webkit-scrollbar {
  width: 5px;
  border-radius: 2px;
  background: #ccc;
  transition: all 0.3s ease;
}
.headerdddss{
    font-weight: 600;
font-size: 38px;
margin-bottom: 10px;
letter-spacing: -1px;

color: #11142D;
}







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
.error{
  color:red;
  font-size: 12px;
  text-align: center;
}

.addproduct {
  /* padding-left: 21rem;

  &__body {
    padding: 15rem 4.5rem 0 10rem;
  } */

 
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

.support-card__reply{
  border: solid red 2px;
        background: #FEFEFE;
        mix-blend-mode: multiply;
        border: 1px solid #EDE6E6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        margin: 15px 0px;
        padding: 10px;
        .row__one{
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title{
            border: solid red 2px;
            font-weight: 600;
            font-size: 26px;
            line-height: 54px;
            color: #838A96;

        }
        .title_details{
            font-weight: bold;
            font-size: 26px;
            line-height: 54px;

            color: #000000;
        }
        .reply_message{
            font-size: 18px;
        }
}
</style>