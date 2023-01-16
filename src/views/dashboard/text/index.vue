<template>
    <div>
        <Status></Status>
        <Feedback></Feedback>
    </div>
</template>

<script>
import Status from './status/index.vue'
import Feedback from './feedback/index.vue'
export default {
  name: 'TextContent',
  components:{
    Status,
    Feedback
  }
};
</script>

<style scoped>

</style>