import request from '../../utils/http.js'

const URL = {
    TrustedStatusQuery: '/DataTrustworthinessVerification/TrustedStatusQuery',                     //可信状态查询
    TaskQuery: '/SourceDataRangeStatistics/TaskQuery',                                            //任务查询
    RegionalTree: '/DataTrustworthinessVerification/RegionalTree',                                //地区树
    NumberOfAbnormalChains: '/DataTrustworthinessVerification/NumberOfAbnormalChains',           //异常链数
    TaskProgress: '/DataTrustworthinessVerification/TaskProgress',                                //任务进度

};


/**
 *可信状态查询
 */
export const TrustedStatusQuery = data => {
    return request({
        url: URL.TrustedStatusQuery,
        method: 'POST',
        data
    })
}

/**
 * 任务查询
 */
export const TaskQuery = data => {
    return request({
        url: URL.TaskQuery,
        method: 'POST',
        data
    })
}

/**
 * 地区树
 */
export const RegionalTree = data => {
    return request({
        url: URL.RegionalTree,
        method: 'POST',
        data
    })
}

/**
 *异常链数
 */
export const NumberOfAbnormalChains = data => {
    return request({
        url: URL.NumberOfAbnormalChains,
        method: 'POST',
        data
    })
}


/**
 * 任务进度
 */
export const TaskProgress = data => {
    return request({
        url: URL.TaskProgress,
        method: 'POST',
        data
    })
}

