<template>
    <el-dialog :visible.sync="equipmentVisible" width=70% :center="true" :close-on-click-modal="false"
               :show-close="true" :close-on-press-escape="false" @close="closeVisible"  @open="OpenDialog">
        <div class="equipment">
            <div class="equipmentL fl">
                <el-table class="tb-edit" :data="tableData"
                          :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                          :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                          border
                          :height="400"
                          id="rebateSetTable"
                          ref="moviesTable"
                          highlight-current-row style="width: 100%;margin: auto">
                    <el-table-column label="监测指标" prop="monitoring_index" align="center" width="250"></el-table-column>
                    <el-table-column label="数据类型" prop="data_type" align="center"></el-table-column>
                    <el-table-column label="采集频度" prop="time" align="center"></el-table-column>
                    <el-table-column label="查看曲线" prop="cjed" align="center">
                        <template slot-scope="scope">
                          <span style="color: #4b8df8;cursor: pointer" @click="showLine(scope.row)">查看</span>
                        </template>
                    </el-table-column>
                </el-table>

            </div>
            <div class="equipmentR fl">
                <div class="equipmentRTitle">设备数据趋势图</div>
<!--                <div class="equipmentRSelect">
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:80px"
                            v-model="county"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="区域">
                            <el-option
                                v-for="item in countyOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:80px"
                            v-model="community"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="村镇">
                            <el-option
                                v-for="item in communityOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:80px"
                            v-model="curve"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="曲线">
                            <el-option
                                v-for="item in curveOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:100px"
                            v-model="equipment"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="设备编号">
                            <el-option
                                v-for="item in equipmentOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                </div>-->
                <div class="equipmentRLine">
                    <div id="equipmentRLine" :style="{width: '100%', height: '200px' }"></div>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
import {EquipmentList,EquipmentLine} from "../../../../api/DataTrustworthinessSupervision/SourceDataRangeStatistics";

export default {
    name: 'modal',
    data() {
        return {
            tableData:[],
            community:"",
            communityOptions: [
                {"name": "郭集", "value": "01"}
            ],
            county:"",
            countyOptions: [
                {"name": "滨城区", "value": "01"}
            ],

            curve:"",
            curveOptions: [
                {"name": "曲线", "value": "01"}
            ],
            equipment:"",
            equipmentOptions: [
                {"name": "型号1", "value": "01"}
            ],
        }
    },
    mounted() {


    },
    created() {
    },
    methods: {


        //查詢
        OpenDialog() {
            setTimeout(() => {
                this.setRegionLine();
            }, 1000)

            this.getList();
        },

        //查询
        getList() {
               let that = this;
               const getListData = async () => {
                   const result = await EquipmentList({
                       "id": this.rowId
                   })
                   that.tableData = result.data.data.data;
               }
               getListData();

        },


        //设置区域线形图
        setRegionLine() {
             const setRegionLine = async () => {
                 const result = await EquipmentLine({
                     "id": "1"
                 })
                 let data =  result.data.data.data;
                 // 基于准备好的dom，初始化echarts实例
                 var myChart = this.$echarts.init(document.getElementById('equipmentRLine'));
                 myChart.clear();
                 myChart.setOption({
                     tooltip: {
                         trigger: 'axis',
                         position: function (point, params, dom, rect, size) {
                             //  size为当前窗口大小
                             if ((size.viewSize[0] / 2) >= point[0]) {
                                 //其中point为当前鼠标的位置
                                 return [point[0] + 50, '10%'];
                             } else {
                                 //其中point为当前鼠标的位置
                                 return [point[0] - 200, '10%'];
                             }
                         }
                     },
                     grid: {
                         top: '10%',
                         left: '5%',
                         right: '5%',
                         bottom: '5%',
                         containLabel: true
                     },
                     xAxis: {
                         type: 'category',
                         data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                         axisTick: { //X轴刻度线
                             show: false,
                         },
                         splitLine: {
                             show: true
                         },
                     },
                     yAxis: {
                         type: 'value',
                         axisTick: { //y轴刻度线
                             show: false,
                         },
                         splitLine: {
                             show: true
                         },
                     },
                     lineStyle: {
                         color: '#7AC952'
                     },

                     series: [
                         {
                             data:  data,
                             type: 'line',
                             smooth: true,
                             symbol: 'circle',
                             symbolSize: 8,
                             itemStyle: {
                                 normal: {
                                     color: '#67C23A',
                                     label: {
                                         show: true,
                                         color: '#FFF',
                                         position: 'bottom',
                                     }
                                 }
                             },
                         }
                     ]
                 });

             }
             setRegionLine();
        },

        //关闭对话框
        closeVisible(){
            this.$emit('closeVisible','equipmentVisible')
        },

        //查看曲线
        showLine(row) {

        },

    },
    props: {
        /**
         * 弹出框
         */
        equipmentVisible: {
            type: Boolean,
            required: true
        },
        tables: {
            type: Array,
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

.equipment {
    width: 100%;
    height: 400px;

    .equipmentL {
        width: 50%;
    }

    .equipmentR {
        width: 50%;

        .equipmentRTitle {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 20px;
            font-size: 16px;
            font-weight: bold;

        }

        .equipmentRSelect {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .equipmentRLine {
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
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
