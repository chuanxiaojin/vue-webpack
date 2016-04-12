
ATT!!

// 管理员所有配置要素暂时不要删除
学生端：

## 学生首页

 GET  /student/:id

// 当前用户传 id默认为-1;

    {
      "id": 1,
      "name": "马云"
      "school": "理工大学附属中中学"
      "class": "初三（2013级）" 3班
      "stuNum": 111212121212,
      "sign": "这是一条签名"
      "birth": 2002-02-02
      "constellation": "射手"
      "blood": "A",
      "interest": "adsad",
      "homepage": 'http'
    }

put /student?id=x&sign=""&birth="xx"&constellation&interest&&homepage

  {
    "id": 必填
     birth":
    }



get /student/:id?start=22&limit=100&search="xxx"&classId=""&gradeId=xxx

// 更多 地址 /student/:id
[{
  "id":,
  "name":
  "stuId":
  "sign":"",
  "thumb":.
}]

get /grade
[{
  "id":,
  "name":
}]


get /class?gradeId=xx

[{
  "id":,
  "name":
}]


## 个人愿景

get /xnxq
{
  "xn": ['2014-2015','2013-2014'];
  "curXq": 1 // 1是第一学期 2是第二学期
}


get student/:id/career?xn='ddd'&xq=1

{
  "id":
  "title": //可又可无
  "content":
}


put student/:id/career/:id

{
  "id":
  "title":
  "content":
}



get student/:id/goal?xn='ddd'&xq=1

[{
  "id":122,
  "week": 20,
  "content": "本周目标"，
  "score": "7",
  "summary": "小撒大大撒'"
}]

post student/:id/goal/
参数：

{
   "content": "本周目标"
}


put student/:id/goal/:id

// 谁更新传谁
[{
  "id":122,
  "week": 20,
  "content": "本周目标"，
  "score": "7",
  "summary": "小撒大大撒'"
}]


##  所有配置上衣下一接口

put moveOption/up
put moveOption/down
传参数
{
  id: "xxx"
}



get /moralOption

[{
  "id":id,
  "name": "公民接续",
}]


POST /moralOption

{
  "name": "公民接续",

}

PUT /moralOption
{
  "id":id,
  "name": "公民接续"
}

get moralOptionList
[{id:
  name:
  children[{
   id:
   name
   userFlag// 启用状态
   desc: //解释
  }]
}]


post  /moralOption/:id

 参数：

[{
  "name": xxx,
  "description": rrr
}]


get /ZhengjiList?id=xxxx

 params: ID 为 moralOption.id

[{
  "id"
  "name":
  "description"
  "stuName":
  "stuNum":
}]


delete /ZhengjiList

参数为ID

[122,323323,2]


put /zhengjiPass

参数为ID

[122,323323,2]




