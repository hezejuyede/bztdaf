<template>
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
                    v-model="manufactor"
                    clearable
                    filterable
                    allow-create
                    multiple
                    collapse-tags
                    default-first-option
                    placeholder="选择地区">
                    <el-option
                        v-for="item in manufactoreOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </label>
            <label style="margin-right: 5px;margin-left: 5px" class="fr">
                <el-input v-model="hashData" placeholder="请输入数据" style="width: 200px"></el-input>
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
                      highlight-current-row style="width: 95%;margin: auto">
                <el-table-column label="数据hash" prop="name" align="center"></el-table-column>
                <el-table-column label="时间" prop="ascription" align="center"></el-table-column>
                <el-table-column label="可信存证状态" prop="ascription" align="center"></el-table-column>
                <el-table-column label="区块高度" prop="ascription" align="center"></el-table-column>
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

    .visibleTable {
        height: 320px;

    }


}

</style>
