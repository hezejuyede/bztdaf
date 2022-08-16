<template>
    <div class="information">
        <div class="informationT" v-for="(item,index) in listData">
            <div class="informationTL">
                <i class="el-icon-document"></i>
            </div>
            <div class="informationR">
                <div class="informationRT" style="color:#1CAB9C;">
                    —{{ item.title }}
                </div>
                <div class="informationRB">
                    {{ item.time }}
                </div>
            </div>

        </div>
    </div>
</template>


<script type="text/ecmascript-6">
import {InformationAnnouncement} from "../../../../api/GreenPowerTransactionAggregationAgent/MarketInformationSynchronization";

export default {
    name: 'modal',
    data() {
        return {
            listData: [],
        }
    },
    mounted() {
        this.getList()

    },
    watch: {},
    created() {


    },
    methods: {

        //查询
        getList() {
            let that = this;
            const getListData = async () => {
                const result = await InformationAnnouncement({})
                  that.listData = result.data.data.data;
            }
            getListData();
        },
    },
    props: {},
}
</script>
<style scoped lang="less" rel="stylesheet/less">


.informationT {
    width:90%;
    height:60px;
    background-color: #F4F8F8;
    margin: 5px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .informationTL{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color:#1CAB9C;

    }
    .informationR{
        flex: 5;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }
}


</style>
