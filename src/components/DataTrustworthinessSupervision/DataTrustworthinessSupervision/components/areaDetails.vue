<template>
    <div class="visibleDiv">
        <div class="visibleDivSelect" style=" background-color: #ffffff;">
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
                    style="width:250px"
                    v-model="community"
                    clearable
                    filterable
                    allow-create
                    collapse-tags
                    default-first-option
                    placeholder="请选择社区">
                    <el-option
                        v-for="item in communityOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </label>
            <label style="margin-right: 5px;margin-left: 5px" class="fr">
                <el-select
                    style="width:250px"
                    v-model="street"
                    clearable
                    filterable
                    allow-create
                    collapse-tags
                    default-first-option
                    placeholder="请选择街道">
                    <el-option
                        v-for="item in streetOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
            </label>
            <label style="margin-right: 5px;margin-left: 5px" class="fr">
                <el-select
                    style="width:250px"
                    v-model="regionS"
                    clearable
                    filterable
                    allow-create
                    collapse-tags
                    default-first-option
                    placeholder="请选择地区">
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
                      :cell-style="{fontSize:'12px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                      border
                      :height="320"
                      id="rebateSetTable"
                      ref="moviesTable"
                      highlight-current-row style="width: 95%;margin: auto">
                <el-table-column label="地区" prop="dq" align="center" width="80"></el-table-column>
                <el-table-column label="部署区域" prop="bsqy" align="center" width="80"></el-table-column>
                <el-table-column label="类型" prop="type" align="center" width="160"></el-table-column>
                <el-table-column label="地址" prop="address" align="center" width="120">
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
                <el-table-column label="hash" prop="zdbh" align="center" >
                    <template slot-scope="scope">
                        <el-popover placement="top-start" title="hash" width="350" trigger="hover"
                                    :content="scope.row.hash">
                            <div slot="reference"
                                 @click="showHash(scope.row.id)"
                                 style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                {{scope.row.hash}}
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="时间" prop="time" align="center" width="130"></el-table-column>
                <el-table-column label="终端编号" prop="zdbh" align="center" width="120"></el-table-column>
                <el-table-column label="可信存证状态" prop="status" align="center" width="110">
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
                <el-table-column label="区块高度" prop="qkgd" align="center" width="80"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { areaDetails} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";
import {communityOptions, regionOptions, streetOptions} from "../../../../utils/options";

export default {
    name: 'modal',
    data() {
        return {
            timer:null,
            tableData: [],
            region: "",
            regionOptions: regionOptions,
            street: "",
            streetOptions: streetOptions,
            community: "",
            communityOptions: communityOptions,
            examineTime:[],
            countList:[],
        }
    },
    mounted() {

        this.timer=setInterval(()=>{
            this.setList();
        },3000)


    },
    created() {
        this.getList();

    },
    beforeDestroy(){
        clearInterval(this.timer);
        this.timer = null;
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
                that.countList=result.data.data.data;
                let arr = result.data.data.data;
                let list =[];
                for (let i = 0; i < 6; i++) {
                     let json={
                         "dq": arr[i].dq,
                         "bsqy":  arr[i].bsqy,
                         "type":  arr[i].type,
                         "address":  arr[i].address,
                         "zdbh":  arr[i].zdbh,
                         "hash":  arr[i].hash,
                         "time":  arr[i].time,
                         "status":  arr[i].status,
                         "qkgd":  arr[i].qkgd,
                         "data": arr[i].data
                     }
                     list.push(json)

                }
                that.tableData =  list;
            }
            getListData();

        },


        //定时更新数据
        setList(){
            let list =this.countList;
            let indexNum = 4;

            let tableList=[];
            let arr =[];
            for (let i=0;i<list.length;i++){
                if(i<=indexNum){
                    let num = Math.round(Math.random()*list.length);
                    arr.push(num)
                }
            }
            for (let i=0;i<list.length;i++){
                for (let j=0;j<arr.length;j++){
                    if(i===arr[j]){
                        tableList.push(list[i])
                    }
                }
            }
            this.tableData = tableList;
        },


        //显示哈希值
        showHash(index){
            this.$emit('showHash','showHash')
            this.$emit('showIndex',index)
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
    .el-table {
        // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
        // 深度选择器，去除默认的padding
        /deep/ th {
            padding: 0 ;
        }
        /deep/ td {
            padding: 2.5px ;
        }
    }

}

</style>
