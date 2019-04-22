<template>
  <div class="dropdown">
    <input class="dropdown-input" @keydown="onKeyPress" v-model="searchText" ref="input">
    <div class="dropdown-content" :class="{hidden: hideOptions}">
      <div
        class="dropdown-item"
        v-for="(option,index) in filteredOptions"
        :key="index"
        :class="{selected: index == selectedIndex}"
      >{{ option }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      selectedIndex: -1,
      searchText: "",
      hideOptions: false
    };
  },
  methods: {
    focusInput() {
        this.$refs.input.focus();
    },
    onKeyPress(event) {
      this.hideOptions = false;
      if (!this.filteredOptions.length) this.selectedIndex = -1;
      if (event.key == "ArrowDown") {
        if (this.selectedIndex < this.options.length - 1) this.selectedIndex++;
        else this.selectedIndex = -1;
      } else if (event.key === "ArrowUp") {
        if (this.selectedIndex > 0) this.selectedIndex--;
        else this.selectedIndex = -1;
      } else if (event.key == "Enter") {
        this.selectOption(this.selectedIndex);
        if (this.searchText) {
          this.$emit("option-entered", this.searchText);
          this.searchText = "";
        }
      }
    },
    selectOption(index) {
      if (index !== -1) {
        this.searchText = this.filteredOptions[index];
        this.hideOptions = true;
      }
    }
  },
  computed: {
    filteredOptions: function() {
      var that = this;
      return this.options
        .filter(function(option, index, self) {
          return self.indexOf(option) == index;
        })
        .filter(function(option) {
          if (!that.searchText) return false;
          return (
            option.toLowerCase().indexOf(that.searchText.toLowerCase()) !== -1
          );
        });
    }
  },
  mounted () {
      this.focusInput();
  }
};
</script>


<style>
.dropdown {
  position: relative;
  display: block;
  margin: auto;
  width: 100%;
}

.dropdown-input {
  background: #fff;
  cursor: pointer;
  border: 1px solid #e7ecf5;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: 0.8em;
  min-height: 1em;
  padding: 6px;
  width: 100%;
  box-sizing: border-box;
}

.dropdown-input:hover {
  background: #f8f8fa;
}

.dropdown-content {
  position: absolute;
  background-color: #fff;
  width: 100%;
  border: 1px solid #e7ecf5;
  box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
  z-index: 1;
  box-sizing: border-box;
}

.dropdown-item {
  color: black;
  font-size: 0.8em;
  line-height: 1em;
  padding: 8px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-item:hover,
.dropdown-item.selected {
  background-color: #e7ecf5;
}
.hidden {
  display: none;
}
</style>
