<template >
  <div class="box">
    <div class="on-content">
      <div class="header">
        <img class="icon" src="../../../assets/img/icon_nav.png" alt="" />
      </div>
      <div class="title">
        <p class="title-text1">Mirroring Cast screen</p>
        <p class="title-text2">Real-time screen sharing</p>
      </div>
      <div class="tv">
        <img class="img-tv" src="../../../assets/img/tv.png" alt="" />
      </div>
    </div>
    <div class="next-content">
      <div class="xia-main">
        <div class="next-content-header">
          <div class="next-content-text">
            <p class="next-content-text1">please choose</p>
            <p class="next-content-text2">choose a screencast scene</p>
          </div>
          <img
            class="icon next-content-icon"
            src="../../../assets/img/liao.png"
            alt=""
          />
        </div>
        <div class="screen-mirroring flex">
          <div class="mirroring-logo">
            <img
              class="icon1"
              src="../../../assets/img/icon_yuan1.png"
              alt=""
            />
          </div>
          <div class="mirroring-text">
            <div class="mirroring-text1">screen mirroring...</div>
            <div class="mirroring-text2">Mobile screen sharing to</div>
          </div>
        </div>
        <div class="screen-mirroring flex xxc">
          <div class="mirroring-logo">
            <img
              class="icon1"
              src="../../../assets/img/icon_yuan1.png"
              alt=""
            />
          </div>
          <div class="mirroring-text">
            <div class="mirroring-text1">screen mirroring...</div>
            <div class="mirroring-text2">Mobile screen sharing to</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.box {
  height: 100vh;
  overflow-y: scroll;
  background: url("../../../assets/img/backgroud.png");

  position: relative;
}
.header {
  margin: 1rem 0 1rem 2rem;
}
.title {
  margin: 0 0 0 3rem;
}
.title-text1 {
  color: white;
  font-size: 2rem;
}
.title-text2 {
  font-size: 1.3rem;
  color: white;
  margin-top: -1rem;
}
.tv {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-tv {
  width: 30rem;
  height: 35rem;
  position: relative;
  top: -4rem;
}
.on-content {
  height: 45vh;
}
.next-content {
  background-color: rgba(125, 113, 237, 0.97);

  border-radius: 3rem;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 58.9vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.next-content-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.next-content-text {
  margin-left: -3rem;
  margin-top: 1rem;
}

.next-content-text1 {
  font-size: 2rem;
  color: white;
}
.next-content-text2 {
  font-size: 1.5rem;
  color: white;
  margin-top: -1.5rem;
}
.next-content-icon {
  margin-right: -3rem;
  margin-top: 1rem;
}
.screen-mirroring {
  height: 12rem;
  background-color: white;
  margin: 1rem 2rem 2rem 2rem;
  border-radius: 2rem;
  padding-right: 2rem;
}
.mirroring-logo {
  padding-left: 2.4rem;
  font-size: 2rem;
}
.mirroring-text {
  padding-left: 1.6rem;
}
.mirroring-text1 {
  font-size: 1.7rem;
  font-weight: 600;

  padding-bottom: 0.5rem;
}
.mirroring-text2 {
  font-size: 1.5rem;
  /* color: #d3d7ff; */

  padding-top: 0.5rem;
}
</style>




