<template>
  <div class="home-container">
    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="(item, index) in swipeList" :key="index">
        <!-- index 要在组件的data中声明一下 -->
        <routerLink to="#">
          <img :src="item.img">
        </routerLink>
      </mt-swipe-item>
 
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
            <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
            <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
            <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
            <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
            <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="#">
            <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </routerLink>
      </li>

    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      swipeList: [],
      index: null
    }
  },
  created() {
    this.getSwipe()
  },
  methods: {
    getSwipe() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
        // console.log(result);
        if (result.body.status === 0) {
          this.swipeList = result.body.message
        }else {
            // Toast('图片加载失败...')

        }
      })
    }
  }
}
</script>

<style lang="less" >
.mint-swipe {
  height: 200px;
  img {
    height: 100%;
    width: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>

