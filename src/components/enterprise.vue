<template>
  <div>
    <home-header :companyName="baseCompany" class="bg">
      <template slot="communityBreadcrumns">
        <div class="description">{{ baseDescription }}</div>
      </template>
      <template slot="fieldsList">
        <div class="company-body">
          <div class="head">
            <div class="title">{{ company }}</div>
            <button @click="goToUrl(companyQueryUrl)">企业自查上报</button>
          </div>
          <div class="list">
            <div class="list-item">
              <div class="left-head">治安责任书</div>
              <div class="right-body">
                <File
                  :fileName="information.public_security_responsibility_letter"
                  @fileClicked="fileClickedFunc"
                />
              </div>
            </div>
            <div class="list-item">
              <div class="left-head">
                <div class="title">花名册</div>
                <button @click="goToUrl(updateUrl)" class="up-button">更新</button>
              </div>
              <div class="right-body">
                <File
                  :fileName="information.roster"
                  @fileClicked="fileClickedFunc"
                />
              </div>
            </div>
            <div class="list-item">
              <div class="left-head">登记表</div>
              <div class="right-body">
                <File
                  :fileName="information.registration_form"
                  @fileClicked="fileClickedFunc"
                />
              </div>
            </div>
            <div class="list-item">
              <div class="left-head">单位调查表</div>
              <div class="right-body">
                <File
                  :fileName="information.work_unit_questionnaire"
                  @fileClicked="fileClickedFunc"
                />
              </div>
            </div>
            <div class="list-item">
              <div class="left-head">网格员工作痕迹</div>
              <div class="right-body">
                <File
                  :fileName="information.grid_work_traces"
                  @fileClicked="fileClickedFunc"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </home-header>
    <div class="modal" v-if="opened">
      <div @click.stop class="content">
        <button @click="fileClickedFunc">退出</button>
        <!--  -->
        <!--  -->
        <iframe :src="url" frameborder="0" ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './pages/header'
import File from './enterprise/File'
// import FilePreview from './enterprise/file_preview'

// import axios from 'axios'
// import Mixin from './Mixin'

export default {
  // mixins: [ Mixin ],

  name: 'Company',

  data () {
    return {
      company: '',
      responseUrl: '',
      roster: '',
      opened: false,
      // showFiles:[],
      companyQueryUrl: 'http://scldrk.com:9080/',
      information: {
        public_security_responsibility_letter: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
        roster: '@/assets/pad测试.pdf',
        registration_form: 'http://fs.yqfw.cdyoue.com/FsavMuamm-3wKHP2Gfi1MmdkUc7K',
        work_unit_questionnaire: '1q1.xlsx',
        grid_work_traces: '1q1.pdf',
      },
      // doRequestQueryString: `company=${this.getQueryValue()}`,
      authorize: true,
      showButton: true
    }
  },

  components: {
    HomeHeader,
    File,
    // FilePreview 
  },

  created () {
    // this.athorizedFunc()
    // this.doRequst()
    document.title = '一牌一簿'
    let query = this.$route.query
    this.company = query.company
  },

  computed: {
    // showButton () {
    // return this.authorize === 'true'
    // }
  },

  methods: {
    goToUrl (url) {
      location.href = url
    },
    fileClickedFunc (fileName) {
      this.url = fileName
      this.opened = !this.opened
      console.log(fileName)
      console.log(this.url)
    },

      // axios
      //   .get(
      //     `https://gxzh.cdht.gov.cn/guixi_app/enterprise?company=`,
      //     {
      //       // headers: {
      //       //   Authorization:
      //       //     '7372dee4ff2e6b3876e3b386a336a9171444fba5d3a1e5ae3e23c91d92bb68c6:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lc3BhY2VfaWQiOjF9.WXenxuBIxXEgy_YSmk-PRoElIK7f_gP995N5vdCqSAo'
      //       // }
      //     }
      //   )
      //   .then(res => {
      //     const response = _.find(
      //       res.data,
      //       item => item.id === this.information.response_id
      //     )
      //     const mappedValues = response.mapped_values
      //     switch (fileName) {
      //       case this.information.public_security_responsibility_letter:
      //         this.showFiles =
      //           mappedValues.public_security_responsibility_letter.value
      //         break
      //       case this.information.roster:
      //         this.showFiles = mappedValues.roster.value
      //         break
      //       case this.information.registration_form:
      //         this.showFiles = mappedValues.registration_form.value
      //         break
      //       case this.information.work_unit_questionnaire:
      //         this.showFiles = mappedValues.work_unit_questionnaire.value
      //         break
      //       case this.information.grid_work_traces:
      //         this.showFiles = mappedValues.grid_work_traces.value
      //         break
      //       default:
      //         this.showFiles = null
      //     }
      //     this.filePreviewShow = true
      //   })
    // doRequst () {
    //   axios.get(this.baseUrl + 'company?' + this.doRequestQueryString)
    //     .then(res => {
    //       this.information = res.data.result[0] || {}
    //       localStorage.setItem('company', this.getQueryValue())
    //       localStorage.setItem('company_url', location.href)
    //       this.authorize = this.parseStringToObject(this.getQueryString()).authorize
    //       if (!this.authorize) {
    //         location.href = `${res.data.authorizedRedirectUrl}/oauth/authorize?client_id=${res.data.clientId}&response_type=code&key=value&redirect_uri=${location.origin}/guixi_app/authorized`
    //       }
    //     })
    //     .catch(err => { console.log(err) })
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

.description {
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
}

.company-body {
  width: 100%;
  background-color: white;
  border-radius: 0.3rem;
  padding: 0 0.9rem;
}

.company-body > .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid #e9eaeb;
}

.company-body > .head > button {
  height: 1.4rem;
  padding: 0 0.6rem;
  font-size: 0.6rem;
  color: white;
  line-height: 1.5;
  background: linear-gradient(#f08200, #f45e06);
  border-radius: 0.3rem;
}

.company-body > .head > .title {
  height: 2.25rem;
  font-size: 0.7rem;
  color: #95a4b3;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.company-body .list-item {
  height: 2.25rem;
  font-size: 0.6rem;
  color: #8d8d8d;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid #e9eaeb;
}
.company-body .list-item > .left-head {
  display: flex;
}

.company-body .list-item > .left-head > .up-button {
  padding: 0 0.6rem;
  font-size: 0.6rem;
  color: #f08200;
  border: 1px solid #f08200;
  border-radius: 0.2rem;
  margin-left: 0.6rem;
  background: transparent;
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

.layer-page {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
  background-color: #ffffff;
}

.layer-header {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  position: relative;
  top: 0;
  height: 2.5rem;
  padding: 0 2.65rem;
}

.layer-back {
  width: 1.05rem;
  height: 1.05rem;
}

.layer-content {
  flex: auto;
  color: #2e2e2e;
  font-size: 1rem;
  text-align: center;
}

.layer-download {
  width: 1.05rem;
  height: 1.05rem;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal.open {
  display: flex;
}

.modal > .content {
  width: 90%;
  height: 80%;
  font-size: 0.7rem;
  color: #8d8d8d;
  text-align: center;
  background-color: white;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.6875rem;

}

.modal > .content > button {
  position: absolute;
  right: 2px;
  top: 2px;
  width: 40px;
  height: 20px;
  border-radius: 5px;
}
.modal > .content > iframe {
  height: 43.75rem;
  border-radius: .1875rem;
}

.modal > .content > p {
  line-height: 1.5;
}
</style>
