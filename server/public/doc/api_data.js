define({ "api": [
  {
    "type": "get",
    "url": "/classes?gradeId=xx",
    "title": "获取班级列表",
    "name": "GetClasses",
    "group": "Common",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gradeId",
            "description": "<p>已选择的年级id</p> "
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
            "field": "id",
            "description": "<p>班级id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>班级名称</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n[{\n    \"id\": 1,\n    \"name\": \"一班\"\n},{\n    \"id\": 2,\n    \"name\": \"二班\"\n},{\n    \"id\": 3,\n    \"name\": \"三班\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/grades",
    "title": "获取年级列表",
    "name": "GetGrades",
    "group": "Common",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>年级id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>年级名称</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n[{\n    \"id\": 1,\n    \"name\": \"初一\"\n},{\n    \"id\": 2,\n    \"name\": \"初二\"\n},{\n    \"id\": 3,\n    \"name\": \"初三\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/subject",
    "title": "获取学科",
    "name": "GetSubject",
    "group": "Common",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学科id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>学科名称</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n[{\n  \"id\": \"1231\",\n  \"name\": \"语文\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/weekes",
    "title": "获取学周列表",
    "name": "GetWeek",
    "group": "Common",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "week",
            "description": "<p>学周数组,从大到小排序，第一个为当前学周</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n\n[16,15]",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/who",
    "title": "获取当前用户",
    "name": "GetWho",
    "group": "Common",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>用户类型（ 1 学生2 班主任 3 管理员 ）</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n{\n  \"id\": \"1231\",\n  \"type\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/xnxqs",
    "title": "获取学年学期",
    "name": "GetXnxq",
    "group": "Common",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "curXq",
            "description": "<p>当前学期:1是第一学期,2是第二学期</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "xns",
            "description": "<p>学年数组，第一个为当前学年</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n{\n  \"curXq\": 1\n  \"xns\": ['2014-2015','2013-2014'],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "put",
    "url": "option/:id/down",
    "title": "配置项下移",
    "name": "MoveDownOption",
    "group": "Common",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>配置项id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 201 CREATED\n  {}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "put",
    "url": "option/:id/up",
    "title": "配置项上移",
    "name": "MoveUpOption",
    "group": "Common",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>配置项id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 201 CREATED\n {}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/students/:id?page=22&per_page=100&search=xxx&classId=xxx&gradeId=xxx",
    "title": "获取学生列表列表",
    "name": "GetStuList",
    "group": "Index",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>当前用户的id</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>列表的起始页码</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少同学</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>搜索的学生姓名或学籍号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "classId",
            "description": "<p>班级id （管理员搜索学生时用到）</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gradeId",
            "description": "<p>年级id （管理员搜索学生时用到）</p> "
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
            "field": "totalCount",
            "description": "<p>学生总数</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>学生信息数组</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>用户id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>学生名字</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.stuNum",
            "description": "<p>学籍号</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.avatar",
            "description": "<p>头像</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sign",
            "description": "<p>签名</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "   HTTP/1.1 200 OK\n\n{\n    \"totalCount\": 1000,\n    \"data\": [{\n        \"id\": 1234567,\n        \"name\": \"周小明\",\n        \"stuNum\": 1120930495057,\n        \"avatar\": \"http://img/12313\",\n        \"sign\": \"这是小明的个性签名\"\n    }, {\n        \"id\": 1234568,\n        \"name\": \"苏小童\",\n        \"stuNum\": 1120930495050,\n        \"avatar\": \"1234567\",\n        \"sign\": \"这是小童的个性签名\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/students/:id",
    "title": "显示学生基本信息",
    "name": "GetStudent",
    "group": "Index",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>当前学生id，默认为-1</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>当前学生实际id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>当前学生姓名</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schoolName",
            "description": "<p>学校名称</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gradeName",
            "description": "<p>年级</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "degree",
            "description": "<p>级</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "className",
            "description": "<p>班级</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stuNum",
            "description": "<p>当前学生学号</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>个性签名</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "constellation",
            "description": "<p>星座</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bloodGroup",
            "description": "<p>血型</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "interest",
            "description": "<p>兴趣</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "homepage",
            "description": "<p>个人主页</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n{\n    \"id\": -1,\n    \"name\": \"马云\",\n    \"schoolName\": \"实验二小\",\n    \"gradeName\": \"1年级\",\n    \"degree\": \"2013\",\n    \"className\": \"8班\",\n    \"stuNum\": \"1120930495055\",\n    \"sign\": \"这是一条个性签名\",\n    \"birthday\": \"2002-02-02\",\n    \"constellation\": \"白羊\",\n    \"bloodGroup\": \"A型\",\n    \"interest\": \"读书和看报纸\",\n    \"homepage\": \"http://链接\",\n    \"avatar\": \"http://img/12313\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Index"
  },
  {
    "type": "put",
    "url": "/students/:id?sign=xxx&birthday=yyy&constellation=xxx&bloodGroup=B&interest=xyx&homepage=zzz",
    "title": "编辑学生部分基本信息",
    "name": "UpdateStuInfo",
    "group": "Index",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学生id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>个性签名</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "constellation",
            "description": "<p>星座</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bloodGroup",
            "description": "<p>血型</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interest",
            "description": "<p>兴趣爱好</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "homepage",
            "description": "<p>个人主页链接</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Index"
  },
  {
    "type": "put",
    "url": "/moral/options/:id/elements/:id?name=xxx&description",
    "title": "修改评价要素",
    "name": "AddAccess",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>品德分组id  //品德要素是品德分组的所属分类</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>要素名称和描述</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>要素描述</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "post",
    "url": "/moral/options/:id/elements/",
    "title": "新增评价要素",
    "name": "AddAccess",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>品德分组id  //品德要素是品德分组的所属分类</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>要素名称和描述传递数组！</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>要素名称和描述</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>要素描述</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "put",
    "url": "/moral/collects/options/:id/elements/access?id=123,213",
    "title": "移入评价要素列表",
    "name": "CollectElementsPass",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>评价要素id数组</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "delete",
    "url": "/moral/collects/options/:id/elements?id=123,213",
    "title": "删除选中的评价要素",
    "name": "DeleteCollectElements",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "id",
            "description": "<p>评价要素id以逗号隔开。</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NO CONTENT",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "get",
    "url": "/moral/options/elements/",
    "title": "显示评价要素列表  //评价要素管理——评价要素管理中",
    "name": "GetAccessList",
    "group": "Moral",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>品德分组id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>品德分组名称</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "elements",
            "description": "<p>分组下的要素列表</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elements.id",
            "description": "<p>要素id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elements.name",
            "description": "<p>要素名称</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "elements.userFlag",
            "description": "<p>使用状态（0：禁用，1：使用）</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "elements.descripton",
            "description": "<p>描述</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[{\n    \"id\":   \"123123\",\n    \"name\": \"公民素养\",\n    \"elements\": [{\n            \"id\": 123,\n            \"name\": \"遵守交通规则\",\n            \"userFlag\": 0,   //启用状态\n            \"description\":\"不闯红灯，行人行梯靠右,排队上车\"  //解释说明\n     },{\n            \"id\": 124,\n            \"name\": \"尊老爱幼\",\n            \"userFlag\": 1,\n            \"description\":\"我们应该尊老爱幼XXX\"\n     }]\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "get",
    "url": "/moral/collects/options/:id/elements?page=1&per_page=10",
    "title": "获取评价要素征集列表",
    "name": "GetCollectElements",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>评价要素ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>请求页数</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>请求每页数量</p> "
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
            "field": "totalCount",
            "description": "<p>要素总数</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>要素数组</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>要素id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>要素名称</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>要素描述</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.stuName",
            "description": "<p>学生名字</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.stuNum",
            "description": "<p>学生学籍号</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"totalCount\": 10,\n    \"data\": [{\n        \"id\": \"123\",\n        \"name\": \"遵守交通规则\",\n        \"description\": \"xxx\",\n        \"stuName\": \"xxx\",\n        \"stuNum\": 123123\n    }, {\n        \"id\": \"124\",\n        \"name\": \"尊老爱幼\",\n        \"description\": \"xxx\",\n        \"stuName\": \"xxx\",\n        \"stuNum\": 456456\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "get",
    "url": "/moral/options",
    "title": "显示品德分组列表",
    "name": "GetMoralList",
    "group": "Moral",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>品德分组id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>品德分组名称</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[{\n    \"id\": “123\",\n    \"name\": \"公民素养\"\n},{\n    \"id\": \"124\",\n    \"name\": \"人格品质\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "get",
    "url": "student/:id/moral/options/:id/elements?xn=xxx&xq=xxx&week=11",
    "title": "查询学生的品德要素评分",
    "name": "GetStudentMoralElements",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学生id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xn",
            "description": "<p>学年（不填默认当前学年）</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xq",
            "description": "<p>学期（不填默认当前学期）</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "week",
            "description": "<p>学周（不填默认当前学周）</p> "
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
            "field": "id",
            "description": "<p>要素id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>要素名称</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>要素描述</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>评分</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [{\n         \"id\": \"123\",\n         \"name\": \"遵守交通规则\",\n         \"description\": \"xxx\",\n         \"score\": \"4\"\n     }, {\n         \"id\": \"124\",\n         \"name\": \"尊老爱幼\",\n         \"description\": \"xxx\",\n         \"score\": \"1\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "post",
    "url": "/moral/collects/options/:id/elements",
    "title": "创建征集评价要素",
    "name": "PostCollectElements",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>品德分组id  //品德要素是品德分组的所属分类</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>要素名称和描述传递数组！</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>要素名称和描述</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>要素描述</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "post",
    "url": "/moral/options",
    "title": "创建品德分组",
    "name": "PostMoral",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>品德分组内容</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "put",
    "url": "student/:id/moral/options/:id/elements/:id?score=123,213",
    "title": "修改学生品德要素的评分",
    "name": "PutStudentElementScore",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学生id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>评分</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "put",
    "url": "/moral/options/:id?name=xxx",
    "title": "更新品德分组",
    "name": "UpdateMoral",
    "group": "Moral",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>品德要素id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>品德要素名称</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "Moral"
  },
  {
    "type": "get",
    "url": "students/:id/career?xn='ddd'&xq=1",
    "title": "根据学年学期查询学生生涯规划",
    "name": "GetCareer",
    "group": "vision",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学生的id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xn",
            "description": "<p>学年</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xq",
            "description": "<p>学期</p> "
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
            "field": "id",
            "description": "<p>生涯规划id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>生涯规划标题（可为空）</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>生涯规划内容</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n{\n  \"id\": ：\"123123\",\n  \"title\": \"生涯规划标题\",\n  \"content\": \"生涯规划内容\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "vision"
  },
  {
    "type": "get",
    "url": "students/:id/goals?xn='ddd'&xq=1&page=1&per_page=10",
    "title": "获取学生周目标列表",
    "name": "GetWeekGoal",
    "group": "vision",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学生的id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xn",
            "description": "<p>学年</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>默认为1</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "per_page",
            "description": "<p>请求个数</p> "
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
            "field": "totalCount",
            "description": "<p>周目标总数</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>周目标数组</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>周目标id</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.week",
            "description": "<p>周数</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>本周目标内容</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.score",
            "description": "<p>自评分</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.summary",
            "description": "<p>周小结</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "    HTTP/1.1 200 OK\n{\n    \"totalCount\": 100 ,\n    \"data\": [{\n        \"id\": 122,\n        \"week\": 20,\n        \"content\": \"这周的目标是XXX\",\n        \"score\": 7,\n        \"summary\": \"我这周的表现还不错\"\n    }, {\n        \"id\": 123,\n        \"week\": 19,\n        \"content\": \"这周的目标是XXX\",\n        \"score\": 10,\n        \"summary\": \"我这周的表现还不错\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "vision"
  },
  {
    "type": "post",
    "url": "students/:id/goal?content=xxx",
    "title": "创建周目标",
    "name": "PostWeekGoal",
    "group": "vision",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>本周目标内容</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "vision"
  },
  {
    "type": "put",
    "url": "students/:id/career/:id?tilte=xxx&content=xxx",
    "title": "编辑当前学生生涯规划",
    "name": "UpdateCareer",
    "group": "vision",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>生涯目标id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>生涯规划标题</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>生涯规划内容</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "vision"
  },
  {
    "type": "post",
    "url": "students/:id/career/?tilte=xxx&content=xxx",
    "title": "创建生涯目标",
    "name": "UpdateCareer",
    "group": "vision",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>生涯规划标题（可为空）</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>生涯规划内容</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "vision"
  },
  {
    "type": "put",
    "url": "students/:id/goal/:goalId?content=xxx&score=2&summary=xxx",
    "title": "编辑周目标",
    "name": "UpdateWeekGoal",
    "group": "vision",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>学生的id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goalId",
            "description": "<p>周目标的id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>周目标内容</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "score",
            "description": "<p>评分</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>小结</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "/Users/paddingme/Documents/paddingme's work/front/xsczda/server/api.js",
    "groupTitle": "vision"
  }
] });