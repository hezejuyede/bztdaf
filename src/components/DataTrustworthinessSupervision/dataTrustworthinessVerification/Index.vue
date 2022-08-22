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
                                    <el-col :span="8">
                                        <el-cascader v-model="diqu" :options="diquOptions" clearable
                                                     placeholder="地区"></el-cascader>
                                    </el-col>

                                    <el-col :span="4">
                                        <el-select v-model="number" placeholder="终端编号">
                                            <el-option
                                                v-for="item in numberOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-date-picker  v-model="examineTime1" type="daterange"
                                                        start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-button class="search-button" type="primary" icon="el-icon-search" style="background-color: #05A696" @click="getTrustedStatusQuery">搜索
                                        </el-button>
                                    </el-col>
                                </el-row>
                            </el-header>
                            <el-main id="tableData1">
                                <el-table
                                    :data="tableData1"
                                    border
                                    :header-cell-style="{background:'#edf4f4',color:'black',fontSize:'15px',fontWeight:'800'}"
                                    style="width: 100%;border-radius: 0">
                                    <el-table-column prop="source" label="数据"  align="center">
                                        <template slot-scope="scope">
                                            <el-popover placement="top-start" title="数据" width="350" trigger="hover"
                                                        :content="scope.row.source">
                                                <div slot="reference"
                                                     style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                                    {{scope.row.source}}
                                                </div>
                                            </el-popover>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="date" label="时间"  align="center"></el-table-column>
                                    <el-table-column prop="state" label="可信存证状态"  align="center">
                                        <template slot-scope="scope">
                                            <div v-if="scope.row.state==='1'">
                                               正常
                                            </div>
                                            <div v-if="scope.row.state==='2'" >
                                               异常
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="high" label="区块高度"  align="center"></el-table-column>
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
                                        <el-select v-model="diqu2" placeholder="地区">
                                            <el-option
                                                v-for="item in diquOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="jiedao" placeholder="街道">
                                            <el-option
                                                v-for="item in jiedaoOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="shequ" placeholder="社区">
                                            <el-option
                                                v-for="item in shequOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="typeS" placeholder="类型">
                                            <el-option
                                                v-for="item in typeSOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-select v-model="number2" placeholder="设备编号">
                                            <el-option
                                                v-for="item in numberOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
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
                                        <el-date-picker style="width: 250px" v-model="examineTime2" type="daterange"
                                                        start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                                        </el-date-picker>
                                    </el-col>
                                    <el-col :span="4"></el-col>
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
                                        <el-select v-model="dingshi" placeholder="7h">
                                            <el-option
                                                v-for="item in dingshiOptionsTime"
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
                            <el-button class="normal-button"  @click="taskProgressMath">任务发起</el-button>
                            <el-button class="search-button" type="primary" icon="el-icon-search" style="background-color: #05A696" @click="getTaskQuery">进度检查</el-button>
                        </div>
                        <div  id="timing">
                            <el-table
                                :data="tableData2"
                                border
                                :height="100"
                                :header-cell-style="{background:'#edf4f4',color:'black',fontSize:'12px',fontWeight:'800'}"
                                style="width: 100%;border-radius: 0">
                                <el-table-column prop="num" label="任务序列" width="70"  align="center"></el-table-column>
                                <el-table-column prop="date" label="执行时间" width="120"  align="center"></el-table-column>
                                <el-table-column prop="diqu" label="地区" width="70"  align="center"></el-table-column>
                                <el-table-column prop="cunzhen" label="村镇" width="70"  align="center"></el-table-column>
                                <el-table-column prop="guangfu" label="光伏" width="95"  align="center">
                                    <template slot-scope="scope">
                                        <el-popover placement="top-start" title="数据" width="350" trigger="hover"
                                                    :content="scope.row.guangfu">
                                            <div slot="reference"
                                                 style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                                {{scope.row.guangfu}}
                                            </div>
                                        </el-popover>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="number" label="逆变器编号" width="90"  align="center">
                                    <template slot-scope="scope">
                                        <el-popover placement="top-start" title="数据" width="350" trigger="hover"
                                                    :content="scope.row.number">
                                            <div slot="reference"
                                                 style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                                {{scope.row.number}}
                                            </div>
                                        </el-popover>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="count" label="可信状态异常链数"  align="center">
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
                                <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
                                                   style="position: absolute;right: 0px;top: 0px;background-color: #05A696"
                                                   @click="fileUplod = true;">文件导入
                                        </el-button>
                                    </div>
                                    <div style="height: calc(100% - 80px);overflow: auto">
                                        <div v-for="(item,index ) in hashlist" :key="index"
                                             style="background: #fff;word-wrap:break-word;padding: 5px">
                                            {{ item }}
                                        </div>

                                    </div>
                                    <div style="text-align: center;padding-top: 10px">
                                        <el-button style="float: none;background-color: #05A696" class="search-button" type="primary"
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
                                        <div class="modal-style-3-3-el-col-text-num">{{chains}}</div>
                                    </div>

                                </div>
                                <div class="modal-style-3-3-el-col-img" @click="showAbnormalInfo">
                                    <img src="../../../../static/img/dataTrustworthinessVerification/yz-index_15.png"
                                         style="width: 100%">
                                    <div class="modal-style-3-3-el-col-text">
                                        <div style="color: #05a696">异常链数</div>
                                        <div class="modal-style-3-3-el-col-text-num">{{abnormal}}</div>
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
            :close-on-press-escape="false"
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
                <el-button type="primary" class="search-button" style="position: absolute;right: 3px;background-color: #05A696" round>模板下载
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
                           style="padding-left: 25px !important;padding-right: 25px !important;background-color: #05A696">确认
                </el-button>
            </div>

        </el-dialog>
        <el-dialog
            title="异常详情"
            :visible.sync="abnormalInfo"
            width="60%"
            :close-on-press-escape="false"
            :before-close="handleClose">
            <div style="height: 400px">
                <el-table
                    :data="tableDataAbnormalInfo"
                    border
                    :height="400"
                    :header-cell-style="{background:'#edf4f4',color:'black',fontSize:'15px',fontWeight:'800'}"
                    style="width: 100%;border-radius: 0">
                    <el-table-column label="数据hash" align="center" >
                        <template slot-scope="scope">
                            <el-popover placement="top-start" title="地址" width="350" trigger="hover"
                                        :content="scope.row.hash">
                                <div slot="reference"
                                     style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                    {{scope.row.hash}}
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="时间" prop="time" align="center"></el-table-column>
                    <el-table-column label="可信存证状态"align="center">
                        <template slot-scope="scope">
                            <div v-if="scope.row.status==='1'" style="display: flex;align-items: center;justify-content: center">
                                <div style="width: 10px;height: 10px;background-color:#409EFF;border-radius: 50%"></div>
                                <div style="color: #409EFF;cursor: pointer;margin-left: 5px" >正常</div>
                            </div>
                            <div v-if="scope.row.status==='2'" style="display: flex;align-items: center;justify-content: center">
                                <div style="width: 10px;height: 10px;background-color:#F56C6C;border-radius: 50%"></div>
                                <div style="color: #F56C6C;cursor: pointer;margin-left: 5px" >异常</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="地址"  align="center">
                        <template slot-scope="scope">
                            <el-popover placement="top-start" title="地址" width="350" trigger="hover"
                                        :content="scope.row.address">
                                <div slot="reference"
                                     style="width: 100%;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                                    {{scope.row.address}}
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

        </el-dialog>


        <shadinLayer></shadinLayer>
    </div>
</template>

<script>
import shadinLayer from '../../../common/shadinLayer'
import { TrustedStatusQuery,TaskQuery,RegionalTree,NumberOfAbnormalChains,TaskProgress,ManualVerification} from "../../../api/DataTrustworthinessSupervision/dataTrustworthinessVerification";
export default {
    name: "Index",
    data() {
        return {
            examineTime1:[],
            examineTime2:[],
            querySelect: {},
            startDate: null,
            endDate: null,

            diqu: "",
            diquOptions: [
                {
                    value: 'zhinan',
                    label: '滨城区',
                    children: [{
                        value: 'shejiyuanze',
                        label: '市东街道',
                        children: [{
                            value: 'yizhi',
                            label: '郭集'
                        }, {
                            value: 'fankui',
                            label: '西宋社区'
                        }, {
                            value: 'xiaolv',
                            label: '北杨社区'
                        }, {
                            value: 'kekong',
                            label: '赵家社区'
                        }]
                    }]
                }
            ],
            number: "",
            numberOptions: [
                {"name": "BZSDGJWD-01", "id": "01"},
                {"name": "BZSDGJWD-02", "id": "02"},
                {"name": "BZSDGJWD-03", "id": "03"}
            ],


            diqu2:"",
            jiedao:"",
            jiedaoOptions:[
                {
                    "id": "01",
                    "name": "市东街道"
                }
            ],
            shequ: "",
            shequOptions: [
                {
                    "id": '01',
                    "name": '郭集'
                }, {
                    "id": '02',
                    "name": '西宋社区'
                }, {
                    "id": '03',
                    "name": '北杨社区'
                }, {
                    "id": '04',
                    "name": '赵家社区'
                }
            ],
            typeS:"",
            typeSOptions:[
                {"name": "10kV", "id": "01"},
                {"name": "0.4kV", "id": "02"},
            ],
            number2:"",
            dingshi:"",
            dingshiOptionsTime:[
                {
                    value: 'yizhi',
                    label: '1小时'
                }, {
                    value: 'fankui',
                    label: '2小时'
                }, {
                    value: 'xiaolv',
                    label: '3小时'
                }, {
                    value: 'kekong',
                    label: '4小时'
                }
            ],



            tableData1: [],
            tableData2: [],

            treeData: [],
            hashlist: [],
            chains:"",
            abnormal:"",


            defaultProps: {
                children: 'children',
                label: 'label'
            },
            taskProgress: false,
            fileUplod: false,
            reask: [],
            abnormalInfo: false,
            tableDataAbnormalInfo: []

        }
    },
    mounted() {
        this.init();

    },
    created() {

    },
    components: {shadinLayer},

    methods: {

        //初始化
        init() {
            this.getTrustedStatusQuery();
            this.getTaskQuery();
            this.getRegionalTree();
            this.manualVerification('111')
        },

        //可信状态查询
        getTrustedStatusQuery() {
            let that = this;
            const getListData = async () => {
                const result = await TrustedStatusQuery({
                    "number": this.number,
                    "region": this.diqu,
                    "startTime": this.examineTime1[0],
                    "endTime": this.examineTime1[1]
                })
                that.tableData1 = result.data.data.data;
            }
            getListData();
        },

        //任务查询
        getTaskQuery() {
            let that = this;
            const getListData = async () => {
                const result = await TaskQuery({
                    "number": this.number,
                    "jiedao": this.jiedao,
                    "shequ": this.shequ,
                    "typeS": this.typeS,
                    "region": this.region,
                    "dingshi": this.dingshi,
                    "startTime": this.examineTime2[0],
                    "endTime": this.examineTime2[1]
                })
                that.tableData2 = result.data.data.data;
            }
            getListData();

        },

        //地区树
        getRegionalTree() {
            let that = this;
            const getListData = async () => {
                const result = await RegionalTree({})
                that.treeData = result.data.data.data;
            }
            getListData();
        },


        //异常链数
        getNumberOfAbnormalChains() {
            let that = this;
            const getListData = async () => {
                const result = await NumberOfAbnormalChains({})
                that.tableDataAbnormalInfo = result.data.data.data;
            }
            getListData();
        },

        //任务进度
        getTaskProgress() {
            let that = this;
            const getListData = async () => {
                const result = await TaskProgress({})
                that.reask = result.data.data.data;
            }
            getListData();
        },

        //打开异常链数
        showAbnormalInfo(){
            this.getNumberOfAbnormalChains();
            this.abnormalInfo=true;
        },

        //打开任务弹框
        taskProgressMath() {
            this.getTaskProgress();
            this.taskProgress = true;
        },

        handleClose() {
            this.taskProgress = false;
            this.fileUplod = false;
            this.abnormalInfo = false;
        },


        //点击树
        handleNodeClick(data, node, item) {
            if (data.children === undefined) {
                this.manualVerification(data.id);
            }
        },

        //手动验证
        manualVerification(id) {
            let that = this;
            const getListData = async () => {
                const result = await ManualVerification({
                    "id": id
                });
                that.hashlist = result.data.data.data.hashlist;
                that.chains = result.data.data.data.chains;
                that.abnormal = result.data.data.data.abnormal;
            }
            getListData()
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


#timing .el-table {
    // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // 深度选择器，去除默认的padding
    /deep/ th {
        padding: 0 ;
    }
    /deep/ td {
        padding: 0 ;
    }
}

#tableData1 .el-table {
    // 看这里！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    // 深度选择器，去除默认的padding
    /deep/ th {
        padding: 0 ;
    }
    /deep/ td {
        padding: 2.5px ;
    }
}


</style>


<style scoped>
>>> .el-upload, >>> .el-upload-dragger {
    width: 100%;
}

</style>
