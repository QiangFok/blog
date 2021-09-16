<template>

  <div class="row">
    <nav>
      <ul class="pagination">
        <li v-if="false">
          <a href="#">
            <span> < </span>
          </a>
        </li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li>
          <a href="#">
            <span> > </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Paging"
  }
</script>

<style lang="less" scoped>
  .pagination {
    padding-left: 15px;
    margin: 0;

    li > a {
      color: #1F2833;
      background-color: #C5C6C7;
      transition: all .2s ease;
    }
  }

  .pagination > .active > a {
    background-color: #45A29E;
    border-color:#66FCF1;
  }
</style>
