import request from '../../utils/http.js'

const URL = {
    TransactionAgentStatistics: '/TransactionAgentStatistics/list',      //发电合同
};


/**
 * 发电合同
 */
export const TransactionAgentStatistics = data => {
    return request({
        url: URL.TransactionAgentStatistics,
        method: 'POST',
        data
    })
}
