<template>
  <div class="bg">
    <home-header></home-header>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeHeader from '../components/pages/header'
import HomeContent from '../components/pages/content'
export default {
  data () {
    return {}
  },
  components: {
    HomeHeader,
    HomeContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
html,
body {
  font-size: 20px;
  height: 100%;
}

.bg {
  position: absolute;
  background: url(~@/assets/img/image_bg.png) no-repeat;
  background-size: cover;
  top: 0rem;
  bottom: 0rem;
  right: 0rem;
  left: 0rem;
  margin: 0 auto;
  overflow: auto;
}

.bg {
  padding: 0rem 1rem;
}

.home-building {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-right: -3%;
}
</style>
