<template>
    <div class="templateDiv">
        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">可信状态实时监控</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">

                </div>
            </div>
            <div class="Bottom">
                <div class="BottomL  fl">
                    <div class="BottomTitle">
                        <div class="BottomTitleL">
                            <img src="../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_03.png" alt="">
                        </div>
                        <div class="BottomTitleR">
                            <div class="BottomTitleRT">
                                当日上链数量（个）
                            </div>
                            <div class="BottomTitleRB">
                                15487
                            </div>
                        </div>
                    </div>
                    <div class="BottomCenter">
                        <img src="../../../assets/img/dw/DataTrustworthinessSupervision/bz.png" alt="">
                    </div>
                    <div class="BottomTable">
                        <el-table class="tb-edit" :data="tableData"
                                  :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'10px',fontWeight: 'bold'}"
                                  :cell-style="{fontSize:'10px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                                  border
                                  :height="160"
                                  id="rebateSetTable"
                                  ref="moviesTable"
                                  highlight-current-row style="width: 98%;margin: auto">
                            <el-table-column label="地区" prop="name" align="center"></el-table-column>
                            <el-table-column label="总数/个" prop="ascription" align="center"></el-table-column>
                            <el-table-column label="10KV/个" prop="ascription" align="center"></el-table-column>
                            <el-table-column label="0.4KV/个" prop="ascription" align="center"></el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="BottomR fl">
                    <div class="BottomTitle">
                        <div class="BottomTitleL">
                            <img src="../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_03.png" alt="">
                        </div>
                        <div class="BottomTitleR">
                            <div class="BottomTitleRT">
                                异常链数
                            </div>
                            <div class="BottomTitleRB">
                              6
                            </div>
                        </div>
                    </div>
                    <div class="BottomRDiv">
                        <div id="enterpriseBar" :style="{width: '100%', height: '100%'}"></div>
                    </div>
                </div>

            </div>
        </div>

        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">可信状态统计</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">

                </div>
            </div>
            <div class="templateDivTopTBottom">
                <trustedStateStatistics></trustedStateStatistics>
            </div>
        </div>

        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">区域详情</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">
                    更多>
                </div>
            </div>
            <div class="templateDivTopTBottom">
                <areaDetails></areaDetails>
            </div>
        </div>

        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">数据链详情</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">
                    更多>
                </div>
            </div>
            <div class="templateDivTopTBottom">
                <sata-link-details></sata-link-details>
            </div>
        </div>
    </div>
</template>

<script>
import areaDetails from './components/areaDetails'
import sataLinkDetails from './components/sataLinkDetails'
import trustedStateStatistics from './components/trustedStateStatistics'
import {
    DetailsList,
    RegionalData,
    RegionSelectionData
} from "../../../api/DataTrustworthinessSupervision/SourceDataRangeStatistics";

export default {
    name: "index",
    data() {
        return {}
    },


    components: {areaDetails,sataLinkDetails,trustedStateStatistics},

    mounted() {
        this.setPie()
    },
    created() {

    },
    methods: {

        setPie(){
            let myChart = this.$echarts.init(document.getElementById('enterpriseBar'));
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '80%',
                    left: 'center',

                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '郭集' },
                            { value: 735, name: '沾化' },
                            { value: 580, name: '滨城区' },
                            { value: 484, name: '惠民县' },
                            { value: 300, name: '邹平市' }
                        ]
                    }
                ]
            });
        }
    },
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "../../../assets/less/base";

.templateDiv {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #EDF4F4;
    padding-bottom: 50px;

    .templateDivT {
        float: left;
        width: 48%;
        height: 500px;
        background-color: #ffffff;
        margin-left: 1%;
        margin-top: 1%;
        margin-bottom: 1%;


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

        .BottomL {
            width: 50%;
            height: 450px;
            .BottomCenter{
                height: 200px;
                display: flex;
                text-align: center;
                justify-content: center;
                img{
                    height: 100%;

                }
            }
            .BottomTable{
                height: 350px;
            }


        }

        .BottomR {

            width: 50%;
            height: 450px;
            .BottomRDiv{
                height: 400px;
            }



        }
        .BottomTitle{
             height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            .BottomTitleL{
                img{
                    height: 100%;
                }
            }
            .BottomTitleR{
                padding-left: 10px;
                .BottomTitleRT{
                    color: #4CA5A2;
                }
                .BottomTitleRB{
                    color: #4A4A4A;
                    font-size: 40px;
                    font-weight: bold;
                }
            }
        }
    }

    .el-table {
        /deep/ .el-table__header-wrapper {
            padding: 0;

        }
    }


}


</style>

