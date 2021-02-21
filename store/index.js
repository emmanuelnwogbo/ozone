import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {},
    actions: {
      submitProduct(vuexContext, productData) {
        /*var formData = new FormData();
        var details = JSON.stringify(productData);
        console.log(details, "this is a test");
        formData.append("details", details);*/
        console.log(productData);
        axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lcmR5ZW1tYW51ZWwyQGdtYWlsLmNvbSIsImlkIjoxOCwidGltZSI6IjIwMjEtMDItMjFUMTU6NTM6MTMuNzQ5WiIsImlhdCI6MTYxMzkyMjc5MywiZXhwIjoxNjEzOTQ0MzkzfQ.GmWhFP-K8DC5gJMAjD4c8xzzO3cv8p5kQXL8M-grlx0"
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/createProduct",
          data: productData
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  });
};

export default createStore;
