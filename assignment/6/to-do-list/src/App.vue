<template>
  <div id="app">
    <!-- <dropdown></dropdown> -->
    <input type="text" v-on:keyup.enter="addItem()" v-model="newItem">
    <li v-for="item in items" :key="item.id">
      {{item.content}}
    </li>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import dropdown from "./components/MyDropdown.vue";

export default {
  name: 'app',
  components: {
    dropdown
  },
  data() {
    return {
      items: this.$children.options,
      newItem: "",
    }
  },
  methods: {
    addItem() {
        if (!this.newItem) {return}
        this.items.push({content:this.newItem})
        this.newItem = ""
    },
  }
}
</script>

<style>
  #app {
    margin: 1em;
  }
</style>
