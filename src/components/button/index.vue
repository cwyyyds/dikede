<template>
  <el-button
    type="primary"
    :icon="iconS"
    :style="{
      color: colorS,
      background: backgroundS,
      'border-color': backgroundS,
    }"
    >{{ text }}</el-button
  >
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    colorS: {
      type: String,
      default: '#fff',
    },
    backgroundS: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '主要按钮',
    },
    iconS: {
      type: String,
      default: '',
    },
  },

  created() {},

  methods: {},
}
</script>

<style scoped></style>
