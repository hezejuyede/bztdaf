<template>
    <div class="templateDiv">
        <div class="templateDivTop clearfix">
            <div class="templateDivTopT">
                <div class="templateDivTopTTop">
                    <div class="templateDivTopTTopL fl">
                        <div class="templateDivTopTTopLText">滨州地区</div>
                        <div class="templateDivTopTTopLImg">
                            <img src="../../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl"
                         style="display: flex;align-items: center;justify-content: center">
                        <el-radio-group v-model="radio" @change="changeRadio">
                            <el-radio-button :label="1">区域</el-radio-button>
                            <el-radio-button :label="2">设备</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div class="templateDivTopTBottom">
                    <div id="chart_map" style="width:100%;height:450px;"></div>
                </div>
            </div>
            <div class="templateDivTopT">
                <div class="templateDivTopTTop">
                    <div class="templateDivTopTTopL fl">
                        <div class="templateDivTopTTopLText">区域</div>
                        <div class="templateDivTopTTopLImg">
                            <img src="../../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl"
                         style="display: flex;align-items: center;justify-content: center">
                        <el-select
                            style="width:120px"
                            v-model="region"
                            clearable
                            filterable
                            allow-create
                            default-first-option
                            @change="changeSelect"
                            placeholder="请选择区域">
                            <el-option
                                v-for="item in regionOptions"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="templateDivTopTBottom">
                    <div class="regionTitle">
                        <div class="regionTitleT fl">
                            <div class="regionTitleTT"
                                 style="height:40px ;display: flex;align-items: center;justify-content: center">
                                <div class=""
                                     style="width: 10px;height: 10px;background-color: #3259EF;border-radius: 50%"></div>
                                <div class="" style="margin-left: 5px;color: #B8B8B8">监测范围(区域/个)</div>
                            </div>
                            <div class="regionTitleTB">
                                <span
                                    style="font-size:32px;color: #323A3A;font-weight: bold;margin-right: 5px">{{ selectData.area }}</span>
                                <img src="../../../assets/img/dw/sheng.png" alt="">
                            </div>

                        </div>
                        <div class="regionTitleT fl">
                            <div class="regionTitleTT"
                                 style="height:40px;display: flex;align-items: center;justify-content: center">
                                <div class=""
                                     style="width: 10px;height: 10px;background-color: #12C2C1;border-radius: 50%"></div>
                                <div class="" style="margin-left: 5px;color: #B8B8B8">设备终端数量(台)</div>
                            </div>
                            <div class="regionTitleTB">
                                <span
                                    style="font-size:32px;color: #323A3A;font-weight: bold;margin-right: 5px">{{ selectData.range }}</span>
                                <img src="../../../assets/img/dw/jiang.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="regionContent">
                        <div class="templateDivTopTTopLImgText">
                            {{ selectData.percentage }}%
                        </div>
                        <img src="../../../assets/img/dw/tj-yuan.png" alt="">
                    </div>
                    <div class="regionNumber">
                        <div class="regionNumberText">
                            {{ selectData.region }}
                        </div>

                    </div>

                </div>
            </div>
            <div class="templateDivTopT">
                <div class="templateDivTopTTop">
                    <div class="templateDivTopTTopL fl">
                        <div class="templateDivTopTTopLText">街道</div>
                        <div class="templateDivTopTTopLImg">
                            <img src="../../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl"></div>

                </div>
                <div class="templateDivTopTitle">
                    <div class="templateDivTopTitleL"></div>
                    <div class="templateDivTopTitleR">
                        <div class="fl" style="color: #B1B3B3;font-size: 14px;margin-left: 10px">
                            区域(个)
                        </div>
                        <div class="fr" style="color: #B1B3B3;font-size: 14px;margin-right: 10px">
                            设备(台)
                        </div>

                    </div>

                </div>
                <div class="templateDivTopTList">
                    <div class="ListT" v-for="(item,index) in selectData.street">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img v-if="index===0" src="../../../assets/img/dw/1.png" alt="">
                                <img v-if="index===1" src="../../../assets/img/dw/2.png" alt="">
                                <img v-if="index===2" src="../../../assets/img/dw/3.png" alt="">
                                <div v-if="index>2" class="rankingDiv">{{ index + 1 }}</div>
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                {{ item.name }}
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T">
                                    <el-skeleton-item variant="text"
                                                      :style="{'width':(parseInt(item.regionalPercentage)-2.5)+'%','background-color': '#23A99A','float': 'left','margin-right':'5%'}"/>
                                    <el-skeleton-item variant="text"
                                                      :style="{'width':(parseInt(item.equipmentPercentage)-2.5)+'%','background-color': '#EBE27C','float': 'left'}"/>
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    {{ item.regional }}
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    {{ item.equipment }}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="templateDivTopT">
                <div class="templateDivTopTTop">
                    <div class="templateDivTopTTopL fl">
                        <div class="templateDivTopTTopLText">社区</div>
                        <div class="templateDivTopTTopLImg">

                            <img src="../../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl"></div>
                </div>
                <div class="templateDivTopTCommunity">
                    <div class="templateDivTopTCommunity1">
                        <div
                            style="width: 100px;height: 100px;border-radius: 50%;border:5px solid ;border-color:#3ED0B7;display: flex;align-items: center;justify-content: center">
                            <div
                                style="width: 80px;height:80px;border-radius: 50%;border:2px solid;border-color: #52B7AF;display: flex;align-items: center;justify-content: center">
                               {{ selectData.cunzhen}}
                            </div>
                        </div>

                    </div>
                    <div class="templateDivTopTCommunity2">
                        <div style="height: 100px;width: 2px;background-color: #1A938E"></div>

                    </div>
                    <div class="templateDivTopTCommunity3">
                        <div class="Community3Div">
                            <div class="">终端设备数量</div>
                            <div class="">{{ selectData.number }}</div>
                        </div>
                        <img src="../../../assets/img/dw/di.png" alt="" class="">
                    </div>
                </div>
            </div>


        </div>
        <div class="templateDivBottom clearfix">
            <div class="crumbs">
                <div class="crumbsLeft fl">
                    详情
                </div>
                <div class="crumbsRight fr">
                    更多
                </div>
            </div>
            <div class="container">
                <div class="containerDiv">
                    <div class="handle-box" style="padding-right: 2.5%">
                        <label style="margin-right: 5px;margin-left: 5px" class="fr">
                            <el-button type="primary" @click="getList" icon="el-icon-search"
                                       style="background-color: #05A696">查询
                            </el-button>
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
                    <div class="handle-table">
                        <el-table class="tb-edit"
                                  :data="tableData"
                                  :header-cell-style="{background:'#EDF4F4',color:'#474F4F',height:'60px',borderColor:'#CAE5E4',fontSize:'14px',fontWeight: 'bold'}"
                                  :cell-style="{fontSize:'14px',fontWeight: 'norma',color:'#444B4B',background:'#FFFFFF',borderColor:'#CAE5E4'}"
                                  border
                                  :height="400"
                                  id="rebateSetTable"
                                  ref="moviesTable"
                                  highlight-current-row
                                  :row-class-name="tableRowClassName"
                                  style="width: 98%;margin: auto">
                            <el-table-column label="下属社区" prop="xssq" align="center"></el-table-column>
                            <el-table-column label="具体地址" prop="jtdz" align="center">
                                <template slot-scope="scope">
                                    <el-popover placement="top-start" title="具体地址" width="350" trigger="hover"
                                                :content="scope.row.jtdz">
                                        <div slot="reference"
                                             style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                            {{ scope.row.jtdz }}
                                        </div>
                                    </el-popover>
                                </template>
                            </el-table-column>
                            <el-table-column label="终端设备厂家" prop="zdsbcj" align="center">
                                <template slot-scope="scope">
                                    <span style="color: #409EFF;cursor: pointer"
                                          @click="showCJ(scope.row)">{{ scope.row.zdsbcj }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="终端设备类型" prop="zdsblx" align="center">
                                <template slot-scope="scope">
                                    <span style="color: #409EFF;cursor: pointer"
                                          @click="showType(scope.row)">{{ scope.row.zdsblx }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="终端设备个数" prop="zdsbgs" align="center">
<!--                                <template slot-scope="scope">
                                    <span style="color: #409EFF;cursor: pointer"
                                          @click="showSL(scope.row)">{{ scope.row.zdsbgs }}</span>
                                </template>-->
                            </el-table-column>
                            <el-table-column label="监测指标" prop="jkzb" align="center">
                                <template slot-scope="scope">
                                    <span style="color: #409EFF;cursor: pointer"
                                          @click="showJC(scope.row)">{{ scope.row.yczb }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="异常指标" prop="yczb" align="center">
                                <template slot-scope="scope">
                                    <span style="color: #409EFF;cursor: pointer"
                                          @click="showYC(scope.row)">{{ scope.row.yczb }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="监测开始时间" prop="jckssj" align="center"></el-table-column>
                            <el-table-column label="监测持续时间" prop="jccxsj" align="center"></el-table-column>
                            <el-table-column label="监测中断时间" prop="jczdsj" align="center"></el-table-column>
                            <el-table-column label="监测最大频率" prop="jczxpl" align="center"></el-table-column>
                            <el-table-column label="监测最小频率" prop="jczdpl" align="center"></el-table-column>
                        </el-table>
                    </div>
                </div>

            </div>

        </div>
        <equipment :equipmentVisible="equipmentVisible" @closeVisible="closeVisible"></equipment>
        <abnormalIndicators :abnormalIndicators="abnormalIndicators" :rowId="rowId"
                            @closeVisible="closeVisible"></abnormalIndicators>
        <terminalEquipmentManufacturer :terminalEquipmentManufacturer="terminalEquipmentManufacturer" :rowId="rowId"
                                       @closeVisible="closeVisible"></terminalEquipmentManufacturer>
        <terminalEquipmentType :terminalEquipmentType="terminalEquipmentType" :rowId="rowId"
                               @closeVisible="closeVisible"></terminalEquipmentType>
        <shadinLayer></shadinLayer>

        <NumberOfEquipment :NumberOfEquipment="NumberOfEquipment" :rowId="rowId"
                               @closeVisible="closeVisible"></NumberOfEquipment>
        <shadinLayer></shadinLayer>
    </div>
</template>
<script type="text/ecmascript-6">
import shadinLayer from '../../../common/shadinLayer'
import equipment from './components/equipment'
import abnormalIndicators from './components/abnormalIndicators'
import terminalEquipmentManufacturer from './components/terminalEquipmentManufacturer'
import terminalEquipmentType from './components/terminalEquipmentType'

import NumberOfEquipment from './components/NumberOfEquipment'




import {regionOptions, streetOptions, communityOptions} from "../../../utils/options";
import {
    RegionalData,
    DetailsList,
    RegionSelectionData
} from "../../../api/DataTrustworthinessSupervision/SourceDataRangeStatistics";


import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
    name: 'WorkingProcedure',
    data() {
        return {
            radio: "1",
            region: "1",
            rowId: "",
            regionOptions: regionOptions,
            countyOptions: [
                {"name": "无棣县", "value": "88"},
                {"name": "沾化区", "value": "69.9"},
                {"name": "阳信县", "value": "79"},
                {"name": "滨城区", "value": "49.9"},
                {"name": "惠民县", "value": "39.9"},
                {"name": "博兴县", "value": "19.9"},
                {"name": "邹平市", "value": "29.9"},
            ],
            tableData: [],
            cols: [],

            selectData: {},

            street: "",
            streetOptions: streetOptions,
            community: "",
            communityOptions: communityOptions,
            regionS: "",

            equipmentVisible: false,
            abnormalIndicators: false,
            terminalEquipmentManufacturer: false,
            terminalEquipmentType: false,
            NumberOfEquipment: false,
        }
    },


    components: {shadinLayer, equipment,NumberOfEquipment, abnormalIndicators, terminalEquipmentManufacturer, terminalEquipmentType},

    mounted() {
        this.doSearch();

    },
    created() {

    },
    methods: {


        //查詢
        doSearch() {
            this.getRegion();
            this.getSelectData();
            this.getList();
        },


        //重置
        doReset() {
            this.examineTime = [];
            this.type = "";
        },


        //导出打印
        importPrinting() {
            let wb = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable1'));
            /* get binary string as output */
            let wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'});
            try {
                FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), '区域碳报表.xlsx');
            } catch (e) {
                if (typeof console !== 'undefined')
                    console.log(e, wbout)
            }


            let wb2 = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable2'));
            /* get binary string as output */
            let wbout2 = XLSX.write(wb2, {bookType: 'xlsx', bookSST: true, type: 'array'});
            try {
                FileSaver.saveAs(new Blob([wbout2], {type: 'application/octet-stream'}), '行业碳报表.xlsx');
            } catch (e) {
                if (typeof console !== 'undefined')
                    console.log(e, wbout2)
            }


            let wb3 = XLSX.utils.table_to_book(document.querySelector('#rebateSetTable3'));
            /* get binary string as output */
            let wbout3 = XLSX.write(wb3, {bookType: 'xlsx', bookSST: true, type: 'array'});
            try {
                FileSaver.saveAs(new Blob([wbout3], {type: 'application/octet-stream'}), '企业超排预警.xlsx');
            } catch (e) {
                if (typeof console !== 'undefined')
                    console.log(e, wbout3)
            }
        },


        //根据屏幕设置Table高度
        setTableHeight() {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                var H = window.screen.height;
                this.tableHeight = H - 280 + "px";
            } else {
                var h = document.body.clientHeight;
                var w = document.body.clientWidth;

                if (w < 1170) {
                    this.tableHeight = h - 400 + "px";
                } else {

                    this.tableHeight = h - 280 + "px";
                }
            }

        },

        //选择类型
        changeRadio(type) {
            this.getRegion(type);
        },

        //关闭弹出框
        closeVisible(type) {
            if (type === 'equipmentVisible') {
                this.equipmentVisible = false;
                this.radio1 = "区域";
            } else if (type === 'abnormalIndicators') {
                this.abnormalIndicators = false;
            } else if (type === 'terminalEquipmentManufacturer') {
                this.terminalEquipmentManufacturer = false;
            } else if (type === 'terminalEquipmentType') {
                this.terminalEquipmentType = false;
            }
            else if (type === 'NumberOfEquipment') {
                this.NumberOfEquipment = false;
            }
        },

        //滨州区域数据
        getRegion(type) {
            let that = this;
            const getListData = async () => {
                const result = await RegionalData({
                    "type":type
                })
                var data = result.data.data.data;

                let arr =[]
                for (let i = 0; i < data.length; i++) {

                    let json = {
                        "name": data[i].name, "value": data[i].value, "id": data[i].id,"label": {
                            normal: {
                                show: true,
                                formatter: function (params) {
                                    return params.name + "\n" + params.value;    //地图上展示文字 + 数值
                                },
                            }
                        }
                    }
                    arr.push(json)
                }
                var myChart = this.$echarts.init(document.getElementById('chart_map'));
                myChart.on('click', function (params) {
                    that.region=params.data.id;
                    that.getSelectData();

                });
                myChart.setOption({
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}',
                        itemSize: '14px'
                    },
                    dataRange: {
                        x: 'left',
                        y: 'center',
                        top: '100',
                        splitList: [
                            {start: 81, end: 100, label: '', color: '#329F9A'},
                            {start: 71, end: 80, label: '', color: '#66B7B4'},
                            {start: 51, end: 70, label: '', color: '#83C5C2'},
                            {start: 41, end: 50, label: '', color: '#B4DCDA'},
                            {start: 31, end: 40, label: '', color: '#9CD1CF'},
                            {start: 21, end: 30, label: '', color: '#C6E4E3'},
                            {start: 0, end: 20, label: '', color: '#DFF0EF'},
                        ],
                        textStyle: {
                            color: '#3899FF' // 值域文字颜色
                        },
                        show: false,
                        selectedMode: false,
                        color: ['#E0022B', '#E09107', '#A3E00B']
                    },
                    series: [
                        {
                            name: '县域乡村振兴全景展示',
                            type: 'map',
                            map: '山东',
                            mapType: '山东',
                            mapLocation: {
                                x: 'left'
                            },
                            zoom: 1.2,
                           /* roam: true,*/ //可移动可缩小
                            show: true,
                            itemStyle: {
                                normal: {
                                    borderColor: "#fff",
                                    type: 'dashed',
                                    borderWidth: 1,
                                    label: {show: true}
                                },
                                emphasis: {
                                    areaColor: '#389BB7',
                                    borderWidth: 0
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {color: "#FFFFFF", fontSize: 10,}
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                },
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            data:arr
                        }],
                });
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
            getListData();
        },


        //下拉列表显示
        changeSelect() {
            this.getSelectData();
        },

        //区域选择数据
        getSelectData() {
            let that = this;
            const getListData = async () => {
                const result = await RegionSelectionData({
                    "region": this.region
                })
                that.selectData = result.data.data.data;
            }
            getListData();
        },


        //详情列表
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await DetailsList({
                    "regionS": this.regionS,
                    "street": this.street,
                    "community": this.community
                })
                that.tableData = result.data.data.data;
            }
            getListData();
        },


        //显示厂家
        showCJ(row) {
            this.rowId = row.id;
            this.terminalEquipmentManufacturer = true;

        },

        //显示类型
        showType(row) {
            this.rowId = row.id;
            this.terminalEquipmentType = true;
        },

        //显示异常
        showYC(row) {
            this.rowId = row.id;
            this.abnormalIndicators = true;
        },

        //显示数量
        showSL(row) {
            this.rowId = row.id;
            this.NumberOfEquipment = true;
        },

        //显示检测
        showJC(row){
            this.rowId = row.id;
            this.equipmentVisible = true;
        }


    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">
@import "../../../assets/less/base";

.templateDiv {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #EDF4F4;


    .templateDivTop {
        height: 550px;
        width: 98%;
        margin: 0 auto;
        background-color: #EDF4F4;
        display: flex;
        align-items: center;
        justify-content: center;

        .templateDivTopT {
            margin-top: 20px;
            flex: 1;
            height: 100%;
            margin-right: 10px;
            background-color: #FFFFFF;

            .templateDivTopTTop {
                height: 50px;

                .templateDivTopTTopL {
                    width: 50%;

                    .templateDivTopTTopLText {
                        width: 70px;
                        font-size: 14px;
                        padding-left: 10px;
                        margin-top: 10px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .templateDivTopTTopLImg {
                        padding-left: 10px;
                    }
                }

                .templateDivTopTTopR {
                    width: 50%;
                    height: 100%;
                }
            }

            .templateDivTopTBottom {
                height: 450px;

            }

        }

        .regionTitle {
            height: 80px;

            .regionTitleTB {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .regionTitleT {
                width: 50%;
                height: 100%;
            }
        }

        .regionContent {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 300px;
            position: relative;

            .templateDivTopTTopLImgText {
                position: absolute;
                top: 80px;
                left: 150px;
                font-size: 42px;
                color: #35C4AE;
                z-index: 9;
            }
        }

        .regionNumber {
            display: flex;
            align-items: center;
            justify-content: center;

            .regionNumberText {
                width: 100px;
                height: 40px;
                color: #17928D;
                font-size: 16px;
                font-weight: bold;
                border: 2px solid #61d2f7;
                border-bottom-color: #39A29E;
                border-top-color: #E0F0F0;
                border-left: none;
                border-right: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .templateDivTopTCommunity1 {
            width: 100%;
            height: 100px;
            border-color: #61d2f7;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .templateDivTopTCommunity2 {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center

        }

        .templateDivTopTCommunity3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 200px;
            border-color: #0000ff;
            position: relative;

            .Community3Div {
                width: 150px;
                height: 100px;
                position: absolute;
                top: 20%;
                left: 27%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                div:first-child {
                    font-size: 20px;
                    color: #3FA5A1;
                }

                div:last-child {
                    font-size: 32px;
                    color: #2C3E50;
                    margin-top: 5px;
                    font-weight: bold;

                }
            }
        }

        .ListT {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 35px;
            margin-bottom: 10px;

            .ListTL {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .ListTR {
                flex: 2;

                .ListTR1 {
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .ListTR1T {
                        width: 90%;
                    }


                }

                .ListTR2 {
                    height: 20px;
                    width: 90%;
                    margin: 0 auto;

                }

            }

            .rankingDiv {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #C6CBCC;
                font-size: 12px;
            }
        }

        .templateDivTopTitle {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            .templateDivTopTitleL {
                flex: 1;

            }

            .templateDivTopTitleR {
                flex: 2;
            }
        }
    }

    .templateDivBottom {

        .crumbs {
            width: 98%;
            height: 80px;
            line-height: 80px;
            background-color: #FFFFFF;
            margin: 20px auto 0 auto;
            padding-left: 20px;
            padding-right: 20px;

            .crumbsLeft {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .crumbsRight {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .container {
            display: flex;
            align-items: center;
            justify-items: center;
            background-color: @color-F0;

            .containerDiv {
                width: 98%;
                margin: 0 auto;
                border-radius: 10px;
                background-color: @color-white;
                overflow: auto;

                .handle-box {
                    width: 100%;
                    height: 80px;
                    line-height: 80px;
                    padding-left: 20px;

                    .el-button {
                        width: 110px;
                        height: 35px;
                    }
                }

                .handle-title {
                    width: 100%;
                    height: 50px;
                    background-color: rgba(230, 242, 254, 1);
                    line-height: 50px;
                    padding-left: 50px;

                    div {
                        margin-right: 40px;
                        font-size: @font-size-small;
                    }

                    div:first-child {
                        margin-right: 10px;
                    }

                    .icon-dengpaolightbulb3 {
                        font-size: 150%;
                        color: @color-bg-red;
                    }
                }

                .handle-table {
                    width: 100%;
                }
            }
        }

    }


}

/deep/ .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: #19A59A;
}
</style>
