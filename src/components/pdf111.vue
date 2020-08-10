<template>
  <div class="pdf" v-show="fileType === 'pdf'">
    <p class="arrow">
      <span :class="{grey: currentPage==1}" @click="changePdfPage(0)" class="turn">Preview</span>
      {{currentPage}} / {{pageCount}}
      <span
        :class="{grey: currentPage==pageCount}"
        @click="changePdfPage(1)"
        class="turn"
      >Next</span>
    </p>
    <pdf
      :page="currentPage"
      :src="src"
      @loaded="loadPdfHandler"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
    ></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  },
  data () {
    return {
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: 'pdf', // 文件类型
      src: '@/assets/pdf测试.pdf', // pdf文件地址

    }
  },

  method: {
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage (val) {
      // console.log(val)
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--
        // console.log(this.currentPage)
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++
        // console.log(this.currentPage)
      }
    },

    // pdf加载时
    loadPdfHandler (e) {
      this.currentPage = 1 // 加载的时候先加载第一页
    }
  }
}

</script>  