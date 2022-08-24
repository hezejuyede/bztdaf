<template>
    <div class="visibleDiv" v-if="PolymerRecruitmentDialog===true">
        <div class="visibleDiv">
            <el-form ref="form" :model="ruleForm" :rules="rules" label-width="170px">
                <el-form-item label="聚合体名称：" prop="jhtmc">
                    <el-input v-model.trim="ruleForm.jhtmc" style="width: 250px"
                              maxlength="20"
                              placeholder="聚合体名称"></el-input>
                </el-form-item>
                <el-form-item label="主体单位：" prop="ztdw">
                    <el-input v-model.trim="ruleForm.ztdw" style="width: 250px"
                              maxlength="20"
                              placeholder="主体单位"></el-input>
                </el-form-item>
                <el-form-item label="计划招募数量：" prop="jhzmsl">
                    <el-input v-model.trim="ruleForm.jhzmsl" style="width: 250px"
                              maxlength="20"
                              placeholder="计划招募数量"></el-input>
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
                <el-form-item label="招募类型：" prop="zmlx">
                    <el-select style="width: 250px" v-model="ruleForm.zmlx" clearable filterable
                               allow-create default-first-option placeholder="招募类型">
                        <el-option
                            v-for="item in zmlxOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="招募区域：" prop="qy">
                    <el-select style="width: 250px" v-model="ruleForm.qy" clearable filterable
                               allow-create default-first-option placeholder="招募区域">
                        <el-option
                            v-for="item in qyOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div
                style="width:100%;height:60px;margin-bottom: 50px;display: flex;align-items: center;justify-content: center">
                <el-button @click="doAdd" type="primary" style="width: 100px;height: 35px;background-color: #05A696">
                    完成
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
                jhtmc: "",
                ztdw: "",
                jhzmsl: "",
                ztzjrl: "",
                jhtzjjhrl: "",
                zmlx: "",
                qy: "",


            },
            rules: {
                jhtmc: [
                    {required: true, message: '请输入聚合体名称', trigger: 'blur'},
                    {min: 1, max: 20, message: '聚合体名称在 1 到 20 个字符'}
                ],

                ztdw: [
                    {required: true, message: '请输入主体单位', trigger: 'blur'},
                    {min: 1, max: 20, message: '主体单位在 1 到 20 个字符'}
                ],

                jhzmsl: [
                    {required: true, message: '请输入计划招募数量', trigger: 'blur'},
                    {min: 1, max: 20, message: '计划招募数量在 1 到 20 个字符'}
                ],
                ztzjrl: [
                    {required: true, message: '请输入主体装机容量', trigger: 'blur'},
                    {min: 1, max: 20, message: '主体装机容量在 1 到 20 个字符'}
                ],

                jhtzjjhrl: [
                    {required: true, message: '请输入聚合体装机计划容量', trigger: 'blur'},
                    {min: 1, max: 20, message: '聚合体装机计划容量在 1 到 20 个字符'}
                ],

                zmlx: [
                    {required: true, message: '请选择招募类型', trigger: 'change'}
                ],

                qy: [
                    {required: true, message: '请选择招募区域', trigger: 'change'}
                ],

            },
            zmlxOptions:[
                {"name": "10千伏", "id": "01"},
                {"name": "0.4千伏", "id": "02"},
            ],

            qyOptions:regionOptions,
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
                   /* const getListData = async () => {
                        const result = await greenCardHistory({
                            "region": that.region,
                            "startTime": that.examineTime[0],
                            "endTime": that.examineTime[1]
                        })
                        that.tableData = result.data.data.data;
                    }
                    getListData();*/
                    this.$message.success("招募完成");
                    setTimeout(()=>{
                        that.$emit('closeVisible', 'detailsDialog')

                    },1000)


                } else {
                    return this.$message.warning("信息填写不正确");

                }
            });

        },


        //关闭对话框
        closeVisible() {
            this.$emit('closeVisible', 'PolymerRecruitmentDialog')
        },


    },
    props: {
        /**
         * 弹出框
         */
        PolymerRecruitmentDialog: {
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

