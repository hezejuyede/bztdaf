<template>
    <div class="visibleDiv" v-if="AddPolymerDialog===true">
        <div class="visibleDiv">
            <div class="visibleDivSelect">
                <label style="margin-right: 5px;margin-left: 5px" class="fr">
                    <el-select
                        style="width:100px"
                        v-model="type"
                        clearable
                        filterable
                        allow-create
                        multiple
                        collapse-tags
                        default-first-option
                        placeholder="地区">
                        <el-option
                            v-for="item in typeOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </label>
                <label style="margin-right: 5px;margin-left: 5px" class="fr">
                    <el-select
                        style="width:100px"
                        v-model="type"
                        clearable
                        filterable
                        allow-create
                        multiple
                        collapse-tags
                        default-first-option
                        placeholder="光伏类型">
                        <el-option
                            v-for="item in typeOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </label>
                <label style="margin-right: 5px;margin-left: 5px" class="fr">
                    <el-select
                        style="width:100px"
                        v-model="type"
                        clearable
                        filterable
                        allow-create
                        multiple
                        collapse-tags
                        default-first-option
                        placeholder="电压">
                        <el-option
                            v-for="item in typeOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </label>
                <label style="margin-right: 5px;margin-left: 5px" class="fr">
                    <el-select
                        style="width:100px"
                        v-model="type"
                        clearable
                        filterable
                        allow-create
                        multiple
                        collapse-tags
                        default-first-option
                        placeholder="容量">
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
                <el-table class="tb-edit" :data="tableData"
                          :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'12px',fontWeight: 'bold'}"
                          :cell-style="{fontSize:'12px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                          border
                          :height="320"
                          id="rebateSetTable"
                          ref="moviesTable"
                          highlight-current-row style="width: 95%;margin: auto">
                    <el-table-column label="聚合体" prop="jht" align="center" width="80"></el-table-column>
                    <el-table-column label="聚合体总容量" prop="jhtzrl" align="center"></el-table-column>
                    <el-table-column label="聚合体余量" prop="jhtyl" align="center"></el-table-column>
                    <el-table-column label="聚合体资产主体数量" prop="jhtzcztrl" align="center"></el-table-column>
                    <el-table-column label="申请加入" align="center">
                        <template slot-scope="scope">
                            <el-button type="primary" @click="applyJoin(scope.row)"
                                       style="background-color: #05A696;width: 100px;height: 35px">申请
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {dataHash} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";


export default {
    name: 'modal',
    data() {
        return {
            tableData: [
                {"jht": "聚合体1", "jhtzrl": "170MW", "jhtyl": "3MW", "jhtzcztrl": "17"},
                {"jht": "聚合体1", "jhtzrl": "170MW", "jhtyl": "3MW", "jhtzcztrl": "17"},
                {"jht": "聚合体1", "jhtzrl": "170MW", "jhtyl": "3MW", "jhtzcztrl": "17"}
            ],
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
                const result = await dataHash({})
                /* that.tableData = result.data.data.data;*/
            }
            getListData();

        },


        //关闭对话框
        closeVisible() {
            this.$emit('closeVisible', 'AddPolymerDialog')
        },

        //申请加入
        applyJoin() {
            this.$message.success("申请加入成功");
            setTimeout(()=>{
                this.$emit('closeVisible', 'agentList')

            },1000)
        }


    },
    props: {
        /**
         * 弹出框
         */
        AddPolymerDialog: {
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
    background-color: #ffffff;
    .visibleDivSelect {
        height: 80px;

        line-height: 80px;

    }

    .visibleTable {
        height: 320px;

    }


}

</style>
