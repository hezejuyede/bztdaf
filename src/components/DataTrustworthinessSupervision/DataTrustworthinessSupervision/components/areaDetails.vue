<template>
    <div class="visibleDiv">
        <div class="visibleDivSelect" style=" background-color: #ffffff;">
            <label style="margin-right: 50px;margin-left: 5px" class="fr">
                <el-button type="primary" @click="getList" icon="el-icon-search"
                           style="background-color: #05A696;width: 100px;height: 35px">查询
                </el-button>
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
                    placeholder="选择地区">
                    <el-option
                        v-for="item in regionOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
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
                    placeholder="选择类型">
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
                <el-table-column label="地区" prop="dq" align="center"></el-table-column>
                <el-table-column label="部署区域" prop="bsqy" align="center"></el-table-column>
                <el-table-column label="类型" prop="type" align="center"></el-table-column>
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
                <el-table-column label="终端编号" prop="zdbh" align="center"></el-table-column>
                <el-table-column label="上链数量" prop="slsl" align="center"></el-table-column>
                <el-table-column label="异常数量" prop="ycsl" align="center"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { areaDetails} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: 'modal',
    data() {
        return {
            tableData: [],
            type: "",
            typeOptions: [],
            region: "",
            regionOptions: [],
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
                const result = await  areaDetails({
                    "type": this.type,
                    "region":this.region
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
@import "../../../../assets/less/base";

.visibleDiv {
    width: 100%;
    height: 400px;

    .visibleDivSelect {
        width: 100%;
        height: 90px;
        background-color: #ffffff;
        line-height: 80px;

    }

    .visibleTable {
        height: 320px;
        background-color: #ffffff;

    }


}

</style>
