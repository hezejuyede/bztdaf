<template>
    <div class="templateDivOne">
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
                            <div class="BottomTitleRT"  >
                                当日上链块数（个）
                            </div>
                            <div class="BottomTitleRB" @click="showHash">
                                {{count }}
                            </div>
                        </div>
                    </div>
                    <div class="BottomCenter">
                        <img src="../../../assets/img/dw/DataTrustworthinessSupervision/bz.png" alt="">
                    </div>
                    <div class="BottomTable">
                        <el-table class="tb-edit" :data="tableData"
                                  :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'25px',borderColor:'#CAE5E4',fontSize:'10px',fontWeight: 'bold'}"
                                  :cell-style="{fontSize:'10px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                                  border
                                  :height="160"
                                  id="rebateSetTable"
                                  ref="moviesTable"
                                  highlight-current-row style="width: 98%;margin: auto">
                            <el-table-column label="地区" prop="dq" align="center"></el-table-column>
                            <el-table-column label="总数/个" prop="zs" align="center"></el-table-column>
                            <el-table-column label="10KV/个" prop="10KV" align="center"></el-table-column>
                            <el-table-column label="0.4KV/个" prop="4KV" align="center"></el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="BottomR  fl">
                    <div class="BottomTitle">
                        <div class="BottomTitleL">
                            <img src="../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_03.png" alt="">
                        </div>
                        <div class="BottomTitleR">
                            <div class="BottomTitleRT" @click="showException">
                                异常链数
                            </div>
                            <div class="BottomTitleRB" @click="showManufactor">
                              6
                            </div>
                        </div>
                    </div>
                    <div class="BottomRDiv">
                        <div id="enterpriseBar" :style="{width: '100%', height: '350px'}"></div>
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

        <div class="templateDivT2 clearfix">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">数据块详情</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl" style="padding-right: 50px">
                    更多>
                </div>
            </div>
            <div class="templateDivTopTBottom2" id="areaDetails">
                <areaDetails  @showHash="showHashDialog"  @showIndex="showIndex"></areaDetails>
            </div>
        </div>


        <dataHashDialog :dataHashDialog="dataHashDialog" :rowId="rowId" @closeVisible="closeVisible" ></dataHashDialog>
        <exceptionDetailsDialog :exceptionDetailsDialog="exceptionDetailsDialog" :rowId="rowId"
                                @closeVisible="closeVisible"></exceptionDetailsDialog>
        <manufactorDialog :manufactorDialog="manufactorDialog" :rowId="rowId"
                          @closeVisible="closeVisible"></manufactorDialog>
        <shadinLayer></shadinLayer>

    </div>
</template>

<script>
import areaDetails from './components/areaDetails'
import sataLinkDetails from './components/sataLinkDetails'
import trustedStateStatistics from './components/trustedStateStatistics'
import dataHashDialog from './components/dataHashDialog'
import exceptionDetailsDialog from './components/exceptionDetailsDialog'
import manufactorDialog from './components/manufactorDialog'
import {
    upperChains,
    abnormalChains,
} from "../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";
import shadinLayer from "../../../common/shadinLayer";

export default {
    name: "index",
    data() {
        return {
            count:"",
            tableData:[],
            dataHashDialog:false,
            exceptionDetailsDialog:false,
            manufactorDialog:false,
            rowId:"",
        }
    },


    components: {shadinLayer,areaDetails,sataLinkDetails,trustedStateStatistics,dataHashDialog,manufactorDialog,exceptionDetailsDialog},

    mounted() {
        this.getList();
        this.setPie();


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
        setPie() {
            let that = this;
            const getListData = async () => {
                const result = await abnormalChains({})
                var data = result.data.data.data;
                let myChart = this.$echarts.init(document.getElementById('enterpriseBar'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '85%',
                        left: 'center',

                    },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,

                            itemStyle: {
                                normal: {
                                    color: function (colors) {
                                        var colorList = [
                                            '#2DC3B0', '#2174ED', '#FFC851', '#5A5476', '#1869A0', '#FF9393'
                                        ];
                                        return colorList[colors.dataIndex]
                                    }
                                },
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

                            data: data
                        }
                    ]
                });
            }
            getListData();


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

        //显示Hash
        showHashDialog(showHash) {
            if(showHash){
                this.dataHashDialog = true;
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
        },

        //显示
        showIndex(index) {
            this.rowId = index;
            console.log(this.rowId)
        }

    }

}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "../../../assets/less/base";

.templateDivOne {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #EDF4F4;
    padding-top: 10px;
    padding-bottom: 20px;
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
        float: left;
        width: 48%;
        height: 500px;
        background-color: #ffffff;
        margin-left: 1%;
        margin-top: 1%;
        margin-bottom: 1%;




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
    .templateDivT2{
        width: 97%;
        height: 500px;
        background-color: #ffffff;
        margin-left: 1%;
        margin-top: 1%;
        margin-bottom: 1%;

    }
    .templateDivTopTBottom2{
        height: 400px;
        background-color: #ffffff;
    }

    .el-table {
        /deep/ .el-table__header-wrapper {
            padding: 0;

        }
    }


}
.el-table {
    // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // 深度选择器，去除默认的padding
    /deep/ th {
        padding: 0 ;
    }
    /deep/ td {
        padding: 0 ;
    }
}

</style>

