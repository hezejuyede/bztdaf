<template>
    <div class="visibleDiv">
        <div class="visibleTable">
            <div class="visibleDivSelect">
                <label style="margin-right: 50px;margin-left: 5px" class="fr">
                    <el-button type="primary" @click="getList" icon="el-icon-search"
                               style="background-color: #05A696;width: 100px;height: 35px">查询
                    </el-button>
                </label>

                <label style="margin-right: 5px;margin-left: 5px" class="fr">
                    <el-select
                        style="width:200px"
                        v-model="capacity"
                        clearable
                        filterable
                        allow-create
                        multiple
                        collapse-tags
                        default-first-option
                        placeholder="容量">
                        <el-option
                            v-for="item in capacityOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </label>
                <label style="margin-right: 5px;margin-left: 5px" class="fr">
                    <el-select
                        style="width:200px"
                        v-model="region"
                        clearable
                        filterable
                        allow-create
                        multiple
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
            <el-table class="tb-edit" :data="tableData"
                      :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'40px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                      :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                      border
                      :height="250"
                      ref="moviesTable"
                      highlight-current-row style="width: 95%;margin: auto">
                <el-table-column label="聚合体名称" prop="htbh" align="center"></el-table-column>
                <el-table-column label="单元体名称" prop="htzb" align="center">
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="单元体名称" width="350" trigger="hover"
                                    :content="scope.row.htzb">
                            <div slot="reference"
                                 style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;cursor: pointer">
                                {{ scope.row.htzb }}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="装机总容量" prop="htxyd" align="center"></el-table-column>
                <el-table-column label="可供电量" prop="jhfpzb" align="center" ></el-table-column>
                <el-table-column label="已供电量" prop="sjzb" align="center"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {PolymerDisplay} from "../../../../api/GreenPowerTransactionAggregationAgent/AggregateDisplay";
import {regionOptions} from "../../../../utils/options";

export default {
    name: 'modal',
    data() {
        return {
            tableData:  [],
            region:"",
            regionOptions:regionOptions,
            capacity:"",
            capacityOptions:[]

        }
    },
    mounted() {
        this.getList()


    },
    created() {



    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await  PolymerDisplay({
                    "capacity": this.capacity,
                    "region":this.region,
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
    background-color: #ffffff;
    .visibleDivSelect {
        height: 80px;
        background-color: #ffffff;
        line-height: 80px;
    }

    .visibleTable {
        height: 350px;

    }

}

.el-table {
    // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // 深度选择器，去除默认的padding
    /deep/ th {
        padding: 0 ;
    }
    /deep/ td {
        padding: 5px ;
    }
}

</style>
