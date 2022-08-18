<template>
    <div class="visibleDiv">
        <div id="enterpriseBar" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import { dataLinkDetails} from "../../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: 'modal',
    data() {
        return {

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
                const result = await dataLinkDetails({
                    "manufactor": this.manufactor,
                    "hashData":this.hashData
                })
                /*  that.tableData1 = result.data.data.data;
                  that.tableData2 = result.data.data.data;*/

                var data =  [
                    { value: 1048, name: '单个体1' },
                    { value: 735, name: '单个体2' },
                    { value: 580, name: '单个体3' },
                    { value: 484, name: '单个体4' },
                    { value: 300, name: '单个体5' },
                    { value: 500, name: '单个体6' }
                ];
                let myChart = this.$echarts.init(document.getElementById('enterpriseBar'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '90%',
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
    },

    props: {
    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">


.visibleDiv {
    width: 100%;
    background-color: #ffffff;


}

</style>
