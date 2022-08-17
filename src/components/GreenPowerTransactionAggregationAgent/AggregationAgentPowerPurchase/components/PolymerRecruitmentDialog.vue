<template>
    <el-dialog title="聚合体招募" :visible.sync="PolymerRecruitmentDialog" width=40% :close-on-click-modal="false"
               :show-close="true" :close-on-press-escape="false" @close="closeVisible" @open="showAdd">
        <div class="visibleDiv">
            <el-form ref="form" :model="ruleForm" :rules="rules" label-width="170px">
                <el-form-item label="聚合体名称：" prop="provinceCode">
                    <el-select style="width: 250px" v-model="ruleForm.provinceCode" clearable filterable
                               allow-create default-first-option placeholder="聚合体名称">
                        <el-option
                            v-for="item in orgNoOptions"
                            :key="item.codeValue"
                            :label="item.codeName"
                            :value="item.codeValue">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主体单位：" prop="provinceCode">
                    <el-select style="width: 250px" v-model="ruleForm.provinceCode" clearable filterable
                               allow-create default-first-option placeholder="主体单位">
                        <el-option
                            v-for="item in orgNoOptions"
                            :key="item.codeValue"
                            :label="item.codeName"
                            :value="item.codeValue">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主体装机容量：" prop="provinceCode">
                    <el-input v-model.trim="ruleForm.couponCodeName" style="width: 250px"
                              maxlength="20"
                              placeholder="主体装机容量"></el-input>
                </el-form-item>
                <el-form-item label="计划招募数量：" prop="provinceCode">
                    <el-input v-model.trim="ruleForm.couponCodeName" style="width: 250px"
                              maxlength="20"
                              placeholder="计划招募数量"></el-input>
                </el-form-item>
                <el-form-item label="主体装机容量：" prop="provinceCode">
                    <el-input v-model.trim="ruleForm.couponCodeName" style="width: 250px"
                              maxlength="20"
                              placeholder="主体装机容量"></el-input>
                </el-form-item>
                <el-form-item label="聚合体装机计划容量：" prop="provinceCode">
                    <el-input v-model.trim="ruleForm.couponCodeName" style="width: 250px"
                              maxlength="20"
                              placeholder="聚合体装机计划容量"></el-input>
                </el-form-item>
                <el-form-item label="招募类型：" prop="provinceCode">
                    <el-select style="width: 250px" v-model="ruleForm.provinceCode" clearable filterable
                               allow-create default-first-option placeholder="招募类型">
                        <el-option
                            v-for="item in orgNoOptions"
                            :key="item.codeValue"
                            :label="item.codeName"
                            :value="item.codeValue">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="招募区域：" prop="provinceCode">
                    <el-select style="width: 250px" v-model="ruleForm.provinceCode" clearable filterable
                               allow-create default-first-option placeholder="招募区域">
                        <el-option
                            v-for="item in orgNoOptions"
                            :key="item.codeValue"
                            :label="item.codeName"
                            :value="item.codeValue">
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
    </el-dialog>
</template>

<script type="text/ecmascript-6">
import {greenCardHistory} from "../../../../api/GreenPowerConsumptionCertification/GreenPowerConsumptionCertification";


export default {
    name: 'modal',
    data() {
        return {
            ruleForm: {
                couponCodeName: "",
                provinceCode: "",
                provinceName: "",
                date1: "",
                date2: "",
                fileId: "",
                describe: "",


            },
            rules: {
                couponCodeName: [
                    {required: true, message: '请输入券码池名称(20个字以内)', trigger: 'blur'},
                    {min: 1, max: 20, message: '券码池名称在 1 到 20 个字符'}
                ],
                date1: [
                    {required: true, message: '请选择开始时间', trigger: 'change'},
                ],

                date2: [
                    {required: true, message: '请选择结束时间', trigger: 'change'},
                ],
                provinceCode: [
                    {required: true, message: '请选择奖池网省', trigger: 'change'}
                ],
                describe: [
                    {required: true, message: '请输入券码描述', trigger: 'blur'},
                    {min: 1, max: 200, message: '券码描述名称在 1 到 200 个字符'}
                ],


            },
            orgNoOptions: [],
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

