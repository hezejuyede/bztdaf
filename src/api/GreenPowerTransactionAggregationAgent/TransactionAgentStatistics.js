import request from '../../utils/http.js'

const URL = {
    PolymerStatistics: '/TransactionAgentStatistics/PolymerStatistics',                //聚合体绿电交易合同统计
    UnitStatistics: '/TransactionAgentStatistics/UnitStatistics',                      //单元体绿电交易合同统计
    PowerGeneration: '/TransactionAgentStatistics/PowerGeneration',                    //发电量
    PerformanceElectricity: '/TransactionAgentStatistics/PerformanceElectricity',      //履约电量
    SettlementAmount: '/TransactionAgentStatistics/SettlementAmount',                  //结算金额
};


/**
 * 聚合体绿电交易合同统计
 */
export const PolymerStatistics = data => {
    return request({
        url: URL.PolymerStatistics,
        method: 'POST',
        data
    })
}

/**
 * 单元体绿电交易合同统计
 */
export const UnitStatistics = data => {
    return request({
        url: URL.UnitStatistics,
        method: 'POST',
        data
    })
}

/**
 * 发电量
 */
export const PowerGeneration = data => {
    return request({
        url: URL.PowerGeneration,
        method: 'POST',
        data
    })
}

/**
 *履约电量
 */
export const PerformanceElectricity = data => {
    return request({
        url: URL.PerformanceElectricity,
        method: 'POST',
        data
    })
}

/**
 *结算金额
 */
export const SettlementAmount = data => {
    return request({
        url: URL.SettlementAmount,
        method: 'POST',
        data
    })
}
