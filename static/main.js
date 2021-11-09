import Vue from "vue";

Vue.component('login-button',{
    template: `<button class="font-bold w-32 py-4 bg-green-400 font-mono text-white hover:bg-white hover:text-green-400 transition delay-150 text-xl rounded">Login</button>`
})

new Vue({
    el: "#app",
    delimiters: ['[[', ']]'],
    data: {
      message: "Oke chưa",
    },
  })
