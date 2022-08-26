<template>
    <div class="greenPower-parent">
        <div style="height:100%;width: 100%;position: relative">
            <div id="chart_1" style="height: 100%;width: 100%;"></div>
            <div class="fountStyle" style="top: 8%;left: 1%;">山东沾化奥仕化学有限公司</div>
            <div class="fountStyle" style="top: 97%;left: 1%;">东力绿电聚合代理商</div>
        </div>
    </div>
</template>

<script>
import json2 from "./temp2.json"

export default {
    name: "Index",
    data() {
        return {
            radio1: "今日",
            querySelect: {},
            startDate: null,
            endDate: null,

            options2: [],
            options3: [],
            optionsTime: [],
            tableData1: [
                {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                }, {  // 2
                    buyerInfo: 'XXXXXXXXXXXXX新能源有限公司',
                    subsidy: '核发张数：123张',
                    greenPower: '2022/08/01 12:22:33'
                },],

            defaultProps: {
                children: 'children',
                label: 'label'
            }

        }
    },
    mounted() {
        this.doSearch();
    },
    created() {

    },
    methods: {
        //页面初始
        doSearch() {
            this.chart_1();
        },
        chart_1() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('chart_1'));
            var dateList = [
                "2022-06-16",
                "2022-06-17",
                "2022-06-18",
                "2022-06-19",
                "2022-06-20",
                "2022-06-21",
                "2022-06-22",
                "2022-06-23",
                "2022-06-24",
                "2022-06-25",
                "2022-06-26",
                "2022-06-27",
                "2022-06-28",
                "2022-06-29",
                "2022-06-30",
                "2022-07-01",
                "2022-07-02",
                "2022-07-03",
                "2022-07-04",
                "2022-07-05",
                "2022-07-06",
                "2022-07-07",
                "2022-07-08",
                "2022-07-09",
                "2022-07-10",
                "2022-07-11",
                "2022-07-12",
                "2022-07-13",
                "2022-07-14",
                "2022-07-15",
                "2022-07-16",
                "2022-07-17",
                "2022-07-18",
                "2022-07-19",
                "2022-07-20",
                "2022-07-21",
                "2022-07-22",
                "2022-07-23",
                "2022-07-24",
                "2022-07-25",
                "2022-07-26",
                "2022-07-27",
                "2022-07-28",
                "2022-07-29",
                "2022-07-30",
                "2022-07-31",
                "2022-08-01",
                "2022-08-02",
                "2022-08-03",
                "2022-08-04",
                "2022-08-05",
                "2022-08-06",
                "2022-08-07",
                "2022-08-08",
                "2022-08-09",
                "2022-08-10",
                "2022-08-11",
                "2022-08-12",
                "2022-08-13",
                "2022-08-14",
                "2022-08-15",
            ];
            var option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: (params) => {
                        if (!params.length) return ' '
                        let s = params[0].axisValueLabel + '<br / > '
                        for (const iterator of params) {
                            //如巢是贲数则反转
                            let d = iterator.data < 0 ? -iterator.data : iterator.data
                            s += iterator.marker + iterator.seriesName + ': ' + d + '<br /> '
                        }
                        return s
                    }
                },
                legend: {
                    data: [],
                    textStyle: {
                        color: '#090909',
                    },
                    top: '1%',
                    right: '4%',
                    icon: 'line' // 图例样式
                },
                grid: {
                    top: '20%',
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                color: ['#53C7A0', '#0468ff', '#53C7A0'],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: dateList,
                    splitLine: {
                        show: false,
                    },
                    offset: 10,
                    axisTick: { //y轴刻度线
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#066d36'  // x轴线颜色
                        }
                    },
                    axisLabel: {
                        interval: 0,  // x轴间隔
                        color: '#5d5d5d',  // x轴字体颜色
                        rotate: -50, //坐标值倾斜
                    },

                },
                yAxis: {
                    name: '(单位:Kw·h)',
                    nameTextStyle: {
                        color: "#5d5d5d",
                        nameLocation: "center",
                    },
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: "#a4a4a4"
                        }
                    },
                    // min: 0, // y轴最小显示
                    axisLine: {
                        show: false,
                    },
                    axisTick: { //y轴刻度线
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#5d5d5d"
                        },
                        formatter: (value) => {
                            if (value < 0) {
                                return -value
                            } else {
                                return value
                            }
                        }
                    },
                },
                series: []
            };
            for (var i = 0; i < 3; i++) {
                option.legend.data.push(json2[i].lable)
                var serie = {
                    name: json2[i].lable,
                    type: 'line',
                    smooth: true, //true 有弧度 ，false 没弧度（直线）
                    symbol: 'none',  // 线上不显示远点,circle显示远点
                    data: json2[i].value,
                    areaStyle: {},
                }
                option.series.push(serie);
            }
            option.series.push({
                name: '平行于y轴的趋势线',
                type: 'line',

                markLine: {
                    itemStyle: {      //盒须图样式。
                    },
                    name: 'cc',
                    //yAxisIndex: 0,
                    symbol: 'none',//去掉箭头
                    label: {
                        show: true, // 是否展示文字
                        color: "#000000",
                        fontSize: 16,
                        // formatter: function () {
                        //     return "合约开始时间"
                        // }
                    },
                    lineStyle: {
                        color: "#032d99",
                        width: 3, // 0 的时候可以隐藏线
                        type: "solid" // 实线，不写默认虚线
                    },

                    data: [
                        {
                            xAxis: '2022-07-01',
                            label: {
                                normal:{
                                    formatter: function () {
                                        return "合约开始时间"
                                    }
                                }
                            }
                        },
                        {
                            xAxis: '2022-07-31',
                            label: {
                                normal:{
                                    formatter: function () {
                                        return "合约结束时间"
                                    }
                                }
                            }
                        },
                        {
                            xAxis: '2022-07-15',
                            label: {
                                normal:{
                                    formatter: function () {
                                        return "盛河光伏履约开始时间"
                                    }
                                }
                            },
                            lineStyle: {
                                color: "#2ef31c",
                                width: 3, // 0 的时候可以隐藏线
                                type: "" // 实线，不写默认虚线
                            },
                        }
                    ],

                }
            });
            myChart.clear();
            myChart.setOption(option);

            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
    }
}
</script>

<style scoped>
.greenPower-parent {
    height: 100%;
    width: 100%;
    padding: 10px !important;
    background-color: #edf4f4;
    position: relative;
}
.fountStyle{
    position: absolute;
    font-size: 16px;
    font-weight: 600;
}
</style>
