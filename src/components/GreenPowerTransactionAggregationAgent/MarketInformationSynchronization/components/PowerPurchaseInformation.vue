<template>
    <div class="templateDivTable">
        <el-table class="tb-edit" :data="tableData"
                  :header-cell-style="{background:'#FFF',color:'#474F4F',height:'50px',borderColor:'#CAE5E4',fontSize:'12px',fontWeight: 'bold'}"
                  :cell-style="{fontSize:'12px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                  ref="moviesTable"
                  :height="320"
                  highlight-current-row style="width: 95%;margin: auto">
            <el-table-column label="实时购电信息" prop="ssgdxx" align="center">
                <template slot-scope="scope">
                    <el-popover placement="top-start" title="实时购电信息" width="350" trigger="hover"
                                :content="scope.row.ssgdxx">
                        <div slot="reference"
                             style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                            <i class="el-icon-office-building"   style="color: #5A9591;font-size: 18px"></i>
                            {{scope.row.ssgdxx}}
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="单价" prop="dj" align="center" width="60"></el-table-column>
            <el-table-column label="补贴" prop="bt" align="center" width="80"></el-table-column>
            <el-table-column label="绿电" prop="ld" align="center" width="90"></el-table-column>
        </el-table>
    </div>
</template>


<script type="text/ecmascript-6">
import {PowerPurchaseInformation} from "../../../../api/GreenPowerTransactionAggregationAgent/MarketInformationSynchronization";

export default {
    name: 'modal',
    data() {
        return {
            tableData: [
                {"ssgdxx":"高唐润能新能源有限公司","bt":"879","ld":"2020-07-02 10:37:27"},
                {"ssgdxx":"高唐润能新能源有限公司","bt":"879","ld":"2020-07-02 10:37:27"},
                {"ssgdxx":"高唐润能新能源有限公司","bt":"879","ld":"2020-07-02 10:37:27"},
                {"ssgdxx":"高唐润能新能源有限公司","bt":"879","ld":"2020-07-02 10:37:27"},
                {"ssgdxx":"高唐润能新能源有限公司","bt":"879","ld":"2020-07-02 10:37:27"},
                {"ssgdxx":"高唐润能新能源有限公司","bt":"879","ld":"2020-07-02 10:37:27"}
            ],
        }
    },
    mounted() {
        this.getList()

    },
    watch: {
        typeDay(newVal, oldVal) {
            // newVal是新值，oldVal是旧值
            if(newVal){
                this.getList()
            }
        },
    },
    created() {


    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await PowerPurchaseInformation({
                    "type": this.typeDay,
                })
                that.tableData = result.data.data.data;
            }
            getListData();
        },
    },
    props: {
        typeDay: {
            type: String,
            required: true
        },
    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">


.templateDivTable{




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
