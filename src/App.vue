<template>
  <MyHeader />
  <div style="min-height: 700px; margin-bottom: 100px; margin-top: 100px;">
    <router-view></router-view>
  </div>
  <MyFooter />
</template>

<script>
/*Components*/
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
/*Bootstrap js*/
import "bootstrap/dist/js/bootstrap.js";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
/*Bootstrap css*/
@import "bootstrap/dist/css/bootstrap.css";
/*My css file(s)*/
@import "@/assets/css/styles.css";
/*Font Awesome Web Application Icons*/
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
/*Animate style*/
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
/*Roboto font*/
@import "../node_modules/typeface-roboto/index.css";
</style>
