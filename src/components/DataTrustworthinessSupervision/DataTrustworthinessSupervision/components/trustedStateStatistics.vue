<template>
    <div class="visibleDiv">
        <div class="visibleDivSelect">
            <div class="dataDivTemplate fl">
                <div class="dataDivTemplateL fl">
                    <div class="dataDivTemplateLT">
                        <div class="dataDivTemplateLTText">当日上链数量</div>
                        <div class="dataDivTemplateLTImg"><img
                            src="../../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_06.png" alt="" style="height: 5px;width: 100px"></div>
                    </div>
                    <div class="dataDivTemplateB">
                        666541
                    </div>
                </div>
                <div class="dataDivTemplateR fl">
                    <span>较昨日</span>
                    <span style="color: #dd6161">+23</span>
                </div>
            </div>
            <div class="dataDivTemplate fl">
                <div class="dataDivTemplateL fl">
                    <div class="dataDivTemplateLT">
                        <div class="dataDivTemplateLTText">本月上链数量</div>
                        <div class="dataDivTemplateLTImg"><img
                            src="../../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_06.png" alt="" style="height: 5px;width: 100px"></div>
                    </div>
                    <div class="dataDivTemplateB">
                        666541
                    </div>
                </div>
                <div class="dataDivTemplateR fl">
                    <span>较上月</span>
                    <span style="color: #dd6161">+23</span>
                </div>
            </div>
            <div class="dataDivTemplate fl">
                <div class="dataDivTemplateL fl">
                    <div class="dataDivTemplateLT">
                        <div class="dataDivTemplateLTText">异常连输</div>
                        <div class="dataDivTemplateLTImg"><img
                            src="../../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_06.png" alt="" style="height: 5px;width: 100px"></div>
                    </div>
                    <div class="dataDivTemplateB">
                        666541
                    </div>
                </div>
                <div class="dataDivTemplateR fl">
                    <span>较上周</span>
                    <span style="color: #68D085">+23</span>
                </div>
            </div>
        </div>
                <div class="visibleTable">
                    <el-table class="tb-edit" :data="tableData"
                              :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'10px',fontWeight: 'bold'}"
                              :cell-style="{fontSize:'10px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                              border
                              :height="320"
                              id="rebateSetTable"
                              ref="moviesTable"
                              highlight-current-row style="width: 95%;margin: auto">
                        <el-table-column label="地区" prop="name" align="center" width="80"></el-table-column>
                        <el-table-column label="当日上链数量" prop="ascription" align="center"></el-table-column>
                        <el-table-column label="当日异常数据" prop="ascription" align="center"></el-table-column>
                        <el-table-column label="本月上链数量" prop="ascription" align="center"></el-table-column>
                        <el-table-column label="本月异常数据" prop="ascription" align="center"></el-table-column>
                        <el-table-column label="年度上链数量" prop="ascription" align="center"></el-table-column>
                        <el-table-column label="年度异常" prop="ascription" align="center" width="80"></el-table-column>
                    </el-table>
                </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {TerminalEquipmentManufacturer} from "../../../../api/DataTrustworthinessSupervision/SourceDataRangeStatistics";

export default {
    name: 'modal',
    data() {
        return {
            tableData: [],
            manufactor: "",
            manufactoreOptions: [],
            hashData: "",
        }
    },
    mounted() {


    },
    created() {



    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await TerminalEquipmentManufacturer({
                    "id": "",
                    "name":""
                })
                that.tableData = result.data.data.data;
            }
            getListData();

        },
    },
    props: {
        tableData: {
            type: Array,
            required: true
        },
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


}

</style>
