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
                <el-table class="tb-edit" :data="tableData"
                          :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                          :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                          border
                          :height="320"
                          id="rebateSetTable"
                          ref="moviesTable"
                          highlight-current-row style="width: 100%;margin: auto">
                    <el-table-column label="指标名称" prop="name" align="center"></el-table-column>
                    <el-table-column label="数据hash" prop="hash" align="center">
                        <template slot-scope="scope">
                            <el-popover placement="top-start" title="数据hash" width="350" trigger="hover"
                                        :content="scope.row.hash">
                                <div slot="reference"
                                     style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                    {{scope.row.hash}}
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="时间" prop="time" align="center"></el-table-column>
                    <el-table-column label="可信存证状态" prop="provinceName" align="center">
                        <template slot-scope="scope">
                             <div v-if="scope.row.status==='1'" style="display: flex;align-items: center;justify-content: center">
                                 <div style="width: 10px;height: 10px;background-color:#409EFF;border-radius: 50%"></div>
                                 <div style="color: #409EFF;cursor: pointer;margin-left: 5px" >正常</div>
                             </div>
                            <div v-if="scope.row.status==='2'" style="display: flex;align-items: center;justify-content: center">
                                <div style="width: 10px;height: 10px;background-color:#F56C6C;border-radius: 50%"></div>
                                <div style="color: #F56C6C;cursor: pointer;margin-left: 5px" >异常</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="地址" prop="address" align="center">
                        <template slot-scope="scope">
                            <el-popover placement="top-start" title="地址" width="350" trigger="hover"
                                        :content="scope.row.address">
                                <div slot="reference"
                                     style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                    {{scope.row.address}}
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="编号" prop="code" align="center"></el-table-column>
                </el-table>
            </div>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
import {AbnormalIndicators} from "../../../../api/DataTrustworthinessSupervision/SourceDataRangeStatistics";

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
        this.getList();
    },
    methods: {



        //查询
        getList() {
               let that = this;
               const getListData = async () => {
                   const result = await AbnormalIndicators({
                       "id": "",
                       "name":""
                   })
                   that.tableData = result.data.data.data;
               }
               getListData();

        },


        //关闭对话框
        closeVisible(){
            this.$emit('closeVisible','abnormalIndicators')
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
