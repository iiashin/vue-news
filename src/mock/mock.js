let Mock=require('mockjs');
//关注
let content1=[
    {
        'id':'1001',
        'title':'从总书记"两会团组时间"观察中国发展三信号',
        'author':'新华社',
        'comment':'999',
        'none':true,
        'smallSingle':false,
        'bigSingle':false,
        'few':false,
        'pic1':'',
        'pic2':'',
        'pic3':''
    },
    {
        'id':'1001',
        'title':'刚刚,河北一市疫情防控指挥部发出一封信！快看',
        'author':'新华社',
        'comment':'999',
        'none':false,
        'smallSingle':true,
        'bigSingle':false,
        'few':false,
        'pic1':require('../assets/item1.jpg'),
        'pic2':'',
        'pic3':''
    }
]
//推荐
let content2=[
    {
        'id':'1001',
        'title':'成年人的孤独',
        'author':'乱七八糟社',
        'comment':'999',
        'none':false,
        'smallSingle':false,
        'bigSingle':true,
        'few':false,
        'pic1':require('../assets/3.jpg'),
        'pic2':'',
        'pic3':''
    },
    {
        'id':'1001',
        'title':'趣梗年年有，今年特别多——2020年流行梗盘点',
        'author':'bigfun',
        'comment':'999',
        'none':false,
        'smallSingle':false,
        'bigSingle':false,
        'few':true,
        'pic1':require('../assets/item3.jpg'),
        'pic2':require('../assets/item4.jpg'),
        'pic3':require('../assets/item5.jpg')
    }
]
//热榜
let content3=[
    {
        'id':'1001',
        'title':'咦！！',
        'author':'新华社',
        'comment':'999',
        'none':true,
        'smallSingle':false,
        'bigSingle':false,
        'few':false,
        'pic1':'',
        'pic2':'',
        'pic3':''
    },
    {
        'id':'1001',
        'title':'趣梗年年有，今年特别多——2020年流行梗盘点',
        'author':'bigfun',
        'comment':'999',
        'none':false,
        'smallSingle':false,
        'bigSingle':false,
        'few':true,
        'pic1':require('../assets/item3.jpg'),
        'pic2':require('../assets/item4.jpg'),
        'pic3':require('../assets/item5.jpg')
    }
]
//刷新
let refresh=[
    {
        'id':'1001',
        'title':'咦！！',
        'author':'新华社',
        'comment':'999',
        'none':true,
        'smallSingle':false,
        'bigSingle':false,
        'few':false,
        'pic1':'',
        'pic2':'',
        'pic3':''
    },
    {
        'id':'1001',
        'title':'趣梗年年有，今年特别多——2020年流行梗盘点',
        'author':'bigfun',
        'comment':'999',
        'none':false,
        'smallSingle':false,
        'bigSingle':false,
        'few':true,
        'pic1':require('../assets/item3.jpg'),
        'pic2':require('../assets/item4.jpg'),
        'pic3':require('../assets/content.jpg')
    }
]
// 推荐
let reconmend=[
    '头条热搜版',
    'TVB悼念吴孟达',
    '广州出现招工逆向潮',
    '中国法定结婚年龄',
    '今日热门事件',
    '警方回应茂名女学生泼硫酸事件',
    '罗志祥歌曲淘汰浪',
    '山药和淮山的区别',
    '黄晓明杨颖同框',
    '手机寿命一般几年'
]
let articleList=[
    {
        id:"1001",
        title:"背影",
        author:"朱自清",
        content:"<p> 我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”</p><img src='static/img/content.9f541703.jpg'><p>回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。<br><br>到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有甚么要紧的了。他踌躇了一会，终于决定还是自己送我去。我两三回劝他不必去；他只说，“不要紧，他们去不好！”<br><br>我们过了江，进了车站。我买票，他忙着照看行李。行李太多了，得向脚夫行些小费，才可过去。他便又忙着和他们讲价钱。我那时真是聪明过分，总觉他说话不大漂亮，非自己插嘴不可。但他终于讲定了价钱；就送我上车。他给我拣定了靠车门的一张椅子；我将他给我做的紫毛大衣铺好坐位。他嘱我路上小心，夜里警醒些，不要受凉。又嘱托茶房好好照应我。我心里暗笑他的迂；他们只认得钱，托他们直是白托！而且我这样大年纪的人，难道还不能料理自己么？唉，我现在想想，那时真是太聪明了！<br><br>我说道，“爸爸，你走吧。”他望车外看了看，说，“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。走到那边月台，须穿过铁道，须跳下去又爬上去。父亲是一个胖子，走过去自然要费事些。我本来要去的，他不肯，只好让他去。我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。这时我看见他的背影，我的泪很快地流下来了。我赶紧拭干了泪，怕他看见，也怕别人看见。我再向外看时，他已抱了朱红的橘子望回走了。过铁道时，他先将橘子散放在地上，自己慢慢爬下，再抱起橘子走。到这边时，我赶紧去搀他。他和我走到车上，将橘子一股脑儿放在我的皮大衣上。于是扑扑衣上的泥土，心里很轻松似的，过一会说，“我走了；到那边来信！”我望着他走出去。他走了几步，回过头看见我，说，“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了。<br><br>近几年来，父亲和我都是东奔西走，家中光景是一日不如一日。他少年出外谋生，独力支持，做了许多大事。那知老境却如此颓唐！他触目伤怀，自然情不能自已。情郁于中，自然要发之于外；家庭琐屑便往往触他之怒。他待我渐渐不同往日。但最近两年的不见，他终于忘却我的不好，只是惦记着我，惦记着我的儿子。我北来后，他写了一信给我，信中说道，“我身体平安，惟膀子疼痛利害，举箸提笔，诸多不便，大约大去之期不远矣。”我读到此处，在晶莹的泪光中，又看见那肥胖的，青布棉袍，黑布马褂的背影。唉！我不知何时再能与他相见！</p>"
    }
]
Mock.mock('http://localhost:3000/content','post',{
    'content1':content1,
    'content2':content2,
    'content3':content3,
    'reconmend':reconmend
})
Mock.mock('http://localhost:3000/reconmend','post',{
    'reconmend':reconmend
})
Mock.mock('http://localhost:3000/refresh','post',(config)=>{
    // 'refresh':refresh
    let a=refresh
    return refresh
})
Mock.mock('http://localhost:3000/search','post',(config)=>{
    // console.log(config.body['data']);
    // console.log(config);
    console.log(config.body);
    let key=config.body
    let new1=[]
    if(key!==""){
        for (let index = 0; index < content3.length; index++) {
            if(content3[index].title.search(key)!=-1)
                new1.push(content3[index])
        }
    }
    console.log(new1);
    return new1
})
Mock.mock("http://localhost:3000/article",'post',(config)=>{
    let key=config.body
    let article={};
    if(key!==""){
        for (let index = 0; index < articleList.length; index++) {
            if(articleList[index].id===key){
                article=articleList[index]
                break 
            }
        }
    } 
    return article
})