<template>
  <home-header :companyName="baseCompany" :fields="homes" class="bg">
    <template slot="communityBreadcrumns">
      <div class="community-name">{{ name }}</div>
    </template>
    <template slot="fieldsList">
      <div class="home-building">
        <template v-for="home in homes">
          <router-link
            :key="home.id"
            :to="{ name: 'building', query: { name:name, building: home.id}}"
            class="community-home-body-item"
          >
            <i class="icon-icon_dong"></i>
            <span class="building-name">{{ home.building }}</span>
          </router-link>
        </template>
      </div>
    </template>
  </home-header>
</template>

<script>
import HomeHeader from './pages/header'
export default {
  data () {
    return {
      name: '南晶国际',
      homes: [
        {
          id: 1,
          building: '1栋',
        },
        {
          id: 2,
          building: '2栋',
        },
        {
          id: 3,
          building: '3栋',
        },
        {
          id: 4,
          building: '4栋',

        }]
    }
  },
  components: {
    HomeHeader,
    // HomeContent
  },
  created () {
    // this.doRequest()
    document.title = '出租房屋公示'
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.community-name {
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #bdbdbd;
  line-height: 1.5;
  text-align: right;
}

.home-building {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-right: -3%;
}

.community-home-body-item {
  height: 4.8rem;
  flex: 0 0 22%;
  background-color: white;
  padding: 0.6rem 0.4rem 0.4rem;
  box-sizing: border-box;
  border-radius: 0.3rem;
  margin-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.icon-icon_dong {
  background-image: linear-gradient(to right, #f08200, #f45e06);
  -webkit-background-clip: text;
  text-align: left;
  -webkit-text-fill-color: transparent;
}

.building-name {
  font-size: 0.7rem;
  color: #8d8d8d;
  line-height: 1.5;
  font-weight: 500;
}
</style>
