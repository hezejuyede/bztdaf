<template>
    <el-dialog title="厂家" :visible.sync="manufactorDialog" width=60% :close-on-click-modal="false"
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
                    <el-table-column label="厂家" prop="cj" align="center" ></el-table-column>
                    <el-table-column label="生产日期" prop="time" align="center"></el-table-column>
                    <el-table-column label="输出电压" prop="scdy" align="center"></el-table-column>
                    <el-table-column label="输出频率" prop="scpl" align="center"></el-table-column>
                    <el-table-column label="额定输出功率" prop="edscgl" align="center"></el-table-column>
                </el-table>
            </div>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
import { manufactorList} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";


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
                const result = await manufactorList({
                    "rowId":that.rowId
                })
                that.tableData = result.data.data.data;
            }
            getListData();

        },


        //关闭对话框
        closeVisible(){
            this.$emit('closeVisible','manufactorDialog')
        },


    },
    props: {
        /**
         * 弹出框
         */
        manufactorDialog: {
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
