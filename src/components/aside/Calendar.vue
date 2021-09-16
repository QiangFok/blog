<template>
  <div class="panel panel-default calendar">
    <div class="panel-heading">
      <p class="now-date public-aside-title qin">
        {{selectedYear}}年{{selectedMonth + 1}}月{{selectedDate}}日
      </p>
      <ul>
        <li class="public-aside-title" @click="handlePreMonth"><i class="glyphicon glyphicon-menu-left
"></i></li>
        <li class="public-aside-title" @click="handleNextMonth"><i class="glyphicon glyphicon-menu-right"></i></li>
      </ul>
    </div>
    <div class="panel-body">
      <div class="date-warp">
        <ul class="week">
          <li v-for="(item,index) in calendarHeader" :key="index">{{item}}</li>
        </ul>
        <ul class="day">
          <li
            :class="`${(item.type === 'pre' || item.type === 'next') ? 'not' : ''} ${(item.content === selectedDate && item.type === 'normal') && 'now'}`"
            @click="handleDayClick(item)" v-for="(item, index) in displayDaysPerMonthT(selectedYear)[selectedMonth]"
            :key="item.type + item.content + `${index}`">
            {{item.content}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        calendarHeader: ["日", "一", "二", "三", "四", "五", "六"],
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth(),
        selectedDate: new Date().getDate()
      };
    },
    methods: {
      displayDaysPerMonth(year, month) {
        //定义每个月的天数，如果是闰年第二月改为29天
        let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          daysInMonth[1] = 29;
        }
        let targetDay = new Date(year, month, 1).getDay();
        let total_calendar_list = [];
        let preNum = targetDay;
        let nextNum = 0;
        if (targetDay > 0) {
          for (let i = 0; i < preNum; i++) {
            let obj = {
              type: "pre",
              content: ""
            };
            total_calendar_list.push(obj);
          }
        }
        for (let i = 0; i < daysInMonth[month]; i++) {
          let obj = {
            type: "normal",
            content: i + 1
          };
          total_calendar_list.push(obj);
        }
        nextNum = 6 - new Date(year, month + 1, 0).getDay()

        for (let i = 0; i < nextNum; i++) {
          let obj = {
            type: "next",
            content: ""
          };
          total_calendar_list.push(obj);
        }
        return total_calendar_list;
      },
      displayDaysPerMonthT(year) {
        //定义每个月的天数，如果是闰年第二月改为29天
        let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          daysInMonth[1] = 29;
        }

        let daysPreMonth = [].concat(daysInMonth);
        daysPreMonth.unshift(daysPreMonth.pop());

        let addDaysFromPreMonth = new Array(12).fill(null).map((item, index) => {
          let day = new Date(year, index, 1).getDay();
          if (day === 0) {
            return 6;
          } else {
            return day - 1;
          }
        });

        let total_calendar_list = new Array(12)
          .fill([])
          .map((month, monthIndex) => {
            let addDays = addDaysFromPreMonth[monthIndex] + 1,
              daysCount = daysInMonth[monthIndex],
              daysCountPre = daysPreMonth[monthIndex],
              monthDate = [];

            if (addDays >= 7) {
              addDays = addDays - 7;
            }

            for (; addDays > 0; addDays--) {
              let obj = {
                content: daysCountPre--,
                type: "pre"
              };

              monthDate.unshift(obj);
            }

            for (let i = 0; i < daysCount;) {
              let obj = {
                content: ++i,
                type: "normal"
              };

              monthDate.push(obj);
            }
            if (monthDate.length > 35) {
              for (let i = 42 - monthDate.length, j = 0; j < i;) {
                let obj = {
                  content: ++j,
                  type: "next"
                };

                monthDate.push(obj);
              }
            } else {
              for (let i = 35 - monthDate.length, j = 0; j < i;) {
                let obj = {
                  content: ++j,
                  type: "next"
                };

                monthDate.push(obj);
              }
            }
            return monthDate;
          });
        return total_calendar_list;
      },
      handleDayClick(item) {
        if (item.type === 'normal') {
          // do anything...
          this.selectedDate = Number(item.content)
        }
      },
      handlePreMonth() {
        if (this.selectedMonth === 0) {
          this.selectedYear = this.selectedYear - 1
          this.selectedMonth = 11
          this.selectedDate = 1
        } else {
          this.selectedMonth = this.selectedMonth - 1
          this.selectedDate = 1
        }
      },
      handleNextMonth() {
        if (this.selectedMonth === 11) {
          this.selectedYear = this.selectedYear + 1
          this.selectedMonth = 0
          this.selectedDate = 1
        } else {
          this.selectedMonth = this.selectedMonth + 1
          this.selectedDate = 1
        }
      },
    }
  };
</script>

<style lang="less" scoped>

  .panel-heading {
    display: flex;
    justify-content: space-between;

    ul {
      display: inline-flex;

      li {
        cursor: pointer;
        margin: 0 6px;
      }
    }
  }

  .panel-body {
    .week {
      display: flex;

      li {
        width: 15%;
        padding: 0 0 12px;
        text-align: center;
      }
    }

    .day {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 13.6%;
        padding: 10px;
        margin: 1px;
        text-align: center;
        transition: all 0.2s ease;
        cursor: pointer;
      }

      li:hover {
        background-color: #45A29E;
      }

    }

    .now {
      background: #45A29E;
      color: #C5C6C7;
    }

    .not {
      background-color: #b9b9b9;
      color: #848484;
    }

  }

  @media screen and (max-width: 375px) {
    .panel-body {
      .day {
        li {
          width: 13.6%;
        }
      }
    }
  }

  /*iphone 6/7/8 Plus*/
  @media screen and (min-width: 414px) and (max-width: 768px) {
    .panel-body {
      .day {
        li {
          width: 13.7%;
        }
      }
    }
  }

  /*iPad*/
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .panel-body {
      .day {
        li {
          width: 14%;
        }
      }
    }
  }

  /*iPad pro*/
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    .panel-heading {
      ul {
        display: none;
      }
    }
  }

</style>
