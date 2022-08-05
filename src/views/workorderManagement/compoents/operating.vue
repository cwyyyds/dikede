<template>
  <div>
    <operatingInput class="operating-input"></operatingInput>
    <operatingMain
      v-if="getWorkOrderList !== []"
      class="operating-main"
      :getWorkOrderList="getWorkOrderList"
    ></operatingMain>
  </div>
</template>

<script>
import operatingInput from './operating-input.vue'
import operatingMain from './operatingMain.vue'
import { getWorkOrderSearch } from '@/api'
export default {
  name: 'operatingIndex',

  data() {
    return {
      getWorkOrderList: [],
    }
  },

  components: {
    operatingInput,
    operatingMain,
  },

  created() {
    this.getWorkOrderSearch()
  },

  methods: {
    async getWorkOrderSearch() {
      try {
        const res = await getWorkOrderSearch()
        console.log(res.data.currentPageRecords)
        this.getWorkOrderList = res.data.currentPageRecords
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.operating-input {
  background-color: #fff;
  width: 100%;
  height: 64px;
  margin: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.operating-main {
  background-color: #fff;
  width: 100%;
  margin: 20px;
  padding-left: 20px;
  padding-top: 20px;
}
</style>
