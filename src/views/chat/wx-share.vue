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
          <Button type="warning" icon="plus" @click="add()">新增内容</Button>
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
            title: "分享群标题",
            align: "center",
            key: "title"
          },
          {
            title: "分享群内容",
            align: "center",
            key: "describe"
          },
          {
            title: "分享群LOGO",
            align: "center",
            render: (h, params) => {
              var _logo = params.row.logo,
                  _str = '';
              switch (_logo) {
                case '1':
                  _str = 'img1';
                  break;
                case '2':
                  _str = 'img2';
                  break;
                case '3':
                  _str = 'img3';
                  break;
                case '4':
                  _str = 'img4';
                  break;
              }
              return h("div", _str);
            }
          },
          {
            title: "分享朋友圈标题",
            align: "center",
            key: "flock_title"
          },
          {
            title: "分享朋友圈LOGO",
            align: "center",
            render: (h, params) => {
              var _logo = params.row.flock_logo,
                _str = '';
              switch (_logo) {
                case '1':
                  _str = 'img1';
                  break;
                case '2':
                  _str = 'img2';
                  break;
                case '3':
                  _str = 'img3';
                  break;
                case '4':
                  _str = 'img4';
                  break;
              }
              return h("div", _str);
            }
          },
          {
            title: "状态",
            align: "center",
            render: (h, params) => {
              var _logo = params.row.sort,
                _str = '';
              switch (_logo) {
                case 1:
                  _str = '使用中';
                  break;
                case 2:
                  _str = '已禁用';
                  break;
              }
              return h("div", _str);
            }
          },
          {
            title: "操作",
            align: "center",
            render: (h, params) => {

              let _str = '';
              if(params.row.sort == 1 ){
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
                        this.operation(params.row.id, params.row.sort);
                      }
                    },
                  },
                  _str
                ),

                h("Button",{
                    props: {
                      size: "small"
                    },
                    on: {
                      "click": () => {
                        this.updateTitle(params.row.id);
                      }
                    },
                  },
                  "编辑"
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
        self.$http.post(global.url.chat_wx_share_list, {
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
        self.$http.post(global.url.chat_wx_delete, {
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
      updateTitle:function (id) {
        this.$router.push({path: '/chat/wx-share-add',query:{id:id}});
      },
      operation:function(id, sort){
        var self = this;
        if(sort == 1){
          sort = 2;
        }else{
          sort = 1;
        }
        self.$http.post(global.url.chat_wx_share_operation, {
          id: id,
          sort: sort
        }).then(result => {
          if(result.status){
            setTimeout(() => {
              this.getList();
            }, 500);
          }
        });
      },
      add(){
        this.$router.push({path: '/chat/wx-share-add'});
      }
    }
  };
</script>
