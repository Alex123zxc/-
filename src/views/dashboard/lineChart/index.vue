<template>
  <div class="line" ref="lines">123</div>
</template>

<script>
export default {
  name: 'LineChart',
};
</script>

<style scoped>
.line {
  height: 430px;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
}
.line:hover {
  box-shadow: 0 0 10px rgba(179, 177, 177, 0.45);
}
</style>