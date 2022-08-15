<template>
    <div class="templateDiv">
        <div class="templateDivL fl">
            <el-descriptions :column="1" border direction="vertical">
                <el-descriptions-item label="-滞纳方"   :labelStyle="{'color': '#3C937E','font-weight':'bold'}">山东电力交易中心</el-descriptions-item>
                <el-descriptions-item label="-滞纳地"   :labelStyle="{'color': '#3C937E','font-weight':'bold'}">滨州市</el-descriptions-item>
                <el-descriptions-item label="-滞纳周期"  :labelStyle="{'color': '#3C937E','font-weight':'bold'}">2021年9月1号-2022年9月2号</el-descriptions-item>
                <el-descriptions-item label="-供电方"   :labelStylee="{'color': '#3C937E','font-weight':'bold'}">山东电力交易中心</el-descriptions-item>
                <el-descriptions-item label="-输电方"   :labelStyle="{'color': '#3C937E','font-weight':'bold'}">山东电力交易中心</el-descriptions-item>
                <el-descriptions-item label="-消纳电量"   :labelStyle="{'color': '#3C937E','font-weight':'bold'}">700000MWH</el-descriptions-item>
                <el-descriptions-item label="-电量类型"   :labelStyle="{'color': '#3C937E','font-weight':'bold'}">恒定电流</el-descriptions-item>
            </el-descriptions>
        </div>
        <div class="templateDivR fl">
            <img src="../../../assets/img/dw/DataTrustworthinessSupervision/rz-index_15.png" alt="">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">

export default {
    name: 'modal',
    data() {
        return {

        }
    },
    mounted() {


    },
    created() {

    },
    methods: {


    },
    props: {

    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">
.templateDiv{
    background-color: #ffffff;
    font-weight: bold;
    padding-left: 10px;
    .templateDivL{
        margin-top: 20px;
    }
    .templateDivR{
        margin-top: 20px;
        img{
            margin-left: 20px;

        }
    }

}


</style>

