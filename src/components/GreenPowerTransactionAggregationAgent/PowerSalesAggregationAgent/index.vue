<template>
    <div class="templateDiv">
        <div class="templateDivL fl clearfix">
            <div class="templateDivTTop clearfix">
                <div class="templateDivTTopL fl">
                    <div class="templateDivTTopLText">售电聚合代理</div>
                    <div class="templateDivTTopLImg">
                        <img src="../../../assets/img/dw/bt.png" alt="">
                    </div>
                </div>
                <div class="templateDivTTopR fl">
                </div>
            </div>
            <div class="templateDivLCenter clearfix">
                <div class="">
                    <el-button type="primary" @click="showUserRegistrationDialog"
                               :style="{ 'background-color':(UserRegistrationDialog === true) ?'#DCB249' : ' #05A696','width':'100px','height':'35px'}">
                        用户注册
                    </el-button>
                </div>
                <div class="">
                    <img src="../../../assets/img/dw/you.png" alt="">
                </div>
                <div class="">
                    <div class="">
                        <el-button type="primary" @click="showAddPolymerDialog"
                                   :style="{ 'background-color':(AddPolymerDialog === true) ?'#DCB249' : ' #05A696','width':'100px','height':'35px'}">
                            加入聚合体
                        </el-button>
                    </div>
                    <div class="">
                        <el-button type="primary" @click="showPolymerRegistrationDialog"
                                   :style="{ 'background-color':(PolymerRegistrationDialog === true) ?'#DCB249' : ' #05A696','width':'100px','height':'35px'}">
                            聚合体注册
                        </el-button>
                    </div>
                </div>
                <div class="">
                    <img src="../../../assets/img/dw/zuo.png" alt="">

                </div>
                <div class="">
                    <el-button type="primary" @click="showPolymerRecruitmentDialog"
                               :style="{ 'background-color':(PolymerRecruitmentDialog === true) ?'#DCB249' : ' #05A696','width':'100px','height':'35px'}">
                        聚合体招募
                    </el-button>
                </div>
            </div>
            <div class="templateDivLBottom">
                <agent-list :agentList="agentList" @closeVisible="closeVisible"></agent-list>
                <AddPolymerDialog :AddPolymerDialog="AddPolymerDialog"
                                  :AddPolymerData="AddPolymerData"
                                  @closeVisible="closeVisible"></AddPolymerDialog>
                <UserRegistrationDialog :UserRegistrationDialog="UserRegistrationDialog"
                                        @closeVisible="closeVisible"></UserRegistrationDialog>

                <PolymerRegistrationDialog :PolymerRegistrationDialog="PolymerRegistrationDialog"
                                           @closeVisible="closeVisible"></PolymerRegistrationDialog>

                <PolymerRecruitmentDialog :PolymerRecruitmentDialog="PolymerRecruitmentDialog"
                                          @closeVisible="closeVisible"></PolymerRecruitmentDialog>

                <detailsDialog :detailsDialog="detailsDialog"
                               @closeVisible="closeVisible"></detailsDialog>

            </div>
        </div>
        <div class="templateDivR fl">
            <div class="templateDivT1">
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
                    <AddPolymer></AddPolymer>
                </div>
            </div>
            <div class="templateDivT2">
                <div class="templateDivTTop">
                    <div class="templateDivTTopL fl">
                        <div class="templateDivTTopLText">售电侧查询</div>
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

        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import shadinLayer from "../../../common/shadinLayer";
import agentList from './components/agentList'
import ElectricitySalesInquiry from './components/ElectricitySalesInquiry'
import AddPolymer from './components/AddPolymer'
import UserRegistrationDialog from './components/UserRegistrationDialog'
import AddPolymerDialog from './components/AddPolymerDialog'
import PolymerRegistrationDialog from './components/PolymerRegistrationDialog'
import PolymerRecruitmentDialog from './components/PolymerRecruitmentDialog'
import detailsDialog from './components/detailsDialog'

import {AddPolymerS} from "../../../api/GreenPowerTransactionAggregationAgent/PowerSalesAggregationAgent";

export default {
    name: "index",
    data() {
        return {
            agentList:  false,
            AddPolymerDialog: false,
            UserRegistrationDialog:  true,
            PolymerRecruitmentDialog: false,
            PolymerRegistrationDialog: false,
            detailsDialog: false,

            AddPolymerData:[]
        }
    },


    components: {
        shadinLayer,
        agentList,
        ElectricitySalesInquiry,
        AddPolymer,
        AddPolymerDialog,
        UserRegistrationDialog,
        PolymerRegistrationDialog,
        PolymerRecruitmentDialog,
        detailsDialog
    },

    mounted() {

    },
    created() {
        this.getListAddPolymerData()


    },
    methods: {

        //关闭弹出框
        closeVisible(type) {
            if (type === 'AddPolymerDialog') {
                this.AddPolymerDialog = true;


                this.agentList = false;
                this.UserRegistrationDialog = false;
                this.PolymerRecruitmentDialog = false;
                this.PolymerRegistrationDialog = false;
                this.detailsDialog = false;
            }
            else if (type === 'UserRegistrationDialog') {
                this.UserRegistrationDialog = false;
            }
            else if (type === 'PolymerRegistrationDialog') {
                this.PolymerRegistrationDialog = true;

                this.agentList = false;
                this.AddPolymerDialog = false;
                this.UserRegistrationDialog = false;
                this.PolymerRecruitmentDialog = false;
                this.detailsDialog = false;
            } else if (type === 'PolymerRecruitmentDialog') {
                this.PolymerRecruitmentDialog = true;

                this.agentList = false;
                this.AddPolymerDialog = false;
                this.UserRegistrationDialog = false;
                this.PolymerRegistrationDialog = false;
                this.detailsDialog = false;
            }
            else if (type === 'detailsDialog') {
                this.detailsDialog = true;

                this.PolymerRegistrationDialog = false;
                this.agentList = false;
                this.AddPolymerDialog = false;
                this.UserRegistrationDialog = false;
                this.PolymerRecruitmentDialog = false;
            }
            else if (type === 'agentList') {
                this.agentList = true;

                this.detailsDialog = false;
                this.PolymerRegistrationDialog = false;
                this.AddPolymerDialog = false;
                this.UserRegistrationDialog = false;
                this.PolymerRecruitmentDialog = false;
            }
        },

        //显示用户注册
        showUserRegistrationDialog() {
            this.UserRegistrationDialog = true;

            this.agentList = false;
            this.AddPolymerDialog = false;
            this.PolymerRecruitmentDialog = false;
            this.PolymerRegistrationDialog = false;
            this.detailsDialog = false;
        },

        //显示加入聚合体
        showAddPolymerDialog() {
            this.AddPolymerDialog = true;


            this.agentList = false;
            this.UserRegistrationDialog = false;
            this.PolymerRecruitmentDialog = false;
            this.PolymerRegistrationDialog = false;
            this.detailsDialog = false;

        },


        //显示聚合体注册
        showPolymerRegistrationDialog() {
            this.PolymerRegistrationDialog = true;

            this.agentList = false;
            this.AddPolymerDialog = false;
            this.UserRegistrationDialog = false;
            this.PolymerRecruitmentDialog = false;
            this.detailsDialog = false;

        },

        //聚合体招募
        showPolymerRecruitmentDialog() {
            this.PolymerRecruitmentDialog = true;


            this.agentList = false;
            this.AddPolymerDialog = false;
            this.UserRegistrationDialog = false;
            this.PolymerRegistrationDialog = false;
            this.detailsDialog = false;
        },


        // 加入聚合体
        addPolymer(){
            this.AddPolymerDialog = true;


            this.agentList = false;
            this.UserRegistrationDialog = false;
            this.PolymerRecruitmentDialog = false;
            this.PolymerRegistrationDialog = false;
            this.detailsDialog = false;
        },




        //查询
        getListAddPolymerData() {
            let that = this;
            const getListData = async () => {
                const result = await AddPolymerS({})
                that.AddPolymerData = result.data.data.data;
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
        background-color: #ffffff;

        .templateDivLCenter {
            height: 300px;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            margin-bottom: 50px;
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
            height: 450px;
            background-color: #ffffff;
        }

    }

    .templateDivR {
        width: 49%;
        height: 950px;

    }

    .templateDivT1 {
        width: 100%;
        height: 490px;
        background-color: #ffffff;
        margin-bottom: 1%;


    }

    .templateDivT2 {
        width: 100%;
        height: 400px;
        background-color: #ffffff;
        margin-bottom: 1%;


    }


}

</style>

