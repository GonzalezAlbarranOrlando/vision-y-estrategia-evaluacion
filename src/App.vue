<template>
    <MyHeader/>   
    <router-view></router-view>
    <MyFooter/>
</template>

<script>
/*Components*/
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
/*Bootstrap js*/
import 'bootstrap/dist/js/bootstrap.js';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
/*Bootstrap css*/
@import "bootstrap/dist/css/bootstrap.css";
/*My css file(s)*/
@import '@/assets/css/styles.css';
/*Font Awesome Web Application Icons*/
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
