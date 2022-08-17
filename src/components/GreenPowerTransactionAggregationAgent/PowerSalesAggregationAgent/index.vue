<template>
    <div class="templateDiv">
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
                    <el-button type="primary" @click="showUserRegistrationDialog"
                               style="background-color: #DCB249;width: 100px;height: 35px">用户注册
                    </el-button>
                </div>
                <div class="">
                    <img src="../../../assets/img/dw/you.png" alt="">
                </div>
                <div class="">
                    <div class="">
                        <el-button type="primary" @click="showAddPolymerDialog"
                                   style="background-color: #05A696;width: 100px;height: 35px">加入聚合体
                        </el-button>
                    </div>
                    <div class="">
                        <el-button type="primary" @click="showPolymerRegistrationDialog"
                                   style="background-color: #05A696;width: 100px;height: 35px">聚合体注册
                        </el-button>
                    </div>
                </div>
                <div class="">
                    <img src="../../../assets/img/dw/zuo.png" alt="">

                </div>
                <div class="">
                    <el-button type="primary" @click="showPolymerRecruitmentDialog"
                               style="background-color: #05A696;width: 100px;height: 35px">聚合体招募
                    </el-button>
                </div>
            </div>
            <div class="templateDivLBottom">
                <agent-list></agent-list>
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

        <shadinLayer></shadinLayer>
        <AddPolymerDialog :AddPolymerDialog="AddPolymerDialog"
                          @closeVisible="closeVisible"></AddPolymerDialog>
        <UserRegistrationDialog :UserRegistrationDialog="UserRegistrationDialog"
                                @closeVisible="closeVisible"></UserRegistrationDialog>

        <PolymerRegistrationDialog :PolymerRegistrationDialog="PolymerRegistrationDialog"
                                   @closeVisible="closeVisible"></PolymerRegistrationDialog>

        <PolymerRecruitmentDialog :PolymerRecruitmentDialog="PolymerRecruitmentDialog"
                                  @closeVisible="closeVisible"></PolymerRecruitmentDialog>
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

export default {
    name: "index",
    data() {
        return {
            AddPolymerDialog:false,
            UserRegistrationDialog:false,
            PolymerRecruitmentDialog:false,
            PolymerRegistrationDialog:false,
        }
    },


    components: {shadinLayer,agentList,ElectricitySalesInquiry,AddPolymer,AddPolymerDialog,UserRegistrationDialog,PolymerRegistrationDialog,PolymerRecruitmentDialog},

    mounted() {

    },
    created() {


    },
    methods: {

        //关闭弹出框
        closeVisible(type) {
            if (type === 'AddPolymerDialog') {
                this.AddPolymerDialog = false;
            } else if (type === 'UserRegistrationDialog') {
                this.UserRegistrationDialog = false;
            } else if (type === 'PolymerRegistrationDialog') {
                this.PolymerRegistrationDialog = false;
            }
            else if (type === 'PolymerRecruitmentDialog') {
                this.PolymerRecruitmentDialog = false;
            }
        },

        //显示用户注册
        showUserRegistrationDialog (){
            this.UserRegistrationDialog =true;
        },

        //显示加入聚合体
        showAddPolymerDialog() {
            this.AddPolymerDialog = true;

        },


        //显示聚合体注册
        showPolymerRegistrationDialog() {
            this.PolymerRegistrationDialog = true;

        },

        //聚合体招募
        showPolymerRecruitmentDialog() {
            this.PolymerRecruitmentDialog = true;
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

    .templateDivT1 {
        width: 100%;
        height: 480px;
        background-color: #ffffff;
        margin-bottom: 1%;


    }
    .templateDivT2 {
        width: 100%;
        height: 360px;
        background-color: #ffffff;
        margin-bottom: 1%;


    }


}

</style>

