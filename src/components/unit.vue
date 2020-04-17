<template>
  <div>
    <home-header :companyName="baseCompany" :fields="building" class="bg">
      <template slot="communityBreadcrumns">
        <div class="community-breadcrumns">
          <!-- <div class="community-name">{{ home }}</div> -->
          <router-link :to="{ name: 'home'}">{{name}}</router-link>&gt;
          <router-link
            :to="{name: 'building', query: { name: name, building: building, id: id}}"
          >{{ building}}栋</router-link>&gt;
          <span>{{ id }}单元</span>
        </div>
      </template>
      <template slot="fieldsList">
        <div class="room-table">
          <div class="datable-table-container">
            <div class="fixed-table">
              <div @scroll="scrollFixed" class="scroll-container" ref="fixedScrollContainer">
                <table>
                  <colgroup>
                    <col width="10" />
                  </colgroup>
                  <tbody>
                    <template v-for="(item, index) in floors">
                      <tr :key="index">
                        <td class="column-first">{{ item.floor.id}}楼</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="body-table">
              <div class="body-table-wrapper">
                <div @scroll="scrollBody" class="scroll-container" ref="bodyScrollContainer">
                  <table>
                    <tbody>
                      <template v-for="(item, index) in floors">
                        <tr :key="index">
                          <template v-for="(room, index) in item.floor.floordata">
                            <td :key="index">
                              <span>
                                <span class="room-number">{{room.room}}</span>
                                <i :class="getStatusClass(room.status)"></i>
                              </span>
                            </td>
                          </template>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
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
        <button @click="openModal" class="error-correction-button">纠错</button>
      </template>
    </home-header>
    <div  class="modal" v-if="opened">
      <div @click.stop  class="content">
        <p>请关注微信公众号【{{ company }}】</p>
        <p>以便接收纠错反馈。</p>
      </div>
    </div>
  </div>
</template>



<script>
import HomeHeader from './pages/header'
import Modal from './modal'
import { _ } from 'vue-underscore'


export default {
  data () {
    return {
      company:'智慧桂溪',
      building: '',
      name: '',
      query: '',
      id: '',
      opened: false,
      status: '',
      redirectUrl: '',
      ignoreScrollEvent: false,
      startY: 0,
      floors: [
        {
          floor: {
            id: '1',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '自用'
              },
              {
                room: '03',
                status: '自用'
              },
              {
                room: '04',
                status: '自用'
              }

            ]
          },
        },
        {
          floor: {
            id: '1',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        }, {
          floor: {
            id: '1',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        },
        {
          floor: {
            id: '1',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        },
        {
          floor: {
            id: '2',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        },
        {
          floor: {
            id: '3',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        },
        {
          floor: {
            id: '4',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        },
        {
          floor: {
            id: '5',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        },
        {
          floor: {
            id: '6',
            floordata: [
              {
                room: '01',
                status: '闲置'
              },
              {
                room: '02',
                status: '闲置'
              },
              {
                room: '03',
                status: '闲置'
              },
              {
                room: '04',
                status: '闲置'
              }

            ]
          },
        },
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
      let query = this.$route.query
      this.building = query.building
      this.name = query.name
      this.id = query.id
      console.log(query)

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

    openModal () {
      this.opened = true
      setTimeout(() => {
        location.href = this.name
      }, 3000)
    },

    getStatusClass (status) {
      return {
        'room-rent-out': status === '出租',
        'room-leave-unused': status === '闲置',
        'room-self-use': status === '自用'
      }
    },

    getQuery (key, value) {
      let obj = {}
      obj[key] = value
      return obj
    },


    getQuery (key, value) {
      let obj = {}
      obj[key] = value
      return obj
    },

    getRoom (index) {
      return index < 10 ? '0' + index : index
    },

    scrollFixed (e) {
      if (this.ignoreScrollEvent) {
        this.ignoreScrollEvent = false
        return
      }
      this.updateScrollTop(this.$refs.fixedScrollContainer, this.$refs.bodyScrollContainer)
      this.syncScrollTop(this.$refs.fixedScrollContainer, this.$refs.bodyScrollContainer)
    },

    scrollBody (e) {
      if (this.ignoreScrollEvent) {
        this.ignoreScrollEvent = false
        return
      }
      this.updateScrollTop(this.$refs.bodyScrollContainer, this.$refs.fixedScrollContainer)
      this.syncScrollTop(this.$refs.fixedScrollContainer, this.$refs.bodyScrollContainer)
    },

    syncScrollTop: _.debounce(function syncScrollTop (target, relate) {
      this.updateScrollTop(target, relate)
    }, 100),

    updateScrollTop (target, relate) {
      this.ignoreScrollEvent = true
      relate.scrollTop = target.scrollTop
    },



    touchEvents () {
      document.body.addEventListener('touchstart', (e) => {
        this.startY = e.touches[0].pageY
      })
      document.body.addEventListener('touchmove', this._stopIosRubber, { passive: false })
    },

    _stopIosRubber (event) {
      const endY = event.touches[0].pageY
      if (endY > this.startY && window.scrollTop <= 0) {
        event.preventDefault()
      }
      if (endY < this.startY && (window.scrollTop + window.innerHeight) >= document.body.scrollHeight) {
        event.preventDefault()
      }
    }
  },

  destroyed () {
    document.body.removeEventListener('touchmove', this._stopIosRubber, { passive: false })
    document.body.removeEventListener('touchstart', (e) => {
      this.startY = e.touches[0].pageY
    })
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
  width: 2.1rem;
}

.fixed-table table {
  width: 2.1rem;
}

.normal-table {
  width: 2.1rem;
}

.scroll-container {
  border-top: 1px solid #e9eaeb;
  border-bottom: 1px solid #e9eaeb;
}

.fixed-table > .scroll-container {
  display: flex;
  width: 3.245rem;
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



.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal.open {
  display: flex;
}

.modal > .content {
  width: 12.5rem;
  height: 5rem;
  font-size: .7rem;
  color: #8d8d8d;
  text-align: center;
  background-color: white;
  border-radius: .3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal > .content > p {
  line-height: 1.5;
}

</style>
