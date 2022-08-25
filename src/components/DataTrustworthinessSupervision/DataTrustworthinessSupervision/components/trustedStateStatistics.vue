<template>
    <div class="visibleDiv">
        <div class="visibleDivSelect">
            <div class="dataDivTemplate fl">
                <div class="dataDivTemplateL fl">
                    <div class="dataDivTemplateLT">
                        <div class="dataDivTemplateLTText">当日上链块数</div>
                        <div class="dataDivTemplateLTImg"><img
                            src="../../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_06.png" alt="" style="height: 5px;width: 100px"></div>
                    </div>
                    <div class="dataDivTemplateB">
                        {{title.drslsl}}
                    </div>
                </div>
<!--                <div class="dataDivTemplateR fl">
                    <span>较昨日</span>
                    <span style="color: #dd6161">+{{title.jsr}}</span>
                </div>-->
            </div>
            <div class="dataDivTemplate fl">
                <div class="dataDivTemplateL fl">
                    <div class="dataDivTemplateLT">
                        <div class="dataDivTemplateLTText">本月上链块数</div>
                        <div class="dataDivTemplateLTImg"><img
                            src="../../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_06.png" alt="" style="height: 5px;width: 100px"></div>
                    </div>
                    <div class="dataDivTemplateB">
                        {{title.byslsl}}
                    </div>
                </div>
<!--                <div class="dataDivTemplateR fl">
                    <span>较上月</span>
                    <span style="color: #dd6161">+{{title.jsy}}</span>
                </div>-->
            </div>
            <div class="dataDivTemplate fl">
                <div class="dataDivTemplateL fl">
                    <div class="dataDivTemplateLT">
                        <div class="dataDivTemplateLTText">异常块数</div>
                        <div class="dataDivTemplateLTImg"><img
                            src="../../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_06.png" alt="" style="height: 5px;width: 100px"></div>
                    </div>
                    <div class="dataDivTemplateB">
                        {{title.ycls}}
                    </div>
                </div>
<!--                <div class="dataDivTemplateR fl">
                    <span>较上周</span>
                    <span style="color: #68D085">+{{title.jsz}}</span>
                </div>-->
            </div>
        </div>
                <div class="visibleTable">
                    <el-table class="tb-edit" :data="tableData"
                              :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'40px',borderColor:'#CAE5E4',fontSize:'10px',fontWeight: 'bold'}"
                              :cell-style="{fontSize:'10px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                              border
                              :height="320"
                              id="rebateSetTable"
                              ref="moviesTable"
                              highlight-current-row style="width: 95%;margin: auto">
                        <el-table-column label="地区" prop="dq" align="center" width="60"></el-table-column>
                        <el-table-column label="当日上链数量" prop="drslsl" align="center"></el-table-column>
                        <el-table-column label="当日异常数据" prop="drycsl" align="center"></el-table-column>
                        <el-table-column label="本月上链数量" prop="byslsl" align="center"></el-table-column>
                        <el-table-column label="本月异常数据" prop="byycsl" align="center"></el-table-column>
                        <el-table-column label="年度上链数量" prop="ndslsl" align="center"></el-table-column>
                        <el-table-column label="年度异常" prop="ndycsl" align="center" width="70"></el-table-column>
                    </el-table>
                </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {stateStatistics,stateStatisticsList} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: 'modal',
    data() {
        return {
            tableData: [],
            title:{}
        }
    },
    mounted() {


    },
    created() {
        this.getData();
        this.getList();

    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await  stateStatisticsList({})
                that.tableData = result.data.data.data;
            }
            getListData();

        },

        //查询
        getData() {
            let that = this;
            const getListData = async () => {
                const result = await  stateStatistics({})
                that.title = result.data.data.data;
            }
            getListData();

        },
    },
    props: {

    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">
@import "../../../../assets/less/base";

.visibleDiv {
    width: 100%;
    height: 400px;

    .visibleDivSelect {
        height: 80px;
        background-color: #ffffff;
        line-height: 80px;

    }

    .dataDivTemplate{
        width: 33%;
        height: 80px;
        padding-left: 20px;
        .dataDivTemplateL{
            width: 50%;
            height: 100%;
            .dataDivTemplateB{
                height: 40px;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                color: #323A3A;
            }
            .dataDivTemplateLT{
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .dataDivTemplateLTText{
                    height:10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                }
                .dataDivTemplateLTImg{
                    height: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .dataDivTemplateR{
            width: 50%;
        }
    }

    .visibleTable {
        height: 320px;

    }

    .el-table {
        // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
        // 深度选择器，去除默认的padding
        /deep/ th {
            padding: 0 ;
        }
        /deep/ td {
            padding: 1px ;
        }
    }
}

</style>
