<template>
  <div class="panel panel-default recommend">
    <div class="panel-heading">
      <h3 class="panel-title">书籍</h3>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item,i) in 4">
          <a href="" class="qin">《Java并发编程之美》</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DiaryPanel"
    }
</script>

<style scoped>

</style>
