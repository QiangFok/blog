<template>
  <div>
    <div class="timeline-item" v-for="item in timelinedata" :key="item.index">
      <div class="timeline-point" :class="'timeline-point-' + item.state">
        <i class="fa fa-circle"></i>
      </div>
      <div class="timeline-event" :class="'timeline-event-' + item.state">
        <div class="timeline-heading">
          <h4 class="qin">{{item.title}}</h4>
        </div>
        <div class="timeline-body">
          <p>{{item.content}}</p>
        </div>
        <div class="timeline-footer">
          <p class="text-right">{{item.date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!--
-->

<script>
  export default {
    name: "TimeLine",
    props: {
      timelinedata: {
        year: 'year',
        title: 'title',
        content: 'content',
        date: 'date',
        state: 'state'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/timeline/mixins/timeline";
  @import "../../assets/css/timeline/timeline";
</style>
