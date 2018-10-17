<!--历史每日数据-->
<template>
  <div class="manage-title">
    <div class="content-bar">
      <Form inline>
        <FormItem label="关键词:" :label-width="80">
          <Input v-model="keywords" placeholder="请输入关键词..." style="width: 200px"></Input>
        </FormItem>
        <FormItem :label-width="0">
          <Button type="primary" icon="ios-search" @click="getList()">查询</Button>
          <Button type="error" icon="android-close" @click="cleanBox()">清空</Button>
        </FormItem>
        <FormItem :label-width="0">
          <Button type="warning" icon="plus" @click="add()">新增域名</Button>
        </FormItem>
      </Form>

    </div>
    <Table border :columns="columns" :data="list"></Table>
  </div>
</template>
<style>
  @import "../../assets/style/common.css";
</style>
<script>
  export default {
    data() {
      return {
        keywords: '',
        columns: [
          {
            title: "编号",
            align: "center",
            key: "id"
          },
          {
            title: "域名",
            align: "center",
            key: "domain"
          },
          {
            title: "分类",
            align: "center",
            render(h, params) {
              let _str = '';
              if(params.row.mark == '1' ){
                _str = 'A1';
              }else if(params.row.mark == '2'){
                _str = 'A2';
              }else if(params.row.mark == '3'){
                _str = 'B1';
              }else if(params.row.mark == '4'){
                _str = 'C1';
              }
              return h("div", _str);
            }
          },
          {
            title: "是否随机",
            align: "center",
            render(h, params) {
              let _str = '';
              if(params.row.rand == '1' ){
                _str = '随机';
              }else{
                _str = '不随机';
              }
              return h("div", _str);
            }
          },
          {
            title: "公众号ID",
            align: "center",
            key: "gid"
          },
          {
            title: "当前排序",
            align: "center",
            key: "sort"
          },
          {
            title: "创建时间",
            align: "center",
            key: "create_time"
          },
          {
            title: "封禁时间",
            align: "center",
            key: "close_time"
          },
          {
            title: "状态",
            align: "center",
            render(h, params) {
              let _str = '';
              if(params.row.status == '1' ){
                _str = '正常';
              }else{
                _str = '禁用';
              }
              return h("div", _str);
            }
          },
          {
            title: "操作",
            align: "center",
            render: (h, params) => {
              let _str = '';
              if(params.row.status == '1' ){
                _str = '禁用';
              }else{
                _str = '启用';
              }
              return h("div", [

                h("Button",{
                    props: {
                      size: "small"
                    },
                    on: {
                      "click": () => {
                        this.operation(params.row.id, params.row.status);
                      }
                    },
                  },
                  _str
                ),
                h("Button",{
                  props: {
                    size: "small"
                  }
                }, [
                  h(
                    "Poptip",
                    {
                      props: {
                        confirm: true,
                        title: "确定删除?",
                      },
                      on: {
                        "on-ok": () => {
                          this.deleteTitle(params.row.id);
                        },
                      }
                    },
                    "删除"
                  )
                ])
              ]);

            }
          }

        ],
        list: [],
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList:function () {
        var self = this,
          keywords = this.keywords;
        self.$http.post(global.url.domain_list, {
          keywords: keywords
        }).then(result => {
          this.list = result;
        });
      },
      cleanBox:function () {
        this.keywords = '';
      },
      deleteTitle:function (id) {
        var self = this;
        self.$http.post(global.url.domain_delete, {
          id : id
        }).then(result => {
          if(result.status){
            this.$Message.success(result.msg);
            setTimeout(() => {
              this.getList();
            }, 1500)
          }else{
            this.$Message.error(result.msg);
          }
        });
      },
      operation:function (id, status) {
        var self = this;
        if(status == 1){
          status = 2;
        }else{
          status = 1;
        }
        self.$http.post(global.url.domain_operation, {
          id: id,
          status: status
        }).then(result => {
          if(result.status){
            setTimeout(() => {
              this.getList();
            }, 500);
          }
        });
      },
      add(){
        this.$router.push({path: '/domain/domain-add'});
      }
    }
  };
</script>
