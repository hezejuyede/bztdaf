<template>
    <div class="templateBar">
        <div class="">
            <div id="line1" :style="{width: '100%', height: '300px'}"></div>
            <div class="BarText">发电量</div>
        </div>
        <div class="">
            <div id="line2" :style="{width: '100%', height: '300px'}"></div>
            <div class="BarText">履约电量</div>
        </div>
        <div class="">
            <div id="line3" :style="{width: '100%', height: '300px'}"></div>
            <div class="BarText">结算金额</div>
        </div>
    </div>
</template>


<script type="text/ecmascript-6">
import {
    PowerGeneration,
    PerformanceElectricity,
    SettlementAmount
} from "../../../../api/GreenPowerTransactionAggregationAgent/TransactionContractFeedback";

export default {
    name: 'modal',
    data() {
        return {}
    },
    mounted() {
        setTimeout(() => {
            this.getList1();
            this.getList2();
            this.getList3();
        }, 1000)
    },
    watch: {},
    created() {


    },
    methods: {

        //查询
        getList1() {
            const getListData = async () => {
                const result = await PowerGeneration({})
                let data = result.data.data.data;

                let myChart1 = this.$echarts.init(document.getElementById('line1'));
                // 绘制图表
                myChart1.setOption(
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
                            type: 'bar', smooth: true, itemStyle: {
                                normal: {
                                    color: '#088B86', areaStyle: {
                                        type: 'default',
                                        opacity: 0.1
                                    }
                                }
                            }
                        },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#FFC657', areaStyle: {
                                            type: 'default',
                                            opacity: 0.1
                                        }
                                    }
                                }
                            },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#78D44B', areaStyle: {
                                            type: 'default',
                                            opacity: 0.1
                                        }
                                    }
                                }
                            },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#0EA3F7', areaStyle: {
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


        //查询
        getList2() {
            const getListData = async () => {
                const result = await PerformanceElectricity({})
                let data = result.data.data.data;
                let myChart2 = this.$echarts.init(document.getElementById('line2'));

                // 绘制图表
                myChart2.setOption(
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
                            type: 'bar', smooth: true, itemStyle: {
                                normal: {
                                    color: '#088B86', areaStyle: {
                                        type: 'default',
                                        opacity: 0.1
                                    }
                                }
                            }
                        },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#FFC657', areaStyle: {
                                            type: 'default',
                                            opacity: 0.1
                                        }
                                    }
                                }
                            },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#78D44B', areaStyle: {
                                            type: 'default',
                                            opacity: 0.1
                                        }
                                    }
                                }
                            },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#0EA3F7', areaStyle: {
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


        //查询
        getList3() {
            const getListData = async () => {
                const result = await SettlementAmount({})
                let data = result.data.data.data;
                let myChart3 = this.$echarts.init(document.getElementById('line3'));
                // 绘制图表
                myChart3.setOption(
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
                            type: 'bar', smooth: true, itemStyle: {
                                normal: {
                                    color: '#088B86', areaStyle: {
                                        type: 'default',
                                        opacity: 0.1
                                    }
                                }
                            }
                        },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#FFC657', areaStyle: {
                                            type: 'default',
                                            opacity: 0.1
                                        }
                                    }
                                }
                            },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#78D44B', areaStyle: {
                                            type: 'default',
                                            opacity: 0.1
                                        }
                                    }
                                }
                            },
                            {
                                type: 'bar', smooth: true, itemStyle: {
                                    normal: {
                                        color: '#0EA3F7', areaStyle: {
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
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        flex: 1;
        height: 100%;
    }

    .BarText {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }


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
