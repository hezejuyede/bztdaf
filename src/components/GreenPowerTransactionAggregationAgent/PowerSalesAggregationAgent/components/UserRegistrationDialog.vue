<template>
    <div class="visibleDiv" v-if="UserRegistrationDialog===true">
        <div class="visibleDiv">
            <el-form ref="form" :model="ruleForm" :rules="rules" label-width="150px">
                <el-form-item label="单位名称：" prop="dwmc">
                    <el-input v-model.trim="ruleForm.dwmc" style="width: 250px"
                              maxlength="20"
                              placeholder="单位名称"></el-input>
                </el-form-item>
                <el-form-item label="光伏类型：" prop="gflx">
                    <el-select style="width: 250px" v-model="ruleForm.gflx" clearable filterable
                               allow-create default-first-option placeholder="光伏类型">
                        <el-option
                            v-for="item in gflxOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电压：" prop="dy">
                    <el-select style="width: 250px" v-model="ruleForm.dy" clearable filterable
                               allow-create default-first-option placeholder="电压">
                        <el-option
                            v-for="item in dyOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="装机总容量：" prop="zjzrl">
                    <el-input v-model.trim="ruleForm.zjzrl" style="width: 250px"
                              maxlength="20"
                              placeholder="装机总容量"></el-input>
                </el-form-item>

                <el-form-item label="区域：" prop="qy">
                    <el-select style="width: 250px" v-model="ruleForm.qy" clearable filterable
                               allow-create default-first-option placeholder="区域">
                        <el-option
                            v-for="item in qyOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="台区：" prop="tq">
                    <el-select style="width: 250px" v-model="ruleForm.tq" clearable filterable
                               allow-create default-first-option placeholder="台区">
                        <el-option
                            v-for="item in tqOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资产归属：" prop="zcgs">
                    <el-select style="width: 250px" v-model="ruleForm.zcgs" clearable filterable
                               allow-create default-first-option placeholder="资产归属">
                        <el-option
                            v-for="item in zcgsOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="实发容量：" prop="sfrl">
                    <el-input v-model.trim="ruleForm.sfrl" style="width: 250px"
                              maxlength="20"
                              placeholder="实发容量"></el-input>
                </el-form-item>
            </el-form>
            <div
                style="width:100%;height:60px;margin-bottom: 50px;display: flex;align-items: center;justify-content: center">
                <el-button @click="doAdd" type="primary" style="width: 100px;height: 35px;background-color: #05A696">
                    加入聚合体
                </el-button>
                <el-button @click="doJHT" type="primary" style="width: 100px;height: 35px;background-color: #FFFFFF;color: #8F9393">
                    聚合体注册
                </el-button>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {greenCardHistory} from "../../../../api/GreenPowerConsumptionCertification/GreenPowerConsumptionCertification";
import {regionOptions} from "../../../../utils/options";

export default {
    name: 'modal',
    data() {
        return {
            ruleForm: {
                dwmc: "",
                gflx: "",
                dy: "",
                zjzrl: "",
                qy: "",
                tq: "",
                zcgs: "",
                sfrl: "",


            },
            rules: {

                dwmc: [
                    {required: true, message: '请输入单位名称', trigger: 'blur'},
                    {min: 1, max: 20, message: '单位名称在 1 到 20 个字符'}
                ],

                gflx: [
                    {required: true, message: '请选择光伏类型', trigger: 'change'}
                ],

                dy: [
                    {required: true, message: '请选择电压', trigger: 'change'}
                ],
                zjzrl: [
                    {required: true, message: '请输入装机总容量', trigger: 'blur'},
                    {min: 1, max: 20, message: '装机总容量在 1 到 20 个字符'}
                ],
                qy: [
                    {required: true, message: '请选择区域', trigger: 'change'}
                ],
                tq: [
                    {required: true, message: '请选择台区', trigger: 'change'}
                ],
                zcgs: [
                    {required: true, message: '请选择资产归属', trigger: 'change'}
                ],
                sfrl: [
                    {required: true, message: '请输入实发容量', trigger: 'blur'},
                    {min: 1, max: 20, message: '实发容量在 1 到 20 个字符'}
                ],


            },

            dyOptions: [
                {"name": "10千伏", "id": "01"},
                {"name": "0.4千伏", "id": "02"},
            ],
            tqOptions: [
                {"name": "新庄", "id": "01"},
                {"name": "杠子张", "id": "02"},
                {"name": "道门于", "id": "03"},
            ],
            zcgsOptions: [
                {"name": "自有", "id": "01"},
                {"name": "滨州供电公司", "id": "02"}
            ],
            qyOptions:regionOptions,
            gflxOptions: [
                {"name": "分部式光伏", "id": "01"},
                {"name": "集中式光伏", "id": "02"},
                {"name": "屋顶光伏", "id": "03"}
            ],

            ztdwOptions: [
                {"name": "分部式光伏", "id": "01"},
                {"name": "集中式光伏", "id": "02"},
                {"name": "屋顶光伏", "id": "03"}
            ],
        }
    },
    mounted() {


    },
    created() {

    },
    methods: {


        //显示新增
        showAdd() {
            this.addVisible = true;
            this.ruleForm.couponCodeName = "";
            this.ruleForm.provinceCode = "";
            this.ruleForm.provinceName = "";
            this.ruleForm.fileId = "";
            this.ruleForm.describe = "";
            this.ruleForm.date1 = "";
            this.ruleForm.date2 = "";
            if (this.$refs['form'] !== undefined) {
                this.$nextTick(this.$refs['form'].clearValidate());
            }

            if (this.$refs['upload']) {
                this.$refs['upload'].clearFiles();
            }
        },


        //进行新增
        doAdd() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let that = this;
                  /*  const getListData = async () => {
                        const result = await greenCardHistory({
                            "region": that.region,
                            "startTime": that.examineTime[0],
                            "endTime": that.examineTime[1]
                        })
                        that.tableData = result.data.data.data;
                    }
                    getListData();*/
                    this.$message.success("注册成功，马上准备加入聚合体");
                    setTimeout(()=>{
                        that.$emit('closeVisible', 'AddPolymerDialog')

                    },1000)


                } else {
                    return this.$message.warning("信息填写不正确");

                }
            });

        },


        //关闭对话框
        closeVisible() {
            this.$emit('closeVisible', 'UserRegistrationDialog')
        },

        //
        doJHT(){
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let that = this;
                    /*  const getListData = async () => {
                          const result = await greenCardHistory({
                              "region": that.region,
                              "startTime": that.examineTime[0],
                              "endTime": that.examineTime[1]
                          })
                          that.tableData = result.data.data.data;
                      }
                      getListData();*/
                    this.$message.success("注册成功，马上准备进行聚合体注册");
                    setTimeout(()=>{
                        that.$emit('closeVisible', 'PolymerRegistrationDialog')

                    },1000)


                } else {
                    return this.$message.warning("信息填写不正确");

                }
            });
        }


    },
    props: {
        /**
         * 弹出框
         */
        UserRegistrationDialog: {
            type: Boolean,
            required: true
        }
    },
}
</script>
<style scoped lang="less" rel="stylesheet/less">
@import "../../../../assets/less/base";

.visibleDiv {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


}

</style>

