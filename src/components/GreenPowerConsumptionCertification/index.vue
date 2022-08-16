<template>
    <div class="templateDiv">
        <div class="templateDivL fl">
            <div class="templateDivT">
                <div class="templateDivTTop">
                    <div class="templateDivTTopL fl">
                        <div class="templateDivTTopLText">绿证历史记录</div>
                        <div class="templateDivTTopLImg">
                            <img src="../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTTopR fl">

                    </div>
                </div>
                <div class="Bottom">
                    <GreenCardHistory></GreenCardHistory>
                </div>
            </div>

            <div class="templateDivT2">
                <div class="templateDivTTop">
                    <div class="templateDivTTopL fl">
                        <div class="templateDivTTopLText">绿证标签预览</div>
                        <div class="templateDivTTopLImg">
                            <img src="../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTTopR fl">

                    </div>
                </div>
                <div class="Bottom">
                    <LabelPreview></LabelPreview>
                </div>
            </div>
        </div>
        <div class="templateDivR fl">
            <div class="templateDivRL fl">
                <div class="templateDivRLT">
                    <div class="" style="margin-bottom: 5px">
                        <i class="el-icon-s-unfold"></i>
                    </div>
                    <div class="">企</div>
                    <div class="">业</div>
                    <div class="">设</div>
                    <div class="">备</div>
                    <div class="">数</div>
                </div>
            </div>
            <div class="templateDivRR fl">
                <div class="templateDivRRT">
                    <div class="templateDivRRTL fl">
                        <div id="lineList1" style="width:100%;height: 350px;"></div>
                    </div>
                    <div class="templateDivRRTR fl">
                        <el-table class="tb-edit" :data="tableData"
                                  :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'30px',borderColor:'#CAE5E4',fontSize:'12px',fontWeight: 'bold'}"
                                  :cell-style="{fontSize:'12px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                                  :height="400"
                                  ref="moviesTable"
                                  highlight-current-row style="width: 95%;margin: auto">
                            <el-table-column label="时间" prop="time" align="center"></el-table-column>
                            <el-table-column label="耗电量(MWH)" prop="MWH" align="center"></el-table-column>
                            <el-table-column label="绿电占比(%)" prop="ldzb" align="center"></el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="templateDivRRT">
                    <div class="templateDivRRTL fl">
                        <div id="lineList2" style="width:100%;height: 350px;"></div>
                    </div>
                    <div class="templateDivRRTR fl">
                        <el-table class="tb-edit" :data="tableData"
                                  :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'30px',borderColor:'#CAE5E4',fontSize:'12px',fontWeight: 'bold'}"
                                  :cell-style="{fontSize:'12px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                                  :height="400"
                                  ref="moviesTable"
                                  highlight-current-row style="width: 95%;margin: auto">
                            <el-table-column label="时间" prop="time" align="center"></el-table-column>
                            <el-table-column label="耗电量(MWH)" prop="MWH" align="center"></el-table-column>
                            <el-table-column label="绿电占比(%)" prop="ldzb" align="center"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>

        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import GreenCardHistory from './components/GreenCardHistory'
import LabelPreview from './components/LabelPreview'
import shadinLayer from "../../common/shadinLayer";
import {
    upperChains,
    abnormalChains,
} from "../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: "index",
    data() {
        return {
            count: "",
            tableData: [
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"},
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"},
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"},
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"},
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"},
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"},
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"},
                {"time": "2020-01", "MWH": "9796.960", "ldzb": "17.13"}
            ],
            dataHashDialog: false,
            exceptionDetailsDialog: false,
            manufactorDialog: false,
            rowId: "",
        }
    },


    components: {GreenCardHistory, LabelPreview},

    mounted() {
        this.setLine();
        this.setLine2();
    },
    created() {


    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await upperChains({})
                that.tableData = result.data.data.data;
                that.count = result.data.data.number;
            }
            getListData();

        },


        //设置饼图
        setLine() {
            /*  let that = this;
              const getListData = async () => {
                  const result = await abnormalChains({})

              }
              getListData();*/

            /* var data = result.data.data.data;*/
            let myChart = this.$echarts.init(document.getElementById('lineList1'));
            myChart.clear();
            myChart.setOption({
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'item',
                },
                grid: {
                    top: '20%',
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: [2022.01, 2022.02, 2022.03, 2022.04, 2022.05, 2022.06, 2022.07, 2022.08, 2022.09, 2022.10, 2022.11, 2022.12],
                    axisTick: { //X轴刻度线
                        show: false,
                    },
                    boundaryGap: true,
                    offset: 10,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#259793",
                            width: 2,
                            type: "solid"
                        }
                    },
                    axisLabel: {
                        //  让x轴文字方向为竖向
                        rotate: 30,
                        textStyle: {
                            color: '#9B9E9E'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: "(电量:兆瓦时)",
                    axisTick: { //y轴刻度线
                        show: false,

                    },
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                    },
                },
                lineStyle: {
                    color: '#86E6FD'
                },

                series: [
                    {
                        data: [4000, 3500.5500, 6000, 2600, 5300, 4780, 6532, 6753, 3290, 4208, 1357],
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 8,
                        itemStyle: {
                            normal: {
                                color: '#0ECDFC',
                                label: {
                                    show: false,
                                    color: '#FFF',
                                    position: 'bottom',
                                },
                                areaStyle: {
                                    type: 'default',
                                    opacity: 0.1
                                }

                            }
                        },
                    }
                ]
            });


        },

        //设置饼图
        setLine2() {
            /*  let that = this;
              const getListData = async () => {
                  const result = await abnormalChains({})

              }
              getListData();*/

            /* var data = result.data.data.data;*/
            let myChart = this.$echarts.init(document.getElementById('lineList2'));
            myChart.clear();
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['低碳情景'],
                    textStyle: {
                        color: '#fff'
                    },
                    top: '8%'
                },
                grid: {
                    top: '20%',
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: [2022.01, 2022.02, 2022.03, 2022.04, 2022.05, 2022.06, 2022.07, 2022.08, 2022.09, 2022.10, 2022.11, 2022.12],
                    axisTick: { //X轴刻度线
                        show: false,
                    },
                    boundaryGap: true,
                    offset: 10,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#259793",
                            width: 2,
                            type: "solid"
                        }
                    },
                    axisLabel: {
                        //  让x轴文字方向为竖向
                        rotate: 30,
                        textStyle: {
                            color: '#9B9E9E'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: "(电量:兆瓦时)",
                    axisTick: { //y轴刻度线
                        show: false,

                    },
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                    },
                },
                lineStyle: {
                    color: '#86E6FD'
                },

                series: [
                    {
                        data: [4000, 3500.5500, 6000, 2600, 5300, 4780, 6532, 6753, 3290, 4208, 1357],
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 8,
                        itemStyle: {
                            normal: {
                                color: '#0ECDFC',
                                label: {
                                    show: false,
                                    color: '#FFF',
                                    position: 'bottom',
                                },
                                areaStyle: {
                                    type: 'default',
                                    opacity: 0.1
                                }

                            }
                        },
                    }
                ]
            });


        },


        //关闭弹出框
        closeVisible(type) {
            if (type === 'dataHashDialog') {
                this.dataHashDialog = false;
            } else if (type === 'exceptionDetailsDialog') {
                this.exceptionDetailsDialog = false;
            } else if (type === 'manufactorDialog') {
                this.manufactorDialog = false;
            }
        },


        showHash() {
            this.dataHashDialog = true;

        },

        showException() {
            this.exceptionDetailsDialog = true;

        },

        showManufactor() {
            this.manufactorDialog = true;
        }

    }

}
</script>

<style scoped lang="less" rel="stylesheet/less">


.templateDiv {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #EDF4F4;
    padding-bottom: 50px;

    .templateDivL {
        width: 40%;

        .templateDivTTop {
            height: 50px;
            padding-left: 20px;
            padding-top: 10px;

            .templateDivTTopL {
                width: 50%;

                .templateDivTTopLText {
                    width: 120px;
                    font-size: 14px;
                    font-weight: bold;
                }

                .templateDivTTopLImg {
                }
            }

            .templateDivTTopR {
                width: 50%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding-right: 20px;
            }
        }

        .templateDivT {
            width: 100%;
            height: 350px;
            background-color: #ffffff;
            margin-left: 1%;
            margin-top: 1%;
            margin-bottom: 1%;


        }

        .templateDivT2 {
            width: 100%;
            height: 500px;
            background-color: #ffffff;
            margin-left: 1%;
            margin-top: 1%;
            margin-bottom: 1%;


        }
    }

    .templateDivR {
        width: 60%;
        height: 972px;

        .templateDivRL {
            width: 7%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 10px solid #EDF4F4;

            .templateDivRLT {
                height: 95%;
                width: 70%;
                border-radius: 5px;
                background-color: #EDF4F4;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #3C9D99;
                font-weight: bold;
                font-size: 12px;
                cursor: pointer;
            }

        }

        .templateDivRR {
            background-color: #ffffff;
            width: 93%;
            height: 972px;

            .templateDivRRT {
                width: 100%;
                height: 485px;
                padding-top: 50px;

                .templateDivRRTL {
                    width: 60%;
                    height: 100%;
                }

                .templateDivRRTR {
                    width: 40%;
                    height: 100%;
                }

            }
        }
    }


}

</style>

