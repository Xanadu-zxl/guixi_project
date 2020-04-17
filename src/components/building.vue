<template>
  <home-header :companyName="baseCompany" class="bg">
    <template slot="communityBreadcrumns">
      <div class="community-breadcrumns">
        <router-link :to="{ name: 'home',query:{ name: name, building: unit}}">{{this.$route.query.name}}</router-link>&gt;
        <span>{{ this.$route.query.building }}栋</span>
      </div>
    </template>
    <template slot="fieldsList">
      <div class="building-unit">
        <template v-for="(building, index) in buildings">
          <router-link
            :key="index"
            :to="{ name: 'unit', query: { name:name, building: unit, id: building.id }}"
            class="community-home-body-item"
          >
            <i class="icon-icon_danyuan"></i>
            <span class="building-name">{{ building.name }}单元</span>
          </router-link>
        </template>
      </div>
    </template>
  </home-header>
</template>

<script>
import HomeHeader from './pages/header'
// import axios from 'axios'
// import Mixin from './Mixin'

export default {
  // mixins: [Mixin],
  name: 'Building',
  components: { HomeHeader },

  data () {
    return {
      name: '',
      routes: '',
      unit: '',
      query:'',
      buildings: [{
        id: 1,
        building: '1栋',
        name: 'a'
      },
      {
        id: 2,
        building: '2栋',
        name: 'b'
      },
      {
        id: 3,
        building: '3栋',
        name: 'c'
      },
      {
        id: 4,
        building: '4栋',
        name: 'd'
      }]
    }
  },

  created () {
    this.doRequst()
    document.title = '出租房屋公示'
  },

  methods: {
    doRequst () {
      let query = this.$route.query
      this.name = query.name
      this.unit = query.building
      console.log(query)

      //     axios.get(this.baseUrl + 'building?' + this.getQueryString())
      //       .then(res => {
      //         this.home = res.data.home
      //         this.building = res.data.building
      //         this.units = res.data.result
      //       })
      //       .catch(err => { console.log(err) })
    }
  }
}
</script>

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

.building-unit {
  flex: 1;
  display: flex;
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

.icon-icon_danyuan {  
  background-image: linear-gradient(to right, #f08200, #f45e06);
  -webkit-background-clip: text;
  background-clip: text;
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
