/**
 * @api {get} /grades 年级列表-获取
 * @apiName GetGrades
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id   年级id
 * @apiSuccess {String} name 年级名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * [{
 *     "id": 1,
 *     "name": "初一"
 * },{
 *     "id": 2,
 *     "name": "初二"
 * },{
 *     "id": 3,
 *     "name": "初三"
 * }]
 */


/**
 * @api {get} /classes?gradeId=xx 班级列表-获取
 * @apiName GetClasses
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiParam  {Number} gradeId 已选择的年级id  必填
 *
 * @apiSuccess {String} id   班级id
 * @apiSuccess {String} name 班级名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * [{
 *     "id": 1,
 *     "name": "一班"
 * },{
 *     "id": 2,
 *     "name": "二班"
 * },{
 *     "id": 3,
 *     "name": "三班"
 * }]
 */

/**
 * @api {get} /xnxqs 学年学期-获取
 * @apiName GetXnxq
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Number} curXq 当前学期:1是第一学期,2是第二学期
 * @apiSuccess {Array} xns 学年数组，第一个为当前学年
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * {
 *   "curXq": 1
 *   "xns": ['2014-2015','2013-2014'],
 * }
 */

/**
 * @api {get} /weeks?xn="2015-2016"&xq="第一学期" 学周列表-获取
 * @apiName GetWeek
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 *
 *
 * @apiParam  {String} xn 学年 非必填
 * @apiParam  {String} xq 学期 非必填（请传'第一学期 或 第二学期'）
 *
 *
 * @apiSuccess {Array} week 学周数组,从大到小排序，第一个为当前学周
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *     [16,15]
 *
 */

/**
 * @api {put} /options/:id/up  配置项-上移
 * @apiName MoveUpOption
 * @apiGroup Common
 * @apiVersion 1.0.0
 * @apiParam {String} id 配置项id 必填
 *
 *
 * @apiParamExample Success-Response
 *   HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {put} /options/:id/down  配置项-下移
 * @apiName MoveDownOption
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 配置项id 必填
 *
 * @apiParamExample Success-Response
 *  HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {get} /who 当前用户-获取
 * @apiName GetWho
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id   用户id
 * @apiSuccess {Number} type 用户类型（ 1 学生2 班主任 4 管理员 6 角色分配管理员）返回结果为角色相加值，如既是班主任又是管理员的用户返回值为 2+4=6
 * @apiSuccess {String} token jwt（该请求不需要jwt）
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * {
 *     "id": "bdfd07b56059419f93ab400bcd34bb00",
 *     "token": "xsaxaxsaxsa",
 *     "type": 1
 * }
 */

/**
 * @api {get} /subjects 学科列表-获取
 * @apiName GetSubject
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id   学科id
 * @apiSuccess {String} name 学科名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * [{
 *   "id": "1231",
 *   "name": "语文"
 * }]
 */

/**
 * @api {get} /resource/files/:id 文件-下载
 * @apiName GetFiles
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   文件id 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *    {}
 */

/**
 * @api {POST} /resource/upload/ueditor  编辑文件-上传
 * @apiName POSTUeditorFiles
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 OK
 *    {}
 */

/**
 * @api {delete} /resource/files?id=s123123,123123  文件-删除
 * @apiName DelFiles
 * @apiGroup Common
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   文件ids，以逗号分隔 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 204 NO CONTENT
 */

/**
 * @api {get} /students/:id 学生信息-获取
 * @apiName GetStudent
 * @apiGroup Index
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 学生id，默认为-1 必填
 *
 * @apiSuccess {String} id 当前学生实际id
 * @apiSuccess {String} name 当前学生姓名
 * @apiSuccess {String} schoolName 学校名称
 * @apiSuccess {String} gradeName 年级
 * @apiSuccess {String} degree 级
 * @apiSuccess {String} className 班级
 * @apiSuccess {String} stuNum 当前学生学号
 * @apiSuccess {String} sign 个性签名
 * @apiSuccess {String} birthday  生日
 * @apiSuccess {String} constellation 星座
 * @apiSuccess {String} bloodGroup 血型
 * @apiSuccess {String} interest  兴趣
 * @apiSuccess {String} homepage  个人主页
 * @apiSuccess {String} avatar  头像
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * {
 *     "id": "-1",
 *     "name": "马云",
 *     "schoolName": "实验二小",
 *     "gradeName": "1年级",
 *     "degree": "2013",
 *     "className": "8班",
 *     "stuNum": "1120930495055",
 *     "sign": "这是一条个性签名",
 *     "birthday": "2002-02-02",
 *     "constellation": "白羊座",
 *     "bloodGroup": "A型",
 *     "interest": "读书和看报纸",
 *     "homepage": "http://链接",
 *     "avatar": "http://img/12313"
 * }
 */

/**
 * @api {put} /students/:id?sign=xxx&birthday=yyy&constellation=xxx&bloodGroup=B&interest=xx&homepage=xx 学生信息-编辑
 * @apiName UpdateStuInfo
 * @apiGroup Index
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} id   学生id 必填
 * @apiParam  {String} sign 个性签名  		非必填
 * @apiParam  {String} birthday 生日  		非必填
 * @apiParam  {String} constellation 星座 	非必填
 * @apiParam  {String} bloodGroup 血型	 	非必填
 * @apiParam  {String} interest 兴趣爱好 	非必填
 * @apiParam  {String} homepage 个人主页链接 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {post} /students/avatar?content=xxxx 头像图片-上传
 * @apiName PostAvatar
 * @apiGroup Index
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} content  64位编码图片 必填（如 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAACeCAYAAABzepVJAAAABmJLR…/BSDCSAHgJRoKx4xhKIjGAwUr5Z/l3s5PTEowEY45i/H8LttV4CMdyyAAAAABJRU5ErkJggg==）
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 OK
 *    { id: "213123"}
 */


/**
 * @api {get} /students?page=22&per_page=100&search=xxx&classId=xxx&gradeId=xxx 学生信息列表-获取
 * @apiName GetStuList
 * @apiGroup Index
 * @apiVersion 1.0.0
 *
 * @apiParam  {Number} page 列表的起始页码 必填
 * @apiParam  {Number} per_page 每页显示多少同学 必填
 * @apiParam  {String} search 搜索的学生姓名或学籍号 非必填
 * @apiParam  {String} classId 班级id  非必填（管理员搜索学生时用到）
 * @apiParam  {String} gradeId 年级id  非必填（管理员搜索学生时用到）
 *
 * @apiSuccess {String} totalCount    学生总数
 * @apiSuccess {Array}  data          学生信息数组
 * @apiSuccess {String} data.id 当前学生实际id
 * @apiSuccess {String} data.name 当前学生姓名
 * @apiSuccess {String} data.schoolName 学校名称
 * @apiSuccess {String} data.gradeName 年级
 * @apiSuccess {String} data.degree 班级
 * @apiSuccess {String} data.className 班级
 * @apiSuccess {String} data.stuNum 当前学生学号
 * @apiSuccess {String} data.sign 个性签名
 * @apiSuccess {String} data.birthday  生日
 * @apiSuccess {String} data.constellation 星座
 * @apiSuccess {String} data.bloodGroup 血型
 * @apiSuccess {String} data.interest  兴趣
 * @apiSuccess {String} data.homepage  个人主页
 * @apiSuccess {String} data.avatar  头像
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *     		"id": "1231",
 *     		"name": "马云",
 *     		"schoolName": "实验二小",
 *     		"gradeName": "1年级",
 *     		"degree": "2013",
 *     		"className": "8班",
 *     		"stuNum": "1120930495055",
 *     		"sign": "这是一条个性签名",
 *     		"birthday": "2002-02-02",
 *     		"constellation": "白羊",
 *     		"bloodGroup": "A型",
 *     		"interest": "读书和看报纸",
 *     		"homepage": "http://链接",
 *     		"avatar": "http://img/12313"
 *      }, {
 *     		"id": "1231",
 *     		"name": "马云",
 *     		"schoolName": "实验二小",
 *     		"gradeName": "1年级",
 *     		"degree": "2013",
 *     		"className": "8班",
 *     		"stuNum": "1120930495055",
 *     		"sign": "这是一条个性签名",
 *     		"birthday": "2002-02-02",
 *     		"constellation": "白羊",
 *     		"bloodGroup": "A型",
 *     		"interest": "读书和看报纸",
 *     		"homepage": "http://链接",
 *     		"avatar": "http://img/12313"
 *      }]
 *  }
 *
 */




/**
 * @api {get} students/:id/careers?xn='ddd'&xq=1 生涯目标-获取
 * @apiName GetCareer
 * @apiGroup vision
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 学生的id 必填
 * @apiParam {String} xn 学年 非必填（不填默认为当前学年）
 * @apiParam {String} xq 学期 非必填（不填默认为当前学期）
 *
 * @apiSuccess {String} id      生涯规划id
 * @apiSuccess {String} title   生涯规划标题（可为空）
 * @apiSuccess {String} content 生涯规划内容
 * @apiSuccess {String} cjsj    创建时间
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * {
 *   "id": ："123123",
 *   "title": "生涯规划标题",
 *   "content": "生涯规划内容",
 *   "cjsj": "2015-11-02 15:55"
 * }
 */


/**
 * @api {post} /careers/?tilte=xxx&content=xxx 生涯目标-创建
 * @apiName PostCareer
 * @apiGroup vision
 * @apiVersion 1.0.0
 *
 * @apiParam {String} title 生涯规划标题 非必填
 * @apiParam {String} content 生涯规划内容 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {put} /careers/:id?tilte=xxx&content=xxx 生涯规划-编辑
 * @apiName UpdateCareer
 * @apiGroup vision
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 生涯目标id 必填
 * @apiParam {String} title 生涯规划标题 非必填
 * @apiParam {String} content 生涯规划内容 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {get} students/:id/goals?xn='ddd'&xq=1&page=1&per_page=10 周目标列表-获取
 * @apiName GetWeekGoal
 * @apiGroup vision
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 学生的id 必填
 * @apiParam {String} xn 学年 非必填（不填默认为当前学年）
 * @apiParam {String} xq 学期 非必填（不填默认为当前学期）
 * @apiParam {String} page 默认为1 必填
 * @apiParam {String} per_page 请求个数 必填
 *
 * @apiSuccess {String} totalCount    周目标总数
 * @apiSuccess {Array}  data 周目标数组
 * @apiSuccess {String} data.id 周目标id
 * @apiSuccess {Number} data.week 周数
 * @apiSuccess {String} data.content 本周目标内容
 * @apiSuccess {Number} data.score 自评分
 * @apiSuccess {String} data.summary 周小结
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * {
 *     "totalCount": 100 ,
 *     "data": [{
 *         "id": 122,
 *         "week": 20,
 *         "content": "这周的目标是XXX",
 *         "score": 7,
 *         "summary": "我这周的表现还不错"
 *     }, {
 *         "id": 123,
 *         "week": 19,
 *         "content": "这周的目标是XXX",
 *         "score": 10,
 *         "summary": "我这周的表现还不错"
 *     }]
 * }

 */


/**
 * @api {post} /goals?content=xxx   周目标-创建
 * @apiName PostWeekGoal
 * @apiGroup vision
 * @apiVersion 1.0.0
 *
 * @apiParam {String} content 本周目标内容 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *    {}
 */


/**
 * @api {put} /goals/:id?content=xxx&content=xxx&score=2&summary=xxx  周目标-编辑
 * @apiName UpdateWeekGoal
 * @apiGroup vision
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  周目标的id 必填
 * @apiParam {String} content 周目标内容 非必填
 * @apiParam {String} score   评分 非必填
 * @apiParam {String} summary 小结 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *    {}
 */




/**
 * @api {get} /moral/options 品德分组列表-获取
 * @apiName GetMoralList
 * @apiGroup Moral
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id   品德分组id
 * @apiSuccess {String} name 品德分组名称
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [{
 *     "id": “123",
 *     "name": "公民素养"
 * },{
 *     "id": "124",
 *     "name": "人格品质"
 * }]
 */

/**
 * @api {post} /moral/options?name=xxxx 品德分组-创建
 * @apiName PostMoral
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name 品德分组内容 必填
 *
 * @apiSuccessExample Success-Response:
 *       HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {put} /moral/options/:id?name=xxx 品德分组-编辑
 * @apiName UpdateMoral
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 品德要素id 必填
 * @apiParam {String} name 品德要素名称 必填
 *
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {get} /moral/options/elements  评价要素列表-获取
 * @apiName GetMoralElements
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id   品德分组id
 * @apiSuccess {String} name 品德分组名称
 * @apiSuccess {Array}  elements         分组下的要素列表
 * @apiSuccess {String} elements.id        要素id
 * @apiSuccess {String} elements.name      要素名称
 * @apiSuccess {Number} elements.userFlag  使用状态（0：禁用，1：使用）
 * @apiSuccess {String} elements.descripton描述
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * [{
 *     "id":   "123123",
 *     "name": "公民素养",
 *     "elements": [{
 *             "id": 123,
 *             "name": "遵守交通规则",
 *             "userFlag": 0,   //启用状态
 *             "description":"不闯红灯，行人行梯靠右,排队上车"  //解释说明
 *      },{
 *             "id": 124,
 *             "name": "尊老爱幼",
 *             "userFlag": 1,
 *             "description":"我们应该尊老爱幼XXX"
 *      }]
 * }]
 */


/**
 * @api {post} /moral/options/:id/elements/?name="A"&description="我是A得描述"&name="B"&description="我是B得描述"   评价要素-创建
 * @apiName PostMoralElements
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id           品德分组id（品德要素是品德分组的所属分类）必填
 * @apiParam {String} name        要素名称和描述 必填
 * @apiParam {String} description  要素描述 非必填 n 如果没有请填空 保持个数一致。
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {put} /moral/elements/:id?name=xxx&description?useFlag=1   评价要素-编辑
 * @apiName PutElement
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id           要素id 必填
 * @apiParam {String} name         要素名称和描述 非必填
 * @apiParam {String} description  要素描述 非必填
 * @apiParam {String} useFlag     使用状态（0：禁用；1：使用） 非必填
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 CREATED
 *    {}
 */


/**
 *
 * @api {get} /moral/options/:id/collects/elements?page=1&per_page=10  征集评价要素列表-获取
 * @apiName GetCollectElements
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id 品德分组id 必填
 * @apiParam {Number} page 请求页数 必填
 * @apiParam {Number} per_page 请求每页数量 必填
 *
 * @apiSuccess {String} totalCount   要素总数
 * @apiSuccess {Array}  data         要素数组
 * @apiSuccess {String} data.id    要素id
 * @apiSuccess {String} data.name    要素名称
 * @apiSuccess {String} data.description   要素描述
 * @apiSuccess {String} data.stuName     学生名字
 * @apiSuccess {String} data.stuNum    学生学籍号
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *      "totalCount": 10,
 *      "data": [{
 *          "id": "123",
 *          "name": "遵守交通规则",
 *          "description": "xxx",
 *          "stuName": "xxx",
 *          "stuNum": 123123
 *      }, {
 *          "id": "124",
 *          "name": "尊老爱幼",
 *          "description": "xxx",
 *          "stuName": "xxx",
 *          "stuNum": 456456
 *      }]
 *  }
 */



/**
 * @api {delete} /moral/collects/elements?id=123,213  征集评价要素-删除
 * @apiName DeleteCollectElements
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 评价要素id以逗号隔开。 必填
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 204 NO CONTENT
 */

/**
 * @api {put} /moral/collects/elements?id=123,213  征集评价要素-移入评价列表
 * @apiName CollectElementsPass
 * @apiGroup Moral-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 评价要素id以逗号隔开。 必填
 *
 *  * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 CREATED
 *    {}
 */


/**
 * @api {get} student/:id/moral/options/:id/elements?xn=xxx&xq=xxx&week=11  品德评分列表-获取
 * @apiName GetStudentMoralElements
 * @apiGroup Moral
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id     学生id  必填
 * @apiParam {String} option.id     品德分组id 必填
 * @apiParam {String} xn     学年（不填默认当前学年） 非必填
 * @apiParam {String} xq     学期（不填默认当前学期） 非必填
 * @apiParam {String} week   学周（不填默认当前学周） 非必填
 *
 *
 * @apiSuccess {String} id      要素id
 * @apiSuccess {String} name    要素名称
 * @apiSuccess {String} description   要素描述
 * @apiSuccess {String} score   评分
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  [{
 *          "id": "123",
 *          "name": "遵守交通规则",
 *          "description": "xxx",
 *          "score": "4"
 *      }, {
 *          "id": "124",
 *          "name": "尊老爱幼",
 *          "description": "xxx",
 *          "score": "1"
 * }]
 */

/**
 * @api {post} /moral/elements/:id/scores?score=12 品德评分-创建
 * @apiName PutStudentElementScore
 * @apiGroup Moral
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 要素id 必填
 * @apiParam {String} score 评分 必填
 *
 *  * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {put} /moral/elements/:id/scores?score=12 品德评分-编辑
 * @apiName PutStudentElementScore
 * @apiGroup Moral
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 要素id 必填
 * @apiParam {String} score 评分 必填
 *
 *  * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 CREATED
 *    {}
 */

/**
 * @api {post} /moral/options/:id/collects/elements?name="A"&description="我是A得描述"&name="B"&description="我是B得描述" 征集要素-创建
 * @apiName PostCollectElements
 * @apiGroup Moral
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id           品德分组id  必填
 * @apiParam {String} name        要素名称和描述 必填
 * @apiParam {String} description  要素描述 非必填 n 如果没有请填空 保持个数一致。
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 CREATED
 *    {}
 */


/**
 * @api {get} /resource/download/reports?id=213123,123123 报告文件-下载
 * @apiName GetReportFiles
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   文件id,以逗号分隔
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *    {}
 */

/**
 * @api {get} student/:id/subjects/reports?subjectId=xxx&page=11&per_page=1&xn=xx&xq=xx&week=12  学科实践报告列表-获取
 * @apiName GetSubjectReports
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 学生id 必填
 * @apiParam {String} subjectId 学科id（不填默认全部学科） 非必填
 * @apiParam {String} xn     学年（不填默认当前学年）非必填
 * @apiParam {String} xq     学期（不填默认当前学期）非必填
 * @apiParam {String} week   学周（不填默认当前学周）非必填
 * @apiParam {Number} page 列表的起始页码 必填
 * @apiParam {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount   报告总数
 * @apiSuccess {Array}  data    报告数组
 * @apiSuccess {String} data.id      报告id
 * @apiSuccess {String} data.title    报告标题
 * @apiSuccess {String} data.subjectName   学科名称
 * @apiSuccess {Number} data.fileCount   附件总数
 * @apiSuccess {String} data.scrq     创建时间
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *          "id": "123123",
 *          "title": "语文报告",
 *          "subjectName": "语文",
 *          "fileCount": 12,
 *          "scrq": "2015-02-01 14:44",
 *      }, {
 *          "id": "1234568",
 *          "title": "数学报告",
 *          "subjectName": "数学",
 *          "fileCount": 1,
 *          "scrq": "2015-02-01 14:44",
 *      }]
 *  }
 */


 /**
 * @api {post} /subjects/reports?subjectId=xxx&title=xxx&fileIds=123,123,123  学科实验报告-创建
 * @apiName PostSubjectReports
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} subjectId 学科id  必填
 * @apiParam {String} title     标题   必填
 * @apiParam {String} fileIds   文件ids,以逗号分隔  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *  {}
 */


  /**
 * @api {get} student/:id/study/reports?page=11&per_page=1&xn=xx&xq=xx&week=12  研究性学习报告列表-获取
 * @apiName GetStudyReports
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 学生id 必填
 * @apiParam {String} xn     学年（不填默认当前学年） 非必填
 * @apiParam {String} xq     学期（不填默认当前学期） 非必填
 * @apiParam {String} week   学周（不填默认当前学周） 非必填
 * @apiParam {Number} page 列表的起始页码 必填
 * @apiParam {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount   报告总数
 * @apiSuccess {Array}  data    报告数组
 * @apiSuccess {String} data.id      报告id
 * @apiSuccess {String} data.title   报告标题
 * @apiSuccess {Number} data.fileCount   附件总数
 * @apiSuccess {String} data.scrq     创建时间
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *          "id": "123123",
 *          "title": "语文报告",
 *          "fileCount": 12,
 *          "scrq": "2015-02-01 14:44",
 *      }, {
 *          "id": "1234568",
 *          "title": "数学报告",
 *          "fileCount": 1,
 *          "scrq": "2015-02-01 14:44",
 *      }]
 *  }
 */

 /**
 * @api {post} /study/reports?title=xxx&fileIds=123,123,123  研究性学习报告-创建
 * @apiName PostStudyReports
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} title     标题  必填
 * @apiParam {String} fileIds   文件ids,以逗号分隔  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *  {}
 */


/**
 * @api {get} /reports/:id  报告信息-获取
 * @apiName GetReportsById
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  报告id 必填
 *
 * @apiSuccess {String} id      报告id
 * @apiSuccess {String} title   报告标题
 * @apiSuccess {String} subjectName   学科名称
 * @apiSuccess {Array}  files   文件名称
 * @apiSuccess {String} files.id  文件id
 * @apiSuccess {String} files.name 文件名称
 * @apiSuccess {String} files.type 文件类型
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "id": 1000,
 *      "tilte": "语文报告",
 *      "subjectName": "语文",
 *      "files": [{
 *          "id": "123123",
 *          "name": "作文文档",
 *          "type": "doc"
 *      }, {
 *          "id": "122133123",
 *          "name": "小狗",
 *          "type": "png"
 *      }]
 *  }
 */

/**
 * @api {put} /reports/:id  报告信息-编辑
 * @apiName PutReportsById
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} subjectId 非必填 学科id
 * @apiParam {String} title  非必填  报告标题
 * @apiParam {String} fileIds 非必填  文件ids，以逗号分隔
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *
 *  {}
 */

/**
 * @api {delete} /reports/:id  实验报告-删除
 * @apiName DeleteReports
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 报告id  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 204 NO CONTENT
 *  {}
 */


/**
 * @api {post} /resource/upload/reports  报告文件-上传
 * @apiName PostReportFiles
 * @apiGroup Report
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id  文件资源id
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *   {id:"21312"}
 */


 /**
 * @api {get} student/:id/matchs?page=11&per_page=1&xn=xx&xq=xx&week=12  竞赛经历列表-获取
 * @apiName GetStudentMatch
 * @apiGroup Match
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 学生id 必填
 * @apiParam {String} xn     学年（不填默认当前学年） 非必填
 * @apiParam {String} xq     学期（不填默认当前学期） 非必填
 * @apiParam {String} week   学周（不填默认当前学周） 非必填
 * @apiParam {Number} page 列表的起始页码 必填
 * @apiParam {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount   竞赛总数
 * @apiSuccess {Array}  data         竞赛数组
 * @apiSuccess {String} data.id      id
 * @apiSuccess {String} data.name   名称
 * @apiSuccess {String} data.organization   机构名称
 * @apiSuccess {String} data.matchTime   赛事时间
 * @apiSuccess {String} data.subjectName   学科名称
 * @apiSuccess {String} data.matchLevel   赛事等级
 * @apiSuccess {String} data.award   奖项
 * @apiSuccess {Number} data.checkState   审核状态（0：审核中，1：审核通过，2：审核不通过）
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *          "id": "123123",
 *          "name": "中国数学奥赛",
 *          "organization": "国家",
 *          "matchTime": "2015-02-01",
 *          "subjectName": "数学",
 *          "matchLevel": "省级赛事",
 *          "award": "二等奖",
 *          "checkState": 1
 *      }, {
 *          "id": "1234568",
 *          "name": "全国高中数学奥赛",
 *          "organization": "国家",
 *          "matchTime": "2015-02-01",
 *          "subjectName": "数学",
 *          "matchLevel": "国家级级赛事",
 *          "award": "特等奖",
 *          "checkState": 2
 *      }]
 *  }
 */


/**
 * @api {post} /matchs?name=xx&organization=xx&matchTime=xx&subjectId=xx&matchLevel=xx&award=xx   竞赛经历-创建
 * @apiName PutStudentMatch
 * @apiGroup Match
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   竞赛id 必填
 * @apiParam {String} name   名称 必填
 * @apiParam {String} organization   机构名称 必填
 * @apiParam {String} matchTime   赛事时间 必填
 * @apiParam {String} subjectId   学科id 必填
 * @apiParam {String} matchLevel   赛事等级 必填
 * @apiParam {String} award   奖项 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {put} /matchs/:id?name=xx&organization=xx&matchTime=xx&subjectId=xx&matchLevel=xx&award=xx  竞赛经历-编辑
 * @apiName PostStudentMatch
 * @apiGroup Match
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   竞赛id 必填
 * @apiParam {String} name   名称 必填
 * @apiParam {String} organization   机构名称 必填
 * @apiParam {String} matchTime   赛事时间 必填
 * @apiParam {String} subjectId   学科id 必填
 * @apiParam {String} matchLevel   赛事等级 必填
 * @apiParam {String} award   奖项 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */


/**
 * @api {delete} /matchs:id  竞赛经历-删除
 * @apiName DeleteStudentMatch
 * @apiGroup Match
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   竞赛id 必填
 *
* @apiSuccessExample Success-Response:
 *    HTTP/1.1 204 NO CONTENT
 */

 /**
 * @api {get} /apply/matchs?page=11&per_page=1  申请的竞赛经历列表-获取
 * @apiName GetApplyMatch
 * @apiGroup Match-mentor
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page 列表的起始页码 必填
 * @apiParam {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount   竞赛总数
 * @apiSuccess {Array}  data         竞赛数组
 * @apiSuccess {String} data.id      id
 * @apiSuccess {String} data.stuName  学生名称
 * @apiSuccess {String} data.stuNum   学生学籍号
 * @apiSuccess {String} data.name   名称
 * @apiSuccess {String} data.organization   机构名称
 * @apiSuccess {String} data.matchTime   赛事时间
 * @apiSuccess {String} data.subjectName   学科名称
 * @apiSuccess {String} data.matchLevel   赛事等级
 * @apiSuccess {String} data.award   奖项
 * @apiSuccess {Number} data.checkState   审核状态（0：审核中，1：审核通过，2：审核不通过）
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *          "id": "123123",
 *          "stuName": "Moon",
 *          "stuNum": "123123",
 *          "name": "中国数学奥赛",
 *          "organization": "国家",
 *          "matchTime": "2015-02-01",
 *          "subjectName": "数学",
 *          "matchLevel": "省级赛事",
 *          "award": "二等奖",
 *          "checkState": 1
 *      }, {
 *          "id": "1234568",
 *          "stuName": "陈鸿宇",
 *          "stuNum": "1223123",
 *          "name": "全国高中数学奥赛",
 *          "organization": "国家",
 *          "matchTime": "2015-02-01",
 *          "subjectName": "数学",
 *          "matchLevel": "国家级级赛事",
 *          "award": "特等奖",
 *          "checkState": 2
 *      }]
 *  }
 */

 /**
 * @api {put} /matchs/apply/pass?id=123,123,123  申请的竞赛经历-审核通过
 * @apiName PutStudentMatchPass
 * @apiGroup Match-mentor
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   竞赛id，可传多个以逗号分隔 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {put} /matchs/apply/fail?id=123,123,123   申请的竞赛经历-审核不通过
 * @apiName PutStudentMatchFail
 * @apiGroup Match-mentor
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   竞赛id，可传多个以逗号分隔 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */







 /**
 * @api {get} /subject/activity/orgs?memberId=xxxx  学科实践活动机构列表-获取
 * @apiName GetSubjectOrgList
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} memberId   成员id（不传默认查询全部学科机构）非必填
 *
 * @apiSuccess {String} id    机构id
 * @apiSuccess {String} name  机构名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "教务处",
 *
 *     }, {
 *    	"id": "123123",
 *  	"name": "语文科研组"
 *   }]
 */

 /**
 * @api {get} /subject/activity/members?orgId=xxxx 学科实践活动机构成员（学科）列表-获取
 * @apiName GetSubjectMemberList
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} orgId   机构id（不传默认查询全部学科机构成员）非必填
 *
 * @apiSuccess {String} id    成员id
 * @apiSuccess {String} name  成员名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "语文",
 *
 *     }, {
 *    	"id": "123123",
 *  	"name": "数学"
 *   }]
 */


 /**
 * @api {get} /society/activity/orgs?memberId=xxxx 社会实践活动机构列表-获取
 * @apiName GetSocietyOrgList
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} memberId   成员id（不传默认查询全部社会机构）非必填
 *
 * @apiSuccess {String} id    机构id
 * @apiSuccess {String} name  机构名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "教务处",
 *
 *     }, {
 *    	"id": "123123",
 *  	"name": "语文科研组"
 *   }]
 */

 /**
 * @api {get} /society/activity/members?orgId=xxxx 社会实践活动机构成员（活动分类）列表-获取
 * @apiName GetSocietyMemberList
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} orgId   机构id（不传默认查询全部社会机构成员）非必填
 *
 * @apiSuccess {String} id    成员id
 * @apiSuccess {String} name  成员名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "语文",
 *
 *     }, {
 *    	"id": "123123",
 *  	"name": "数学"
 *   }]
 */


/**
 * @api {post} /subject/activity/orgs?name=xxxx  学科实践活动机构-创建
 * @apiName PostSujectOrg
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name  机构名称 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

/**
 * @api {put} /subject/activity/orgs/:id?name=xxxx  学科实践活动机构-编辑
 * @apiName PutSujectOrg
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  机构id 必填
 * @apiParam {String} name  机构名称 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */


 /**
 * @api {get} /subject/activity/orgs/relate 学科实践活动机构成员关系列表-获取
 * @apiName GetSubjectOrgRelateList
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} id    机构id
 * @apiSuccess {String} name  机构名称
 * @apiSuccess {Array} members  机构成员数组
 * @apiSuccess {String} members.id   成员id
 * @apiSuccess {String} members.name   名称
 * @apiSuccess {String} members.status   选中状态（0：未选中，1：选中）
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [
 *   {
 *      "id": "123123",
 *      "name": "教务处",
 *      "members": [{
 *          "id": "123123",
 *          "name": "语文",
 *          "status": 1
 *      }, {
 *          "id": "123123",
 *          "name": "数学",
 *          "status": 0
 *      }]
 *  },
 *  {
 *      "id": "123123",
 *      "name": "初一小组",
 *      "members": [{
 *          "id": "123123",
 *          "name": "语文",
 *          "status": 1
 *      }, {
 *          "id": "123123",
 *          "name": "数学",
 *          "status": 1
 *      }]
 *  }
 *]
 */

 /**
 * @api {put} /subject/activity/orgs/:id/members/:id  学科实践活动机构成员关系列表-编辑（勾选和取消勾选）
 * @apiName PutSujectOrgMemberRelate
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  机构id 必填
 * @apiParam {String} member.id  成员id，id=-1时为全选 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */



 /**
 * @api {post} /society/activity/orgs/members?name=xx  社会实践活动机构成员（活动分类）-创建
 * @apiName PostSocietyOrgsMembers
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name  成员名称 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {put} /society/activity/orgs/members/:id?name=xx  社会实践活动机构成员（活动分类）-编辑
 * @apiName PutSocietyOrgsMembers
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  成员id 必填
 * @apiParam {String} name  成员名称 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {get} /society/activity/orgs/relate 社会实践活动机构成员关系列表-获取
 * @apiName GetSocietyOrgRelateList
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} id    机构id
 * @apiSuccess {String} name  机构名称
 * @apiSuccess {Array} members  机构成员数组
 * @apiSuccess {String} members.id   成员id
 * @apiSuccess {String} members.name   名称
 * @apiSuccess {String} members.status   选中状态（0：未选中，1：选中）
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [
 *   {
 *      "id": "123123",
 *      "name": "教务处",
 *      "members": [{
 *          "id": "123123",
 *          "name": "社会活动",
 *          "status": 1
 *      }, {
 *          "id": "123123",
 *          "name": "音乐节",
 *          "status": 0
 *      }]
 *  },
 *  {
 *      "id": "123123",
 *      "name": "初一小组",
 *      "members": [{
 *          "id": "123123",
 *          "name": "社会活动",
 *          "status": 1
 *      }, {
 *          "id": "123123",
 *          "name": "音乐节",
 *          "status": 1
 *      }]
 *  }
 *]
 */

/**
 * @api {post} /society/activity/orgs?name=xx  社会实践活动机构-创建
 * @apiName PostSocietyOrgs
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name  机构名称 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

/**
 * @api {put} /society/activity/orgs/:id?name=xx  社会实践活动机构-编辑
 * @apiName PutSocietyOrgs
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  机构id 必填
 * @apiParam {String} name  机构名称 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

/**
 * @api {put} /society/activity/orgs/:id/members/:id  社会实践活动机构成员关系-编辑（勾选和取消勾选）
 * @apiName PutSocietyOrgMemberRelate
 * @apiGroup Activity-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id  机构id 必填
 * @apiParam {String} member.id  成员id，id=-1时为全选 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

/**
 * @api {get} /student/:id/subject/activitys?memberId=xxx&page=xx&per_page=xx&xn=xx&xq=xx  学科实践活动列表-获取
 * @apiName GetStudentSubjectActivitys
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} id 学生的id 必填
 * @apiParam  {String} memberId 学科成员的id，不传则查全部成员  非必填
 * @apiParam  {Number} page 列表的起始页码 必填
 * @apiParam  {Number} per_page 每页显示多少同学 必填
 * @apiParam {String} xn 学年 非必填（不填默认为当前学年）
 * @apiParam {String} xq 学期 非必填（不填默认为当前学期）
 *
 * @apiSuccess {String} totalCount    活动总数
 * @apiSuccess {Array}  data          活动数组
 * @apiSuccess {String} data.id 活动id
 * @apiSuccess {String} data.title 标题
 * @apiSuccess {String} data.summary 摘要
 * @apiSuccess {String} data.memberName 学科名字
 * @apiSuccess {String} data.orgName 机构名称
 * @apiSuccess {String} data.time    活动时间
 * @apiSuccess {String} data.logo  主题图片
 * @apiSuccess {Number} data.checkState 审核状态(0：审核中，1：审核通过，2：审核不通过）
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *     		"id": "1231",
 *     		"title": "这里就是活动主题",
 *     		"summary": "摘要我是活动摘要",
 *     		"memberName": "语文",
 *     		"orgName": "教务处",
 *     		"time": "2015-01-09",
 *     		"logo": "http://asdasd",
 *     		"checkState": 1
 *      }]
 *  }
 */


/**
 * @api {post}  /resource/upload/activitys 活动logo-上传
 * @apiName PostActivityFiles
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id logo图片资源id
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     {id:"21313"}
 */


 /**
 * @api {get} student/:id/society/activitys?memberId=xxx&page=xx&per_page=xx&xn=xx&xq=xx  社会实践活动列表-获取
 * @apiName PutStudentSocietyActivitys
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} id 学生的id 必填
 * @apiParam  {String} memberId 机构成员的id，不传则查全部成员 非必填
 * @apiParam  {Number} page 列表的起始页码 必填
 * @apiParam  {Number} per_page 每页显示多少同学 必填
 * @apiParam {String} xn 学年 非必填（不填默认为当前学年）
 * @apiParam {String} xq 学期 非必填（不填默认为当前学期）
 *
 * @apiSuccess {String} totalCount    活动总数
 * @apiSuccess {Array}  data          活动数组
 * @apiSuccess {String} data.id 活动id
 * @apiSuccess {String} data.title 标题
 * @apiSuccess {String} data.summary 摘要
 * @apiSuccess {String} data.memberName 成员名字
 * @apiSuccess {String} data.orgName 机构名称
 * @apiSuccess {String} data.time    活动时间
 * @apiSuccess {String} data.logo  主题图片
 * @apiSuccess {Number} data.checkState 审核状态(0：审核中，1：审核通过，2：审核不通过）
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *     		"id": "1231",
 *     		"title": "这里就是活动主题",
 *     		"summary": "摘要我是活动摘要",
 *     		"memberName": "语文",
 *     		"orgName": "教务处",
 *     		"time": "2015-01-09",
 *     		"logo": "http://asdasd",
 *     		"checkState": 1
 *      }]
 *  }
 */

/**
 * @api {post}  /activitys?title=xx&orgId=xx&memberId&time=xx&address=xx&type=1&logoId=xxx&summary=xx&content=xxx&remark=xxx&partyName=xxx&partyName="huhb"&partys=123,123   实践活动-创建
 * @apiName PostActivity
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} title 活动标题         必填
 * @apiParam {String} orgId 机构id           必填
 * @apiParam {String} memberId 机构成员id    必填
 * @apiParam {String} time 活动时间          必填
 * @apiParam {String} address 活动地址       必填
 * @apiParam {Number} type   活动类型（0：学科；1：社会）       必填
 * @apiParam {String} logoId 主题图片资源id  非必填
 * @apiParam {String} summary 摘要           非必填
 * @apiParam {String} content 内容           必填
 * @apiParam {String} remark 备注           非必填
 * @apiParam {String} partyName 参与人名字（教师新建活动时必填）    非必填
 * @apiParam {String} partys 参与人id，以逗号分隔（教师新建活动时必填）     非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {get}  /activitys/:id 实践活动-获取
 * @apiName GetActivity
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 活动id              必填
 *
 * @apiSuccess {String} id 活动id
 * @apiSuccess {String} title 活动标题
 * @apiSuccess {String} orgid 机构id
 * @apiSuccess {String} orgName 机构名称
 * @apiSuccess {String} orgMemberid 机构成员id
 * @apiSuccess {String} orgMemberName 机构成员名称
 * @apiSuccess {String} time 活动时间
 * @apiSuccess {String} address 活动地址
 * @apiSuccess {String} logoId 主题图片资源id
 * @apiSuccess {String} summary 摘要
 * @apiSuccess {String} content 内容
 * @apiSuccess {String} remark 备注
 * @apiSuccess {Number} type 活动类型（0：学科；1：社会）
 * @apiSuccess {Number} batch 活动创建类型（0：学生创建；1：教师创建）
 * @apiSuccess {String} cjrId 创建人id
 * @apiSuccess {String} partys 活动参与人id,逗号分隔
 * @apiSuccess {String} checkState 审核状态(0：审核中，1：审核通过，2：审核不通过,3:老师创建 ）
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     *  {
 *     		"id": "1231",
 *     		"title": "这里就是活动主题",
 *     		"summary": "摘要我是活动摘要",
 *     		"orgid": "13213",
 *     		"orgName": "教务处",
 *     		"orgMemberid": "12312",
 *     		"orgMemberName": "语文",
 *     		"address": "软件园",
 *     		"time": "2015-01-09",
 *     		"type": 1,
 *     		"batch": 1,
 *     		"logo": "http://asdasd",
 *     		"content": "内容内容内容",
 *     		"remark": "备注",
 *     		"cjrId": "1231",
 *     		"partys": "1231,123213",
 *     		"checkState": 1
 *  }
 */

/**
 * @api {put}  /activitys:id?title=xx&orgId=xx&orgMemberId&time=xx&address=xx&type=1&logoId=xxx&summary=xx&content=xxx&remark=xxx&partyName=参与人名称&partys=123,123   实践活动-修改
 * @apiName PutSocietyActivity
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 活动id         必填
 * @apiParam {String} title 活动标题         必填
 * @apiParam {String} orgId 机构id           必填
 * @apiParam {String} orgMemberId 机构成员id 必填
 * @apiParam {String} time 活动时间          必填
 * @apiParam {String} address 活动地址       必填
 * @apiParam {Number} type 活动类型（0：学科；1：社会）
 * @apiParam {String} logoId 主题图片资源id  非必填
 * @apiParam {String} summary 摘要           非必填
 * @apiParam {String} content 内容           必填
 * @apiParam {String} remark 备注            必填
 * @apiParam {String} remark 备注           非必填
 * @apiParam {String} partyName 参与人名字（教师编辑活动时必填）    非必填
 * @apiParam {String} partys 参与人id，以逗号分隔（教师编辑活动时必填）     非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

/**
 * @api {delete} /activitys/:id  实践活动-删除
 * @apiName DeleteSocietyActivity
 * @apiGroup Activity
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 活动id 必填
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 204 NO CONTENT
 */

  /**
 * @api {get} /teacher/students 教师的学生列表-获取
 * @apiName GetTeacherStudents
 * @apiGroup Activity-mentor
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id  学生id
 * @apiSuccess {String} name  学生名称
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "asdsd123",
 *      "name": "张莉莉"
 *  }]
 */


  /**
 * @api {get} apply/subject/activitys?memberId=xxx&page=xx&per_page=xx  申请的学科实践活动列表-获取
 * @apiName GetApplyActivitys
 * @apiGroup Activity-mentor
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} memberId 机构成员的id 必填
 * @apiParam  {Number} page 列表的起始页码 必填
 * @apiParam  {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount    活动总数
 * @apiSuccess {Array}  data          活动数组
 * @apiSuccess {String} data.id 活动id
 * @apiSuccess {String} data.title 标题
 * @apiSuccess {String} data.address 活动地址
 * @apiSuccess {String} data.orgName 机构名称
 * @apiSuccess {String} data.time    活动时间
 * @apiSuccess {String} data.partyName  参与人名字
 * @apiSuccess {String} data.stuNum  学籍号
 * @apiSuccess {String} data.remark 摘要
 * @apiSuccess {Number} data.batch  活动批量类型（0：非批量为学生创建，1：批量为老师创建）
 * @apiSuccess {Number} data.checkState 审核状态(0：审核中，1：审核通过，2：审核不通过，3：老师自己创建的）
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *       {
 *          "totalCount": 1000,
 *          "data": [{
 *              "id": 1231313,
 *              "title": "这里就是活动主题",
 *              "address": "软件园",
 *              "orgName": "教务处",
 *              "time": "2015-01-09",
 *              "partyName": "蛋堡",
 *              "stuNum": "123123",
 *              "remark": "备注",
 *              "batch": 0,
 *              "checkState": 1
 *          }, {
 *              "id": 456456,
 *              "title": "这里就是活动主题2222",
 *              "address": "软件园",
 *              "orgName": "教务处",
 *              "time": "2015-01-09",
 *              "partyName": "蛋堡",
 *              "stuNum": "123123",
 *              "remark": "备注",
 *              "batch": 0,
 *              "checkState": 0
 *          }, {
 *              "id": 678678,
 *              "title": "这里就是活动主题3333",
 *              "address": "软件园",
 *              "orgName": "教务处",
 *              "time": "2015-01-09",
 *              "partyName": "蛋堡,哈哈哈哈，嘻嘻嘻,么么么大",
 *              "stuNum": "-",
 *              "remark": "备注",
 *              "batch": 1,
 *              "checkState": 2
 *          }]
 *      }
 */

   /**
 * @api {get} /apply/society/activitys?memberId=xxx&page=xx&per_page=xx  申请的社会实践活动列表-获取
 * @apiName GetSocietyActivitys
 * @apiGroup Activity-mentor
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} memberId 机构成员的id 必填
 * @apiParam  {Number} page 列表的起始页码 必填
 * @apiParam  {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount    活动总数
 * @apiSuccess {Array}  data          活动数组
 * @apiSuccess {String} data.id 活动id
 * @apiSuccess {String} data.title 标题
 * @apiSuccess {String} data.address 活动地址
 * @apiSuccess {String} data.orgName 机构名称
 * @apiSuccess {String} data.time    活动时间
 * @apiSuccess {String} data.partyName  参与人名字
 * @apiSuccess {String} data.stuNum  学籍号
 * @apiSuccess {String} data.remark 摘要
 * @apiSuccess {Number} data.checkState 审核状态(0：审核中，1：审核通过，2：审核不通过）
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *     		"id": "1231",
 *     		"title": "这里就是活动主题",
 *     		"address": "软件园",
 *     		"orgName": "教务处",
 *     		"time": "2015-01-09",
 *     		"partyName": "蛋堡",
 *     		"stuNum": "123123",
 *     		"remark": "备注",
 *     		"checkState": 1
 *      }]
 *  }
 */

 /**
 * @api {put}  /apply/activitys/pass?id=123,123 申请的实践活动列表-审核通过
 * @apiName PutApplyActivityPass
 * @apiGroup Activity-mentor
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 活动ids，以逗号分隔  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {put}  /apply/activitys/fail?id=123,123 申请的实践活动列表-审核不通过
 * @apiName PutApplyActivityFail
 * @apiGroup Activity-mentor
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 活动ids，以逗号分隔  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */





 /**
 * @api {get} /healthy/bass/options  基本信息项列表-获取
 * @apiName GetHealthyBassOptions
 * @apiGroup Healthy-admin
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} id    基本信息项id
 * @apiSuccess {String} name  名称
 * @apiSuccess {String} unit  单位
 * @apiSuccess {Number} count 个数
 * @apiSuccess {String} remark 数值备注
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "身高",
 *      "unit": "cm",
 *      "count": 1,
 *      "remark": ""
 *   },{
 *      "id": "123123",
 *      "name": "脉搏",
 *      "unit": "mmhg",
 *      "count": 2,
 *      "remark": "高压/低压"
 *   }]
 */

 /**
 * @api {put} /healthy/bass/options/:id?name=xx&unit=xx&count=1&remark=xx 基本信息项-编辑
 * @apiName PutHealthyBassOptions
 * @apiGroup Healthy-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id 基本配置项id  必填
 * @apiParam {String} name  名称 必填
 * @apiParam {String} unit  单位 必填
 * @apiParam {Number} count 个数 必填
 * @apiParam {String} remark 数值备注 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

  /**
 * @api {post} /healthy/bass/options?name=xx&unit=xx&count=1&remark=xx 基本信息项-创建
 * @apiName PostHealthyBassOptions
 * @apiGroup Healthy-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name  名称 必填
 * @apiParam {String} unit  单位 必填
 * @apiParam {Number} count 个数 必填
 * @apiParam {String} remark 数值备注 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {get} /healthy/time/options 时间分配项列表-获取
 * @apiName GetHealthyTimeOptions
 * @apiGroup Healthy-admin
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} id    时间配置项id
 * @apiSuccess {String} name  名称
 * @apiSuccess {Number} minTime  最小时间
 * @apiSuccess {Number} maxTime 最大时间
 * @apiSuccess {String} unit  单位
 * @apiSuccess {String} minSize 最小操作时间
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "运动时间",
 *      "minTime": 0,
 *      "maxTime": 1,
 *      "unit": "h",
 *      "minSize": "15分钟"
 *   },{
 *      "id": "123123",
 *      "name": "读书时间",
 *      "minTime": 0,
 *      "maxTime": 30,
 *      "unit": "min",
 *      "minSize": "5分钟"
 *   }]
 */

 /**
 * @api {put} /healthy/time/options/:id?name=xx&minTime=0&maxTime=12&unit=xx&minSize=xx  时间分配项-编辑
 * @apiName PutHealthyTimeOptions
 * @apiGroup Healthy-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    时间配置项id 必填
 * @apiParam {String} name  名称 必填
 * @apiParam {Number} minTime  最小时间 必填
 * @apiParam {Number} maxTime 最大时间 必填
 * @apiParam {String} unit  单位 必填
 * @apiParam {String} minSize 最小操作时间 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {post} /healthy/time/options?name=xx&minTime=0&maxTime=12&unit=xx&minSize=xx  时间分配项-创建
 * @apiName PostHealthyTimeOptions
 * @apiGroup Healthy-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name  名称 必填
 * @apiParam {Number} minTime  最小时间 必填
 * @apiParam {Number} maxTime 最大时间 必填
 * @apiParam {String} unit  单位 必填
 * @apiParam {String} minSize 最小操作时间 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATED
 *     {}
 */

 /**
 * @api {get} student/:id/healthy/bass/records?xn=xx&xq=xxx&week=1  健康基本信息项记录-获取
 * @apiName GetHealthyBassRecords
 * @apiGroup Healthy
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    学生id 必填
 * @apiParam {String} xn     学年（不填默认当前学年） 非必填
 * @apiParam {String} xq     学期（不填默认当前学期） 非必填
 * @apiParam {String} week   学周（不填默认当前学周） 非必填
 *
 * @apiSuccess {String} id    基本配置项id
 * @apiSuccess {String} name  名称
 * @apiSuccess {String} unit  单位
 * @apiSuccess {String} score 数值
 * @apiSuccess {String} remark 描述
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "身高",
 *      "unit": "cm",
  *     "count": 1,
 *      "score":[{
 *			"value":"123",
 *			"remark":""
 *      }]
 *   },{
 *      "id": "123123",
 *      "name": "血压",
 *      "unit": "mmhg",
 *      "count": 2,
 *      "score":[{
 *			"value":"123",
 *			"remark":"高压"
 *      },{
 *			"value":"123",
 *			"remark":"低压"
 *      }]
 *   }]
 */


/**
 * @api {get} student/:id/healthy/time/records?xn=xx&xq=xxx&week=1  健康时间分配项记录-获取
 * @apiName GetHealthyTimeRecords
 * @apiGroup Healthy
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    学生id 必填
 * @apiParam {String} xn     学年（不填默认当前学年） 非必填
 * @apiParam {String} xq     学期（不填默认当前学期） 非必填
 * @apiParam {String} week   学周（不填默认当前学周） 非必填
 *
 * @apiSuccess {String} id    时间配置项id
 * @apiSuccess {String} name  名称
 * @apiSuccess {Number} minTime  最小时间
 * @apiSuccess {Number} maxTime 最大时间
 * @apiSuccess {String} unit  单位
 * @apiSuccess {String} score 分值
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *      "id": "123123",
 *      "name": "运动时间",
 *      "minTime": 0,
 *      "maxTime": 1,
 *      "unit": "h",
 *      "score": "0.3"
 *   },{
 *      "id": "123123",
 *      "name": "读书时间",
 *      "minTime": 0,
 *      "maxTime": 30,
 *      "unit": "min",
 *      "score": "5"
 *   }]
 */

  /**
 * @api {put} /healthy/option/:id/records?score=xxx  健康配置项分数记录-创建/编辑
 * @apiName GetHealthyOptionRecords
 * @apiGroup Healthy
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   配置项id 必填
 * @apiParam {String} score   数值,多个值以/分隔（/25） 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 */


/**
 * @api {get} /healthy/mood/options  心情分类列表-获取（TODO）
 * @apiName GetHealthyModdOptions
 * @apiGroup Healthy
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} id    心情配置项id
 * @apiSuccess {String} name  名称
 * @apiSuccess {String} logo 心情头像
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *     		"id": "1231",
 *     		"name": "高兴",
 *     		"logo": "http/asdasd"
 *      }, {
 *     		"id": "12312",
 *     		"name": "伤心",
 *     		"logo": "http/asdasd"
 *   }]
 */



/**
 * @api {get} student/:id/healthy/mood/records?page=22&per_page=100&xn=xx&xq=xxx  心情记录列表-获取
 * @apiName GetHealthyModdRecords
 * @apiGroup Healthy
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    学生id 必填
 * @apiParam {Number} page  列表的起始页码 必填
 * @apiParam {Number} per_page 每页显示多少同学 必填
 * @apiParam {String} xn     学年（不填默认当前学年） 非必填
 * @apiParam {String} xq     学期（不填默认当前学期） 非必填
 *
 * @apiSuccess {String} id    心情id
 * @apiSuccess {String} summary  描述
 * @apiSuccess {String} optionId 心情图片id
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *     "totalCount": 1000,
 *      "data": [{
 *     		"id": "1231",
 *     		"summary": "今天我捡了五毛，突然间心情挺好",
 *     		"optionId": "1"
 *      }, {
 *     		"id": "12312",
 *     		"summary": "",
 *     		"optionId": "2"
 *      }
 */


 /**
 * @api {put} /healthy/mood/records?optionId=xxx&summary=xx  心情记录-编辑
 * @apiName PutHealthyMoodRecord
 * @apiGroup Healthy
 * @apiVersion 1.0.0
 *
 * @apiParam {String} optionId   心情id 必填
 * @apiParam {String} summary   描述 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 */

 /**
 * @api {post} /healthy/mood/records?optionId=xxx&summary=xx  心情记录-创建
 * @apiName PostHealthyMoodRecord
 * @apiGroup Healthy
 * @apiVersion 1.0.0
 * @apiParam {String} optionId   心情id 必填
 * @apiParam {String} summary   描述 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 */

  /**
 * @api {get} /interest/common/tags  兴趣通用标签-获取
 * @apiName GetInterestCommonTags
 * @apiGroup Interest-admin
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id   标签id
 * @apiSuccess {String} name   名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  [{
 *     		"id": "1231",
 *     		"name": "分享经历"
 *     }]
 */

/**
 * @api {put} /interest/common/tags/:id?name=xx  兴趣通用标签-编辑
 * @apiName PutInterestCommonTags
 * @apiGroup Interest-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   标签id 必填
 * @apiParam {String} name   名称  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 * {}
 */

 /**
 * @api {post} /interest/common/tags?name=xx  兴趣通用标签-创建
 * @apiName PostInterestCommonTags
 * @apiGroup Interest-admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name   名称  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 * {}
 */

/**
 * @api {post} /resource/upload/interest  兴趣特长logo-上传
 * @apiName PostInterestOptionsLogo
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} content   图片base64编码
 * @apiSuccess {String} id   兴趣logo资源id
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *     		"id": "1231"
 *  }
 */

/**
 * @api {get} /student/:id/interest/options  兴趣特长列表-获取
 * @apiName GetInterestOptions
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   学生id 必填
 *
 * @apiSuccess {String} id   兴趣id
 * @apiSuccess {String} name   名称
 * @apiSuccess {String} logo   logo图片地址
 *
 * @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
 *
 *  [{
 *     		"id": "1231",
 *     		"name": "骑行",
 *     		"logo": "http/asd"
 *  }]
 */

/**
 * @api {post} /interest/options?name=xxx&logoId=zxc  兴趣特长-创建
 * @apiName PostInterestOptions
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name   名称 非必填
 * @apiParam {String} logoId   logo图片资源id 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 *  {}
 */

/**
 * @api {get} /interest/options/:id  兴趣特长-获取
 * @apiName GetInterestOption
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name   名称 非必填
 * @apiParam {String} name   名称 非必填
 * @apiParam {String} logoId   logo图片资源id 非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 *  {}
 */


/**
 * @api {put} /interest/options/:id?name=xxx&logoId=zxc  兴趣特长-编辑
 * @apiName PutInterestOptions
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   兴趣id 必填
 * @apiSuccess {String} id   兴趣id
 * @apiSuccess {String} name   名称
 * @apiSuccess {String} logoId   logo图片资源id
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *  [{
 *     		"id": "1231",
 *     		"name": "篮球",
 *     		"logo": "http://xxxx"
 *  }]
 */

  /**
 * @api {get} student/:id/interest/tags  学生的兴趣标签+通用标签-获取
 * @apiName GetInterestTags
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   学生id 必填
 *
 * @apiSuccess {String} id   兴趣id
 * @apiSuccess {String} name   名称
 *
 * @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
 *
 *  [{
 *     		"id": "1231",
 *     		"name": "公用标签"
 *  },{
 *     		"id": "1231",
 *     		"name": "自定义"
 *  }]
 */


  /**
 * @api {get} student/:id/interest/custom/tags  自定义标签列表-获取
 * @apiName GetInterestCustomTags
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id   学生id 必填
 *
 * @apiSuccess {String} id   兴趣id
 * @apiSuccess {String} name   名称
 *
 * @apiSuccessExample Success-Response
*     HTTP/1.1 200 OK
 *
 *  [{
 *     		"id": "1231",
 *     		"name": "自定义"
 *  }]
 */


 /**
 * @api {post} /interest/custom/tags?name=xx  自定义标签-创建
 * @apiName PostInterestCustomTags
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name   标签名称 必填
 *
 * @apiSuccessExample Success-Response
*     HTTP/1.1 201 CREATE
 *{}
 */

/**
 * @api {put} /interest/custom/tags/:id?name=xxx  自定义标签-编辑
 * @apiName PutInterestCustomTags
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name   标签名称 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201 CREATE
 *  {}
 */


  /**
 * @api {get} student/:id/interest/photos/name?name=xx  根据相册名称查询相册是否存在
 * @apiName GetInterestPhotosByName
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} name 相册名称 必填
 *
 * @apiSuccess {boolean} isExist  存在标识
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *  {
 *      "isExist":true
 *  }
 */


  /**
 * @api {get} student/:id/interest/photos?interestId=xx&tags=123,123&page=xx&per_page=xx  相册列表-获取
 * @apiName GetInterestPhotos
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} interestId 兴趣id 必填
 * @apiParam  {String} tags 标签ids,可以填多个以逗号分隔，无标签为-1  必填
 * @apiParam  {Number} page 列表的起始页码 必填
 * @apiParam  {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount    相册总数
 * @apiSuccess {Array}  data          相册数组
 * @apiSuccess {String} data.id 相册id
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {Number} data.count 相册的图片个数
 * @apiSuccess {String} data.time    创建时间
 * @apiSuccess {String} data.logo  封面图片地址
 * @apiSuccess {Array}  data.tags  关联标签数组
 * @apiSuccess {String}  data.tags.id  标签id
 * @apiSuccess {String}  data.tags.name  标签名称
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *     		"id": "1231",
 *     		"name": "大运河文化之旅",
 *     		"count": 44,
 *     		"time": "2015-01-09",
 *     		"logo": "http://asdad",
 *          "tags": [{
 *     			"id": "1231",
 *     			"name": "自定义"
 *      	}]
 *      }]
 *  }
 */

/**
 * @api {post} /resource/upload/photos   相册图片-上传
 * @apiName PostInterestPhotosFile
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} id    图片资源id
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200  OK
 *  {id:"12312"}
 */


  /**
 * @api {post} /interest/photos?name=xx&interestId=xx&tags=123,123&photos=123,213  相册-创建
 * @apiName PostInterestPhotos
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name    相册名称 必填
 * @apiParam {String} interestId  兴趣id 必填
 * @apiParam {String} tags 标签id，以逗号分隔  非必填
 * @apiParam {String} photos 图片ids，以逗号分隔 必填
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201  CREATE
 *  {}
 */


  /**
 * @api {get} /interest/photos/:id  相册信息-获取
 * @apiName GetInterestPhoto
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} id 相册id 必填
 *
 * @apiSuccess {String} id 相册id
 * @apiSuccess {String} name 名称
 * @apiSuccess {String} time    创建时间
 * @apiSuccess {Array}  pics  图片数组
 * @apiSuccess {String}  pics.id  图片id
 * @apiSuccess {String}  pics.name  图片名称
 * @apiSuccess {String}  pics.address  图片地址
 * @apiSuccess {Array}  tags  关联标签数组
 * @apiSuccess {String}  tags.id  标签id
 * @apiSuccess {String}  tags.name  标签名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *     		"id": "1231",
 *     		"name": "大运河文化之旅",
 *     		"time": "2015-01-09",
 *          "pics": [{
 *     			"id": "1231",
 *     			"name": "大运河",
 *     			"address": "http://sadd"
 *      	}],
 *          "tags": [{
 *     			"id": "1231",
 *     			"name": "自定义"
 *      	}]
 *   }
 */

    /**
 * @api {delete} /interest/photos/:id  相册-删除
 * @apiName DelInterestPhotos
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    相册id 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 204 NO CONTENT
 *  {}
 */

  /**
 * @api {put} /interest/photos/:id?name=xx&interestId=xx&tags=123,123  相册信息-编辑
 * @apiName PutInterestPhotosInfo
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    相册id 必填
 * @apiParam {String} name    相册名称 必填
 * @apiParam {String} interestId  兴趣id 必填
 * @apiParam {String} tags 标签id，以逗号分隔  非必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201  CREATE
 *  {}
 */

  /**
 * @api {put} /interest/photos/:id/add?picId=123,123  相册图片-编辑
 * @apiName PutInterestPhotosPics
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    相册id 必填
 * @apiParam {String} pictureId    图片ids，以逗号分隔  必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201  CREATE
 *  {}
 */


   /**
 * @api {get} student/:id/interest/logs?interestId=xx&tags=123,123&page=xx&per_page=xx  日志列表-获取
 * @apiName GetInterestLogs
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam  {Number} interestId 兴趣id 必填
 * @apiParam  {Number} tags 标签ids,可以填多个以逗号分隔，无标签为-1  必填
 * @apiParam  {Number} page 列表的起始页码 必填
 * @apiParam  {Number} per_page 每页显示多少同学 必填
 *
 * @apiSuccess {String} totalCount    日志总数
 * @apiSuccess {Array}  data          日志数组
 * @apiSuccess {String} data.id 日志id
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {String} data.time    创建时间
 * @apiSuccess {String} data.content   内容
 * @apiSuccess {Array}  data.tags  关联标签数组
 * @apiSuccess {String}  data.tags.id  标签id
 * @apiSuccess {String}  data.tags.name  标签名称
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *      "totalCount": 1000,
 *      "data": [{
 *     		"id": "1231",
 *     		"name": "大运河文化之旅",
 *     		"content":"我是内容内容",
 *     		"time": "2015-01-09",
 *          "tags": [{
 *     			"id": "1231",
 *     			"name": "自定义"
 *      	}]
 *      }]
 *  }
 */

  /**
 * @api {post} /interest/logs?name=xx&interestId=xx&tags=123,123&content=xxxx  日志-创建
 * @apiName PostInterestLogs
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name    名称 必填
 * @apiParam {String} interestId  兴趣id 必填
 * @apiParam {String} tags 标签id，以逗号分隔  非必填
 * @apiParam {String} content 内容  必填
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201  CREATE
 *  {}
 */


  /**
 * @api {get} /interest/logs/:id 日志信息-获取
 * @apiName GetInterestLog
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} id 日志id 必填
 *
 * @apiSuccess {String} id 日志id
 * @apiSuccess {String} name 名称
 * @apiSuccess {String} time    创建时间
 * @apiSuccess {String}  content  内容
 * @apiSuccess {Array}  tags  关联标签数组
 * @apiSuccess {String}  tags.id  标签id
 * @apiSuccess {String}  tags.name  标签名称
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *
 *  {
 *     		"id": "1231",
 *     		"name": "大运河文化之旅",
 *     		"time": "2015-01-09",
 *     		"content": "内容内容",
 *          "tags": [{
 *     			"id": "1231",
 *     			"name": "自定义"
 *      	}]
 *   }
 */

  /**
 * @api {put} /interest/logs/:id?name=xx&interestId=xx&tags=123,123&content=xxxx 日志信息-编辑
 * @apiName PutInterestLogs
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam  {String} id 日志id 必填
 * @apiParam {String} name    名称 必填
 * @apiParam {String} interestId  兴趣id 必填
 * @apiParam {String} tags 标签id，以逗号分隔  非必填
 * @apiParam {String} content 内容  必填
 *
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 201  CREATE
 *  {}
 */

    /**
 * @api {delete} /interest/logs/:id  日志信息-删除
 * @apiName DelInterestLogs
 * @apiGroup Interest
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id    日志id 必填
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 204 NO CONTENT
 *  {}
 */


 /**
  * @api {get} /xsfz/api/behaviors?userId=xxx&xn=xx&xq=xx&week=16 课堂表现-获取
  * @apiName GetBehavior
  * @apiGroup level
  * @apiVersion 1.0.0
  *
  * @apiParam  {String} userId 用户id
  * @apiParam  {String} xn 学年（不填默认当前学年） 非必填
  * @apiParam  {String} xq 学期（不填默认当前学期） 非必填
  * @apiParam  {String} week 学周（不填默认当前学周） 非必填
  *
  * @apiSuccess {String} courseName 课程名
  * @apiSuccess {String} behavior 课堂表现
  *
  * @apiSuccessExample Success-Response
  *     HTTP/1.1 200 OK
  *
  * [
  *   [ // 第一个数组 星期一的七节课
  *        {
  *            "courseName": "数学",
  *            "behavior": "很好"
  *        },
  *        {
  *            "courseName": "物理",
  *            "behavior": "一般"
  *        },
  *        {
  *            "courseName": "语文",
  *            "behavior": "一般"
  *        },
  *        {
  *            "courseName": "英语",
  *            "behavior": "不好"
  *        },
  *        {
  *            "courseName": "化学",
  *            "behavior": "一般"
  *        },
  *        {
  *            "courseName": "生物",
  *            "behavior": "很好"
  *        },
  *        {
  *            "courseName": "体育",
  *            "behavior": "一般"
  *        }
  *   ],[ // 第二个数组 星期二的七节课
  *        {
  *            "courseName": "语文",
  *            "behavior": "很好"
  *        },
  *        {
  *            "courseName": "数学",
  *            "behavior": "不好"
  *        },
  *        {
  *            "courseName": "数学",
  *            "behavior": "一般"
  *        },
  *        {
  *            "courseName": "英语",
  *            "behavior": "很好"
  *        },
  *        {
  *            "courseName": "化学",
  *            "behavior": "一般"
  *        },
  *        {
  *            "courseName": "物理",
  *            "behavior": "一般"
  *        },
  *        {
  *            "courseName": "数学",
  *            "behavior": "不好"
  *        }
  *   ]
  *  ]
  */




 /**
  * @api {get} /xsfz/api/homework?stuId=xxx&xn=xx&xq=xx&week=16 作业-获取
  * @apiName GetHomework
  * @apiGroup level
  * @apiVersion 1.0.0
  *
  * @apiParam  {String} userId id
  * @apiParam  {String} xn 学年（不填默认当前学年） 非必填
  * @apiParam  {String} xq 学期（不填默认当前学期） 非必填
  * @apiParam  {String} week 学周（不填默认当前学周） 非必填
  *
  * @apiSuccess {String} courseName 课程名
  * @apiSuccess {String[]} data 一周的课堂表现数组
  *
  * @apiSuccessExample Success-Response
  *     HTTP/1.1 200 OK
  *
  * [{
  *     "courseName":"数学",
  *     "data": ["已交", "未交", null,"已交","未交"]
  *  },{
  *     "courseName":"物理",
  *     "data": ["已交", "已交", "未交", null, null]
  *  },{
  *     "courseName":"语文",
  *     "data": [null, "已交", "已交", "已交", null]
  *  },{
  *     "courseName":"英语",
  *     "data": [null, "已交", "未交", null, "未交"]
  *  }]
  */



 /**
  * @api {get} /cjfx/qzqm.do?userId=xx考试成绩-获取
  * @apiName GetQzqm
  * @apiGroup level
  * @apiVersion 1.0.0
  *
  * @apiParam  {String} stuId 学生id
  *
  * @apiSuccess {Array} rowList 表格行数据（rowList 下的xxx为课程id）
  * @apiSuccess {String} rowList.examFullname 考试全称
  * @apiSuccess {String} rowList.examname 考试名称（有简称取简称，否则取全称）
  * @apiSuccess {String} rowList.classCkrs 班级实考人数
  * @apiSuccess {String} rowList.gradeCkrs 年级实考人数
  * @apiSuccess {String} rowList.classAvg 班级平均分
  * @apiSuccess {String} rowList.gradeAvg 年级平均分

  * @apiSuccess {String} rowList.zongfen_fs 学生总分
  * @apiSuccess {String} rowList.zongfen_zfs 学生总分z分数
  * @apiSuccess {String} rowList.zongfen_bjpm 学生总分班级排名
  * @apiSuccess {String} rowList.zongfen_njpm 学生总分年级排名
  * @apiSuccess {String} rowList.zongfen_bzc 学生总分标准差

  * @apiSuccess {String} rowList.course1_fs 科目1分数
  * @apiSuccess {String} rowList.course1_zfs 科目1z分数
  * @apiSuccess {String} rowList.course1_bjpm 科目1班级排名
  * @apiSuccess {String} rowList.course1_njpm 科目1年级排名
  * @apiSuccess {String} rowList.course1_bzc 科目1标准差

  * @apiSuccess {String} rowList.course2_fs 科目2分数
  * @apiSuccess {String} rowList.course2_zfs 科目2z分数
  * @apiSuccess {String} rowList.course2_bjpm 科目2班级排名
  * @apiSuccess {String} rowList.course2_njpm 科目2年级排名
  * @apiSuccess {String} rowList.course2_bzc 科目2标准差

  * @apiSuccess {Array} subjectList 科目列表（含总分，有序）
  * @apiSuccess {String} subjectList.id 科目id
  * @apiSuccess {String} subjectList.name 科目名称
  *
  * @apiSuccessExample Success-Response
  *     HTTP/1.1 200 OK
  *
  * {
  *  "rowList": [
  *      {
  *          "examFullname": "初二年级2014-2015学年第二学期期末考试",
  *          "examname": "初二2014-2015二末考",
  *          "classCkrs": "46",
  *          "gradeCkrs": "230",
  *          "classAvg": "380",
  *          "gradeAvg": "370",
  *          "zongfen_fs": "362",
  *          "zongfen_zfs": "-0.74",
  *          "zongfen_bjpm": "12",
  *          "zongfen_njpm": "100",
  *          "zongfen_bzc": "32.67",
  *          "course1_fs": "69.0",
  *          "course1_zfs": "-0.85",
  *          "course1_bjpm": "33",
  *          "course1_njpm": "230",
  *          "course1_bzc": "32.67",
  *          "course2_fs": "63.0",
  *          "course2_zfs": "-0.80",
  *          "course2_bjpm": "14",
  *          "course2_njpm": "87",
  *          "course2_bzc": "32.67"
  *      },
  *      {
  *          "examFullname": "初二年级2014-2015学年第二学期期末考试",
  *          "examname": "初二2014-2015二末考",
  *          "classCkrs": "46",
  *          "gradeCkrs": "230",
  *          "classAvg": "380",
  *          "gradeAvg": "370",
  *          "zongfen_fs": "362",
  *          "zongfen_zfs": "-0.74",
  *          "zongfen_bjpm": "12",
  *          "zongfen_njpm": "100",
  *          "zongfen_bzc": "32.67",
  *          "course1_fs": "69.0",
  *          "course1_zfs": "-0.85",
  *          "course1_bjpm": "33",
  *          "course1_njpm": "230",
  *          "course1_bzc": "32.67",
  *          "course2_fs": "63.0",
  *          "course2_zfs": "-0.80",
  *          "course2_bjpm": "14",
  *          "course2_njpm": "87",
  *          "course2_bzc": "32.67"
  *      }
  *  ],
  *  "subjectList": [
  *      {
  *          "id": "zongfen",
  *          "name": "总分"
  *      },
  *      {
  *          "id": "course1",
  *          "name": "数学"
  *      },
  *      {
  *          "id": "course2",
  *          "name": "物理"
  *      }
  *  ]
  * }
  */
