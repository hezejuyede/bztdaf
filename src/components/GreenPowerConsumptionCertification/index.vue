<template>
    <div class="templateDiv">
        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">可信状态实时监控</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">

                </div>
            </div>
            <div class="Bottom">

            </div>
        </div>
    </div>
</template>

<script>

import {
    upperChains,
    abnormalChains,
} from "../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: "index",
    data() {
        return {
            count:"",
            tableData:[],
            dataHashDialog:false,
            exceptionDetailsDialog:false,
            manufactorDialog:false,
            rowId:"",
        }
    },


    components: {},

    mounted() {


    },
    created() {


    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await upperChains({})
                that.tableData = result.data.data.data;
                that.count = result.data.data.number;
            }
            getListData();

        },


        //设置饼图
        setPie() {
            let that = this;
            const getListData = async () => {
                const result = await abnormalChains({})
                var data = result.data.data.data;
                let myChart = this.$echarts.init(document.getElementById('enterpriseBar'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '80%',
                        left: 'center',

                    },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,

                            itemStyle: {
                                normal: {
                                    color: function (colors) {
                                        var colorList = [
                                            '#2DC3B0', '#2174ED', '#FFC851', '#5A5476', '#1869A0', '#FF9393'
                                        ];
                                        return colorList[colors.dataIndex]
                                    }
                                },
                            },

                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },

                            data: data
                        }
                    ]
                });
            }
            getListData();


        },


        //关闭弹出框
        closeVisible(type) {
            if (type === 'dataHashDialog') {
                this.dataHashDialog = false;
            } else if (type === 'exceptionDetailsDialog') {
                this.exceptionDetailsDialog = false;
            } else if (type === 'manufactorDialog') {
                this.manufactorDialog = false;
            }
        },


        showHash() {
            this.dataHashDialog = true;

        },

        showException() {
            this.exceptionDetailsDialog = true;

        },

        showManufactor() {
            this.manufactorDialog = true;
        }

    }

}
</script>

<style scoped lang="less" rel="stylesheet/less">


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

    }
}

</style>

