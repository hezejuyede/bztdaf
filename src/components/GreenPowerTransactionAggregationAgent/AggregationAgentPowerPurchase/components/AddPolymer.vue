<template>
    <div class="templateAdd">
        <el-form ref="form" :model="ruleForm" :rules="rules" label-width="150px">
            <el-form-item label="聚合代理商：" prop="couponCodeName">
                <el-select style="width: 250px" v-model="ruleForm.provinceCode" clearable filterable
                           allow-create default-first-option placeholder="聚合代理商">
                    <el-option
                        v-for="item in orgNoOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="需求负荷：" prop="provinceCode">
                <el-select style="width: 250px"  v-model="ruleForm.provinceCode" clearable filterable
                           allow-create default-first-option placeholder="需求负荷">
                    <el-option
                        v-for="item in orgNoOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="已购负荷：" prop="provinceCode">
                <el-select style="width: 250px"  v-model="ruleForm.provinceCode" clearable filterable
                           allow-create default-first-option placeholder="已购负荷">
                    <el-option
                        v-for="item in orgNoOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="余量负荷：" prop="provinceCode">
                <el-select style="width: 250px"  v-model="ruleForm.provinceCode" clearable filterable
                           allow-create default-first-option placeholder="余量负荷">
                    <el-option
                        v-for="item in orgNoOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="计划缺口负荷：" prop="provinceCode">
                <el-select style="width: 250px"  v-model="ruleForm.provinceCode" clearable filterable
                           allow-create default-first-option placeholder="计划缺口负荷">
                    <el-option
                        v-for="item in orgNoOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="计划供应日期：" prop="provinceCode">
                <el-date-picker style="width: 250px" v-model="ruleForm.examineTime" type="daterange"
                                start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="供应地区：" prop="provinceCode">
                <el-select style="width: 250px"  v-model="ruleForm.provinceCode" clearable filterable
                           allow-create default-first-option placeholder="供应地区">
                    <el-option
                        v-for="item in orgNoOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div style="width:100%;height:60px;margin-bottom: 50px;display: flex;align-items: center;justify-content: center">
            <el-button @click="doAdd" type="primary" style="width: 100px;height: 35px;background-color: #05A696">发布</el-button>
        </div>
    </div>
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
        this.getList()

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


    },
    props: {},
}
</script>
<style scoped lang="less" rel="stylesheet/less">


.templateAdd {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>
