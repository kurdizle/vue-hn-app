<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.container {
  padding: 50px 0;
}

html {
  position: relative;
  min-height: 100%;
  margin: 0;
}

body {
  min-height: 100%;
}

footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
