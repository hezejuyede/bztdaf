import request from '../../utils/http.js'

const URL = {
    PolymerDisplay: '/AggregateDisplay/PolymerDisplay',                //售电聚合体展示
    PowerGeneration: '/AggregateDisplay/PowerGeneration',              //售电聚合体实时发电量
};


/**
 * 绿电交易合同目录
 */
export const PolymerDisplay = data => {
    return request({
        url: URL.PolymerDisplay,
        method: 'POST',
        data
    })
}

/**
 * 绿电交易合同履约情况
 */
export const  PowerGeneration = data => {
    return request({
        url: URL.PowerGeneration,
        method: 'POST',
        data
    })
}
