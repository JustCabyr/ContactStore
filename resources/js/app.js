require('./bootstrap');

window.Vue = require('vue');

let axios = require('axios');

Vue.component('contacts', require('./components/Contacts.vue').default);

const app = new Vue({
    el: '#app',
});
