import request from '../../utils/http.js'

const URL = {
    ElectricitySalesInformation: '/MarketInformationSynchronization/ElectricitySalesInformation',      //卖电信息
    InformationAnnouncement: '/MarketInformationSynchronization/InformationAnnouncement',                //信息公告
    PowerPurchaseInformation: '/MarketInformationSynchronization/PowerPurchaseInformation',                //购电信息
    PowerSupplyCapacity: '/MarketInformationSynchronization/PowerSupplyCapacity',                          //供电能力
    PowerSupplyDemand: '/MarketInformationSynchronization/PowerSupplyDemand',                             //购电需求
};


/**
 * 卖电信息
 */
export const ElectricitySalesInformation = data => {
    return request({
        url: URL.ElectricitySalesInformation,
        method: 'POST',
        data
    })
}

/**
 * 信息公告
 */
export const InformationAnnouncement = data => {
    return request({
        url: URL.InformationAnnouncement,
        method: 'POST',
        data
    })
}

/**
 * 购电信息
 */
export const PowerPurchaseInformation = data => {
    return request({
        url: URL.PowerPurchaseInformation,
        method: 'POST',
        data
    })
}

/**
 *供电能力
 */
export const PowerSupplyCapacity = data => {
    return request({
        url: URL.PowerSupplyCapacity,
        method: 'POST',
        data
    })
}

/**
 *购电需求
 */
export const PowerSupplyDemand = data => {
    return request({
        url: URL.PowerSupplyDemand,
        method: 'POST',
        data
    })
}
