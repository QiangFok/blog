<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-12 col-md-3 col-lg-3">
        <slot name="aside"></slot>
      </div>

      <div class="col-sm-12 col-md-9 col-lg-9">
        <slot name="jumbotron"></slot>
        <slot name="main"></slot>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseLayout"
  }
</script>

<style scoped>

</style>
