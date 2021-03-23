import Vuex from "vuex";
import axios from "axios";

const environment = process.env.NODE_ENV;
const baseURL =
  environment === "development"
    ? process.env.BASE_DEV_URL
    : process.env.BASE_PROD_URL;

const createStore = () => {
  return new Vuex.Store({
    state: {
      customers: [],
      merchants: [],
      orders: [],
      adminToken: null,
      user: null,
      products: [],
      notifications: null,
      currentNotification: null,
      error: false
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
      },
      updateNotifications(state, data) {
        state.notifications = data;
      },
      updatecurrentNotification(state, data) {
        state.currentNotification = data;
      },
      updateProducts(state, data) {
        state.products = data;
      },
      error(state, data) {
        state.error = data;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        //console.log(vuexContext);
      },
      updateUser(vuexContext, data) {
        vuexContext.commit("updateUser", data);
      },
      currentNotification({ commit, state }, data) {
        commit("updatecurrentNotification", data);
      },
      async submitProduct(vuexContext, data) {
        const token = localStorage.getItem("hebhukvyaew");
        return axios({
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            token: token
          },
          baseURL,
          url: "/createProduct",
          data: data
        });
      },
      getProducts({ commit, state }) {
        const token = localStorage.getItem("hebhukvyaew");

        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            token: token
          },
          baseURL,
          url: "/getProducts"
        })
          .then(res => {
            const data = res.data.data;
            commit("updateProducts", data);
          })
          .catch(err => {
            console.log(err);
          });
      },
      getCustomers({ commit, state }) {
        const token = localStorage.getItem("hebhukvyaew");
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            token: token
          },
          baseURL,
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
          baseURL,
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
          baseURL,
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
          baseURL,
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
          baseURL,
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
          baseURL,
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
          baseURL,
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
          baseURL,
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
            commit("error", "wrong credentials, please try again");
          });
      },
      getTransactions({ commit, state }) {
        const token = localStorage.getItem("hebhukvyaew");
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-type": "application/json",
            token: token
          },
          baseURL,
          url: "/getTransactions"
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err, "there is an error");
          });
      },
      getNotifications({ commit, state }) {
        const token = localStorage.getItem("hebhukvyaew");
        axios({
          method: "get",
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-type": "application/json",
            token: token
          },
          baseURL,
          url: "/getNotifications"
        })
          .then(res => {
            console.log(res);
            commit("updateNotifications", res.data.data);
          })
          .catch(err => {
            console.log(err, "there is an error");
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
      },
      notifications(state) {
        return state.notifications;
      },
      currentNotification(state) {
        return state.currentNotification;
      },
      products(state) {
        return state.products;
      },
      error(state) {
        return state.error;
      }
    }
  });
};

export default createStore;
