import request from '../../utils/http.js'

const URL = {
    ContractCatalogue: '/TransactionContractFeedback/ContractCatalogue',                //绿电交易合同目录
    ContractPerformance: '/TransactionContractFeedback/ContractPerformance',            //绿电交易合同履约情况
    VolumeProportion: '/TransactionContractFeedback/VolumeProportion',                  //单个体履约量占比
};


/**
 * 绿电交易合同目录
 */
export const ContractCatalogue = data => {
    return request({
        url: URL.ContractCatalogue,
        method: 'POST',
        data
    })
}

/**
 * 绿电交易合同履约情况
 */
export const  ContractPerformance = data => {
    return request({
        url: URL.ContractPerformance,
        method: 'POST',
        data
    })
}

/**
 * 单个体履约量占比
 */
export const VolumeProportion = data => {
    return request({
        url: URL.VolumeProportion,
        method: 'POST',
        data
    })
}

