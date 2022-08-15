<template>
    <div class="templateDiv">
        <div class="templateDivOne">
            <div class="templateDivL fl">
                <div class="templateDivT">
                    <div class="templateDivTTop">
                        <div class="templateDivTTopL fl">
                            <div class="templateDivTTopLText">信息公告</div>
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
            </div>
            <div class="templateDivR fl">
                <div class="templateDivT">
                    <div class="templateDivTTop">
                        <div class="templateDivTTopL fl">
                            <div class="templateDivTTopLText">实时信息</div>
                            <div class="templateDivTTopLImg">
                                <img src="../../../assets/img/dw/bt.png" alt="">
                            </div>
                        </div>
                        <div class="templateDivTTopR fl">

                        </div>
                    </div>
                    <div class="Bottom">
                        <div class="BottomL fl">
                            <ElectricitySalesInformation></ElectricitySalesInformation>
                        </div>
                        <div class="BottomR fl">
                            <PowerPurchaseInformation></PowerPurchaseInformation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="templateDivTwo">
            <div class="templateTwoTL fl">
                <div class="templateDivT">
                    <div class="templateDivTTop">
                        <div class="templateDivTTopL fl">
                            <div class="templateDivTTopLText">供电能力</div>
                            <div class="templateDivTTopLImg">
                                <img src="../../../assets/img/dw/bt.png" alt="">
                            </div>
                        </div>
                        <div class="templateDivTTopR fl">

                        </div>
                    </div>
                    <div class="Bottom">
                        <PowerSupplyCapacity></PowerSupplyCapacity>
                    </div>
                </div>
            </div>
            <div class="templateTwoTR fl">
                <div class="templateDivT">
                    <div class="templateDivTTop">
                        <div class="templateDivTTopL fl">
                            <div class="templateDivTTopLText">购电需求</div>
                            <div class="templateDivTTopLImg">
                                <img src="../../../assets/img/dw/bt.png" alt="">
                            </div>
                        </div>
                        <div class="templateDivTTopR fl">

                        </div>
                    </div>
                    <div class="Bottom">
                        <PowerSupplyDemand></PowerSupplyDemand>
                    </div>
                </div>
            </div>
        </div>
        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import ElectricitySalesInformation from './components/ElectricitySalesInformation'
import PowerPurchaseInformation from './components/PowerPurchaseInformation'
import PowerSupplyDemand from './components/PowerSupplyDemand'
import PowerSupplyCapacity from './components/PowerSupplyCapacity'
import shadinLayer from "../../../common/shadinLayer";
import {
    upperChains,
    abnormalChains,
} from "../../../api/DataTrustworthinessSupervision/DataTrustworthinessSupervision";

export default {
    name: "index",
    data() {
        return {

        }
    },


    components: {ElectricitySalesInformation,PowerPurchaseInformation,shadinLayer,PowerSupplyDemand,PowerSupplyCapacity},

    mounted() {
        this.setLine();
        this.setLine2();
    },
    created() {


    },
    methods: {


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
    .templateDivT {
        width: 100%;
        height: 350px;
        background-color: #ffffff;
        margin-left: 1%;
        margin-top: 1%;
        margin-bottom: 1%;


    }
    .templateDivL{
        width: 30%;
        height: 400px;
        background-color: #ffffff;
        margin-left: 1%;
        margin-right: 1%;
    }
    .templateDivR{
        width: 68%;
        height: 400px;
        background-color: #ffffff;
    }

    .templateTwoTL{
        width: 49%;
        height: 400px;
        margin-left: 0.5%;
    }
    .templateTwoTR{
        width: 49%;
        height: 400px;
        margin-left: 1%;
    }

    .BottomL{
        width: 50%;
        height: 320px;

    }
    .BottomR{
        width: 50%;
        height: 320px;
    }



}

</style>

