import request from '../../utils/http.js'

const URL = {
    SalesSideInquiry: '/PowerSalesAggregationAgent/SalesSideInquiry',     //售电侧查询
    PolymerList: '/PowerSalesAggregationAgent/PolymerList',               //聚合体实时发电量
    PolymerDetailsList: '/PowerSalesAggregationAgent/PolymerDetailsList', //详情列表
    AddPolymer: '/PowerSalesAggregationAgent/AddPolymer',                 //加入聚合体
};


/**
 * 售电侧查询
 */
export const SalesSideInquiry = data => {
    return request({
        url: URL.SalesSideInquiry,
        method: 'POST',
        data
    })
}

/**
 * 聚合体实时发电量
 */
export const PolymerList = data => {
    return request({
        url: URL.PolymerList,
        method: 'POST',
        data
    })
}

/**
 * 聚合体实时发电量
 */
export const DetailsList = data => {
    return request({
        url: URL.PowerGeneration,
        method: 'POST',
        data
    })
}


/**
 * 聚合体实时发电量
 */
export const AddPolymer = data => {
    return request({
        url: URL.PowerGeneration,
        method: 'POST',
        data
    })
}
