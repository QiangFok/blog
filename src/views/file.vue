<template>
  <base-layout>
    <template #aside>
      <article-total :total-title=totalTitle></article-total>
      <classification :classification-title=classificationTitle></classification>
    </template>
    <template #main>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title qin">Java笔记</h3>
        </div>
        <div class="panel-body">
          <div class="timeline">
            <time-line :timelinedata="timelinedata"></time-line>
            <span class="timeline-label"><span class="label label-primary">2014年</span></span>
            <span class="timeline-label"><button class="btn btn-danger"><i class="fa fa-ambulance"></i></button></span>
          </div>
        </div>
      </div>
    </template>
  </base-layout>
</template>

<script>
  import BaseLayout from "../components/public/BaseLayout";
  import ArticleTotal from "../components/aside/ArticleTotal";
  import Classification from "../components/aside/Classification";
  import TimeLine from "../components/timeline/TimeLine";

  export default {
    name: "PlaceOnFile",
    data() {
      return {
        timelinedata: [
          {
            title: '热搜榜',
            content: '热搜榜,实时发布最新新闻头条,今日新鲜事,今日新鲜事新闻,最新新闻,热点新闻资讯。',
            date: 'Feb-21-2014',
            year: '2020年',
            state: 'danger'/*  danger,default,info,primary,success,warning*/
          },
          {
            title: '(宁德)网络科技有限公司 - 企业信息',
            content: '今日新鲜事(宁德)网络科技有限公司，法定代表人：谢祥茂，注册资金：100万元，地址：福建省宁德市东侨经济开发区五里亭路2号402室，经营范围：互联网接入服务业务；互联网数据中心业务；互联网上网服务；基础软件开发；网络与信息安全软件开发；应用软件开发；...',
            date: 'Feb-21-2014',
            state: 'default'
          },
          {
            title: '异事栏目介绍各种各样的新',
            content: '奇闻异事栏目介绍各种各样的新奇的事件!今日新鲜事让你一次看个够!',
            date: 'Feb-21-2014',
            state: 'info'
          },
          {
            title: '今日新鲜事儿在线收听-喜马拉雅',
            content: '欢迎收听专辑今日新鲜事儿,你可以免费在线收听或者下载今日新鲜事儿的所有优质音频内容,海量内容随意听,更多优质精品内容,尽在喜马拉雅。',
            date: 'Feb-21-2014',
            state: 'primary'
          },
          {
            title: '今日新鲜事新闻及研究报告-闻蜂网',
            content: '科技讯】4月18日消息,每日趣闻千千万,事儿酱精选最好看。哈喽大家好,又到了每天为大家盘点今日新鲜事的时间了,今天有哪些热门新闻占据了热搜榜,哪些大事件...',
            date: 'Feb-21-2014',
            state: 'success'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          },
          {
            title: '高清正版视频在线观看|爱奇艺',
            content: '今日新鲜事是由今日新鲜事创建的播单,主要节目内容为今日新鲜事-每日为大家提供最新的实时、娱,共包含38个视频',
            date: 'Feb-21-2014',
            state: 'warning'
          }
        ],
        totalTitle: "归档总计",
        classificationTitle: "归档分类"
      }
    },
    components: {
      BaseLayout,
      ArticleTotal,
      Classification,
      TimeLine
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/timeline/mixins/timeline";
  @import "../assets/css/timeline/timeline";
</style>
