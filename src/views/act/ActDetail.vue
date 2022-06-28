<template >
  <div class="box">
    <div class="shang">
      <div class="header flex">
        <img
          class="icon header-icon"
          src="../../assets/img/icon_fanhui.png"
          alt=""
        />
        <div class="text">Mirror</div>
        <div class="xx"><p></p></div>
      </div>

      <div class="wwas">
        <div class="main">
          <div class="main-title">
            <p class="title-text1">Twilight should roar</p>
            <p class="title-text2">Rebuke the time</p>
          </div>
          <div class="main-img">
            <img class="xx-img" src="../../assets/img/asdas.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="xia">
      <div>
        <div class="clock">
          <div class="clock-title flex">
            <p class="careless">点餐情况</p>
          </div>
          <div class="clock-title flex">
            <p class="careless1">距离点餐结束还有 xxx小时</p>
          </div>
        </div>
        <div class="progress">
          <div>
            <div class="progress-item">
              <div>宫保鸡丁</div>
              <div class="progress-item-text1">点餐人数: 1</div>
            </div>
            <div class="progressbar flex">
              <div class="blue"></div>
              <div></div>
            </div>
          </div>

          <div>
            <div class="progress-item">
              <div>宫保鸡丁</div>
              <div class="progress-item-text1">点餐人数: 1</div>
            </div>
            <div class="progressbar flex">
              <div class="blue"></div>
              <div></div>
            </div>
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
  /* display: grid;
  grid-template-rows: 3fr 2.2fr; */
  background-color: #d1d7fb;
  position: relative;
  border-radius: 3rem;
}

.xia {
  background-color: white;
  opacity: 0.5;
  width: 100%;
  border-radius: 2rem;
  position: absolute;
  bottom: 0;
  height: 45vh;
  margin: 0 auto;
  padding-top: 3rem;
}
.wwas {
  margin: 0 auto;
  padding-top: 1rem;
}
.shang {
  background-color: #d1d7fb;
  height: 50vh;
  width: 100%;
}
.header {
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 2rem;
  justify-content: space-between;
}
.xx {
  width: 2.5rem;
  height: 2.5rem;
}

.search-box {
  padding: 2rem 4rem 2rem 4rem;
  max-width: 25rem;
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

.main {
  height: 23rem;
  border-radius: 2rem;
  background-color: #7266fa;
  margin: 3rem 2rem 2rem 2rem;
  padding: 0.5rem 0 1rem 2rem;
}

.title-text1 {
  font-size: 1.6rem;
  color: white;
  font-weight: 600;
}
.title-text2 {
  font-size: 1.3rem;
  color: whitesmoke;
  font-weight: 400;
}
.main-img {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -3rem;
}

.clock {
  margin: 2rem 2rem 1rem 2rem;

  height: 10rem;
  background-color: #e5e2ff;
  border-radius: 2rem 2rem 0 0;
}
.clock-title {
  padding-top: 2rem;
}
.careless {
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 800;
  color: black;
}
.careless1 {
  margin: 0 auto;
  font-size: 1.6rem;
  color: black;
}
.progress {
  margin-bottom: 2rem;
}
.progress-item {
  padding-bottom: 1rem;
  margin: 0 1rem 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;

  /* padding: 1rem 1rem; */
}
.progressbar {
  margin: 0 4rem 1rem 4rem;
  height: 1rem;
  background-color: pink;
  border-radius: 3rem;
}
.blue {
  border-radius: 3rem;
  background-color: red;
  width: 50%;
  height: 1rem;
}
.progress-item-text1 {
  color: blue;
}
.progresses-item {
  margin-bottom: 2rem;
}
</style>




