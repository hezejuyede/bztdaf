<template>
    <div class="templateDiv">
        <div class="templateDivB">
            <div class="templateDivBL fl">
                <div class="templateDivTTop">
                    <div class="templateDivTTopL fl">
                        <div class="templateDivTTopLText">售电聚合体展示</div>
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
            <div class="templateDivBR fl">
                <img src="../../../assets/img/dw/jh-zs_03.png" alt="" style="height:  300px">
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

            </div>
        </div>
        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import shadinLayer from "../../../common/shadinLayer";
import areaSelection from "./components/areaSelection";
import PerformanceList from "./components/PerformanceList";
import PerformancePie from "./components/PerformancePie";
export default {
    name: "index",
    data() {
        return {

        };
    },

    components: {
        shadinLayer,
        PerformanceList,
        PerformancePie,
        areaSelection
    },

    mounted() {

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
    .TableTitle{
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 20px;

        .TableTitleL{
            width: 5px;
            height: 15px;
            background-color: #05A696;
        }
        .TableTitleR{
            width: 100px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content:flex-start;
            padding-left: 10px;

        }

    }
    .templateDivT{
        width: 98%;
        margin: 10px auto;
        background-color: #ffffff;
        height: 400px;

    }
    .templateDivB{
        height: 420px;
        background-color: #F4F8F8;
        .templateDivBL{
            width: 59%;
            height: 400px;
            margin-left: 1%;
            background-color: #ffffff;
        }
        .templateDivBR{
            width: 40%;
            height:400px;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
        }


    }
}

</style>

