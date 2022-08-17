<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#20313B"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../assets/js/bus';

    export default {
        data() {
            return {
                collapse: false,
                items: [
                  /*  {
                        icon: 'iconfont icon-shouye',
                        index: '/',
                        title: '平台首页'
                    },*/
                   /* {
                        icon: 'iconfont el-icon-s-marketing',
                        index: '2',
                        title: '数据管理',
                        subs: [
                            {
                                index: 'carbonEmissionAnalysis',
                                title: '碳排放分析'
                            },
                            {
                                index: 'regionalCarbonReport',
                                title: '区域碳报表'
                            },
                            {
                                index: 'industryCarbonReport',
                                title: '行业碳报表'
                            },
                            {
                                index: 'enterpriseOverDischargeWarningReport',
                                title: '企业超排预警'
                            },
                        ]
                    },*/
                    {
                        icon: 'iconfont el-icon-s-marketing',
                        index: '1',
                        title: '数据可信监控',
                        subs: [
                            {
                                index: 'SourceDataRangeStatistics',
                                title: '源数据范围统计'
                            },
                          {
                            index: 'DataTrustworthinessSupervision',
                            title: '数据可信监管'
                          },
                          {
                            index: 'dataTrustworthinessVerification',
                            title: '数据可信验证'
                          }
                        ]
                    },


                    {
                        icon: 'iconfont el-icon-document-remove',
                        index: '2',
                        title: '绿电交易聚合代理',
                        subs: [
                            {
                                index: 'MarketInformationSynchronization',
                                title: '绿电市场信息同步'
                            },
                            {
                                index: 'PowerSalesAggregationAgent',
                                title: '聚合代理-售电'
                            }
                        ]
                    },
                    {
                        icon: 'iconfont el-icon-s-data',
                        index: '3',
                        title: '绿电过程溯源',

                    },

                    {
                        icon: 'iconfont el-icon-document',
                        index: '4',
                        title: '绿电消费认证确权',
                        subs: [
                            {
                                index: 'GreenPowerConsumptionCertification',
                                title: '绿电消费认证'
                            }
                        ]
                    },
/*

                  {
                    icon: 'iconfont el-icon-s-platform',
                    index: '/LargeDataScreen',
                    title: '数据大屏'
                  },*/
                ]
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            });
        },
        methods: {}
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    @import "../assets/less/base";

    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        line-height: 70px;
        bottom: 0;
        overflow-y: scroll;

        ul {
            height: 100%;
        }

        i {

            font-size: 150%;
            margin-right: 10px;
        }

        span {
            font-size: @font-size-medium-x;
        }

    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 200px;
    }

</style>
