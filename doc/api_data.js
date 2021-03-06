define({ "api": [
  {
    "type": "get",
    "url": "/me",
    "title": "当前用户",
    "group": "登录",
    "description": "<p>返回当前已经登录用户的用户名</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>当前登陆用户的用户名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": \"admin1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"ERROR\",\n  \"message\": \"未登录\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "登录",
    "name": "GetMe"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "登录",
    "group": "登录",
    "description": "<p>用户登录接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"myusername\",\n  \"password\": \"mypassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": {\n    \"id\": 1,\n    \"name\": \"myusername\",\n    \"password\": \"mypassword\",\n    \"createdAt\": \"2021-04-20T04:51:33.000+00:00\",\n    \"updatedAt\": \"2021-04-20T04:51:33.000+00:00\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"ERROR\",\n  \"message\": \"用户名密码错误\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "登录",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "登出",
    "group": "登录",
    "description": "<p>退出登录</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"ERROR\",\n  \"message\": \"未登录\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "登录",
    "name": "PostLogout"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "状态",
    "group": "系统",
    "description": "<p>检查服务是否在线</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>服务在线信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": \"This service is up. Current version is v3.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "系统",
    "name": "GetStatus"
  },
  {
    "type": "delete",
    "url": "/customers/:id",
    "title": "删除顾客",
    "group": "顾客",
    "description": "<p>根据id删除指定顾客账号。</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>被删除的账号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": {\n    \"id\": 7,\n    \"cardNumber\": \"6553298765452378\",\n    \"username\": \"mayijinfu\",\n    \"balance\": 10023467.23,\n    \"companyName\": \"浙江蚂蚁小微金融服务集团股份有限公司\",\n    \"companyAddress\": \"杭州市西湖区西溪新座5幢802室\",\n    \"companyCreditCode\": \"913301067046373179\",\n    \"legalRepName\": \"井贤栋\",\n    \"legalRepId\": \"453187197004067629\",\n    \"legalRepAddr\": \"杭州市西湖区西溪新座5幢802室\",\n    \"legalRepTel\": \"01065873258\",\n    \"createdAt\": \"2021-04-22T06:58:21.000+00:00\",\n    \"updatedAt\": \"2021-04-22T09:13:55.956+00:00\",\n    \"business\": \"服务：第二类增值电信业务中的信息服务业务（限互联网信息服务业务）（具体详见《中华人民共和国增值电信业务经营许可证》）。 \"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "顾客",
    "name": "DeleteCustomersId"
  },
  {
    "type": "get",
    "url": "/customers/:id",
    "title": "获取指定id顾客",
    "group": "顾客",
    "description": "<p>根据id获取指定顾客的信息</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>根据id获取到的顾客对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": {\n    \"id\": 1,\n    \"cardNumber\": \"9988004350902879\",\n    \"username\": \"mayijinfu\",\n    \"balance\": 2132.4,\n    \"companyName\": \"浙江蚂蚁小微金融服务集团股份有限公司\",\n    \"companyAddress\": \"杭州市西湖区西溪新座5幢802室\",\n    \"companyCreditCode\": \"913301067046373179\",\n    \"legalRepName\": \"井贤栋\",\n    \"legalRepId\": \"453187197004067629\",\n    \"legalRepAddr\": \"杭州市西湖区西溪新座5幢802室\",\n    \"legalRepTel\": \"01065873258\",\n    \"createdAt\": \"2021-04-20T04:51:33.000+00:00\",\n    \"updatedAt\": \"2021-04-22T05:45:58.000+00:00\",\n    \"business\": \"服务：第二类增值电信业务中的信息服务业务（限互联网信息服务业务）...\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"ERROR\",\n  \"message\": \"客户不存在\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "顾客",
    "name": "GetCustomersId"
  },
  {
    "type": "get",
    "url": "/customers/?queryParam1=queryValue1&queryParam2=queryValue2",
    "title": "搜索顾客",
    "group": "顾客",
    "description": "<p>搜索所有满足条件的顾客，条件通过URL进行传递。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cardNumber",
            "description": "<p>卡号（精确搜索）</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "minBalance",
            "description": "<p>最小余额</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "maxBalance",
            "description": "<p>最大余额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>公司名中包含的关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>公司地址中包含的关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "business",
            "description": "<p>业务范围中包含的关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legalRepName",
            "description": "<p>法人姓名（精确搜索）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>所有的顾客信息，以数组形式存储</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"cardNumber\": \"9988004350902879\",\n      \"username\": \"mayijinfu\",\n      \"balance\": 2132.4,\n      \"companyName\": \"浙江蚂蚁小微金融服务集团股份有限公司\",\n      \"companyAddress\": \"杭州市西湖区西溪新座5幢802室\",\n      \"companyCreditCode\": \"913301067046373179\",\n      \"legalRepName\": \"井贤栋\",\n      \"legalRepId\": \"453187197004067629\",\n      \"legalRepAddr\": \"杭州市西湖区西溪新座5幢802室\",\n      \"legalRepTel\": \"01065873258\",\n      \"business\": \"服务：第二类增值电信业务中的信息服务业务（限互联网信息服务业务）...\"\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "顾客",
    "name": "GetCustomersQueryparam1Queryvalue1Queryparam2Queryvalue2"
  },
  {
    "type": "patch",
    "url": "/customers/{id}",
    "title": "更新顾客",
    "group": "顾客",
    "description": "<p>更新顾客账号信息。只有管理员可以进行该操作。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>要更新的字段</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"balance\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>更新后的顾客信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": {\n    \"id\": 3,\n    \"cardNumber\": \"9558885257876533\",\n    \"username\": \"tencent\",\n    \"balance\": 0,\n    \"companyName\": \"腾讯科技（ 深圳 ）有限公司\",\n    \"companyAddress\": \"深圳市南山区高新区科技中一路腾讯大厦35层\",\n    \"companyCreditCode\": \"9144030071526726XG\",\n    \"legalRepName\": \"马化腾\",\n    \"legalRepId\": \"453187199004067629\",\n    \"legalRepAddr\": \"深圳市南山区高新区科技中一路腾讯大厦35层\",\n    \"legalRepTel\": \"075586013388\",\n    \"createdAt\": \"2021-04-20T04:51:33.000+00:00\",\n    \"updatedAt\": \"2021-04-22T09:16:37.000+00:00\",\n    \"business\": \"一般经营项目是 ： 从事计算机软硬件的技术开发 、 销售自行开发的软件 \"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "顾客",
    "name": "PatchCustomersId"
  },
  {
    "type": "post",
    "url": "/customers",
    "title": "创建新顾客",
    "group": "顾客",
    "description": "<p>创建一个新的顾客账号。只有管理员可以进行该操作。</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n  \"username\": \"mayijinfu\",\n  \"balance\": \"10023467.23\",\n  \"cardNumber\": \"6553298765452378\",\n  \"companyAddress\": \"杭州市西湖区西溪新座5幢802室\",\n  \"companyCreditNumber\": \"\",\n  \"companyName\": \"浙江蚂蚁小微金融服务集团股份有限公司\",\n  \"legalRepAddr\": \"杭州市西湖区西溪新座5幢802室\",\n  \"legalRepId\": \"453187197004067629\",\n  \"legalRepName\": \"井贤栋\",\n  \"legalRelTel\": \"\",\n  \"companyCreditCode\": \"913301067046373179\",\n  \"legalRepTel\": \"01065873258\",\n  \"business\": \"服务：第二类增值电信业务中的信息服务业务（限互联网信息服务业务）（具体详见《中华人民共和国增值电信业务经营许可证》）。 \"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>请求的返回状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>关于返回状态的具体信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>成功创建的顾客</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\",\n  \"message\": null,\n  \"data\": {\n    \"id\": 5,\n    \"cardNumber\": \"6553298765452378\",\n    \"username\": \"mayijinfu\",\n    \"balance\": 10023467.23,\n    \"companyName\": \"浙江蚂蚁小微金融服务集团股份有限公司\",\n    \"companyAddress\": \"杭州市西湖区西溪新座5幢802室\",\n    \"companyCreditCode\": \"913301067046373179\",\n    \"legalRepName\": \"井贤栋\",\n    \"legalRepId\": \"453187197004067629\",\n    \"legalRepAddr\": \"杭州市西湖区西溪新座5幢802室\",\n    \"legalRepTel\": \"01065873258\",\n    \"createdAt\": \"2021-04-22T06:58:21.447+00:00\",\n    \"updatedAt\": \"2021-04-22T06:58:21.447+00:00\",\n    \"business\": \"服务：第二类增值电信业务中的信息服务业务（限互联网信息服务业务）（具体详见《中华人民共和国增值电信业务经营许可证》）。 \"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/bank/fake/adabank3/BankController.java",
    "groupTitle": "顾客",
    "name": "PostCustomers"
  }
] });
