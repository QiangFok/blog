<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-md-4 col-lg-3">
        <slot name="aside"></slot>
      </div>

      <div class="col-md-8 col-lg-9">
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
