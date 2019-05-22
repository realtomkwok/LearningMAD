<template>
  <div>
    <button @click="startTimer()">Start Timer</button>
    <button type="default" @click="showMulLinkageTwoPicker">New Timer</button>
    <mp-picker ref="mpPicker" mode="multiSelector"  @onConfirm="onPickerConfirm" :pickerValueArray="pickerValueArray"></mp-picker>
  </div>
</template>

<script>
import mpPicker from 'mpvue-weui/src/picker';

export default {
  data() {
      var minuteValues = [];
      var secondValues = [];
      for (var i = 0; i < 60; i++) {
          minuteValues.push({
              label: i + "分",
              value: i
          })
          secondValues.push({
              label: i + "秒",
              value: i
          })
      }
    return {
        minute: 0,
        second: 0,
        pickerValueArray: [minuteValues, secondValues],
    };
  },
  components: {
    mpPicker,
  },

  methods: {
    startTimer() {
      var minute = this.minute
      var second = this.second
      wx.navigateTo({ url: "/pages/timer/main?minute=" + minute});
    },
    showMulLinkageTwoPicker() {
      this.$refs.mpPicker.show();
    },
    onPickerConfirm(data) {
      minute = data.value[0];
      second = data.value[1];
      console.log(data.value[0]);
    }
  },
  mounted() {
  }
};
</script>

<style>
</style>
