<template>
    <div class="visibleDiv" v-if="PolymerRegistrationDialog===true">
        <div class="visibleDiv">
            <el-form ref="form" :model="ruleForm" :rules="rules" label-width="170px">
                <el-form-item label="主体单位：" prop="ztdw">
                    <el-input v-model.trim="ruleForm.ztdw" style="width: 250px"
                              maxlength="20"
                              placeholder="主体单位"></el-input>
                </el-form-item>
                <el-form-item label="聚合体名称：" prop="jhtmc">
                    <el-input v-model.trim="ruleForm.jhtmc" style="width: 250px"
                              maxlength="20"
                              placeholder="聚合体名称"></el-input>
                </el-form-item>
                <el-form-item label="主体光伏类型：" prop="gflx">
                    <el-select style="width: 250px" v-model="ruleForm.gflx" clearable filterable
                               allow-create default-first-option placeholder="主体光伏类型">
                        <el-option
                            v-for="item in gflxOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主体装机容量：" prop="ztzjrl">
                    <el-input v-model.trim="ruleForm.ztzjrl" style="width: 250px"
                              maxlength="20"
                              placeholder="主体装机容量"></el-input>
                </el-form-item>
                <el-form-item label="聚合体装机计划容量：" prop="jhtzjjhrl">
                    <el-input v-model.trim="ruleForm.jhtzjjhrl" style="width: 250px"
                              maxlength="20"
                              placeholder="聚合体装机计划容量"></el-input>
                </el-form-item>
                <el-form-item label="接纳区域范围：" prop="qy">
                    <el-select style="width: 250px" v-model="ruleForm.qy" clearable filterable
                               allow-create default-first-option placeholder="接纳区域范围">
                        <el-option
                            v-for="item in qyOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="接纳个体数量：" prop="jngtsl">
                    <el-input v-model.trim="ruleForm.jngtsl" style="width: 250px"
                              maxlength="20"
                              placeholder="接纳个体数量"></el-input>
                </el-form-item>
            </el-form>
            <div
                style="width:100%;height:60px;margin-bottom: 50px;display: flex;align-items: center;justify-content: center">
                <el-button @click="doAdd" type="primary" style="width: 100px;height: 35px;background-color: #05A696">
                    注册
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
                ztdw: "",
                jhtmc: "",
                gflx: "",
                ztzjrl: "",
                jhtzjjhrl: "",
                qy: "",
                jngtsl: "",


            },
            rules: {
                ztdw: [
                    {required: true, message: '请输入主体单位', trigger: 'blur'},
                    {min: 1, max: 20, message: '主体单位在 1 到 20 个字符'}
                ],

                jhtmc: [
                    {required: true, message: '请输入聚合体名称', trigger: 'blur'},
                    {min: 1, max: 20, message: '聚合体名称在 1 到 20 个字符'}
                ],

                gflx: [
                    {required: true, message: '请选择主体光伏类型', trigger: 'change'}
                ],
                ztzjrl: [
                    {required: true, message: '请输入主体装机容量', trigger: 'blur'},
                    {min: 1, max: 20, message: '主体装机容量在 1 到 20 个字符'}
                ],
                jhtzjjhrl: [
                    {required: true, message: '请输入聚合体装机计划容量', trigger: 'blur'},
                    {min: 1, max: 20, message: '聚合体装机计划容量在 1 到 20 个字符'}
                ],
                qy: [
                    {required: true, message: '请选择区域', trigger: 'change'}
                ],
                jngtsl: [
                    {required: true, message: '请输入接纳个体数量', trigger: 'blur'},
                    {min: 1, max: 20, message: '接纳个体数量在 1 到 20 个字符'}
                ],

            },
            qyOptions:regionOptions,
            gflxOptions: [
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
                    const getListData = async () => {
                        const result = await greenCardHistory({
                            "region": that.region,
                            "startTime": that.examineTime[0],
                            "endTime": that.examineTime[1]
                        })
                        that.tableData = result.data.data.data;
                    }
                    getListData();


                } else {
                    return this.$message.warning("信息填写不正确");

                }
            });

        },


        //关闭对话框
        closeVisible() {
            this.$emit('closeVisible', 'PolymerRegistrationDialog')
        },


    },
    props: {
        /**
         * 弹出框
         */
        PolymerRegistrationDialog: {
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
