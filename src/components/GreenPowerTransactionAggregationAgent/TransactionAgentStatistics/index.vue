<template>
    <div class="templateDiv">
        <div class="templateDivB">
            <div class="templateDivBL fl">
                <div class="templateDivTTop">
                    <div class="templateDivTTopL fl">
                        <div class="templateDivTTopLText">聚合体绿电交易合同统计</div>
                        <div class="templateDivTTopLImg">
                            <img src="../../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTTopR fl">
                    </div>
                </div>
                <div class="">
                    <div class="statisticsTemplate fl" v-for="(item,index) in listData">
                        <div class="statisticsTemplateTop">
                            {{ item.name }}
                            <img src="../../../assets/img/dw/heng.png" alt="" style="width: 50px">
                        </div>
                        <div class="statisticsTemplateBottom">
                            <div class="">
                                <div class="">履约合同数量：</div>
                                <div class="">履约发电量：</div>
                                <div class="">履约完成率：</div>
                            </div>
                            <div class="">
                                <div class="LN">{{ item.lyhtsl }}</div>
                                <div class="LN">{{ item.lyfdl }}</div>
                                <div class="LN">{{ item.lyhtsl }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="templateDivBR fl">
                <div class="templateDivTTop">
                    <div class="templateDivTTopL fl">
                        <div class="templateDivTTopLText">单元体绿电交易合同统计</div>
                        <div class="templateDivTTopLImg">
                            <img src="../../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTTopR fl">
                    </div>
                </div>
                <div class="">
                    <performance-list></performance-list>
                </div>
            </div>
        </div>
        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">售电聚合体实时发电量</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">
                </div>
            </div>
            <div class="templateDivTBottom">
                <PerformancePie></PerformancePie>
            </div>
        </div>
        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import shadinLayer from "../../../common/shadinLayer";
import PerformanceList from "./components/PerformanceList";
import PerformancePie from "./components/PerformancePie";
import {PolymerStatistics} from "../../../api/GreenPowerTransactionAggregationAgent/TransactionAgentStatistics";

export default {
    name: "index",
    data() {
        return {
            listData: []

        };
    },

    components: {
        shadinLayer,
        PerformanceList,
        PerformancePie
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
                const result = await PolymerStatistics({})
                that.listData = result.data.data.data;
            }
            getListData();

        },

    }

}
</script>

<style scoped lang="less" rel="stylesheet/less">

.templateDiv {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #EDF4F4;
    padding-top: 10px;
    padding-bottom: 20px;

    .templateDivTTop {
        height: 50px;
        padding-left: 20px;
        padding-top: 10px;
        background-color: #ffffff;

        .templateDivTTopL {
            width: 50%;

            .templateDivTTopLText {
                width: 200px;
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
            justify-content: center;
            padding-right: 20px;

        }
    }

    .TableTitle {
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 20px;

        .TableTitleL {
            width: 5px;
            height: 15px;
            background-color: #05A696;
        }

        .TableTitleR {
            width: 100px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 10px;

        }

    }

    .templateDivT {
        width: 98%;
        margin: 10px auto;
        background-color: #ffffff;
        height: 400px;

    }

    .templateDivB {
        height: 420px;
        background-color: #F4F8F8;

        .templateDivBL {
            width: 40%;
            height: 400px;
            margin-left: 1%;
            background-color: #ffffff;
        }

        .templateDivBR {
            width: 59%;
            height: 400px;
            background-color: #ffffff;
        }


    }

    .statisticsTemplate {
        width: 47%;
        height: 150px;
        border: 1px solid #EBF5F5;
        margin-left: 2%;
        margin-top: 10px;
        box-shadow: 2.5px 2.5px 2.5px #E6F3F3;

        .statisticsTemplateTop {
            height: 40px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-left: 10px;
            flex-direction: column;
        }

        .statisticsTemplateBottom {
            display: flex;
            align-items: center;
            justify-content: center;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                div {
                    margin-top: 5px;
                    font-size: 12px;
                }

                .LN {
                    margin-top: 5px;
                    font-size: 14px;
                    font-weight: bold;
                }

            }

        }

    }
}

</style>

