<template>
  <div class="home">
    <div class="header flex">
      <img
        class="icon header-icon"
        src="../../assets/img/icon_fanhui.png"
        alt=""
      />
      <div class="text">Local screencast</div>
    </div>
    <div class="search-box flex">
      <input type="text" placeholder="accent" />
      <img class="icon" src="../../assets/img/icon_search.png" alt="" />
    </div>
    <div class="title">
      <div class="icon-title text">
        <img class="icon-img" src="../../assets/img/2.png" alt="" />
      </div>
      <div class="main-title text">
        <div class="capital">Mirror guide</div>
        <div class="secondary">common proemble</div>
      </div>
    </div>
    <!-- 轮播开始 -->
    <swiper-view>
      <swiper-slice
        v-for="item in swiperData"
        :key="item.id"
        :icon="item.icon"
        :desc="item.description"
        >{{ item.productName }}</swiper-slice
      >
    </swiper-view>
    <!-- 轮播结束 -->

    <div class="screen-mirroring flex">
      <div class="mirroring-logo">
        <img class="icon1" src="../../assets/img/icon_yuan1.png" alt="" />
      </div>
      <div class="mirroring-text">
        <div class="mirroring-text1">screen mirroring...</div>
        <div class="mirroring-text2">Mobile screen sharing to TV</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-item">
        <img
          class="icon footer-item-icon"
          src="../../assets/img/icon_out.png"
          alt=""
        />
        <div class="text2 footer-item-tex2">Time out</div>
      </div>
      <div class="footer-item">
        <img
          class="icon footer-item-icon"
          src="../../assets/img/icon_quit.png"
          alt=""
        />
        <div class="text2 footer-item-tex2">End</div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperView from "../../components/swiper/SwiperView.vue";
import SwiperSlice from "../../components/swiper/SwiperSlice.vue";

export default {
  components: {
    "swiper-view": SwiperView,
    "swiper-slice": SwiperSlice,
  },
  data() {
    return {
      swiperData: [
        {
          id: 1,
          productName: "扬州炒饭",
          icon: "search",
          description: "local screencast",
        },
        {
          id: 2,
          productName: "麻辣鸡翅",
          icon: "search",
          description: "local screencast",
        },
        {
          id: 3,
          productName: "一面情深",
          icon: "search",
          description: "local screencast",
        },
        {
          id: 4,
          productName: "蒜蓉炒肉",
          icon: "search",
          description: "local screencast",
        },
        {
          id: 5,
          productName: "测试",
          icon: "search",
          description: "local screencast",
        },
      ],
    };
  },
};
</script>




<style scoped>
input:focus {
  outline: none;
}

input::-webkit-input-placeholder {
  color: #d4d4d4;
}

input {
  border: 1px solid white;
}
.home {
  height: 100vh;
  /* padding: 2rem;
  height: 100%; */
  background-image: linear-gradient(to bottom, #d3d5fb, #efeff7);
  /* background-color: #eceaff; */
  overflow-y: scroll;
}
.header {
  padding: 3rem 2rem 2.2rem 3rem;
}
.header-icon {
  margin-right: 6rem;
}
.search-box {
  padding: 2rem 1.5rem 2rem 1.5rem;
  max-width: 30rem;
  margin: 0 auto;

  background-color: white;
  border-radius: 1.5rem;
  justify-content: space-between;
  margin-bottom: 3rem;
}
.text1 {
  font-size: 1.3rem;
  color: rgba(177, 174, 194, 0.8);
}
.title {
  height: 10rem;
  border: 1px solid white;
  background-color: #eceaff;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  max-width: 33rem;
  margin: 0 auto;
}
.icon-title {
  flex: 1;
  margin-left: 2rem;
}
.icon-img {
  height: 11rem;
  position: relative;
  top: -1rem;
  left: -1rem;
}
.main-title {
  flex: 2.5;
}
.capital {
  margin-left: 1rem;
  font-size: 2rem;
}
.secondary {
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  color: #404b63;
}

.screen-mirroring {
  height: 13rem;
  background-color: #fbfbff;
  margin: 1rem 2rem 1rem 2rem;
  border-radius: 2rem;
}
.mirroring-logo {
  padding-left: 2.4rem;
  font-size: 2rem;
}
.mirroring-text {
  padding-left: 1.6rem;
}
.mirroring-text1 {
  font-size: 2rem;
  font-weight: 600;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
}
.mirroring-text2 {
  font-size: 1.5rem;
  color: #d3d7ff;
  padding-left: 1rem;
  padding-top: 0.5rem;
}
.footer {
  height: 5rem;
  margin: 2rem 2rem 0rem 2rem;
  padding: 0rem 1.5rem 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-item {
  width: 12rem;
  height: 4rem;
  background-color: white;
  border-radius: 30px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem 0rem 0rem;
}
.footer-item-icon {
  margin-left: 2rem;
  margin-right: 1rem;
}

/* .footer-item-tex2 {
  margin-right: 2rem;
} */
::-webkit-scrollbar {
  display: none;
}
</style>