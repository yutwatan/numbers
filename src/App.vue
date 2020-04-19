<template>
  <div id="app">
    <h1>Numbers 可視化・分析ツール</h1>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header></Header>
    <Top></Top>
    <Footer></Footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Top from '@/components/Top';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Top,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
