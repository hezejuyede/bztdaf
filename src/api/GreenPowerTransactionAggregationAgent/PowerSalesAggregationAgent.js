import request from '../../utils/http.js'

const URL = {
    SalesSideInquiry: '/PowerSalesAggregationAgent/SalesSideInquiry',     //售电侧查询
    PolymerList: '/PowerSalesAggregationAgent/PolymerList',               //聚合体实时发电量
    PolymerDetailsList: '/PowerSalesAggregationAgent/PolymerDetailsList', //详情列表
    AddPolymerS: '/PowerSalesAggregationAgent/AddPolymer',                //加入聚合体
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
export const PolymerDetailsList = data => {
    return request({
        url: URL.PolymerDetailsList,
        method: 'POST',
        data
    })
}


/**
 * 聚合体实时发电量
 */
export const AddPolymerS = data => {
    return request({
        url: URL.AddPolymerS,
        method: 'POST',
        data
    })
}
