import request from '../../utils/http.js'

const URL = {
    upperChains: '/DataTrustworthinessSupervision/upperChains',                                              //实际上链数量
    abnormalChains: '/DataTrustworthinessSupervision/abnormalChains',                                         //异常链数
    stateStatistics: '/DataTrustworthinessSupervision/stateStatistics',                                      //可信状态统计
    stateStatisticsList: '/DataTrustworthinessSupervision/stateStatisticsList',                               //可信状态统计列表
    areaDetails: '/DataTrustworthinessSupervision/areaDetails',                                               //区域详情
    dataLinkDetails: '/DataTrustworthinessSupervision/dataLinkDetails',                                       //数据链详情

    manufactorList: '/DataTrustworthinessSupervision/manufactorList',                                           //厂家列表
    dataHash: '/DataTrustworthinessSupervision/dataHash',                                                      //数据哈希
    exceptionDetails: '/DataTrustworthinessSupervision/exceptionDetails',                                       //异常详情
};


/**
 * 实际上链数量
 */
export const upperChains = data => {
    return request({
        url: URL.upperChains,
        method: 'POST',
        data
    })
}

/**
 * 异常链数
 */
export const abnormalChains = data => {
    return request({
        url: URL.abnormalChains,
        method: 'POST',
        data
    })
}

/**
 * 可信状态统计
 */
export const stateStatistics = data => {
    return request({
        url: URL.stateStatistics,
        method: 'POST',
        data
    })
}

/**
 *可信状态统计列表
 */
export const stateStatisticsList = data => {
    return request({
        url: URL.stateStatisticsList,
        method: 'POST',
        data
    })
}


/**
 * 区域详情
 */
export const areaDetails = data => {
    return request({
        url: URL.areaDetails,
        method: 'POST',
        data
    })
}


/**
 * 数据链详情
 */
export const dataLinkDetails = data => {
    return request({
        url: URL.dataLinkDetails,
        method: 'POST',
        data
    })
}


/**
 *异常详情
 */
export const manufactorList = data => {
    return request({
        url: URL.manufactorList,
        method: 'POST',
        data
    })
}


/**
 * 数据哈希
 */
export const dataHash = data => {
    return request({
        url: URL.dataHash,
        method: 'POST',
        data
    })
}


/**
 * 异常详情
 */
export const exceptionDetails = data => {
    return request({
        url: URL.exceptionDetails,
        method: 'POST',
        data
    })
}

