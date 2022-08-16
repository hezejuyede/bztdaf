<template>
    <div class="greenPower-parent">
        <el-row class="greenPower-parent-el-row">
            <el-col :span="12" class="greenPower-parent-el-col">
                <div class="modal-style-parent" style="height: 40.5%">
                    <div class="modal-style modal-style-1">
                        <div class="title-style">
                            <div>数据上链</div>
                            <img src="../../../../static/img/dataTrustworthinessVerification/heng.png">
                        </div>
                        <img src="../../../../static/img/dataTrustworthinessVerification/yz-index_03.png">
                    </div>
                </div>
                <div class="modal-style-parent" style="height: 59.5%">
                    <div class="modal-style modal-style-2">
                        <div class="title-style-parent">
                            <div class="title-style">
                                <div>可信状态查询</div>
                                <img src="../../../../static/img/dataTrustworthinessVerification/heng.png">
                            </div>
                            <div class="more-style">
                                更多>>
                            </div>
                        </div>
                        <el-container>
                            <el-header>
                                <el-row>
                                    <el-col :span="4">
                                        <el-select v-model="querySelect.diqu" placeholder="地区">
                                            <el-option
                                                v-for="item in options1"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="querySelect.cunzhen" placeholder="村镇">
                                            <el-option
                                                v-for="item in options2"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>

                                    <el-col :span="4">
                                        <el-select v-model="querySelect.type" placeholder="类型">
                                            <el-option
                                                v-for="item in options3"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-date-picker
                                            v-model="startDate"
                                            type="datetime"
                                            placeholder="选择日期时间">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-date-picker
                                            v-model="endDate"
                                            type="datetime"
                                            placeholder="选择日期时间">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button class="search-button" type="primary" icon="el-icon-search">搜索
                                        </el-button>
                                    </el-col>
                                </el-row>
                            </el-header>
                            <el-main>
                                <el-table
                                    :data="tableData"
                                    border
                                    :header-cell-style="{background:'#edf4f4',color:'black',fontSize:'15px',fontWeight:'800'}"
                                    style="width: 100%;border-radius: 0px">
                                    <el-table-column prop="source" label="数据" width="180"></el-table-column>
                                    <el-table-column prop="date" label="时间" width="180"
                                                     :formatter="formatDate"></el-table-column>
                                    <el-table-column prop="state" label="可信存证状态" width="180"></el-table-column>
                                    <el-table-column prop="high" label="区块高度"></el-table-column>
                                </el-table>
                            </el-main>
                        </el-container>
                    </div>
                </div>

            </el-col>
            <el-col :span="12" class="modal-style-parent greenPower-parent-el-col">
                <div class="modal-style modal-style-3">
                    <div style="height: 21%">
                        <div class="title-style">
                            <div>可信状态查询</div>
                            <img src="../../../../static/img/dataTrustworthinessVerification/heng.png">
                        </div>
                        <div>
                            <div>
                                <el-row>
                                    <el-col :span="4">
                                        <div class="modal-style-img-style-parent">
                                            <img
                                                src="../../../../static/img/dataTrustworthinessVerification/yz-index_06.png"
                                                class="modal-style-img-style">
                                            区域维度：
                                        </div>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="querySelect.diqu" placeholder="地区">
                                            <el-option
                                                v-for="item in options1"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="querySelect.cunzhen" placeholder="村镇">
                                            <el-option
                                                v-for="item in options2"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="querySelect.type" placeholder="类型">
                                            <el-option
                                                v-for="item in options3"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-select v-model="querySelect.num" placeholder="终端设备编号">
                                            <el-option
                                                v-for="item in options3"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-row>
                            </div>
                            <div>
                                <el-row>
                                    <el-col :span="4">
                                        <div class="modal-style-img-style-parent">
                                            <img
                                                src="../../../../static/img/dataTrustworthinessVerification/yz-index_06.png"
                                                class="modal-style-img-style">
                                            时间维度：
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-date-picker
                                            v-model="startDate"
                                            type="datetime"
                                            placeholder="选择日期时间">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-date-picker
                                            v-model="endDate"
                                            type="datetime"
                                            placeholder="选择日期时间">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="4"></el-col>
                                    <el-col :span="4">
                                        <el-button class="search-button" type="primary" icon="el-icon-search">搜索
                                        </el-button>
                                    </el-col>
                                </el-row>
                            </div>
                            <div>
                                <el-row>
                                    <el-col :span="4">
                                        <div class="modal-style-img-style-parent">
                                            <img
                                                src="../../../../static/img/dataTrustworthinessVerification/yz-index_06.png"
                                                class="modal-style-img-style">
                                            周期定时：
                                        </div>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="querySelect.diqu" placeholder="7h">
                                            <el-option
                                                v-for="item in optionsTime"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>


                    <div class="border-top-quarantine">
                        <div style="position: relative;float: right;margin-bottom: 10px">
                            <el-button class="normal-button">任务发起</el-button>
                            <el-button class="search-button" type="primary" icon="el-icon-search">进度检查</el-button>
                        </div>
                        <div>
                            <el-table
                                :data="tableData2"
                                border
                                :header-cell-style="{background:'#edf4f4',color:'black',fontSize:'15px',fontWeight:'800'}"
                                style="width: 100%;border-radius: 0px">
                                <el-table-column prop="num" label="任务序列" width="90"></el-table-column>
                                <el-table-column prop="date" label="执行时间" width="150"
                                                 :formatter="formatDate"></el-table-column>
                                <el-table-column prop="diqu" label="地区" width="80"></el-table-column>
                                <el-table-column prop="cunzhen" label="村镇"></el-table-column>
                                <el-table-column prop="guangfu" label="光伏"></el-table-column>
                                <el-table-column prop="number" label="逆变器编号" width="100"></el-table-column>
                                <el-table-column prop="count" label="数据总数" width="90"></el-table-column>
                                <el-table-column label="详情" fixed="right">
                                    <template slot-scope="scope">
                                        <u style="color: #037469" @click="taskProgressMath">查看</u>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>

                    <div class="modal-style-3-3">
                        <div class="title-style">
                            <div>手动验证</div>
                            <img src="../../../../static/img/dataTrustworthinessVerification/heng.png">
                        </div>
                        <el-row style="height: calc(100% - 40px)">
                            <el-col :span="6">
                                <el-tree class="modal-style-3-3-el-col-son"
                                         :data="data"
                                         show-checkbox
                                         node-key="id"
                                         :default-expanded-keys="[2, 3]"
                                         :default-checked-keys="[5]"
                                         :props="defaultProps">
                                </el-tree>
                            </el-col>
                            <el-col :span="12">
                                <div class="modal-style-3-3-el-col-son">
                                    <div style="position: relative;height: 40px">
                                        <div class="modal-style-img-style-parent"
                                             style="text-align: left;padding-left: 37px">
                                            <img
                                                src="../../../../static/img/dataTrustworthinessVerification/yz-index_06.png"
                                                class="modal-style-img-style">
                                            数据hash
                                        </div>
                                        <el-button class="normal-button" type="primary"
                                                   style="position: absolute;right: 0px;top: 0px;"
                                                   @click="fileUplod = true;">文件导入
                                        </el-button>
                                    </div>
                                    <div style="height: calc(100% - 80px);overflow: auto">
                                        <div v-for="(item,index ) in hashlist" :key="index"
                                             style="background: #fff;height: 50px;margin-bottom: 3px">
                                            {{ item }}
                                        </div>

                                    </div>
                                    <div style="text-align: center;padding-top: 10px">
                                        <el-button style="float: none" class="search-button" type="primary"
                                                   icon="el-icon-search">查询
                                        </el-button>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="modal-style-3-3-el-col-img">
                                    <img src="../../../../static/img/dataTrustworthinessVerification/yz-index_15.png"
                                         style="width: 100%">
                                    <div class="modal-style-3-3-el-col-text">
                                        <div style="color: #05a696">验证链数</div>
                                        <div class="modal-style-3-3-el-col-text-num">241561</div>
                                    </div>

                                </div>
                                <div class="modal-style-3-3-el-col-img" @click="abnormalInfo = true;">
                                    <img src="../../../../static/img/dataTrustworthinessVerification/yz-index_15.png"
                                         style="width: 100%">
                                    <div class="modal-style-3-3-el-col-text">
                                        <div style="color: #05a696">异常链数</div>
                                        <div class="modal-style-3-3-el-col-text-num">32</div>
                                    </div>

                                </div>
                            </el-col>


                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-dialog
            title="任务进度"
            :visible.sync="taskProgress"
            width="30%"
            :before-close="handleClose">
            <div>
                <div style="height: 32px">
                    <div style="position: relative;float: right;margin-right: 20px">
                        <el-button class="normal-button" round>全部开始</el-button>
                        <el-button class="normal-button" round>全部暂停</el-button>
                        <el-button class="normal-button" round>全部取消</el-button>
                    </div>
                </div>
                <div style="margin-top: 10px;text-align: center">
                    <el-row v-for="(item,index) in this.reask" :key="index" style="margin-top: 5px">
                        <el-col :span="4">
                            <img src="../../../../static/img/dataTrustworthinessVerification/yz-index_06.png"
                                 style="margin-bottom: 3px;">
                            任务{{ index + 1 }}
                        </el-col>
                        <el-col :span="8" style="text-align: left">
                            <el-progress :percentage=item
                                         :status="item == 100 ? 'success' : index == 3? 'exception' : ''"></el-progress>
                        </el-col>
                        <el-col :span="4">
                            15:30:23
                        </el-col>
                        <el-col :span="4">
                            <img v-if="index == 1"
                                 src="../../../../static/img/dataTrustworthinessVerification/start.png"
                                 style="height: 20px">
                            <img v-else src="../../../../static/img/dataTrustworthinessVerification/stop.png"
                                 style="height: 20px">
                        </el-col>
                        <el-col :span="4">
                            <img src="../../../../static/img/dataTrustworthinessVerification/off.png"
                                 style="height: 18px">
                        </el-col>
                    </el-row>
                </div>

            </div>
        </el-dialog>
        <el-dialog
            title="文件导入"
            :visible.sync="fileUplod"
            width="30%"
            :before-close="handleClose">
            <div style="position: relative;height: 36px">
                <div style="position: absolute;bottom: 0px">文件放入虚线内</div>
                <el-button type="primary" class="search-button" style="position: absolute;right: 3px" round>模板下载
                </el-button>
            </div>

            <el-upload
                style="width: 100%"
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <div style="text-align: center;margin-top: 10px">
                <el-button type="primary" class="search-button"
                           style="padding-left: 25px !important;padding-right: 25px !important;">确认
                </el-button>
            </div>

        </el-dialog>
        <el-dialog
            title="异常详情"
            :visible.sync="abnormalInfo"
            width="40%"
            :before-close="handleClose">
            <div>
                <el-table
                    :data="tableDataAbnormalInfo"
                    border
                    :header-cell-style="{background:'#edf4f4',color:'black',fontSize:'15px',fontWeight:'800'}"
                    style="width: 100%;border-radius: 0px">
                    <el-table-column prop="hash" label="数据hash" width="180"></el-table-column>
                    <el-table-column prop="date" label="时间" width="180" :formatter="formatDate"></el-table-column>
                    <el-table-column prop="state" label="可信存证状态" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
            </div>

        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            querySelect: {},
            startDate: null,
            endDate: null,
            options1: [],
            options2: [],
            options3: [],
            optionsTime: [],
            tableData: [],
            tableData2: [],
            data: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
            hashlist: [],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            taskProgress: false,
            fileUplod: false,
            reask: [50, 100, 100, 50, 0],
            abnormalInfo: false,
            tableDataAbnormalInfo: []

        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            /**
             *
             * @type {[{label: string, value: string},{label: string, value: string},{label: string, value: string}]}
             */
            var options = [
                {
                    label: "魏家庄",
                    value: "1"
                },
                {
                    label: "德云社",
                    value: "2"
                },
                {
                    label: "马戏团",
                    value: "3"
                },
            ];
            this.options1 = options;
            this.options2 = options;
            this.options3 = options;
            /**
             *
             * @type {*[]}
             */
            var tableData = [];
            this.optionsTime = [];
            this.hashlist = [];
            for (var i = 0; i < 9; i++) {
                tableData.push({
                    source: "AHJDHAJHJDHDJHAJDJ",
                    date: new Date(),
                    state: "正常",
                    high: 45154 + 44 * i
                });
                this.optionsTime.push({
                    label: i + 1 + 'h',
                    value: i + 1
                })
                this.hashlist.push("asidhyuiashdjhajksdhuah")
            }
            this.tableData = tableData;
            /**
             *
             */
            var tableData2 = [];
            this.tableDataAbnormalInfo = [];
            for (var i = 0; i < 2; i++) {
                tableData2.push({
                    num: i + 1,
                    date: new Date(),
                    diqu: "郭集",
                    cunzhen: '村庄' + i + 1,
                    guangfu: '屋顶',
                    number: Math.round(Math.random(1000) * 236665654),
                    count: 1000 * 54 * i
                });
                this.tableDataAbnormalInfo.push({
                    hash: "S5D47F5S4D5F45SD4FSD",
                    date: new Date(),
                    state: '异常',
                    address: "沾化县***村***号"
                })
            }
            this.tableData2 = tableData2;
        },
        taskProgressMath() {
            this.taskProgress = true;
        },
        handleClose() {
            this.taskProgress = false;
            this.fileUplod = false;
            this.abnormalInfo = false;
        },
        formatDate(row) {
            return this.$formatDate(row.date);
        }
    }
}
</script>


<style scoped lang="less" rel="stylesheet/less">
.greenPower-parent {
    height: 100%;
    width: 100%;
    padding: 10px !important;
    background-color: #edf4f4;
}

.modal-style-parent {
    padding: 3px;
}

.modal-style {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 5px;
}

.modal-style-1 {

}

.modal-style-2 {
    height: 100%;
}

.modal-style-3 {
    padding-right: 20px;
    height: 100%;
}

.title-style {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    margin-left: 5px;
    margin-top: 1px;
    height: 40px;
}

.title-style img {
    position: absolute;
    width: 60px;
}

.title-style + img {
    width: 100%;
}

.title-style-parent {
    position: relative;
}

.more-style {
    display: inline;
    position: absolute;
    right: 0px;
    top: 0px;
}

.modal-style .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}

.modal-style .el-col-4, .el-col-6 {
    padding: 2px;
}

.search-button {
    height: 32px;
    line-height: 32px;
    padding: 0px 10px !important;
}

.normal-button {
    height: 32px;
    line-height: 32px;
    padding: 0px 10px !important;
}

.modal-style header {
    height: auto !important;
}

.modal-style .el-card__body, .el-main {
    padding-top: 10px;
    padding-bottom: 10px;
}

.modal-style-3 .el-select--small {
    width: 100%;
}

.modal-style-3 .search-button {
    float: right;
}

.modal-style-img-style {
    position: absolute;
    top: 8px;
    left: 20px;
}

.modal-style-img-style-parent {
    position: relative;
    text-align: right;
    font-size: 15px;
}

.border-top-quarantine {
    box-sizing: border-box;
    border: 1px solid;
    border-top-color: #d9e1e7;
    border-right: none;
    border-left: none;
    border-bottom: none;
    padding-top: 10px;
    margin-bottom: 20px;
    height: 23%;
}

.modal-style .el-tree {
    background: none;
}

.greenPower-parent-el-row {
    height: 100%;
}

.greenPower-parent-el-col {
    height: 100%;
    overflow: auto;
}

.modal-style-3-3 {
    height: calc(56% - 30px)
}

.modal-style-3-3 .el-col {

    padding: 5px;
    height: 100%;
}

.modal-style-3-3-el-col-son, .modal-style-3-3 .el-tree {
    height: 100%;
    width: 100%;
    background-color: #f4f8f8;
    padding: 10px;
}

.modal-style-3-3-el-col-img {
    position: relative;
    margin-top: 56px;
}

.modal-style-3-3-el-col-text {
    position: absolute;
    top: 16px;
    left: 16px;
}

.modal-style-3-3-el-col-text-num {
    font-size: 19px;
    font-weight: 800;
}

.modal-style-3-3-el-col-text + div {
    color: #05a696;
}

.contentScrollNone::-webkit-scrollbar {
    display: none; /*隐藏滚动条*/
}


</style>


<style scoped>
>>> .el-upload, >>> .el-upload-dragger {
    width: 100%;
}

</style>
