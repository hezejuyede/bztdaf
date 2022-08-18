<template>
    <div class="templateDiv">
        <div class="templateDivT">
            <div class="templateDivTTop">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">聚合体绿电交易合同统计</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">
                </div>
            </div>
            <div class="templateDivTBottom">
                <areaSelection></areaSelection>
            </div>
        </div>
        <div class="templateDivB">
            <div class="TableTitle" style="margin-top: 15px">
                <div class="TableTitleL"></div>
                <div class="TableTitleR">企业设备树</div>
            </div>
            <div class="templateDivBL fl">
                <div class="templateDivBLT">
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </div>
            </div>
            <div class="templateDivBR fl">
                <img src="../../assets/img/dw/qysbs.png" alt="">
            </div>
        </div>
        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import shadinLayer from "../../common/shadinLayer";
import areaSelection from "./components/areaSelection";

export default {
    name: "index",
    data() {
        return {
            data: [{
                label: '主体企业1',
                id:"001",
                children: [{
                    label: '聚合体1',
                    id:"0001",
                    children: [{
                        label: '村1',
                        id:"00001",
                        children: [{
                            label: '主体1',
                            id:"000001",
                        },
                            {
                                label: '主体2',
                                id:"000002",
                            }
                            ,
                            {
                                label: '主体3',
                                id:"000003",
                            }
                            ,
                            {
                                label: '主体4',
                                id:"000004",
                            }
                        ]
                    }]
                }]
            },

                {
                    label: '主体企业2',
                    id:"002",
                    children: [{
                        label: '聚合体2',
                        id:"0022",
                        children: [{
                            label: '村2',
                            id:"00222",
                            children: [{
                                label: '主体2',
                                id:"002222",
                            },
                                {
                                    label: '主体3',
                                    id:"002223",
                                }
                                ,
                                {
                                    label: '主体4',
                                    id:"002224",
                                }
                                ,
                                {
                                    label: '主体5',
                                    id:"002225",
                                }
                            ]
                        }]
                    }]
                }

            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },

    components: {
        shadinLayer,
        areaSelection
    },

    mounted() {

    },
    created() {


    },
    methods: {

        handleNodeClick(data) {
            console.log(data);
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

     .templateDivBL{
         width:20%;
         height:440px;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #ffffff;
         .templateDivBLT{
             width:95%;
             height:95%;
             overflow: auto;
             background-color:#F4F8F8;
         }
     }
    .templateDivBR{
        width:80%;
        height:440px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        img{
            width: 95%;
        }

    }
    .templateDivB{
        background-color: #ffffff;
        height: 500px;
        width: 100%;
    }

    /deep/ .el-tree {
        background: #F4F8F8;

    }

}

</style>

