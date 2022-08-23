<template>
    <div class="templateAdd">
        <el-form ref="form" :model="ruleForm" :rules="rules" label-width="150px">
            <el-form-item label="聚合代理商：" prop="jhdls">
                <el-input v-model.trim="ruleForm.jhdls" style="width: 250px"
                          maxlength="20"
                          placeholder="聚合代理商"></el-input>
            </el-form-item>
            <el-form-item label="装机容量：" prop="zjrl">
                <el-input v-model.trim="ruleForm.zjrl" style="width: 250px"
                          maxlength="20"
                          placeholder="装机容量"></el-input>
            </el-form-item>
            <el-form-item label="已供应负荷：" prop="ygyfh">
                <el-input v-model.trim="ruleForm.ygyfh" style="width: 250px"
                          maxlength="20"
                          placeholder="已供应负荷"></el-input>
            </el-form-item>
            <el-form-item label="可供应负荷：" prop="kgyfh">
                <el-input v-model.trim="ruleForm.kgyfh" style="width: 250px"
                          maxlength="20"
                          placeholder="可供应负荷"></el-input>
            </el-form-item>
            <el-form-item label="计划供应电量：" prop="jhgydl">
                <el-input v-model.trim="ruleForm.jhgydl" style="width: 250px"
                          maxlength="20"
                          placeholder="计划供应电量"></el-input>
            </el-form-item>
            <el-form-item label="计划供应日期：" prop="examineTime">
                <el-date-picker style="width: 250px" v-model="ruleForm.examineTime" type="daterange"
                                start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="供应地区：" prop="qy">
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
        </el-form>
        <div style="width:100%;height:60px;margin-bottom: 50px;display: flex;align-items: center;justify-content: center">
            <el-button @click="doAdd" type="primary" style="width: 100px;height: 35px;background-color: #05A696">发布</el-button>
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
                jhdls: "",
                zjrl: "",
                ygyfh: "",
                kgyfh: "",
                jhgydl: "",
                examineTime: [],
                qy: "",


            },
            rules: {
                jhdls: [
                    {required: true, message: '请输入主聚合代理商', trigger: 'blur'},
                    {min: 1, max: 20, message: '聚合代理商在 1 到 20 个字符'}
                ],

                zjrl: [
                    {required: true, message: '请输入装机容量', trigger: 'blur'},
                    {min: 1, max: 20, message: '装机容量在 1 到 20 个字符'}
                ],

                ygyfh: [
                    {required: true, message: '请输入已供应负荷', trigger: 'blur'},
                    {min: 1, max: 20, message: '已供应负荷在 1 到 20 个字符'}
                ],

                kgyfh: [
                    {required: true, message: '请输入可供应负荷', trigger: 'blur'},
                    {min: 1, max: 20, message: '可供应负荷在 1 到 20 个字符'}
                ],

                jhgydl: [
                    {required: true, message: '请输入计划供应电量', trigger: 'blur'},
                    {min: 1, max: 20, message: '计划供应电量在 1 到 20 个字符'}
                ],

                examineTime: [
                    {required: true, message: '请选择时间', trigger: 'change'}
                ],
                qy: [
                    {required: true, message: '请选择区域', trigger: 'change'}
                ],


            },
            qyOptions: regionOptions,
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
