<template>
    <el-dialog :visible.sync="equipmentVisible" width=60% :center="true" :close-on-click-modal="false"
               :show-close="true" :close-on-press-escape="false" @close="closeVisible">
        <div class="equipment">
            <div class="equipmentL fl">
                <el-table class="tb-edit" :data="tables"
                          :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                          :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                          border
                          :height="400"
                          id="rebateSetTable"
                          ref="moviesTable"
                          highlight-current-row style="width: 100%;margin: auto">
                    <el-table-column type="index" label="序号" align="center" width="100"></el-table-column>
                    <el-table-column label="监测指标" prop="couponCodeName" align="center"></el-table-column>
                    <el-table-column label="数据类型" prop="couponCodeName" align="center"></el-table-column>
                    <el-table-column label="采集频度" prop="provinceName" align="center">
                    </el-table-column>
                </el-table>

            </div>
            <div class="equipmentR fl">
                <div class="equipmentRTitle">设备数据趋势图</div>
                <div class="equipmentRSelect">
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:80px"
                            v-model="type"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="区域">
                            <el-option
                                v-for="item in typeOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:80px"
                            v-model="type"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="曲线">
                            <el-option
                                v-for="item in typeOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:80px"
                            v-model="type"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="村镇">
                            <el-option
                                v-for="item in typeOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                    <label style="margin-right: 5px;margin-left: 5px" class="fl">
                        <el-select
                            style="width:100px"
                            v-model="type"
                            clearable
                            filterable
                            allow-create
                            multiple
                            collapse-tags
                            default-first-option
                            placeholder="设备编号">
                            <el-option
                                v-for="item in typeOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </label>
                </div>
                <div class="equipmentRLine">
                    <div id="equipmentRLine" :style="{width: '100%', height: '200px' }"></div>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
import {industryCarbonReport, regionalCarbonLine} from "../../../../api/dataManagement";

export default {
    name: 'modal',
    data() {
        return {}
    },
    mounted() {
        this.doSearch();

    },
    created() {

    },
    methods: {

        //查詢
        doSearch() {
            setTimeout(() => {
                this.setRegionLine();
            }, 3000)

            this.getList();
        },

        //查询
        getList() {
            /*   let that = this;
               const getListData = async () => {
                   const result = await industryCarbonReport({
                       "startTime": 0,
                       "endTime":0,
                       "type": ""
                   })
                   that.cols = result.data.data.cols;
                   that.tableData = result.data.data.data;
               }
               getListData();*/

        },


        //设置区域线形图
        setRegionLine(startTime, endTime, region) {
            /* let that = this;
             const setRegionLine = async () => {
                 const result = await regionalCarbonLine({
                     "startTime": 0,
                     "endTime": 0,
                     "region": "",
                 })
                 that.regionLine = result.data.data.line;
                 that.regionData = result.data.data.data;

             }
             setRegionLine();*/


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
                    data: ['1', '2', '3', '5', '6', '7', '8', '9', '10', '11', '12'],
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
                        data: [20300, 34000, 15000, 11500, 10800, 26000, 23000, 19000, 27000, 35000, 31000, 18000],
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

        },

        //关闭对话框
        closeVisible(){
            this.$emit('closeVisible','equipmentVisible')
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

}

</style>
