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
                <el-table-column label="光伏主体" prop="lzbh" align="center" width="150"></el-table-column>
                <el-table-column label="聚合代理商" prop="time" align="center"></el-table-column>
                <el-table-column label="招募情况" prop="fddw" align="center"></el-table-column>
                <el-table-column label="当前总容量" prop="cydw" align="center"></el-table-column>
                <el-table-column label="缺口容量" prop="cydw" align="center"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {greenCardHistory} from "../../../../api/GreenPowerConsumptionCertification/GreenPowerConsumptionCertification";
export default {
    name: 'modal',
    data() {
        return {
            tableData:[],
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
