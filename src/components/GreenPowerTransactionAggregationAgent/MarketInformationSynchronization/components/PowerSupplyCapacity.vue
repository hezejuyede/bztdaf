<template>
    <div class="templateBar">
        <div id="line" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>


<script type="text/ecmascript-6">
import {areaDetails} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: 'modal',
    data() {
        return {}
    },
    mounted() {
        setTimeout(()=>{
            this.getList()
        },1000)
    },
    watch: {},
    created() {


    },
    methods: {

        //查询
        getList() {
            /*  let that = this;
              const getListData = async () => {
                  const result = await areaDetails({
                      "type": this.typeDay,
                  })
                  that.tableData = result.data.data.data;
              }
              getListData();*/


            let data = [
                ['城市', '总的供应量', '已供应量'],
                ['6.25', 494.12, 595.47],
                ['6.27', 461.18, 562.44],
                ['6.29', 433.95, 635.13],
                ['7.01', 414.95, 716.08],
                ['7.03', 403.64, 804.74],
                ['7.05', 458.21, 959.47],
                ['7.07', 469.41, 270.70],
                ['7.09', 516.96, 318.37],
                ['7.11', 501.26, 802.63],
                ['7.13', 488.08, 789.41],
                ['7.15', 483.91, 685.23],
                ['7.17', 535.84, 137.31],
                ['7.19', 816.96, 318.37],
                ['7.21', 201.26, 502.63],
                ['7.23', 788.08, 289.41],
                ['7.25', 583.91, 785.23]

            ];
            let myChart = this.$echarts.init(document.getElementById('line'));
            // 绘制图表
            myChart.setOption(
                {
                    legend: {
                        textStyle: {
                            fontSize: 12,//字体大小
                            color: '#5D6464'//字体颜色
                        },
                    },
                    tooltip: {
                        trigger: 'item',
                        textStyle: {
                            color: '#FFFFFF'
                        },
                    },
                    grid: {},
                    dataset: {
                        source: data
                    },
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: "#3A4467"
                            }
                        },
                        offset: 10,
                        axisTick: { //x轴刻度线
                            show: false,
                        },
                        splitLine: {show: false},
                        axisLabel: {
                            rotate : 30,
                            textStyle: {
                                color: "#5D6464"
                            }
                        },
                    },
                    yAxis: {
                        name:"(单位:元/个)",
                        axisLine: {
                            show: false,
                        },
                        axisTick: { //y轴刻度线
                            show: false,
                            axisLine: { //y轴
                                show: false
                            },

                        },
                        splitLine: {
                            lineStyle: {
                                color: "#3A4467"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#5D6464"
                            }
                        }
                    },
                    series: [{type: 'line',  smooth: true,itemStyle: {normal: {color:'#FFC657',areaStyle: {
                                    type: 'default',
                                    opacity: 0.1
                                }}}},
                        {type: 'line',  smooth: true,itemStyle: {normal: {color:'#80D555',areaStyle: {
                                        type: 'default',
                                        opacity: 0.1
                                    }}}}]
                }, true);
        },
    },
    props: {},
}
</script>
<style scoped lang="less" rel="stylesheet/less">


.templateBar {

    height: 300px;


}

.el-table {
    // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // 深度选择器，去除默认的padding
    /deep/ th {
        padding: 0;
    }

    /deep/ td {
        padding: 5px;
    }
}


</style>
