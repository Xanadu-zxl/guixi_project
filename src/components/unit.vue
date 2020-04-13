<template>
  <div>
    <home-header :companyName="baseCompany" :fields="building" class="bg">
      <template slot="communityBreadcrumns">
        <div class="community-breadcrumns">
          <!-- <div class="community-name">{{ home }}</div> -->
          <router-link :to="{ name: 'home'}">{{name}}</router-link>&gt;
          <router-link :to="{name: 'building', query: { name: name, building: building ,id: id}}">{{ building}}栋</router-link>&gt;
          <span>{{ id }}单元</span>
        </div>
      </template>
      <template slot="fieldsList">
        <div class="room-table">
          <div class="datable-table-container">
            <div class="fixed-table">
              <div class="scroll-container" ref="fixedScrollContainer">
                <table>
                  <tbody>
                    <template v-for="(item, index) in floors">
                      <tr :key="index">
                        <td class="column-first">{{ item.floor}}楼</td>
                        <td :key="index" v-for="(room,index) in floordata">
                          <span>
                            <span class="room-number">{{room.room}}</span>
                            <i :class="getStatusClass(room.status)" class="room-leave-unused"></i>
                          </span>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="table-legend">
            <div class="legend-item">
              <i class="room-rent-out"></i>
              <span>出租</span>
            </div>
            <div class="legend-item">
              <i class="room-self-use"></i>
              <span>自用</span>
            </div>
            <div class="legend-item">
              <i class="room-leave-unused"></i>
              <span>闲置</span>
            </div>
          </div>
        </div>
        <button class="error-correction-button">纠错</button>
      </template>
    </home-header>

    <!-- <Modal company="智慧桂溪" extendClass="tip-modal" ref="modalRef"></Modal> -->
  </div>
</template>



<script>
import HomeHeader from './pages/header'

export default {
  data () {
    return {
      building: '',
      name: '',
      id:'',
      floors: [
        {
          floor: '1',

        },
        {
          floor: '2',
        },
        {
          floor: '3',
        },
        {
          floor: '4',
        },
        {
          floor: '5',
        },
        {
          floor: '6',
        },
        {
          floor: '7',
        },
        {
          floor: '8',
        },
        {
          floor: '9',
        }
      ],
      floordata: [
        { room: '01' },
        { room: '02' },
        { room: '03' },
        { room: '04' },
        { room: '05' },
        { room: '06' },
        { room: '07' },
        { room: '08' },
        { room: '09' },
      ]
    }
  },
  components: {
    HomeHeader
    // HomeContent
  },
  created () {
    this.doRequest()
    document.title = '出租房屋公示'
  },

  methods: {
    doRequest () {
      let data = this.$route.query
      this.name = data.name
      this.id = data.id
      console.log(data)

      //   axios.get(this.baseUrl + 'unit?' + this.getQueryString())
      //     .then(res => {
      //       this.home = res.data.home
      //       this.building = res.data.building
      //       this.unit = res.data.unit
      //       this.floors = res.data.floors
      //       this.houses = res.data.floors[res.data.floors.length - 1].data
      //       this.redirectUrl = res.data.redirectUrl
      //     })
    },

    getStatusClass (status) {
      return {
        'room-rent-out': status === '出租',
        'room-leave-unused': status === '闲置',
        'room-self-use': status === '自用'
      }
    },
  }
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
#app > div {
  height: 100%;
}

.community-name {
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #bdbdbd;
  line-height: 1.5;
  text-align: right;
}

.community-home-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.room-table {
  flex: 1;
  background-color: white;
  width: 100%;
  border-radius: 0.3rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.datable-table-container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  margin-top: 1rem;
  padding: 0 1rem;
}

.fixed-table {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}

.fixed-table table {
  width: 100%;
}

.normal-table {
  width: 3.245rem;
}

.scroll-container {
  border-top: 1px solid #e9eaeb;
  border-bottom: 1px solid #e9eaeb;
}

.fixed-table > .scroll-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.fixed-table > .scroll-container::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}

.fixed-table > .scroll-container td {
  padding-left: 0.4rem;
  text-align: left;
  width: 1.6rem;
}

.body-table-wrapper {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.body-table-wrapper > .fixed-table-header {
  max-width: 100%;
  overflow-x: auto;
}

.body-table-wrapper > .fixed-table-header::-webkit-scrollbar {
  height: 0 !important;
}

.body-table {
  overflow: hidden;
}

.body-table-wrapper > .scroll-container {
  width: 100%;
  flex: 1;
  overflow: auto;
}

.body-table-wrapper > .scroll-container table {
  width: 100%;
}

.body-table-wrapper > .scroll-container::-webkit-scrollbar {
  display: block;
}

table {
  table-layout: fixed;
  border-collapse: collapse;
}

tr {
  border-bottom: 1px solid #e9eaeb;
}

tr:last-child {
  border-bottom: none;
}

td {
  height: 2.75rem;
  padding-left: 0.4rem;
  text-align: left;
  white-space: nowrap;
  text-align: center;
}

td > span {
  display: flex;
  flex-direction: row;
  color: #95a4b3;
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

td .room-number {
  margin-bottom: 0.4rem;
}

td:first-child {
  font-size: 0.6rem;
  color: #8d8d8d;
}

.room-self-use {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #11e909;
}

.room-leave-unused {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #f5de0a;
  border-radius: 0.1rem;
}

.room-rent-out {
  position: relative;
  top: 0;
  display: inline-block;
  font-size: 0;
  border-radius: 30%;
  overflow: hidden;
}

.room-rent-out::before {
  display: inline-block;
  content: '';
  position: relative;
  bottom: 0.05rem;
  border: 0.4rem solid transparent;
  border-top-width: 0;
  border-bottom-width: 0.8rem;
  border-bottom-color: #f52929;
}

.table-legend {
  display: flex;
  justify-content: center;
  background-color: #f2f4f6;
  flex: 0 0 46px;
  align-items: center;
}

.legend-item {
  display: flex;
  align-items: center;
  padding: 0.6rem 0;
  margin-right: 1.2rem;
  vertical-align: middle;
  height: 2rem;
}

.legend-item:nth-child(3) {
  margin-right: 0;
}

.legend-item i {
  margin-right: 0.2rem;
}

.legend-item span {
  font-size: 0.6rem;
  color: #8d8d8d;
}

.error-correction-button {
  height: 2rem;
  width: 100%;
  font-size: 0.7rem;
  color: white;
  line-height: 1.5;
  background: linear-gradient(#f08200, #f45e06);
  margin: 1.2rem 0 1.6rem;
  border-radius: 0.3rem;
}
</style>
