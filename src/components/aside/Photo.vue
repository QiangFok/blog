<template>
  <div class="panel panel-default recommend">
    <div class="panel-heading">
      <p>身残志坚，人生不设想</p>
      <p>没有什么不能的，<em>只要你想！</em></p>
    </div>
    <div class="panel-body">

      <video
        src="https://blog-1300564200.cos.ap-chongqing.myqcloud.com/video/%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E4%B8%8D%E4%B8%80%E6%A0%B7.mp4"
        controls
        preload="auto"
      >
      </video>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Photo"
  }
</script>

<style scoped>

  p {
    padding-bottom: 10px;
  }

  em {
    color: #ff4572;
    font-style: normal;
  }

  video {
    width: 100%;
  }

</style>
