<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-3 col-lg-12">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FluidLayout"
  }
</script>

<style scoped>

</style>
