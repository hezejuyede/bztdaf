<template>
    <div class="visibleDiv">
        <div class="visibleDivSelect">
            <label style="margin-right: 20px;margin-left: 5px" class="fr">
                <el-button type="primary" @click="getList" icon="el-icon-search"
                           style="background-color: #05A696;width: 100px;height: 35px">查询
                </el-button>
            </label>
            <label style="margin-right: 5px;margin-left: 5px" class="fr">
                <el-date-picker style="width: 250px" v-model="examineTime" type="daterange"
                                start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                </el-date-picker>
            </label>
            <label style="margin-right: 5px;margin-left: 5px" class="fr">
                <el-select
                    style="width:120px"
                    v-model="region"
                    clearable
                    filterable
                    allow-create
                    collapse-tags
                    default-first-option
                    placeholder="地区">
                    <el-option
                        v-for="item in regionOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </label>
        </div>
        <div class="visibleTable">
            <el-table class="tb-edit" :data="tableData"
                      :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'40px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                      :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                      border
                      :height="200"
                      id="rebateSetTable"
                      ref="moviesTable"
                      highlight-current-row style="width: 95%;margin: auto">
                <el-table-column label="绿证编号" prop="lzbh" align="center" width="150">
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="绿证编号" width="350" trigger="hover"
                                    :content="scope.row.lzbh">
                            <div slot="reference"
                                 style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                {{scope.row.lzbh}}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="生成日期" prop="time" align="center"></el-table-column>
                <el-table-column label="发电单位" prop="fddw" align="center">
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="发电单位" width="350" trigger="hover"
                                    :content="scope.row.fddw">
                            <div slot="reference"
                                 style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                {{scope.row.fddw}}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="持有单位" prop="cydw" align="center">
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="持有单位" width="350" trigger="hover"
                                    :content="scope.row.cydw">
                            <div slot="reference"
                                 style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                {{scope.row.cydw}}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {greenCardHistory} from "../../../api/GreenPowerConsumptionCertification/GreenPowerConsumptionCertification";
import {regionOptions} from "../../../utils/options";
export default {
    name: 'modal',
    data() {
        return {
            tableData:[],
            region:"",
            regionOptions:regionOptions,
            examineTime:[]
        }
    },
    mounted() {


    },
    created() {
        this.getList()

    },
    methods: {


        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await greenCardHistory({
                    "region": that.region,
                    "startTime":that.examineTime[0],
                    "endTime":that.examineTime[1]
                })
                that.tableData = result.data.data.data;
            }
            getListData();
        },


    },
    props: {

    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">


.visibleDiv {
    width: 100%;
    height: 400px;

    .visibleDivSelect {
        height: 80px;
        background-color: #FFFFFF;
        line-height: 80px;

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
            padding: 0 ;
        }
    }
}

</style>
