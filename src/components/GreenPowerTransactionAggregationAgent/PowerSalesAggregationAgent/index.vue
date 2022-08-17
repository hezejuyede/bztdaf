<template>
    <div class="templateDiv">
        <div class="templateDivOne">
            <div class="templateDivL fl">
                <div class="templateDivTTop">
                    <div class="templateDivTTopL fl">
                        <div class="templateDivTTopLText">售电聚合代理</div>
                        <div class="templateDivTTopLImg">
                            <img src="../../../assets/img/dw/bt.png" alt="">
                        </div>
                    </div>
                    <div class="templateDivTTopR fl">
                    </div>
                </div>
                <div class="templateDivLCenter">
                    <div class="">
                        <el-button type="primary" @click=""
                                   style="background-color: #DCB249;width: 100px;height: 35px">用户注册
                        </el-button>
                    </div>
                    <div class="">
                        <img src="../../../assets/img/dw/you.png" alt="">
                    </div>
                    <div class="">
                        <div class="">
                            <el-button type="primary" @click=""
                                       style="background-color: #05A696;width: 100px;height: 35px">加入聚合体
                            </el-button>
                        </div>
                        <div class="">
                            <el-button type="primary" @click=""
                                       style="background-color: #05A696;width: 100px;height: 35px">聚合体注册
                            </el-button>
                        </div>


                    </div>
                    <div class="">
                        <img src="../../../assets/img/dw/zuo.png" alt="">

                    </div>
                    <div class="">
                        <el-button type="primary" @click=""
                                   style="background-color: #05A696;width: 100px;height: 35px">聚合体招募
                        </el-button>
                    </div>
                </div>
                <div class="templateDivLBottom">
                    <agent-list></agent-list>
                </div>
            </div>
            <div class="templateDivR fl">
                <div class="templateDivT">
                    <div class="templateDivTTop">
                        <div class="templateDivTTopL fl">
                            <div class="templateDivTTopLText">聚合代理售电信息发布</div>
                            <div class="templateDivTTopLImg">
                                <img src="../../../assets/img/dw/bt.png" alt="">
                            </div>
                        </div>
                        <div class="templateDivTTopR fl">

                        </div>
                    </div>
                    <div class="Bottom">
                    </div>
                </div>
                <div class="templateDivT">
                    <div class="templateDivTTop">
                        <div class="templateDivTTopL fl">
                            <div class="templateDivTTopLText">受电侧查询</div>
                            <div class="templateDivTTopLImg">
                                <img src="../../../assets/img/dw/bt.png" alt="">
                            </div>
                        </div>
                        <div class="templateDivTTopR fl">

                        </div>
                    </div>
                    <div class="Bottom">
                        <ElectricitySalesInquiry></ElectricitySalesInquiry>
                    </div>
                </div>
            </div>
        </div>

        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import agentList from './components/agentList'
import shadinLayer from "../../../common/shadinLayer";
import ElectricitySalesInquiry from './components/ElectricitySalesInquiry'

export default {
    name: "index",
    data() {
        return {}
    },


    components: {shadinLayer,agentList,ElectricitySalesInquiry},

    mounted() {

    },
    created() {


    },
    methods: {}

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
                width: 150px;
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

    .templateDivL {
        width: 48%;
        height: 900px;
        margin-left: 1%;
        margin-right: 1%;

        .templateDivLCenter {
            height: 300px;
            background-color: #ffffff;
            display: flex;
            align-items: center;

            div {
                height: 60%;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;

            }

            div:nth-child(3) {
                height: 60%;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                div:first-child {
                    flex: 1;
                    height: 50%;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                }

                div:last-child {
                    flex: 1;
                    height: 50%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                }
            }

        }

        .templateDivLBottom {
            height: 500px;
            background-color: #ffffff;
        }

    }

    .templateDivR {
        width: 50%;
        height: 900px;

    }

    .templateDivT {
        width: 100%;
        height: 420px;
        background-color: #ffffff;
        margin-bottom: 1%;


    }


}

</style>

