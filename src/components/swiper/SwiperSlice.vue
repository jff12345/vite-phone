<template>
  <div class="swiper-item">
    <div class="swiper-item-icon">
      <img class="icon" :src="'/src/assets/img/icon_' + icon + '.png'" alt="" />
    </div>

    <div class="text swiper-item-text1"><slot></slot></div>
    <div class="text swiper-item-text2 text1">{{ desc }}</div>
  </div>
</template>


<script>
export default {
  props: {
    icon: String,
    desc: String,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
};
</script>


<style scoped>
.swiper-item {
  background-color: #7367fb;
  height: 17rem;
  min-width: 13rem;
  margin-right: 2rem;
  border-radius: 2rem;
  overflow-x: hidden;
}
.swiper-item-icon {
  background-color: #d3d7ff;
  width: 6rem;
  height: 6rem;
  border-radius: 2rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-item-text1 {
  max-width: 7rem;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 900;
  font-size: 1.7rem;
  color: white;
}
.swiper-item-text2 {
  max-width: 20rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
}
</style>