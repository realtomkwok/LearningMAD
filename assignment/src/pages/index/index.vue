<template>
  <div class="main">
    <div class="heading">
      <h1>Event Reminder</h1>
    </div>
    <div class="input">
      <mp-input id="event-title" placeholder="Title" v-model="events.title" @focus="inputFocus"></mp-input>
      <mp-button id="date-picker" type="primary" size="large" plain="true" @click="showDatePicker">Pick A Date</mp-button>
      <mp-datepicker id="event-date" ref="mpDatePicker" :defaultDate="defaultDate"  @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel"></mp-datepicker>
    </div>
    <!-- <div class="list">
      <ul v-for="event, index in events" :key="key">
      </ul>
    </div>  -->
  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button'
import mpDatepicker from 'mpvue-weui/src/date-picker';
import mpInput from 'mpvue-weui/src/input';

export default {
  components: {
    mpButton,
    mpDatepicker,
    mpInput
  },
  data() {
    return {
      events: [
        {
          title: 'Concert',
          date: '',
        }
      ]
    }
  },
  methods: {
    showDatePicker() {
      this.$refs.mpDatePicker.show();
    }
  }
}
</script>

<style scoped>
</style>
