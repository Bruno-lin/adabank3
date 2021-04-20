<template>
  <div>
    <!-- welcome text -->
    <el-row type="flex" justify="center">
      <el-col :span="4">欢迎回来，{{ username }}</el-col>
    </el-row>

    <!-- logout button -->
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-row type="flex" justify="center">
          <el-button class="admin-btn" v-on:click="logout" type="primary"
            >退出登陆</el-button
          >
        </el-row>
      </el-col>
    </el-row>

    <!-- search filter -->
    <el-row type="flex" justify="center">
      <el-col :span="2">
        <el-select v-model="queryKey" placeholder="请选择搜索类别">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-input
          id="query-value"
          v-model="queryValue"
          placeholder="请输入搜索内容"
          v-on:keyup.enter.native="search"
        ></el-input>
      </el-col>
    </el-row>
    
    <!-- data table -->
    <el-table :data="tableData" stripe>
      <el-table-column prop="username" label="用户名" width="150"></el-table-column>
      <el-table-column prop="cardNumber" label="卡号" width="200"></el-table-column>
      <el-table-column prop="balance" label="余额" width="150"></el-table-column>
      <el-table-column prop="companyName" label="公司名" width="400"></el-table-column>
      <el-table-column prop="companyAddress" label="公司地址"></el-table-column>
      <el-table-column prop="legalRepName" label="法人" width="200"></el-table-column>
      <el-table-column width="100" header-align="center">
        <template slot="header">
          <el-button type="success" icon="el-icon-circle-plus" circle @click="onNewClick"></el-button>
        </template>
        <template slot-scope="scope">
          <el-row type="flex" justify="center">
            <el-button type="primary" icon="el-icon-edit" circle @click="onEditClick(scope.row)"></el-button>
            <el-popover
              placement="top"
              width="160"
              trigger="click"
              v-model="scope.row.deletePopoverVisible">
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="scope.row.deletePopoverVisible=false">取消</el-button>
                <el-button type="primary" size="mini" @click="deleteCustomer(scope.$index, scope.row)">确定</el-button>
              </div>
              <el-button slot="reference" type="danger" icon="el-icon-delete" circle></el-button>
            </el-popover>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <!-- new/edit customer dialog box -->
    <el-dialog
      :title="editOrCreateDialogTitle"
      :visible.sync="editOrCreateDialogVisible"
      width="30%">
      <el-form label-width="130px" :model="currentCustomer">
        <el-form-item label="用户名">
          <el-input v-model="currentCustomer.username"></el-input>
        </el-form-item>
        <el-form-item label="银行卡号">
          <el-input v-model="currentCustomer.cardNumber"></el-input>
        </el-form-item>
        <el-form-item label="当前余额">
          <el-input v-model="currentCustomer.balance"></el-input>
        </el-form-item>
        <el-form-item label="公司名">
          <el-input v-model="currentCustomer.companyName"></el-input>
        </el-form-item>
        <el-form-item label="公司地址">
          <el-input v-model="currentCustomer.companyAddress"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码">
          <el-input v-model="currentCustomer.companyCreditCode"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人">
          <el-input v-model="currentCustomer.legalRepName"></el-input>
        </el-form-item>
        <el-form-item label="法人身份证号">
          <el-input v-model="currentCustomer.legalRepId"></el-input>
        </el-form-item>
        <el-form-item label="法人地址">
          <el-input v-model="currentCustomer.legalRepAddr"></el-input>
        </el-form-item>
        <el-form-item label="法人联系电话">
          <el-input v-model="currentCustomer.legalRepTel"></el-input>
        </el-form-item>
        <el-form-item label="经营范围">
          <el-input type="textarea" :rows="5" v-model="currentCustomer.business"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editOrCreateDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="editOrCreateCustomer">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const axios = require("axios")

export default {
  name: "Dashboard",
  data() {
    return {
      username: "",
      editOrCreateDialogVisible: false,
      editOrCreateDialogTitle: "",
      options: [
        {
          value: "",
          label: "请选择"
        },
        {
          value: "cardNumber",
          label: "卡号",
        },
        {
          value: "minBalance",
          label: "最少余额",
        },
        {
          value: "maxBalance",
          label: "最大余额",
        },
        {
          value: "companyName",
          label: "公司名",
        },
        {
          value: "companyAddress",
          label: "公司地址",
        },
        {
          value: "business",
          label: "业务范围",
        },
        {
          value: "legalRepName",
          label: "法人姓名",
        },
      ],
      queryKey: "",
      queryValue: "",
      tableData: [],
      currentCustomer: {},
    }
  },
  methods: {
    logout: function () {
      this.$http.post("/api/logout").then(response => {
        if (response.data.status !== "OK") {
          console.log(response.data.message)
        }
        this.$router.push("login")
      })
    },
    search: function () {
      let query = {}
      if (this.queryKey !== "" && this.queryValue !== "") {
        query[this.queryKey] = this.queryValue
      }
      this.$http
        .get(
          "/api/customers",
          { params: {query} }
        )
        .then((response) => {
          if (response.data.status === 'OK') {
            // insert a deletePopoverVisible for every row data
            this.tableData = response.data.data.map(obj => ({...obj, deletePopoverVisible: false}))
          } else {
            console.log(response.data.message)
            this.tableData = []
          }
        })
    },
    onNewClick() {
      this.currentCustomer = {
        username: '',
        balance: '',
        business: '',
        cardNumber: '',
        companyAddress: '',
        companyCreditNumber: '',
        companyName: '',
        legalRepAddr: '',
        legalRepId: '',
        legalRepName: '',
        legalRelTel: ''
      }
      this.editOrCreateDialogTitle = '添加客户'
      this.editOrCreateDialogVisible = true
    },
    onEditClick: function(row) {
      this.currentCustomer = row
      this.editOrCreateDialogTitle = '编辑客户'
      this.editOrCreateDialogVisible = true
    },
    editOrCreateCustomer() {
      let url
      if (this.currentCustomer.id === undefined) {
        url = '/api/customers'
      } else {
        url = `/api/customers/${this.currentCustomer.id}`
      }
      this.$http.post(url, this.currentCustomer).then((response) => {
        if (response.data.status === "OK") {
          this.editOrCreateDialogVisible = false
        } else {
          console.log(response.data.message)
        }
      })
    },
    deleteCustomer(index, customer) {
      const url = `/api/customers/${customer.id}`
      this.$http.delete(url).then((response) => {
        if (response.data.status === "OK") {
          this.tableData.splice(index, 1)
        } else {
          console.log(response.data.message)
        }
      })
    },
  },
  beforeRouteEnter(to, from, next) {
    axios.get("/api/me").then((response) => {
      if (response.data.status === "OK") {
        next((vm) => {
          vm.username = response.data.data
        })
      } else {
        next("/login")
      }
    }).catch(() => next('/login'))
  },
}
</script>

<style scoped>
.admin-btn {
  width: 50%;
}

.table-expand {
  font-size: 0;
}
.table-expand label {
  width: 90px;
  color: #99a9bf;
}
.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

</style>