<template>
    <el-dialog title="异常指标" :visible.sync="abnormalIndicators" width=60% :close-on-click-modal="false"
               :show-close="true"  :close-on-press-escape="false" @close="closeVisible">
        <div class="visibleDiv">
            <div class="visibleDivSelect">
                <label style="margin-right: 50px;margin-left: 5px" class="fr">
                    <el-button type="primary" @click="getList" icon="el-icon-search"
                               style="background-color: #05A696;width: 100px;height: 35px">查询
                    </el-button>
                </label>
                <label style="margin-right: 5px;margin-left: 5px" class="fr">
                    <el-select
                        style="width:200px"
                        v-model="type"
                        clearable
                        filterable
                        allow-create
                        multiple
                        collapse-tags
                        default-first-option
                        placeholder="指标名称">
                        <el-option
                            v-for="item in typeOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </label>
            </div>
            <div class="visibleTable">
                <el-table class="tb-edit" :data="tables"
                          :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                          :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                          border
                          :height="320"
                          id="rebateSetTable"
                          ref="moviesTable"
                          highlight-current-row style="width: 100%;margin: auto">
                    <el-table-column label="指标名称" prop="couponCodeName" align="center"></el-table-column>
                    <el-table-column label="数据hash" prop="couponCodeName" align="center"></el-table-column>
                    <el-table-column label="时间" prop="provinceName" align="center"></el-table-column>
                    <el-table-column label="可信存证状态" prop="provinceName" align="center"></el-table-column>
                    <el-table-column label="地址" prop="provinceName" align="center"></el-table-column>
                    <el-table-column label="编号" prop="provinceName" align="center"></el-table-column>
                </el-table>
            </div>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
import {industryCarbonReport, regionalCarbonLine} from "../../../../api/dataManagement";

export default {
    name: 'modal',
    data() {
        return {}
    },
    mounted() {
        this.doSearch();

    },
    created() {

    },
    methods: {

        //查詢
        doSearch() {

            this.getList();
        },

        //查询
        getList() {
            /*   let that = this;
               const getListData = async () => {
                   const result = await industryCarbonReport({
                       "startTime": 0,
                       "endTime":0,
                       "type": ""
                   })
                   that.cols = result.data.data.cols;
                   that.tableData = result.data.data.data;
               }
               getListData();*/

        },


        //关闭对话框
        closeVisible(){

        },


    },
    props: {
        /**
         * 弹出框
         */
        abnormalIndicators: {
            type: Boolean,
            required: true
        },
        tables: {
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
        background-color: #EDF4F4;
        line-height: 80px;

    }

    .visibleTable {
        height: 320px;

    }


}

</style>
