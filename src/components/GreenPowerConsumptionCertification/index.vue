<template>
    <div class="templateDiv">
        <div class="templateDivTree fl">
            <div class="TreeDiv">
                <el-input
                    style="width: 90%;margin: 10px 5% 10px 5%"
                    placeholder="输入关键字进行过滤"
                    v-model="filterText">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <el-tree
                    class="filter-tree"
                    :data="data"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    ref="tree">
                </el-tree>
            </div>

        </div>
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
            <div class="templateDivRR fl">
                <div class="templateDivRRT">
                    <div class="templateDivRRTL">
                        <div class="lineTitle">
                            <div class=""></div>
                            <div class="">企业耗电</div>
                        </div>
                        <div id="lineList1" style="width:100%;height: 350px;"></div>
                    </div>
                    <div class="templateDivRRTR">
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
    getTreeList,
    getLineList,
    getTableData
} from "../../api/GreenPowerConsumptionCertification/GreenPowerConsumptionCertification";

export default {
    name: "index",
    data() {
        return {
            count: "",
            tableData: [],
            treeData: [],

            filterText: '',
            data: [{
                id: 1,
                label: '邹平地区企业',
                children: [{
                    id: 4,
                    label: '邹平XXXX公司',
                }]
            }, {
                id: 2,
                label: '沾化地区企业',
                children: [{
                    id: 5,
                    label: '沾化XXXX公司'
                }, {
                    id: 6,
                    label: '沾化XXXX公司'
                }]
            }, {
                id: 3,
                label: '滨城地区企业',
                children: [{
                    id: 7,
                    label: '滨城XXXX公司'
                }, {
                    id: 8,
                    label: '滨城XXXX公司'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }


        }
    },


    components: {GreenCardHistory, LabelPreview, shadinLayer},
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
    mounted() {
        this.getTree();
        this.setLine();
        this.getList();
    },
    created() {


    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await getTableData({})
                that.tableData = result.data.data.data;
            }
            getListData();

        },


        //设置饼图
        setLine() {
            const getListData = async () => {
                const result = await getLineList({})
                var data = result.data.data.data;
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
                            data: data,
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
            }
            getListData();
        },


        //获取树列表
        getTree() {
            let that = this;
            const getListData = async () => {
                const result = await getTreeList({})
                that.tableData = result.data.data.data;
            }
            getListData();
        },


        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
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
    .templateDivTree{
        width: 20%;
        height: 972px;
        .TreeDiv{
            width: 95%;
            margin: 0 auto;
            height: 100%;
            padding-top: 20px;
            background-color: #ffffff;
        }

    }

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
        width: 39%;
        height: 972px;
        margin-left: 1%;
        .templateDivRR {
            background-color: #ffffff;
            width: 100%;
            height: 972px;
            .templateDivRRT {
                width: 100%;
                height: 485px;
                padding-top: 50px;

                .templateDivRRTL {
                    width: 100%;
                    height: 100%;
                }

                .templateDivRRTR {
                    width: 100%;
                    height: 100%;
                }

            }
        }
    }

    .lineTitle{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        div:first-child{
            width:10px;
            height: 10px;
            border-radius: 50%;
            background-color:#09CCFC;
            margin-right: 5px;
            margin-top: 2.5px;

        }

    }


}

</style>

