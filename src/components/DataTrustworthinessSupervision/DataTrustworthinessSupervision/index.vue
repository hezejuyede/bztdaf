<template>
    <div class="templateDiv">
        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">可信状态实时监控</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">

                </div>
            </div>
            <div class="Bottom">
                <div class="BottomL  fl">
                    <div class="BottomTitle">
                        <div class="BottomTitleL">
                            <img src="../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_03.png" alt="">
                        </div>
                        <div class="BottomTitleR">
                            <div class="BottomTitleRT">
                                当日上链数量（个）
                            </div>
                            <div class="BottomTitleRB">
                                15487
                            </div>
                        </div>
                    </div>
                </div>
                <div class="BottomR fl">
                    <div class="BottomTitle">
                        <div class="BottomTitleL">
                            <img src="../../../assets/img/dw/DataTrustworthinessSupervision/jg-index_03.png" alt="">
                        </div>
                        <div class="BottomTitleR">
                            <div class="BottomTitleRT">
                                异常链数
                            </div>
                            <div class="BottomTitleRB">
                              6
                            </div>
                        </div>
                    </div>
                    <div class="BottomRDiv">
                        <div id="enterpriseBar" :style="{width: '100%', height: '100%'}"></div>
                    </div>
                </div>

            </div>
        </div>

        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">可信状态统计</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">

                </div>
            </div>
            <div class="templateDivTopTBottom">
                <trustedStateStatistics></trustedStateStatistics>
            </div>
        </div>

        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">区域详情</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">
                    更多>
                </div>
            </div>
            <div class="templateDivTopTBottom">
                <areaDetails></areaDetails>
            </div>
        </div>

        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">数据链详情</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">
                    更多>
                </div>
            </div>
            <div class="templateDivTopTBottom">
                <sata-link-details></sata-link-details>
            </div>
        </div>
    </div>
</template>

<script>
import areaDetails from './components/areaDetails'
import sataLinkDetails from './components/sataLinkDetails'
import trustedStateStatistics from './components/trustedStateStatistics'
import {
    DetailsList,
    RegionalData,
    RegionSelectionData
} from "../../../api/DataTrustworthinessSupervision/SourceDataRangeStatistics";

export default {
    name: "index",
    data() {
        return {}
    },


    components: {areaDetails,sataLinkDetails,trustedStateStatistics},

    mounted() {
        this.setPie()
    },
    created() {

    },
    methods: {

        setPie(){
            let myChart = this.$echarts.init(document.getElementById('enterpriseBar'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '',
                    subtext: '',
                    left: 'center',
                    textStyle: {
                        //⽂字颜⾊
                        color: '#ffffff',
                        //字体风格,'normal','italic','oblique'
                        fontStyle: 'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight: 'bold',
                        //字体系列
                        fontFamily: 'sans-serif',
                        //字体⼤⼩
                        fontSize: 18
                    }
                },
                grid:{
                    left:'8%',
                    right:'0',
                    bottom:'1%',
                    containLabel:true
                },
                tooltip: {
                    trigger: 'item',
                    textStyle: {
                        color: '#ffffff'
                    },
                },
                legend: {
                    orient: 'vertical',
                    left: 'center',
                    top:'bottom',
                    padding:[30,0,30,0],
                    textStyle: {
                        fontSize: 12,//字体大小
                        color: '#4A4A4A'//字体颜色
                    },
                },
                series: [
                    {
                        name: '碳排放',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        data: [
                            {
                                value: 1048, name: '800-1200吨', label: {
                                    color: '#ffffff'
                                }
                            },
                            {
                                value: 735, name: '500-800吨', label: {
                                    color: '#ffffff'
                                }
                            },
                            {
                                value: 580, name: '1200-1500吨', label: {
                                    color: '#ffffff'
                                }
                            },
                            {
                                value: 244, name: '1500吨以上', label: {
                                    color: '#ffffff'
                                }
                            },
                            {
                                value: 300, name: '500吨以下', label: {
                                    color: '#ffffff'
                                }
                            }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: '#ffffff'
                            }
                        }
                    }
                ]
            });
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
    padding-bottom: 50px;

    .templateDivT {
        float: left;
        width: 48%;
        height: 500px;
        background-color: #ffffff;
        margin-left: 1%;
        margin-top: 1%;
        margin-bottom: 1%;


        .templateDivTTop {
            height: 50px;
            padding-left: 20px;
            padding-top: 10px;

            .templateDivTTopL {
                width: 50%;

                .templateDivTTopLText {
                    width: 120px;
                    font-size: 14px;
                    font-weight: bold;
                }

                .templateDivTTopLImg {
                }
            }

            .templateDivTTopR {
                width: 50%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding-right: 20px;
            }
        }

        .BottomL {
            width: 50%;
            height: 450px;


        }

        .BottomR {

            width: 50%;
            height: 450px;
            .BottomRDiv{
                height: 400px;
            }



        }
        .BottomTitle{
             height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            .BottomTitleL{
                img{
                    height: 100%;
                }
            }
            .BottomTitleR{
                padding-left: 10px;
                .BottomTitleRT{
                    color: #4CA5A2;
                }
                .BottomTitleRB{
                    color: #4A4A4A;
                    font-size: 40px;
                    font-weight: bold;
                }
            }
        }
    }


}


</style>

