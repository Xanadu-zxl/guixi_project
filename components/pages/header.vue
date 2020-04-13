<template>
  <header class="community-home-head">
    <div class="head-left">
      <img alt class="home-logo" src="~@/assets/img/image_logo.png" />
    </div>
    <div class="head-right">
      <div class="company-name">成都高新区桂溪街道办事处</div>
      <div class="community-name">{{community}}</div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      community: '长城南苑'
    }
  }
}
</script>

<style scoped>
.community-home-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  background-color: white;
  border-radius: 0.3rem;
  padding: 0 0.9rem;
  margin-top: 3rem;
}
.home-logo {
  width: 2.5rem;
  height: 2.5rem;
}
.company-name {
  font-size: 0.9rem;
  color: #606060;
  line-height: 1.5;
  font-weight: 500;
}
.community-name {
  font-size: 0.7rem;
  color: #bdbdbd;
  text-align: right;
}
</style>
