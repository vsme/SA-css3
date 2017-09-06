/**
 * Created by Yaavi on 2016/3/17.
 */

var maptb = echarts.init(document.getElementById('map-tb'));

var geoCoordMap = {
    "埃菲尔铁塔": [1.913749,48.227638],
    "东方明珠": [120.35397, 30.86166],
    "埃及金字塔": [30.802498,26.820553],
    "丹麦小美人鱼": [9.501785,56.26392],
    "荷兰风车": [5.291265999999999,52.132633],
    "日本大阪城": [138.252924,36.204824],
    "新加坡狮头鱼身像": [103.975766,1.580484],
    "悉尼哥剧院": [151.775136,-30.274398],
    "雅典帕特农神庙": [21.824312,39.074208],
    "柬埔寨仰光大金塔": [103.990963,12.565679],
    "巴黎凯旋门": [2.013749,46.227638],
    "圆顶岩石清真寺": [34.851612,31.046051],
    "北京天安门": [115.65397, 39.26166],
    "意大利比萨斜塔": [12.56738,41.87194],
    "印度泰姬陵": [78.96288,20.593684],
    "布鲁塞尔撒尿小孩": [5.013749,47.227638],
    "朝鲜千里马": [127.510093,40.339852],
    "韩国南大门": [127.766922,35.907757],
    "日本富士山": [139.752924,37.204824],
    "柬埔寨独立纪念碑": [105.990963,12.565679],
    "华盛顿白宫": [-79.712891,37.09024],
    "华盛顿太空针塔": [-77.712891,37.09024],
    "自由女神像": [-75.712891,40.09024],
    "华沙美人鱼": [19.145136,51.919438],
    "苏州东方之门": [118.35397, 30.86166],
    "里亚尔托桥": [11.56738,43.87194],
    "圣瓦西里大教堂": [42.56738,55.87194],
    "古罗马竞技场": [14.56738,41.07194],
    "大本钟": [-0.213749,51.427638],
    "勃兰登堡门": [12.213749,51.427638],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var mapsjdt = {


    backgroundColor: 'rgba(0,0,0,0)',
    title: {
        text: '选自全球的30个地标具体位置',
        subtext: '',
        sublink: '',
        x: 'center',
        textStyle: {
            color: '#666'
        },
        top:40,
        textStyle:{
            fontFamily: 'BlocExtCond',
            fontSize:24,
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },

    dataRange: {
        min: 0,
        max: 30,
        calculable: false,
        color: ['#d94e5d', '#eac736', '#50a3ba'],
        textStyle: {
            color: '#000'
        },
        show: false

    },
    geo: {
        name: '30个地标位置',
        type: 'map',
        map: 'world',
        roam: true,
        label: {
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#fff',
                borderColor: '#111'
            },
            emphasis: {
                /*areaColor: '#ccc'*/
            }
        },
        nameMap : {
            'China' : '中国',
            'Afghanistan':'阿富汗',
            'Angola':'安哥拉',
            'Albania':'阿尔巴尼亚',
            'United Arab Emirates':'阿联酋',
            'Argentina':'阿根廷',
            'Armenia':'亚美尼亚',
            'French Southern and Antarctic Lands':'法属南半球和南极领地',
            'Australia':'澳大利亚',
            'Austria':'奥地利',
            'Azerbaijan':'阿塞拜疆',
            'Burundi':'布隆迪',
            'Belgium':'比利时',
            'Benin':'贝宁',
            'Burkina Faso':'布基纳法索',
            'Bangladesh':'孟加拉国',
            'Bulgaria':'保加利亚',
            'The Bahamas':'巴哈马',
            'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
            'Belarus':'白俄罗斯',
            'Belize':'伯利兹',
            'Bermuda':'百慕大',
            'Bolivia':'玻利维亚',
            'Brazil':'巴西',
            'Brunei':'文莱',
            'Bhutan':'不丹',
            'Botswana':'博茨瓦纳',
            'Central African Republic':'中非共和国',
            'Canada':'加拿大',
            'Switzerland':'瑞士',
            'Chile':'智利',
            'Ivory Coast':'象牙海岸',
            'Cameroon':'喀麦隆',
            'Democratic Republic of the Congo':'刚果民主共和国',
            'Republic of the Congo':'刚果共和国',
            'Colombia':'哥伦比亚',
            'Costa Rica':'哥斯达黎加',
            'Cuba':'古巴',
            'Northern Cyprus':'北塞浦路斯',
            'Cyprus':'塞浦路斯',
            'Czech Republic':'捷克共和国',
            'Germany':'德国',
            'Djibouti':'吉布提',
            'Denmark':'丹麦',
            'Dominican Republic':'多明尼加共和国',
            'Algeria':'阿尔及利亚',
            'Ecuador':'厄瓜多尔',
            'Egypt':'埃及',
            'Eritrea':'厄立特里亚',
            'Spain':'西班牙',
            'Estonia':'爱沙尼亚',
            'Ethiopia':'埃塞俄比亚',
            'Finland':'芬兰',
            'Fiji':'斐',
            'Falkland Islands':'福克兰群岛',
            'France':'法国',
            'Gabon':'加蓬',
            'United Kingdom':'英国',
            'Georgia':'格鲁吉亚',
            'Ghana':'加纳',
            'Guinea':'几内亚',
            'Gambia':'冈比亚',
            'Guinea Bissau':'几内亚比绍',
            'Equatorial Guinea':'赤道几内亚',
            'Greece':'希腊',
            'Greenland':'格陵兰',
            'Guatemala':'危地马拉',
            'French Guiana':'法属圭亚那',
            'Guyana':'圭亚那',
            'Honduras':'洪都拉斯',
            'Croatia':'克罗地亚',
            'Haiti':'海地',
            'Hungary':'匈牙利',
            'Indonesia':'印尼',
            'India':'印度',
            'Ireland':'爱尔兰',
            'Iran':'伊朗',
            'Iraq':'伊拉克',
            'Iceland':'冰岛',
            'Israel':'以色列',
            'Italy':'意大利',
            'Jamaica':'牙买加',
            'Jordan':'约旦',
            'Japan':'日本',
            'Kazakhstan':'哈萨克斯坦',
            'Kenya':'肯尼亚',
            'Kyrgyzstan':'吉尔吉斯斯坦',
            'Cambodia':'柬埔寨',
            'South Korea':'韩国',
            'Kosovo':'科索沃',
            'Kuwait':'科威特',
            'Laos':'老挝',
            'Lebanon':'黎巴嫩',
            'Liberia':'利比里亚',
            'Libya':'利比亚',
            'Sri Lanka':'斯里兰卡',
            'Lesotho':'莱索托',
            'Lithuania':'立陶宛',
            'Luxembourg':'卢森堡',
            'Latvia':'拉脱维亚',
            'Morocco':'摩洛哥',
            'Moldova':'摩尔多瓦',
            'Madagascar':'马达加斯加',
            'Mexico':'墨西哥',
            'Macedonia':'马其顿',
            'Mali':'马里',
            'Myanmar':'缅甸',
            'Montenegro':'黑山',
            'Mongolia':'蒙古',
            'Mozambique':'莫桑比克',
            'Mauritania':'毛里塔尼亚',
            'Malawi':'马拉维',
            'Malaysia':'马来西亚',
            'Namibia':'纳米比亚',
            'New Caledonia':'新喀里多尼亚',
            'Niger':'尼日尔',
            'Nigeria':'尼日利亚',
            'Nicaragua':'尼加拉瓜',
            'Netherlands':'荷兰',
            'Norway':'挪威',
            'Nepal':'尼泊尔',
            'New Zealand':'新西兰',
            'Oman':'阿曼',
            'Pakistan':'巴基斯坦',
            'Panama':'巴拿马',
            'Peru':'秘鲁',
            'Philippines':'菲律宾',
            'Papua New Guinea':'巴布亚新几内亚',
            'Poland':'波兰',
            'Puerto Rico':'波多黎各',
            'North Korea':'北朝鲜',
            'Portugal':'葡萄牙',
            'Paraguay':'巴拉圭',
            'Qatar':'卡塔尔',
            'Romania':'罗马尼亚',
            'Russia':'俄罗斯',
            'Rwanda':'卢旺达',
            'Western Sahara':'西撒哈拉',
            'Saudi Arabia':'沙特阿拉伯',
            'Sudan':'苏丹',
            'South Sudan':'南苏丹',
            'Senegal':'塞内加尔',
            'Solomon Islands':'所罗门群岛',
            'Sierra Leone':'塞拉利昂',
            'El Salvador':'萨尔瓦多',
            'Somaliland':'索马里兰',
            'Somalia':'索马里',
            'Republic of Serbia':'塞尔维亚共和国',
            'Suriname':'苏里南',
            'Slovakia':'斯洛伐克',
            'Slovenia':'斯洛文尼亚',
            'Sweden':'瑞典',
            'Swaziland':'斯威士兰',
            'Syria':'叙利亚',
            'Chad':'乍得',
            'Togo':'多哥',
            'Thailand':'泰国',
            'Tajikistan':'塔吉克斯坦',
            'Turkmenistan':'土库曼斯坦',
            'East Timor':'东帝汶',
            'Trinidad and Tobago':'特里尼达和多巴哥',
            'Tunisia':'突尼斯',
            'Turkey':'土耳其',
            'United Republic of Tanzania':'坦桑尼亚联合共和国',
            'Uganda':'乌干达',
            'Ukraine':'乌克兰',
            'Uruguay':'乌拉圭',
            'United States of America':'美国',
            'Uzbekistan':'乌兹别克斯坦',
            'Venezuela':'委内瑞拉',
            'Vietnam':'越南',
            'Vanuatu':'瓦努阿图',
            'West Bank':'西岸',
            'Yemen':'也门',
            'South Africa':'南非',
            'Zambia':'赞比亚',
            'Zimbabwe':'津巴布韦'
        }

    },
    series: [
        {
            name: 'world',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "埃菲尔铁塔", value: 1},
                {name: "东方明珠", value: 2},
                {name: "埃及金字塔", value: 3},
                {name: "丹麦小美人鱼", value: 4},
                {name: "荷兰风车", value: 5},
                {name: "日本大阪城", value: 6},
                {name: "新加坡狮头鱼身像", value: 7},
                {name: "悉尼哥剧院", value: 8},
                {name: "雅典帕特农神庙", value: 9},
                {name: "柬埔寨仰光大金塔", value: 10},
                {name: "巴黎凯旋门", value: 11},
                {name: "圆顶岩石清真寺", value: 12},
                {name: "北京天安门", value: 13},
                {name: "意大利比萨斜塔", value: 14},
                {name: "印度泰姬陵", value: 15},
                {name: "布鲁塞尔撒尿小孩", value: 16},
                {name: "朝鲜千里马", value: 17},
                {name: "韩国南大门", value: 18},
                {name: "日本富士山", value: 19},
                {name: "柬埔寨独立纪念碑", value: 20},
                {name: "华盛顿白宫", value: 21},
                {name: "华盛顿太空针塔", value: 22},
                {name: "自由女神像", value: 23},
                {name: "华沙美人鱼", value: 24},
                {name: "苏州东方之门", value: 25},
                {name: "里亚尔托桥", value: 26},
                {name: "圣瓦西里大教堂", value: 27},
                {name: "古罗马竞技场", value: 28},
                {name: "大本钟", value: 29},
                {name: "勃兰登堡门", value: 30},
            ]),
            symbolSize: 22,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },

            tooltip : {
                trigger: 'item',
                formatter:'地标名称：'+'{b}',

            },

        }
    ]


};

// 使用刚指定的配置项和数据显示图表。
maptb.setOption(mapsjdt);

