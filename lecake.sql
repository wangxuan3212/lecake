SET NAMES UTF8;
DROP DATABASE IF EXISTS lecake;
CREATE DATABASE lecake CHARSET=UTF8;
USE lecake;
CREATE TABLE cake_product(
    pid SMALLINT PRIMARY KEY UNIQUE,
    pname VARCHAR(30) ,
    title VARCHAR(30),
    subtitle VARCHAR(30),
    price INT,
    img_url VARCHAR(100)
);
INSERT INTO cake_product  VALUES('01','雪域牛乳芝士蛋糕·特浓','金奖鲜乳浓醇升级 澳洲进口','经典升级 口碑新贵','298','imgs/BD9EC0F33219DC07B9BA027144CB9B71.jpg');
INSERT INTO cake_product  VALUES('02','闲蛋皇蛋糕','aha专享限时加大','热度持续飙升 网红咸蛋黄蛋糕','258','imgs/list_19660.jpg');
INSERT INTO cake_product  VALUES('03','雪域牛乳芝士蛋糕','','经典之作 热销多年','218','imgs/list_10800.jpg');
INSERT INTO cake_product  VALUES('04','杨枝甘露蛋糕','','港式甜品诱惑 夏季明星款','218','imgs/list_13345.jpg');
INSERT INTO cake_product  VALUES('05','数字蛋糕','第2件半价 第3件免单','人见人爱Ins网红 明星同款','218','imgs/1CB8264EC58604B5DC0F774343AE61D7.jpg');
INSERT INTO cake_product  VALUES('06','环游世界蛋糕','','五星好评 9种口味一次过瘾','218','imgs/BE9A3567C5E9ADF3896287591BA89CAD.jpg');
INSERT INTO cake_product  VALUES('07','草莓拿破仑蛋糕','','两种口感的碰撞 格外俏皮','218','imgs/list_10923.jpg');
INSERT INTO cake_product  VALUES('08','巧克力松露蛋糕','','巧克力爱好者的福音','218','imgs/list_10648.png');
INSERT INTO cake_product  VALUES('09','喵叽叽云顶小花曲奇礼盒·宠溺双拼（原味+咖啡味）','','','158','imgs/7C4CF66C5ADBAEF892F11C6B9A7A1C1E.jpg');
INSERT INTO cake_product  VALUES('10','喵叽叽云顶小花曲奇礼盒·元气双拼（原味+巧克力味）','','','158','imgs/B26FF028395D69520940D3CBFBF02116.jpg');
INSERT INTO cake_product  VALUES('11','喵叽叽云顶小花曲奇礼盒（原味）','','','158','imgs/list_20017.jpg');
INSERT INTO cake_product  VALUES('12','喵叽叽云顶小花曲奇礼盒（巧克力味）','','','158','imgs/list_20013.jpg');

CREATE TABLE birthday_cake(
    pid SMALLINT PRIMARY KEY UNIQUE,
    pname VARCHAR(30) ,
    title VARCHAR(30),
    subtitle VARCHAR(30),
    price INT,
    img_url VARCHAR(100)
);
INSERT INTO birthday_cake  VALUES('13','雪域牛乳芝士蛋糕·特浓','金奖鲜乳浓醇升级 澳洲进口','经典升级 口碑新贵','298','imgs/BD9EC0F33219DC07B9BA027144CB9B71.jpg');
INSERT INTO birthday_cake  VALUES('14','闲蛋皇蛋糕','aha专享限时加大','热度持续飙升 网红咸蛋黄蛋糕','258','imgs/list_19660.jpg');
INSERT INTO birthday_cake  VALUES('15','雪域牛乳芝士蛋糕','','经典之作 热销多年','218','imgs/list_10800.jpg');
INSERT INTO birthday_cake  VALUES('16','杨枝甘露蛋糕','','港式甜品诱惑 夏季明星款','218','imgs/list_13345.jpg');
INSERT INTO birthday_cake VALUES('17','数字蛋糕','第2件半价 第3件免单','人见人爱Ins网红 明星同款','218','imgs/1CB8264EC58604B5DC0F774343AE61D7.jpg');
INSERT INTO birthday_cake  VALUES('18','环游世界蛋糕','','五星好评 9种口味一次过瘾','218','imgs/BE9A3567C5E9ADF3896287591BA89CAD.jpg');
INSERT INTO birthday_cake  VALUES('19','草莓拿破仑蛋糕','','两种口感的碰撞 格外俏皮','218','imgs/list_10923.jpg');
INSERT INTO birthday_cake  VALUES('20','巧克力松露蛋糕','','巧克力爱好者的福音','218','imgs/list_10648.png');
INSERT INTO birthday_cake  VALUES('21','彩虹雪域芝士蛋糕·特浓','aha专享 +58元限时加大','雪域真爱粉 喜欢挑这款','298','imgs/list_19532.jpg');
INSERT INTO birthday_cake  VALUES('22','寿喜桃蛋糕','生辰之喜 贺寿佳礼','拉起福寿喜气贺词 贴心低甜木糖醇','388','imgs/list_22132.jpg');
INSERT INTO birthday_cake  VALUES('23','雪域芒芒芝士蛋糕·特浓','芒果季时令甄享','酸甜诱人 夏日正当红','298','imgs/list_21039.jpg');
INSERT INTO birthday_cake  VALUES('24','美刀刀蛋糕','','人气咖 暴富暴美大赢家','298','imgs/list_15474.jpg');
INSERT INTO birthday_cake  VALUES('25','雪域曲奇芝士蛋糕·特浓','','甜品新风尚 大家都抢看','298','imgs/list_20021.jpg');
INSERT INTO birthday_cake  VALUES('26','牛奶星球蛋糕','','成长星能量 让孩子吃出好奇心','258','imgs/list_19774.jpg');
INSERT INTO birthday_cake  VALUES('27','雪域拼图芝士蛋糕·特浓','aha专享 +58元限时加大','一次集齐雪域「特浓」全套口味','298','imgs/list_20257.jpg');
INSERT INTO birthday_cake  VALUES('28','双莓提拉米苏乐脆蛋糕','','ins风的提拉米苏 自带美颜','298','imgs/list_12787.jpg');
INSERT INTO birthday_cake  VALUES('29','雪域蓝莓芝士蛋糕·特浓','','清新蓝莓与澳洲进口牛乳的奇妙碰撞','298','imgs/list_13146.jpg');
INSERT INTO birthday_cake  VALUES('30','芋见伯爵蛋糕','网红口味打卡','芋泥+伯爵茶神仙CP 治愈系美味','218','imgs/list_19596.jpg');
INSERT INTO birthday_cake  VALUES('31','王子蛋糕','','小王子的专属宠溺','218','imgs/list_12486.jpg');
INSERT INTO birthday_cake  VALUES('32','公主蛋糕','','少女心爆棚 甜美公主必选','218','imgs/list_13664.jpg');
INSERT INTO birthday_cake  VALUES('33','芒果千层拿破仑蛋糕','','芒果季必吃人气蛋糕','218','imgs/list_12152.jpg');
INSERT INTO birthday_cake  VALUES('34','芒果芒果蛋糕','','多汁爽甜 芒果吃货最爱','218','imgs/list_12134.jpg');
INSERT INTO birthday_cake  VALUES('35','提拉米苏·写意蛋糕','','80%的雪域老友也爱这一款','218','imgs/list_20027.jpg');
INSERT INTO birthday_cake  VALUES('36','诺心花园·夏至蛋糕','','闭着眼睛挑 都是好味道','218','imgs/list_12186.jpg');
INSERT INTO birthday_cake  VALUES('37','雪域牛乳芝士蛋糕·特浓花样','','花式宠爱 颜值内在满分','336','imgs/list_20255.jpg');
INSERT INTO birthday_cake  VALUES('38','雪域莓莓芝士蛋糕·特浓','','甄选粉巧 吃出高级感','298','imgs/list_19907.jpg');
INSERT INTO birthday_cake  VALUES('39','原味千层蛋糕','','千层控福音 解馋美味','218','imgs/list_18513.jpg');
INSERT INTO birthday_cake  VALUES('40','雪域粉爱拍档蛋糕·特浓','','粉白少女心 赏味正当时','298','imgs/list_20488.jpg');
INSERT INTO birthday_cake  VALUES('41','雪域莓飞色舞蛋糕·特浓','','人间宝藏 草莓和曲奇控挚爱','298','imgs/list_20480.jpg');
INSERT INTO birthday_cake  VALUES('42','雪域奇趣天成蛋糕·特浓','','咸与甜绝佳CP 无法抵挡','218','imgs/list_12085.jpg');
INSERT INTO birthday_cake  VALUES('43','爱·发声蛋糕','','心里的话说给Ta听','258','imgs/list_14905.jpg');
INSERT INTO birthday_cake  VALUES('44','真爱“粉钻”蛋糕','','粉巧凝成的爱戒 等你说I Do','218','imgs/list_16154.jpg');
INSERT INTO birthday_cake  VALUES('45','玫瑰雪域芝士蛋糕','','懂得营造浪漫氛围的蛋糕','218','imgs/list_12244.jpg');
INSERT INTO birthday_cake  VALUES('46','粉色玫瑰森林蛋糕','','近乎于童话的味道','218','imgs/list_12220.jpg');
INSERT INTO birthday_cake  VALUES('47','雪域蓝莓芝士蛋糕','','营造生日派对闪耀时刻','218','imgs/list_10491.jpg');
INSERT INTO birthday_cake  VALUES('48','雪域大理石芝士蛋糕','','气质出众的时尚经典','218','imgs/list_10479.jpg');
INSERT INTO birthday_cake  VALUES('49','猪光宝气蛋糕','','壕气冲天 拉起一年好运','368','imgs/list_19428.jpg');
INSERT INTO birthday_cake  VALUES('50','携手·环游世界蛋糕','','','228','imgs/list_18609.jpg');
INSERT INTO birthday_cake  VALUES('51','阿尔蒙洛克蛋糕','','低甜 孝敬长辈不踩雷','368','imgs/list_10678_o.jpg');
INSERT INTO birthday_cake  VALUES('52','巧克力四重奏蛋糕','','懂得渐变美学的蛋糕','368','imgs/list_10473.jpg');



CREATE TABLE snacks(
    pid SMALLINT PRIMARY KEY UNIQUE,
    pname VARCHAR(30) ,
    title VARCHAR(30),
    subtitle VARCHAR(30),
    price INT,
    img_url VARCHAR(100)
);
INSERT INTO  snacks  VALUES('53','心悦团圆礼盒（四枚入）','','团圆创意礼盒 中秋馈赠佳礼','218','imgs/108156_2.jpg');
INSERT INTO  snacks  VALUES('54','心悦团圆礼盒（六枚入）','','金奖月饼&创意礼盒中秋馈赠佳','298','imgs/108281_2.jpg');
INSERT INTO  snacks  VALUES('55','喵叽叽云顶小花曲奇礼盒·宠溺双拼（原味+咖啡味）','','','158','imgs/7C4CF66C5ADBAEF892F11C6B9A7A1C1E.jpg');
INSERT INTO  snacks  VALUES('56','喵叽叽云顶小花曲奇礼盒·元气双拼（原味+巧克力味）','','','158','imgs/B26FF028395D69520940D3CBFBF02116.jpg');
INSERT INTO  snacks  VALUES('57','喵叽叽云顶小花曲奇礼盒（原味）','','','158','imgs/list_20017.jpg');
INSERT INTO  snacks  VALUES('58','喵叽叽云顶小花曲奇礼盒（巧克力味）','','','158','imgs/list_20013.jpg');
INSERT INTO  snacks  VALUES('59','千层蝴蝶酥•月影礼盒（24片装）','','','168','imgs/list_18816.jpg');
INSERT INTO  snacks  VALUES('60','千层蝴蝶酥•拾光礼盒（39片装）','','','298','imgs/list_18819.jpg');
INSERT INTO  snacks  VALUES('61','费南雪金砖形礼盒（8枚入）','顺丰物流配送','','128','imgs/list_18263.jpg');
INSERT INTO  snacks  VALUES('62','浪漫巴黎曲奇礼包（混合装）','','','68','imgs/list_17417.jpg');
INSERT INTO  snacks  VALUES('63','千层蝴蝶酥·For Me（原味）','','','98','imgs/list_13291.jpg');
INSERT INTO  snacks  VALUES('64','千层蝴蝶酥•拾光礼盒（39片装））','','','298','imgs/list_18819.jpg');
INSERT INTO  snacks  VALUES('65','费南雪金砖形礼盒（8枚入）','顺丰物流配送','','128','imgs/list_18263.jpg');
INSERT INTO  snacks  VALUES('66','浪漫巴黎曲奇礼包（混合装）','','元气能量 专治小饿小困','68','imgs/list_17417.jpg');
INSERT INTO  snacks  VALUES('67','千层蝴蝶酥·For Me（原味）','','','98','imgs/list_13291.jpg');
INSERT INTO  snacks  VALUES('68','乐熊熊曲奇礼盒','','','128','imgs/list_17018.jpg');



CREATE TABLE user(
   uname VARCHAR(12),
   upwd  VARCHAR(12)
);
INSERT INTO user  VALUES("root","123456");
INSERT INTO user  VALUES("dingding","123456");
INSERT INTO user  VALUES("doudou","123456");
INSERT INTO user  VALUES("user","123456");