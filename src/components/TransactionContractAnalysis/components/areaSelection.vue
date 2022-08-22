<template>
    <div class="visibleDiv">
        <div class="visibleDivSelect">
            <div class="TableTitle fl" style="margin-top: 15px">
                <div class="TableTitleL"></div>
                <div class="TableTitleR">台区选择</div>
            </div>
            <label style="margin-right: 50px;margin-left: 5px" class="fr">
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
                    style="width:200px"
                    v-model="platformArea"
                    clearable
                    filterable
                    allow-create
                    collapse-tags
                    default-first-option
                    placeholder="选择台区">
                    <el-option
                        v-for="item in platformAreaOptions"
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
        </div>
        <div class="visibleTable">
            <div class="TableTitle">
                <div class="TableTitleL"></div>
                <div class="TableTitleR">发电合同</div>
            </div>
            <el-table class="tb-edit" :data="tableData"
                      :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'40px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                      :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                      border
                      :height="320"
                      ref="moviesTable"
                      highlight-current-row style="width: 95%;margin: auto">
                <el-table-column label="合同编号" prop="htbh" align="center"></el-table-column>
                <el-table-column label="售电主体" prop="sdzt" align="center"></el-table-column>
                <el-table-column label="购电主体" prop="gdzt" align="center"></el-table-column>
                <el-table-column label="合同开始时间" prop="kssj" align="center"></el-table-column>
                <el-table-column label="合同结束时间" prop="jssj" align="center"></el-table-column>
                <el-table-column label="合同实际履约开始时间" prop="lykssj" align="center"  width="165"></el-table-column>
                <el-table-column label="合同实际履约结束时间" prop="lvjssj" align="center" width="165"></el-table-column>
                <el-table-column label="履约绿电量" prop="lyldl" align="center"></el-table-column>
                <el-table-column label="企业用电总量" prop="qyydzl" align="center"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { TransactionAgentStatistics} from "../../../api/TransactionAgentStatistics/TransactionAgentStatistics";
import {regionOptions,platformAreaOptions} from "../../../utils/options";
export default {
    name: 'modal',
    data() {
        return {
            tableData: [],
            platformArea:"",
            platformAreaOptions:platformAreaOptions,
            region:"",
            regionOptions:regionOptions,
            examineTime:[]
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
                const result = await TransactionAgentStatistics({
                    "platformArea": this.platformArea,
                    "region":this.region,
                    "startTime":this.examineTime[0],
                    "endTime":this.examineTime[1]
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


    .visibleDivSelect {
        height: 80px;
        background-color: #EDF4F4;
        line-height: 80px;
    }

    .visibleTable {
        height: 400px;
        background-color: #ffffff;
    }
    .TableTitle{
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 20px;
        .TableTitleL{
            width: 5px;
            height: 15px;
            background-color: #05A696;
        }
        .TableTitleR{
            width: 100px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content:flex-start;
            padding-left: 10px;

        }

    }
}

</style>
