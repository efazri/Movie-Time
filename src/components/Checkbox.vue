<template>
  <div class="flex justify-between mb-2">
    <span class="text-white">{{ value }}</span>
    <input
      type="checkbox"
      :checked="selected === value"
      :v-model="selected"
      @click="onCheck(value)"
    />
  </div>
</template>

<script>
export default {
  name: "checkbox-component",
  props: {
    value: String,
    selected: String,
  },
  methods: {
    onCheck(val) {
      this.$emit("onChangeHandler", val);
    },
  },
};
</script>
