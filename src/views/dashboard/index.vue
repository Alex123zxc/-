<template>
  <div class="dashboard-container">
    <Card></Card>
    <LineChart></LineChart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from './card/index.vue'
import LineChart from './lineChart/index.vue'
export default {
  name: 'Dashboard',
  components:{
    Card,
    LineChart
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
   margin: 0;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
