<template>
  <div class="bargraph">
    <div class="bargraph__bodyone">
      <div class="bargraph__area bargraph__left">
        <div v-for="(item, index) in YScale" :key="index">
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="bargraph__area bargraph__right">
        <div class="bargraph__barcontent">
          <div
            v-for="(bar, index) in numberOfBarsPerArea"
            :key="index"
            v-bind:style="{
              width: barBodyWidth,
            }"
            class="bargraph__barbody"
          >
            <div class="bargraph__bars">
              <div
                class="bargraph__bar"
                v-for="(num, indexx) in bar"
                :key="indexx"
                v-bind:style="{
                  width: barWidth,
                }"
              >
                <div
                  class="bargraph__barbox"
                  v-bind:style="{
                    background: colors[indexx],
                    height: num,
                  }"
                ></div>
              </div>
            </div>
            <div class="bargraph__barlabel">
              <label for="">{{ XScale[index] }}</label>
            </div>
          </div>
        </div>
        <!--<div class="bargraph__labels">
          <div v-for="(item, index) in XScale" :key="index">{{ item }}</div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarGraph",
  props: {
    colors: Array,
    numberOfBarsPerArea: Array,
    YScale: Array,
    XScale: Array,
    barBodyWidth: String,
    barWidth: String,
  },
};
</script>

<style lang="scss">
.bargraph {
  width: 100%;
  height: 100%;
  position: relative;

  &__bodyone {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    font-size: 1.3rem;
    color: #000000;
    font-weight: 500;
  }

  &__area {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__left {
    opacity: 0.5;
    padding-bottom: 2.5rem;
  }

  &__right {
    padding: 0 1rem;
    width: 98%;
  }

  &__barcontent {
    height: 100%;
    justify-content: space-between;
    display: flex;
  }

  &__barbody {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__bars {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }

  &__bar {
    position: relative;
    border-radius: 0.3rem;
    height: 100%;
  }

  &__barbox {
    border-radius: 0.3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    //height: 100%;
  }

  &__barlabel {
    display: flex;
    justify-content: space-between;
    opacity: 0.5;
    margin-top: 1rem;
  }
}
</style>