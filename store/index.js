import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      customers: [],
      merchants: [],
      orders: [],
      adminToken: null,
      user: null
    },
    mutations: {
      updateCustomers(state, data) {
        state.customers = data;
      },
      updateMerchants(state, data) {
        state.merchants = data;
      },
      updateOrders(state, data) {
        state.orders = data;
      },
      updateToken(state, data) {
        state.adminToken = data;
      },
      updateUser(state, data) {
        state.user = data;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log(vuexContext);
      },
      updateUser(vuexContext, data) {
        vuexContext.commit("updateUser", data);
      },
      async submitProduct(vuexContext, data) {
        const token = localStorage.getItem("hebhukvyaew");
        console.log(data);
        let response = await fetch("http://3.123.189.154:3000/createProduct", {
          method: "POST",
          headers: {
            Accept: "application/json;charset=utf-8",
            "Content-Type": "multipart/form-data",
            token
          },
          body: JSON.stringify(data)
        });

        let result = await response.json();
        console.log(result);
        /*axios({
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            token: token
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/createProduct",
          data: data
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
            console.log(err.response.data);
          });*/
      },
      getCustomers({ commit, state }) {
        const token = localStorage.getItem("hebhukvyaew");
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            token: token
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/getAllSystemUsers"
        })
          .then(res => {
            //console.log(res.data.data);
            const data = res.data.data;
            //return data;
            commit("updateCustomers", data);
          })
          .catch(err => {
            console.log("there is an error", err);
          });
      },
      createMerchant({ commit, state }, data) {
        const token = localStorage.getItem("hebhukvyaew");
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: token
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/createMerchant",
          data: data
        });
      },
      getMerchants({ commit, state }) {
        const token = localStorage.getItem("hebhukvyaew");
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            token: token
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/getMerchants"
        })
          .then(res => {
            //console.log(res.data.data);
            const data = res.data.data;
            //return data;
            console.log(data);
            commit("updateMerchants", data);
          })
          .catch(err => {
            console.log("there is an error", err);
          });
      },
      getOrders({ commit, state }) {
        const token = localStorage.getItem("hebhukvyaew");
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-type": "application/json",
            token: token
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/getOrders"
        })
          .then(res => {
            //console.log(res.data.data);
            const data = res.data.data;
            //return data;
            console.log(data);
            commit("updateOrders", data);
          })
          .catch(err => {
            console.log("there is an error", err);
          });
      },
      acceptOrder({ commit, state }, data) {
        const token = localStorage.getItem("hebhukvyaew");
        axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: token
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/confirmOrder",
          data: data
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err, "this is a err");
          });
      },
      cancelOrder({ commit, state }, data) {
        const token = localStorage.getItem("hebhukvyaew");
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
            token: token
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/cancelOrder",
          data: {
            order_id: data
          }
        });
      },
      authSignUp({ commit, state }, data) {
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/createAdmin",
          data: data
        });
      },
      authSignIn({ commit, state }, data) {
        return axios({
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          baseURL: "http://3.123.189.154:3000/",
          url: "/login",
          data: data
        })
          .then(res => {
            const { userData, token } = res.data.data;
            console.log("logged", userData);
            commit("updateUser", userData);
            commit("updateToken", token);
            localStorage.setItem("hebhukvyaew", token);
            localStorage.setItem("jhbfgehgwbhef", JSON.stringify(userData));
          })
          .catch(err => {
            console.log(err, "this is a err");
          });
      }
    },
    getters: {
      customers(state) {
        return state.customers;
      },
      merchants(state) {
        return state.merchants;
      },
      orders(state) {
        return state.orders;
      },
      adminToken(state) {
        return state.adminToken;
      },
      user(state) {
        return state.user;
      }
    }
  });
};

export default createStore;
