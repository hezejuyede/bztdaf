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
               /* let data = result.data.data.data;*/
                let data =  [
                    ['单元', '单元体1', '单元体2', '单元体3', '单元体4'],
                        ['6.25', 494.12, 595.47, 795.47, 895.47],
                        ['6.27', 461.18, 562.44, 795.47, 895.47],
                        ['6.29', 433.95, 635.13, 795.47, 895.47],
                        ['7.01', 414.95, 716.08, 795.47, 595.47],
                        ['7.03', 403.64, 804.74, 795.47, 895.47],
                        ['7.05', 458.21, 959.47, 795.47, 895.47],
                        ['7.07', 469.41, 270.70, 795.47, 895.47],
                        ['7.09', 516.96, 318.37, 795.47, 895.47],
                        ['7.11', 501.26, 802.63, 795.47, 895.47],
                        ['7.13', 488.08, 789.41, 795.47, 895.47],
                        ['7.15', 483.91, 685.23, 795.47, 895.47],
                        ['7.17', 535.84, 137.31, 795.47, 895.47],
                        ['7.19', 816.96, 318.37, 795.47, 895.47],
                        ['7.21', 201.26, 502.63, 795.47, 895.47],
                        ['7.23', 788.08, 289.41, 795.47, 895.47],
                        ['7.25', 583.91, 785.23, 795.47, 895.47]
                    ];

                let myChart1 = this.$echarts.init(document.getElementById('line1'));
                let myChart2 = this.$echarts.init(document.getElementById('line2'));
                let myChart3 = this.$echarts.init(document.getElementById('line3'));
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
     div{
         flex: 1;
         height: 100%;
     }
    .BarText{
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
