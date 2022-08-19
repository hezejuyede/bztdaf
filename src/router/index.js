import Vue from 'vue';
import Router from 'vue-router';
import {getItem} from '../utils/storage'

//主页相关路由
import Index from '../components/index/index'


//数据管理
import carbonEmissionAnalysis from '../components/DataManagement/carbonEmissionAnalysis'
import regionalCarbonReport from '../components/DataManagement/regionalCarbonReport'
import industryCarbonReport from '../components/DataManagement/industryCarbonReport'
import enterpriseOverDischargeWarningReport from '../components/DataManagement/enterpriseOverDischargeWarningReport'


//数据大屏
import LargeDataScreen from '../components/LargeDataScreen/index'


//源数据范围统计
import SourceDataRangeStatistics from '../components/DataTrustworthinessSupervision/SourceDataRangeStatistics/index'
import DataTrustworthinessSupervision from '../components/DataTrustworthinessSupervision/DataTrustworthinessSupervision/index'
import dataTrustworthinessVerification from "../components/DataTrustworthinessSupervision/dataTrustworthinessVerification/Index"

//绿电消费认证
import GreenPowerConsumptionCertification from '../components/GreenPowerConsumptionCertification/index'

//绿电交易聚合代理示范
import MarketInformationSynchronization from '../components/GreenPowerTransactionAggregationAgent/MarketInformationSynchronization/index'
import PowerSalesAggregationAgent from '../components/GreenPowerTransactionAggregationAgent/PowerSalesAggregationAgent/index'
import AggregationAgentPowerPurchase from '../components/GreenPowerTransactionAggregationAgent/AggregationAgentPowerPurchase/index'
import TransactionContractFeedback from '../components/GreenPowerTransactionAggregationAgent/TransactionContractFeedback/index'
import AggregateDisplay from '../components/GreenPowerTransactionAggregationAgent/AggregateDisplay/index'
import TransactionAgentStatistics from '../components/GreenPowerTransactionAggregationAgent/TransactionAgentStatistics/index'



//绿电过程溯源
import TransactionContractAnalysis from '../components/TransactionContractAnalysis/index'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/Index'
        },
        {
            path: '/',
            component: resolve => require(['../common/Home.vue'], resolve),
            meta: {title: '自述文件'},
            children: [
                {
                    path: '/Index',
                    component: SourceDataRangeStatistics,
                    meta: {title: '源数据范围统计'}
                },

                {
                    path: '/dataTrustworthinessVerification',
                    component: dataTrustworthinessVerification,
                    meta: {title: '数据可信验证'}
                },

                {
                    path: '/SourceDataRangeStatistics',
                    component: SourceDataRangeStatistics,
                    meta: {title: '源数据范围统计'}
                },
                {
                    path: '/DataTrustworthinessSupervision',
                    component: DataTrustworthinessSupervision,
                    meta: {title: '数据可信监管'}
                },

                {
                    path: '/MarketInformationSynchronization',
                    component: MarketInformationSynchronization,
                    meta: {title: '绿电市场信息同步'}
                },

                {
                    path: '/GreenPowerConsumptionCertification',
                    component: GreenPowerConsumptionCertification,
                    meta: {title: '绿电消费认证'}
                },


                {
                    path: '/PowerSalesAggregationAgent',
                    component: PowerSalesAggregationAgent,
                    meta: {title: '聚合代理-售电'}
                },

                {
                    path: '/AggregationAgentPowerPurchase',
                    component: AggregationAgentPowerPurchase,
                    meta: {title: '聚合代理-购电'}
                },

                {
                    path: '/TransactionContractFeedback',
                    component: TransactionContractFeedback,
                    meta: {title: '绿电交易合同反馈'}
                },




                {
                    path: '/TransactionContractAnalysis',
                    component: TransactionContractAnalysis,
                    meta: {title: '绿电交易合同分析'}
                },



                {
                    path: '/AggregateDisplay',
                    component: AggregateDisplay,
                    meta: {title: '售电聚合体展示'}
                },


                {
                    path: '/TransactionAgentStatistics',
                    component: TransactionAgentStatistics,
                    meta: {title: '绿电交易代理统计'}
                },
















                {
                    path: '/carbonEmissionAnalysis',
                    component: carbonEmissionAnalysis,
                    meta: {title: '碳排放分析'}
                },
                {
                    path: '/regionalCarbonReport',
                    component: regionalCarbonReport,
                    meta: {title: '区域碳报表'}
                },
                {
                    path: '/industryCarbonReport',
                    component: industryCarbonReport,
                    meta: {title: '行业碳报表'}
                },
                {
                    path: '/enterpriseOverDischargeWarningReport',
                    component: enterpriseOverDischargeWarningReport,
                    meta: {title: '企业超排预警'}
                },

                {
                    path: '/404',
                    component: resolve => require(['../components/errPage/404.vue'], resolve),
                    meta: {title: '404'}
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/errPage/403.vue'], resolve),
                    meta: {title: '403'}
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/indexLogin/Login.vue'], resolve)
        },
        {
            path: '/LargeDataScreen',
            component: LargeDataScreen
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],


})


