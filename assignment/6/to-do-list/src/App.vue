<template>
  <div id="app">
    <div class="todo">
      <ul>
        <li v-for="(item,index) in items" :key="index">{{item}}</li>
      </ul>
      <mydropdown :options="items" @option-entered="addItem"></mydropdown>
    </div>
  </div>
</template>

<script>
import mydropdown from "./components/MyDropdown.vue";
export default {
  name: "app",
  components: { mydropdown },
  data() {
    return {
      items: ["apple", "orange"]
    };
  },
  methods: {
    addItem: function(item) {
      this.items.push(item);
    }
  }
};
</script>

<style>
.todo {
  width: 30%;
  margin: auto;
}
</style>
