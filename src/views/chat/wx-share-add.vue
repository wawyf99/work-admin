<!--历史每日数据-->
<template>
  <div class="add-title">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <FormItem label="分享朋友标题" prop="title" style="width: 320px">
        <Input v-model="formValidate.title" placeholder="请输入分享朋友的标题..."></Input>
      </FormItem>
      <FormItem label="分享朋友描述" prop="describe" style="width: 320px">
        <Input v-model="formValidate.describe" placeholder="请输入分享朋友的描述..."></Input>
      </FormItem>
      <FormItem label="分享朋友LOGO" prop="logo" style="width: 320px">
        <Select v-model="formValidate.logo" placeholder="请选择域名分类...">
          <Option v-for="item in markList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="分享朋友圈标题" prop="flock_title" style="width: 320px">
        <Input v-model="formValidate.flock_title" placeholder="请输入分享朋友圈的标题..."></Input>
      </FormItem>
      <FormItem label="分享朋友圈LOGO" prop="flock_logo" style="width: 320px">
        <Select v-model="formValidate.flock_logo" placeholder="请选择域名分类...">
          <Option v-for="item in markList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>

    </Form>
  </div>
</template>
<style>
  @import "../../assets/style/common.css";
</style>
<script>
  export default {
    data () {
      const validateDomain = (rule, value, callback) => {
        let _reg = new RegExp();
        _reg.compile('^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\\d+)*(\\/\\w+\\.\\w+)*$');
        if(value == ''){
          callback(new Error('录入域名不能为空'));
        }else if (!_reg.test(value)) {
          callback(new Error("录入域名格式不正确"));
        } else {
          callback();
        }
      };
      return {
        id: this.$route.query.id,
        formValidate: {
          title: '',
          describe: '',
          logo: '',
          flock_title: '',
          flock_logo: ''
        },
        ruleValidate: {
          title: [
            { required: true, message: '分享朋友的标题不能为空', trigger: 'blur' },
          ],
          describe: [
            { required: true, message: '分享朋友的描述不能为空', trigger: 'blur' },
          ],
          logo: [
            { required: true, message: '分享朋友的LOGO不能为空', trigger: 'change' },
          ]
        },
        markList: [
          {
            value: '1',
            label: 'img1'
          },
          {
            value: '2',
            label: 'img2'
          },
          {
            value: '3',
            label: 'img3'
          },
          {
            value: '4',
            label: 'img4'
          }
        ],
      }
    },
    created(){
      if(this.id){
        this.getData(this.id);
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.sendData();
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      sendData (){
        let self = this,
          id = this.id;

        self.$http.post(global.url.chat_wx_share_add, {
          title: this.formValidate.title,
          describe: this.formValidate.describe,
          logo: this.formValidate.logo,
          flock_title: this.formValidate.flock_title,
          flock_logo: this.formValidate.flock_logo,
          id: id
        }).then(result => {
          if(result.status){
            this.$Message.success(result.msg);
            setTimeout(() => {
              this.$router.push({path: '/chat/wx-share'});
            }, 1500)
          }else{
            this.$Message.error(result.msg);
          }
        });
      },
      getData(id){
        var self = this;
        self.$http.post(global.url.chat_wx_share_one_list, {
          id : id
        }).then(result => {
          if(result.status){
            this.formValidate.title = result.data[0].title;
            this.formValidate.describe = result.data[0].describe;
            this.formValidate.logo = result.data[0].logo;
            this.formValidate.flock_title = result.data[0].flock_title;
            this.formValidate.flock_logo = result.data[0].flock_logo;
          }
        });
      }
    }
  };
</script>
