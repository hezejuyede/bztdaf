<template>
    <div class="templateBar">
        <div id="line" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>


<script type="text/ecmascript-6">
import {PowerSupplyCapacity} from "../../../../api/GreenPowerTransactionAggregationAgent/MarketInformationSynchronization";

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
            const getListData = async () => {
                const result = await PowerSupplyCapacity({})
                let data = result.data.data.data;
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
                                rotate: 30,
                                textStyle: {
                                    color: "#5D6464"
                                }
                            },
                        },
                        yAxis: {
                            name: "(单位:元/个)",
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
                        series: [{
                            type: 'line', smooth: true, itemStyle: {
                                normal: {
                                    color: '#FFC657', areaStyle: {
                                        type: 'default',
                                        opacity: 0.1
                                    }
                                }
                            }
                        },
                            {
                                type: 'line', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#80D555', areaStyle: {
                                            type: 'default',
                                            opacity: 0.1
                                        }
                                    }
                                }
                            }]
                    }, true);
            }
            getListData();

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
