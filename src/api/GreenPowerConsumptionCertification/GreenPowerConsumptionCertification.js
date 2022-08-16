import request from '../../utils/http.js'

const URL = {
    greenCardHistory: '/GreenPowerConsumptionCertification/greenCardHistory',      //绿证历史记录
    getTreeList: '/GreenPowerConsumptionCertification/getTreeList',                //获取树列表
    getLineList: '/GreenPowerConsumptionCertification/getLineList',                //获取曲线
    getTableData: '/GreenPowerConsumptionCertification/getTableData',              //获取列表
};


/**
 * 绿证历史记录
 */
export const greenCardHistory = data => {
    return request({
        url: URL.greenCardHistory,
        method: 'POST',
        data
    })
}

/**
 * 获取树列表
 */
export const getTreeList = data => {
    return request({
        url: URL.getTreeList,
        method: 'POST',
        data
    })
}

/**
 * 获取曲线
 */
export const getLineList = data => {
    return request({
        url: URL.getLineList,
        method: 'POST',
        data
    })
}

/**
 *获取列表
 */
export const getTableData = data => {
    return request({
        url: URL.getTableData,
        method: 'POST',
        data
    })
}

