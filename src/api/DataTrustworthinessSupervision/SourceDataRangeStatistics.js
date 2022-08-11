import request from '../../utils/http.js'

const URL = {
    RegionalData: '/SourceDataRangeStatistics/RegionalData',                                              //滨州区域数据
    EquipmentList: '/SourceDataRangeStatistics/EquipmentList',                                            //滨州设备列表
    EquipmentLine: '/SourceDataRangeStatistics/EquipmentLine',                                           //滨州设备曲线图
    RegionSelectionData: '/SourceDataRangeStatistics/RegionSelectionData',                               //区域选择数据
    AbnormalIndicators: '/SourceDataRangeStatistics/AbnormalIndicators',                                 //异常指标
    TerminalEquipmentManufacturer: '/SourceDataRangeStatistics/TerminalEquipmentManufacturer',          //终端设备厂商                                        //终端设备厂商
    TerminalEquipmentType: '/SourceDataRangeStatistics/TerminalEquipmentType',                          //终端设备类型
    DetailsList: '/SourceDataRangeStatistics/DetailsList',                                              //详情列表
};


/**
 * 滨州区域数据
 */
export const RegionalData = data => {
    return request({
        url: URL.RegionalData,
        method: 'POST',
        data
    })
}

/**
 * 滨州设备列表
 */
export const EquipmentList = data => {
    return request({
        url: URL.EquipmentList,
        method: 'POST',
        data
    })
}

/**
 * 滨州设备曲线图
 */
export const EquipmentLine = data => {
    return request({
        url: URL.EquipmentLine,
        method: 'POST',
        data
    })
}

/**
 *区域选择数据
 */
export const RegionSelectionData = data => {
    return request({
        url: URL.RegionSelectionData,
        method: 'POST',
        data
    })
}


/**
 * 异常指标
 */
export const AbnormalIndicators = data => {
    return request({
        url: URL.AbnormalIndicators,
        method: 'POST',
        data
    })
}


/**
 * 终端设备厂商
 */
export const TerminalEquipmentManufacturer = data => {
    return request({
        url: URL.TerminalEquipmentManufacturer,
        method: 'POST',
        data
    })
}


/**
 * 终端设备类型
 */
export const TerminalEquipmentType = data => {
    return request({
        url: URL.TerminalEquipmentType,
        method: 'POST',
        data
    })
}


/**
 * 详情列表
 */
export const DetailsList = data => {
    return request({
        url: URL.DetailsList,
        method: 'POST',
        data
    })
}
