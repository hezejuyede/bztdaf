<template>
    <div class="visibleDiv" v-if="detailsDialog===true">
        <div class="visibleDiv">
            <div class="visibleDivSelect">
                <el-descriptions :column="1" border direction="horizontal">
                    <el-descriptions-item label="-光伏主体" :labelStyle="{'color': '#3C937E','font-weight':'bold'}">
                        {{ details.gfzt }}
                    </el-descriptions-item>
                    <el-descriptions-item label="-聚合体名称" :labelStyle="{'color': '#3C937E','font-weight':'bold'}">
                        {{ details.jhtmc }}
                    </el-descriptions-item>
                    <el-descriptions-item label="-主机装机容量" :labelStyle="{'color': '#3C937E','font-weight':'bold'}">
                        {{ details.zjzjrl }}
                    </el-descriptions-item>
                    <el-descriptions-item label="-聚合体装机容量" :labelStyle="{'color': '#3C937E','font-weight':'bold'}">
                        {{ details.jhtzjrl }}
                    </el-descriptions-item>
                    <el-descriptions-item label="-单元体个数" :labelStyle="{'color': '#3C937E','font-weight':'bold'}">
                        {{ details.dytgs }}
                    </el-descriptions-item>
                    <el-descriptions-item label="-可招募单元体个数" :labelStyle="{'color': '#3C937E','font-weight':'bold'}">
                        {{ details.kzmdytgs }}
                    </el-descriptions-item>
                </el-descriptions>
            </div>
            <div class="visibleTable">
                <el-table class="tb-edit" :data="tableData"
                          :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'30px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                          :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                          border
                          :height="200"
                          id="rebateSetTable"
                          ref="moviesTable"
                          highlight-current-row style="width: 100%;margin: auto">
                    <el-table-column label="单元体名称" prop="dytmc" align="center">
                        <template slot-scope="scope">
                            <el-popover placement="top-start" title="单元体名称" width="350" trigger="hover"
                                        :content="scope.row.dytmc">
                                <div slot="reference"
                                     style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                    {{ scope.row.dytmc }}
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="单元体装机容量" prop="dytzjrl" align="center">
                        <template slot-scope="scope">
                            <div v-if="scope.row.dytzjrl==='1'">
                                是
                            </div>
                            <div v-if="scope.row.dytzjrl==='2'">
                                否
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="合约情况" prop="hyqk" align="center">
                        <template slot-scope="scope">
                            <div v-if="scope.row.hyqk==='1'"
                                 style="width:100%;height:100%;display: flex;align-items: center;justify-content: flex-start">
                                <div style="width: 8px;height: 8px;background-color:#2FC25B;border-radius: 50%"></div>
                                <div style="cursor: pointer;margin-left: 5px">完成</div>
                            </div>
                            <div v-if="scope.row.hyqk==='2'"
                                 style="width:100%;height:100%;display: flex;align-items: center;justify-content: flex-start">
                                <div style="width: 8px;height: 8px;background-color:#F56C6C;border-radius: 50%"></div>
                                <div style="cursor: pointer;margin-left: 5px">未完成</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="目前发电量" prop="mqfdl" align="center"></el-table-column>
                    <el-table-column label="可售电量" prop="ksdl" align="center"></el-table-column>

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
            details: {
                "gfzt": "滨州市",
                "jhtmc": "山东电力交易中心",
                "zjzjrl": "180MW",
                "jhtzjrl": "169MW",
                "dytgs": "3",
                "kzmdytgs": "2",
            },
            tableData: [
                {"dytmc": "山东省滨州市沾化县郭集李家社区", "dytzjrl": "1", "hyqk": "1", "mqfdl": "170MW", "ksdl": "3MW"},
                {"dytmc": "山东省滨州市沾化县郭集李家社区", "dytzjrl": "1", "hyqk": "1", "mqfdl": "170MW", "ksdl": "3MW"},
                {"dytmc": "山东省滨州市沾化县郭集李家社区", "dytzjrl": "1", "hyqk": "1", "mqfdl": "170MW", "ksdl": "3MW"},
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
            this.$emit('closeVisible', 'detailsDialog')
        },


    },
    props: {
        /**
         * 弹出框
         */
        detailsDialog: {
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
    height: 430px;

    .visibleDivSelect {
        height: 230px;
        background-color: #ffffff;
        line-height: 80px;

    }

    .visibleTable {
        height: 200px;

    }

    .el-table {
        // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
        // 深度选择器，去除默认的padding
        /deep/ th {
            padding: 0;
        }

        /deep/ td {
            padding: 1px;
        }
    }

}

</style>
