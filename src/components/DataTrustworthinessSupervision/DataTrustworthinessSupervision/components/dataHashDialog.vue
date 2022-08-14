<template>
    <el-dialog title="数据hash" :visible.sync="dataHashDialog" width=60% :close-on-click-modal="false"
               :show-close="true"  :close-on-press-escape="false" @close="closeVisible"  @open="getList">
        <div class="visibleDiv">
            <div class="visibleTable">
                <el-table class="tb-edit" :data="tableData"
                          :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                          :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                          border
                          :height="320"
                          id="rebateSetTable"
                          ref="moviesTable"
                          highlight-current-row style="width: 100%;margin: auto">
                    <el-table-column label="输入功率" prop="srgl" align="center" ></el-table-column>
                    <el-table-column label="当天峰值功率" prop="dtfzgl" align="center"></el-table-column>
                    <el-table-column label="有功功率" prop="yggl" align="center"></el-table-column>
                    <el-table-column label="无功功率" prop="wggl" align="center"></el-table-column>
                    <el-table-column label="功率" prop="xl" align="center"></el-table-column>
                    <el-table-column label="发电量" prop="fdl" align="center"></el-table-column>
                    <el-table-column label="当天累计电量" prop="dtljdl" align="center"></el-table-column>
                </el-table>
            </div>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
import {dataHash} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";


export default {
    name: 'modal',
    data() {
        return {
            tableData:[],
        }
    },
    mounted() {


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
            let that = this;
            const getListData = async () => {
                const result = await dataHash({
                    "rowId":that.rowId
                })
                that.tableData = result.data.data.data;
            }
            getListData();

        },


        //关闭对话框
        closeVisible(){
            this.$emit('closeVisible','dataHashDialog')
        },


    },
    props: {
        /**
         * 弹出框
         */
        dataHashDialog: {
            type: Boolean,
            required: true
        },
        rowId: {
            type: String,
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
