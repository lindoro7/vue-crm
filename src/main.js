import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyCp0aUpfJ8BACR06o9P5MjzLBKvfNTxAJE",
  authDomain: "vue-crm-testing.firebaseapp.com",
  databaseURL: "https://vue-crm-testing.firebaseio.com",
  projectId: "vue-crm-testing",
  storageBucket: "vue-crm-testing.appspot.com",
  messagingSenderId: "607118329698",
  appId: "1:607118329698:web:028c80e4975780c6208e3b",
  measurementId: "G-PDXTH49WGJ"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
})


