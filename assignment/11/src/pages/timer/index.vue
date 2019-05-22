<template>
  <div>
    <div class="timer">{{minutes < 10 ? "0" : ""}}{{minutes}}:{{seconds < 10 ? "0" : ""}}{{seconds}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
      timer: null
    };
  },

  methods: {
    updateTime() {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        clearInterval(this.timer);
        wx.showModal({
          title: "Time's up!",
          showCancel: false
        });
      }
    }
  },
  onLoad(options) {
    console.log(options)
    if (options.seconds) {
      this.seconds = options.seconds;
    } else {
        this.seconds = 2
        
    }
    this.timer = setInterval(this.updateTime, 1000);
  }
};
</script>

<style scoped>
.timer {
  font-size: 4em;
  text-align: center;
}
</style>
