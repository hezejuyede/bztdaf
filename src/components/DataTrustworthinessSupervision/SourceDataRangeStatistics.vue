<template>
    <div class="templateDiv">
        <div class="templateDivTop">
            <div class="templateDivTopT">
                <div class="templateDivTopTTop">
                    <div class="templateDivTopTTopL fl">
                        <div class="templateDivTopTTopLText">滨州地区</div>
                        <div class="templateDivTopTTopLImg">
                            <img src="../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl"
                         style="display: flex;align-items: center;justify-content: center">
                        <el-radio-group v-model="radio1">
                            <el-radio-button label="设备"></el-radio-button>
                            <el-radio-button label="区域"></el-radio-button>
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
                            <img src="../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl" style="display: flex;align-items: center;justify-content: center">
                        <el-select
                            style="width:120px"
                            v-model="region"
                            clearable
                            filterable
                            allow-create
                            default-first-option
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
                                    style="font-size:32px;color: #323A3A;font-weight: bold;margin-right: 5px">36</span>
                                <img src="../../assets/img/dw/sheng.png" alt="">
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
                                    style="font-size:32px;color: #323A3A;font-weight: bold;margin-right: 5px">874</span>
                                <img src="../../assets/img/dw/jiang.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="regionContent">
                        <div class="templateDivTopTTopLImgText">
                            52%
                        </div>
                        <img src="../../assets/img/dw/tj-yuan.png" alt="">
                    </div>
                    <div class="regionNumber">
                        <div class="regionNumberText">
                            滨城区
                        </div>

                    </div>

                </div>
            </div>
            <div class="templateDivTopT">
                <div class="templateDivTopTTop">
                    <div class="templateDivTopTTopL fl">
                        <div class="templateDivTopTTopLText">街道</div>
                        <div class="templateDivTopTTopLImg">
                            <img src="../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl"></div>

                </div>
                <div class="templateDivTopTList">
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="ListT">
                        <div class="ListTL">
                            <div class="ListTLIcon">
                                <img src="../../assets/img/dw/1.png" alt="">
                            </div>
                            <div class="ListTLText" style="margin-left: 5px">
                                市中街道
                            </div>

                        </div>
                        <div class="ListTR">
                            <div class="ListTR1">
                                <div class="ListTR1T" >
                                    <el-skeleton-item variant="text" style="width: 67.5%;background-color: #23A99A;float: left;margin-right:5%"  />
                                    <el-skeleton-item variant="text" style="width: 27.5%;background-color: #EBE27C;float: left" />
                                </div>

                            </div>
                            <div class="ListTR2">
                                <div class="fl" style="color: #07807B;font-size: 18px;font-weight: bold">
                                    200
                                </div>
                                <div class="fr" style="color: #9A8E2C;font-size: 18px;font-weight: bold">
                                    20
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

                            <img src="../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTopTTopR fl"></div>
                </div>
                <div class="templateDivTopTCommunity">
                    <div class="templateDivTopTCommunity1">
                        <div style="width: 100px;height: 100px;border-radius: 50%;border:5px solid ;border-color:#3ED0B7;display: flex;align-items: center;justify-content: center">
                            <div style="width: 80px;height:80px;border-radius: 50%;border:2px solid;border-color: #52B7AF;display: flex;align-items: center;justify-content: center">
                                郭集
                            </div>
                        </div>

                    </div>
                    <div class="templateDivTopTCommunity2">
                        <div style="height: 100px;width: 2px;background-color: #1A938E"></div>

                    </div>
                    <div class="templateDivTopTCommunity3">
                        <div class="Community3Div">
                            <div class="">终端设备数量</div>
                            <div class="">3</div>
                        </div>
                        <img src="../../assets/img/dw/di.png" alt="" class="">
                    </div>
                </div>
            </div>


        </div>
        <div class="templateDivBottom">

        </div>

        <shadinLayer></shadinLayer>
    </div>
</template>
<script type="text/ecmascript-6">
    import shadinLayer from '../../common/shadinLayer'
    import {regionOptions,typeOptions} from "../../utils/options";
    import {industryCarbonReport,
        enterpriseOverDischargeWarning,
        industryCarbonBar,
        industryCarbonLine,
        regionalCarbonLine,
        regionalCarbonBar,
        enterprisePie,
        regionalCarbonReport,
    } from "../../api/dataManagement";


    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'

    export default {
        name: 'WorkingProcedure',
        data() {
            return {
                radio1: "设备",
                region: "01",
                regionOptions: regionOptions,
                countyOptions: [
                    {"name": "无棣县", "value": "88"},
                    {"name": "沾化区", "value": "69.9"},
                    {"name": "阳信县", "value": "79"},
                    {"name": "滨城区", "value": "49.9"},
                    {"name": "惠民县", "value": "39.9"},
                    {"name": "博兴县", "value": "19.9"},
                    {"name": "邹平市", "value": "29.9"},
                ]


            }
        },


        components: {shadinLayer},

        mounted() {
            this.doSearch();

        },
        created() {

        },
        methods: {



            //查詢
            doSearch() {
                this.shandongMap()
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


            //山东碳排放地图
            shandongMap() {
                let that = this
                var myChart = this.$echarts.init(document.getElementById('chart_map'));

                var data = that.countyOptions;


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
                            roam: true,
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
                            data: data
                        }],
                });

                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            },



        },
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    @import "../../assets/less/base";

    .templateDiv {
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #EDF4F4;


        .templateDivTop{
            height: 550px;
            width: 98%;
            margin: 0 auto;
            background-color: #EDF4F4;
            display: flex;
            align-items: center;
            justify-content: center;
            .templateDivTopT{
                margin-top:20px;
                flex: 1;
                height: 100%;
                margin-right: 10px;
                background-color: #FFFFFF;
                .templateDivTopTTop{
                    height: 50px;
                    .templateDivTopTTopL{
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
                left: 130px;
                font-size: 42px;
                color: #35C4AE;
                z-index: 9999;
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
            .Community3Div{
                width: 150px;
                height: 100px;
                position: absolute;
                top:20%;
                left:27%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div:first-child{
                    font-size: 20px;
                    color: #3FA5A1;
                }
                div:last-child{
                    font-size: 32px;
                    color: #2C3E50;
                    margin-top: 5px;
                    font-weight: bold;

                }
            }
        }

        .ListT{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            margin-bottom: 10px;
            .ListTL{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .ListTR{
             flex: 2;
                .ListTR1{
                    height:20px ;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .ListTR1T{
                        width: 90%;
                    }


                }
                .ListTR2{
                    height:20px ;
                    width: 90%;
                    margin: 0 auto;

                }

            }
        }


    }

    /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        background-color: #19A59A;
    }
</style>
