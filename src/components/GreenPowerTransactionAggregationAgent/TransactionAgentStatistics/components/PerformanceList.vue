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
                        v-model="manufactor"
                        clearable
                        filterable
                        allow-create
                        multiple
                        collapse-tags
                        default-first-option
                        placeholder="地区">
                        <el-option
                            v-for="item in manufactoreOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
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
                        placeholder="容量">
                        <el-option
                            v-for="item in manufactoreOptions"
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
                <el-table-column label="单元体" prop="dyt" align="center"></el-table-column>
                <el-table-column label="履约合同数量" prop="lyhtsl" align="center"></el-table-column>
                <el-table-column label="履约发电量" prop="lyfdl" align="center"></el-table-column>
                <el-table-column label="履约完成率" prop="lywcl" align="center"></el-table-column>
                <el-table-column label="环比增量" prop="hbzl" align="center" ></el-table-column>
                <el-table-column label="同比增量" prop="tbzl" align="center"></el-table-column>
                <el-table-column label="详情" align="center">
                    <template slot-scope="scope">
                        <span style="color:#409EFF;cursor: pointer">详情</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { dataLinkDetails} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: 'modal',
    data() {
        return {
            tableData:  [
                {"dyt": "单元体1", "lyhtsl":"4", "lyfdl": "2345GW", "lywcl":"77%","hbzl":"45%","tbzl":"56%","id":"2ww2w221"},
                {"dyt": "单元体1", "lyhtsl":"4", "lyfdl": "2345GW", "lywcl":"77%","hbzl":"45%","tbzl":"56%","id":"2ww2w221"},
                {"dyt": "单元体1", "lyhtsl":"4", "lyfdl": "2345GW", "lywcl":"77%","hbzl":"45%","tbzl":"56%","id":"2ww2w221"},
                {"dyt": "单元体1", "lyhtsl":"4", "lyfdl": "2345GW", "lywcl":"77%","hbzl":"45%","tbzl":"56%","id":"2ww2w221"},
                {"dyt": "单元体1", "lyhtsl":"4", "lyfdl": "2345GW", "lywcl":"77%","hbzl":"45%","tbzl":"56%","id":"2ww2w221"},
                {"dyt": "单元体1", "lyhtsl":"4", "lyfdl": "2345GW", "lywcl":"77%","hbzl":"45%","tbzl":"56%","id":"2ww2w221"},
            ],
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
                const result = await dataLinkDetails({
                    "manufactor": this.manufactor,
                    "hashData":this.hashData
                })
                /*  that.tableData1 = result.data.data.data;
                  that.tableData2 = result.data.data.data;*/
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
