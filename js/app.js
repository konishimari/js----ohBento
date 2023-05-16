//main//
const maindishArr = [
    {
        name: "鶏の唐揚げ",
        image: "./img/food/maindish/karaage2.png",
        calories: "306kcal",
        ingredients: ["鶏もも肉500g", "生姜", "片栗粉", "醤油", "酒", "レモン", "油"],
        recipe: [
            "1 鶏肉は一口大に切り、しょうがとにんにくはすりおろしておく。",
            "2 ボウルに鶏肉、しょうが、にんにく、しょうゆ、みりん、酒を入れ、よく混ぜて下味をつける。その後、15分程度冷蔵庫で寝かせる。",
            "3 揚げ油を170℃程度に熱し、小麦粉を薄くまぶした鶏肉を入れ、中火で約5分程度揚げる。鶏肉がきつね色になったら、取り出して油を切る。",
            "4 レモンを添えて完成。お好みでマヨネーズやタルタルソースなどを添えてもよい。"
        ],
        nutrition: [
            "炭水化物:6.6g",
            "たんぱく質:23.4g",
            "脂質:20.7g",
            "ビタミンA:54μ",
            "ビタミンB1:0.15mg",
            "ビタミンB2:0.23mg",
            "ビタミンE:1.2mg",
            "カルシウム:11mg",
            "鉄:1.1mg",
            "食物繊維:0.2g",
            "飽和脂肪酸:6.02g",
            "塩分:1.5g"
        ]
    },
    {
        name: "鮭の塩焼き",
        image: "./img/food/maindish/shake4.png",
        calories: "137kcal",
        ingredients: ["塩鮭", "青じそ"],
        recipe: [
            "1 塩鮭は魚グリルで焼くか、フライパンフライパンを熱し、中火で皮目を下にして焼く",
            "2 ひっくり返す。",
            "3 青じそと共に盛り付ける"
        ],
        nutrition: [
            "炭水化物:2.7g",
            "たんぱく質:23.5g",
            "脂質:4.2g",
            "ビタミンA:11μ",
            "ビタミンB1:0.15mg",
            "ビタミンB2:0.22mg",
            "ビタミンE:1.2mg",
            "カルシウム:30mg",
            "鉄:0.6mg",
            "食物繊維:0.9g",
            "飽和脂肪酸:0.82g",
            "塩分:0.2g"
        ]
    },
    {
        name: "豚の生姜焼き",
        image: "./img/food/maindish/pork2.png",
        calories: " 306kcal",
        ingredients: ["豚肉薄切り300g", "生姜 1かけ", "しょうが汁 50ml", "しょうゆ 大さじ2", "みりん 大さじ2", "砂糖 大さじ1", "サラダ油 適量"],
        recipe: [
            "1 豚肉を一口大に切り、生姜は皮をむいて薄切りにする。しょうが汁を作っておく。",
            "2 フライパンにサラダ油を熱し、豚肉を入れて中火で焼き色がつくまで炒める。",
            "3 生姜を加えて香りが立つまで炒め、しょうが汁、しょうゆ、みりん、砂糖を加えて絡める。",
            "4 全体に絡んだら火を止めて完成。"
        ],
        nutrition: [
            "炭水化物:5.3g",
            "たんぱく質:18.4g",
            "脂質:22.3g",
            "ビタミンA:5μ",
            "ビタミンB1:0.63mg",
            "ビタミンB2:0.16mg",
            "ビタミンE:0.9mg",
            "カルシウム:8mg",
            "鉄:0.5mg",
            "食物繊維:0.1g",
            "飽和脂肪酸:7.61g",
            "塩分:1.8g"
        ]
    },
    {
        name: "ハンバーグ",
        image: "./img/food/maindish/hamburg.png",
        calories: " 306kcal",
        ingredients: ["2人分", "合いびき肉 300g", "玉ねぎ 1/2個", "パン粉 大さじ3", "牛乳 大さじ2", "塩 小さじ1/2", "ケチャップ 大さじ1", "ウスターソース 小さじ1",],
        recipe: [
            "1 玉ねぎをみじん切りにして、フライパンで炒めて色が変わるまで炒める。冷ます。",
            "2 ボウルに合いびき肉、パン粉、牛乳、塩、黒こしょう、冷めた玉ねぎを入れてよく混ぜる。",
            "3 ハンバーグを形成し、揚げ油を熱したフライパンで焼く。中火で5分程度焼いて、裏返してさらに5分程度焼く。",
            "4 ケチャップとウスターソースを混ぜたソースを絡める。"
        ],
        nutrition: [
            "炭水化物:9.2g",
            "たんぱく質:29.1g",
            "脂質:29.7g",
            "ビタミンA:32μ",
            "ビタミンB1:0.15mg",
            "ビタミンB2:0.33mg",
            "ビタミンE:1.8mg",
            "カルシウム:33mg",
            "鉄:3.8mg",
            "食物繊維:0.7g",
            "飽和脂肪酸:7.68g",
            "塩分:1.3g"
        ]
    },
    {
        name: "肉野菜炒め",
        image: "./img/food/maindish/meatandvegi2.png",
        calories: " 214kcal",
        ingredients: ["2人分", "薄切り豚肉 150g", "にんじん 1/2本", "キャベツ 1/8個", "玉ねぎ 1/4個", "もやし100g", "しょうが 1かけ分", "酒 大さじ1", "しょうゆ 小さじ2", "砂糖 小さじ1/2", "サラダ油 適量"],
        recipe: [
            "1 にんじんは皮を剥き、斜めに薄切りにする。キャベツは千切りにする。玉ねぎはくし形に切る。しょうがは千切りにする。",
            "2 フライパンにサラダ油を熱し、しょうがを入れて香りを出す。肉を加えて炒める。肉の色が変わったら、野菜を加えて炒める。",
            "3 酒、しょうゆ、砂糖を加え、汁けがなくなるまで炒める。",
            "4 もやしを加えて炒め、火を止めて完成。"
        ],
        nutrition: [
            "炭水化物:8.4g",
            "たんぱく質:6.5g",
            "脂質:17.9g",
            "ビタミンA:113μ",
            "ビタミンB1:0.22mg",
            "ビタミンB2:0.1mg",
            "ビタミンE:1.4mg",
            "カルシウム:41mg",
            "鉄:0.6mg",
            "食物繊維:2.6g",
            "飽和脂肪酸:4.91g",
            "塩分:1.3g"
        ]
    }
];

//side//
const sidedishArr = [
    {
        name: "きんぴらごぼう",
        image: "./img/food/sidedish/kinpira.png",
        calories: "84kcal",
        ingredients: ["ごぼう 1本", "人参 1/2本", "しょうが 1かけ分", "だし汁 100ml", "砂糖 大さじ1", "醤油 大さじ1", "みりん 大さじ1", "サラダ油 大さじ1"],
        recipe: [
            "1 ごぼうは皮をむき、繊維に沿って細切りにし、水にさらす。人参は皮をむき、繊維に沿って細切りにする。しょうがは千切りにする。",
            "2 フライパンにサラダ油を熱し、しょうがを加えて香りを出す。ごぼうと人参を加えて炒める。",
            "3 だし汁、砂糖、醤油、みりんを加え、強火で煮詰める。水分がなくなるまで煮詰め、全体に味が絡んだら完成。"
        ],
        nutrition: [
            "炭水化物:8.4g",
            "たんぱく質:6.5g",
            "脂質:17.9g",
            "ビタミンA:113μ",
            "ビタミンB1:0.22mg",
            "ビタミンB2:0.1mg",
            "ビタミンE:1.4mg",
            "カルシウム:41mg",
            "鉄:0.6mg",
            "食物繊維:2.6g",
            "飽和脂肪酸:4.91g",
            "塩分:1.3g"
        ]
    },
    {
        name: "ちくわの照り焼き",
        image: "./img/food/sidedish/chikuwa.png",
        calories: "128kcal",
        ingredients: ["ちくわ 2本", "しょうゆ 大さじ1", "みりん 大さじ1", "砂糖 大さじ1/2", "水 大さじ1", "サラダ油 大さじ1"],

        recipe: [
            "1 ちくわは斜めに切る。",
            "2 フライパンにサラダ油を熱し、ちくわを表面に焼き色がつくまで炒める。",
            "3 しょうゆ、みりん、砂糖、水を加え、強火で煮詰める。照りが出てきたら完成。"
        ],
        nutrition: [
            "炭水化物:11.9g",
            "たんぱく質:7.8g",
            "脂質:5.3g",
            "ビタミンA:0μ",
            "ビタミンB1:0.04mg",
            "ビタミンB2:0.06mg",
            "ビタミンE:0.3mg",
            "カルシウム:29mg",
            "鉄:0.8mg",
            "食物繊維:0.2g",
            "飽和脂肪酸:0.89g",
            "塩分:1.6g"
        ]
    },
    {
        name: "切り干し大根の煮物",
        image: "./img/food/sidedish/kiriboshi.png",
        calories: "98kcal",
        ingredients: ["切り干し大根 1袋","にんじん 1本","薄揚げ 2枚","だし汁 400ml","醤油 大さじ2","みりん 大さじ2","砂糖 大さじ1","しょうが 1かけ分"],
        recipe: [
            "1 切り干し大根は水に浸して戻し、軽く絞る。にんじんは皮を剥き、細切りにする。薄揚げは5ミリ幅に切る。しょうがは千切りにする。",
            "2 鍋にだし汁、醤油、みりん、砂糖を入れ、中火で煮立てる。煮立ったら、切り干し大根、にんじん、薄揚げ、しょうがを加えて、再び煮立てる。",
            "3 煮立ったら、アクを取り除き、弱火で20～25分ほど煮る。野菜が柔らかくなったら完成。",
            "4 お好みで、ネギや三つ葉を散らす。"
             ],
        nutrition: [
            "炭水化物:8.5g",
            "たんぱく質:1.9g",
            "脂質:1.1g",
            "ビタミンA:35μ",
            "ビタミンB1:0.04mg",
            "ビタミンB2:0.03mg",
            "ビタミンE:0.1mg",
            "カルシウム:52mg",
            "鉄:0.4mg",
            "食物繊維:1.9g",
            "飽和脂肪酸:0.13g",
            "塩分:0.8g"
        ]
    },
    {
        name: "卵焼き",
        image: "./img/food/sidedish/egg2.png",
        calories: "120kcal",
        ingredients: ["卵 2個","だし汁 1/2カップ","醤油 小さじ1","砂糖 小さじ1/2","サラダ油 適量"],
        recipe: [
            "1 ボウルに卵を割り入れ、だし汁、醤油、みりん、砂糖を加え、よく混ぜる。",
            "2 卵焼き器やフライパンにサラダ油を薄くひき、中火で熱する。熱くなったら、卵液を流し入れる。",
            "3 卵液が半分ほど固まってきたら、巻き上げる。巻き上げた部分の前にまた卵液を流し入れ、再び巻き上げる。",
            "4 食べやすい大きさに切る。"
        ],
        nutrition: [
            "炭水化物:3.3g",
            "たんぱく質:7.8g",
            "脂質:9.6g",
            "ビタミンA:135μ",
            "ビタミンB1:0.05mg",
            "ビタミンB2:0.24mg",
            "ビタミンE:1.2mg",
            "カルシウム:30mg",
            "鉄:0.9mg",
            "食物繊維:0g",
            "飽和脂肪酸:2.34g",
            "塩分:0.8g"
        ]
    },
    {
        name: "ひじきの煮物",
        image: "./img/food/sidedish/hijiki.png",
        calories: "67kcal",
        ingredients: ["ひじき 20g","にんじん 1/2本","薄揚げ 1枚","だし汁 200ml","醤油 大さじ1","みりん 大さじ1","砂糖 小さじ1","塩 少々"],
        recipe: [
            "1 ひじきを30分ほど水に浸けて戻し、ざるにあげる。にんじんは皮を剥いて千切りにし、薄揚げは食べやすい大きさに切る。",
            "2 鍋にだし汁、醤油、みりん、砂糖を入れ、火にかけて煮立たせる。煮立ったら、にんじんと薄揚げを加え、数分煮る。",
            "3 煮汁にひじきを加え、中火で煮る。10分ほど煮たら、塩で味を調える。"
        ],
        nutrition: [
            "炭水化7.8g",
            "たんぱく質:2.7g",
            "脂質:2g",
            "ビタミンA:86μ",
            "ビタミンB1:0.02mg",
            "ビタミンB2:0.03mg",
            "ビタミンE:0.5mg",
            "カルシウム:104mg",
            "鉄:0.6mg",
            "食物繊維:3.4g",
            "飽和脂肪酸:0.25g",
            "塩分:1.5g"
        ]
    }
];
//vegi
const vegiArr = [
    {
        name: "にんじんしりしり",
        image: "./img/food/vegi/ninjin.png",
        calories: "42kcal",
        ingredients: ["にんじん 1本","しょうゆ 小さじ1","みりん 小さじ1","酢 小さじ1","砂糖 小さじ1/2","ごま油 適量","ごま 適量"],
        recipe: [
            "1 にんじんは皮をむき、千切りにする。ボウルに入れ、しょうゆ、みりん、酢、砂糖を加えてよく混ぜ、10分ほど漬ける。",
            "2 フライパンにごま油を適量入れ、中火で熱する。にんじんを水気を切って加え、炒める。",
            "3 にんじんがしんなりとしたら、仕上げにごまを加えて混ぜて完成。"
        ],
        nutrition: [
            "炭水化物:4.1g",
            "たんぱく質:3.1g",
            "脂質:2.2g",
            "ビタミンA:356μ",
            "ビタミンB1:0.05mg",
            "ビタミンB2:0.11mg",
            "ビタミンE:0.5mg",
            "カルシウム:22mg",
            "鉄:0.4mg",
            "食物繊維:1.1g",
            "飽和脂肪酸:0.68g",
            "塩分:0.6g"
        ]
    },  
    {
        name: "ピーマン炒め",
        image: "./img/food/vegi/greenpepar.png",
        calories: "36kcal",
        ingredients: ["ピーマン 2個","オリーブオイル 大さじ1","しょうゆ 大さじ１","塩少々"," 鷹の爪（あれば）"],
        recipe: [
            "1 ピーマンは種とヘタを取り除き、食べやすい大きさに切る。",
            "2 フライパンにオリーブオイルを熱し、鷹の爪を入れる。ピーマンを加えて炒める。",
            "3 ピーマンがしんなりとしたら、塩を加え、最後に醤油を鍋肌にかけて香りをつけたら完成。"
        ],
        nutrition:[
            "炭水化物:2.7g",
            "たんぱく質:1.4g",
            "脂質:1.9g",
            "ビタミンA:13μ",
            "ビタミンB1:0.02mg",
            "ビタミンB2:0.03mg",
            "ビタミンE:0.5g",
            "カルシウム:7mg",
            "鉄:0.3mg",
            "食物繊維:0.9g",
            "飽和脂肪酸:0.21g",
            "塩分:1.3g"
        ]
    },
    {
        name: "小松菜のナムル",
        image: "./img/food/vegi/komatsuna.png",
        calories: "62kcal",
        ingredients: ["小松菜 1/2束"," 酒 小さじ1","ごま油 大さじ1","すりおろしにんにく 小さじ1/2","すりおろししょうが 小さじ1/2","しょうゆ 小さじ1","砂糖 小さじ1/2","ごま 適量"],
        recipe: [
            "1 小松菜は根元を切り落として、食べやすい大きさに切る。鍋に湯を沸かし、酒を加えて小松菜を茹でる。",
            "2 茹で上がった小松菜を水でよく洗い、水気をしっかりと絞る。",
            "3 ボウルに小松菜とごま油、すりおろしにんにく、すりおろししょうが、しょうゆ、砂糖を入れてよく混ぜ合わせる。ごまを散らして完成。"
        ],
        nutrition: [
            "炭水化物:5.3g",
            "たんぱく質:1.8g",
            "脂質:4.6g",
            "ビタミンA:238μ",
            "ビタミンB1:0.04mg",
            "ビタミンB2:0.08mg",
            "ビタミンE:1mg",
            "カルシウム:104mg",
            "鉄:1.4mg",
            "食物繊維:3.9g",
            "飽和脂肪酸:0.73g",
            "塩分:1.1g"
        ]
    },
    {
        name: "ポテトサラダ",
        image: "./img/food/vegi/potato.png",
        calories: "157kcal",
        ingredients: ["じゃがいも 2個","にんじん 1/4本","きゅうり 1/4本","玉ねぎ 1/4個","ハム 3枚","マヨネーズ 大さじ3","塩 適量","黒こしょう 適量"],
        recipe: [
            "1 じゃがいもを皮つきのまま、やや大きめに切って鍋に入れ、水をかぶる程度に入れて火にかける。中火で約15分ほど茹で、フォークがスッと通るくらいに柔らかくなったら、ざるに上げて水気を切り、一度冷ましておく。",
            "2 にんじんときゅうりはそれぞれ細切りにする。玉ねぎは薄切りにして水にさらして辛味を抜く。",
            "3 ボウルに冷めたじゃがいもを入れ、マヨネーズと塩・こしょうを加えて、マッシュする。次に、2の野菜と細切りにしたハムを加え、全体を混ぜ合わせる。"
            ],
        nutrition:[
            "炭水化物:16.4g",
            "たんぱく質:2.1g",
            "脂質:11.3g",
            "ビタミンA:45μ",
            "ビタミンB1:0.09mg",
            "ビタミンB2:0.04mg",
            "ビタミンE:1.7g",
            "カルシウム:10mg",
            "鉄:0.5mg",
            "食物繊維:8.2g",
            "飽和脂肪酸:1.58g",
            "塩分:0.6g"
        ]
    },  
    {
        name: "プチトマトとブロッコリーのサラダ",
        image: "./img/food/vegi/tomatobro.png",
        calories: "28kcal",
        ingredients: ["プチトマト 10個","ブロッコリー 1/2株","玉ねぎ 1/4個","ツナ缶 1/2個","レモン汁 小さじ2","オリーブオイル 大さじ1","塩 適量","黒こしょう 適量"],
        recipe: [
            "1 プチトマトはへたをとり、ブロッコリーは小房に分け、茹でて水にさらし、よく水を切る。",
            "2 玉ねぎは薄切りにして、水にさらしてアクを取る。",
            "3 ボウルにプチトマト、ブロッコリー、玉ねぎ、ツナ缶、レモン汁、オリーブオイル、塩、こしょうを加え、よく混ぜ合わせる。"
            ],
        nutrition:[
            "炭水化物:3.7g",
            "たんぱく質:1.2g",
            "脂質:0.1g",
            "ビタミンA:61μ",
            "ビタミンB1:0.04mg",
            "ビタミンB2:0.05mg",
            "ビタミンE:0.8g",
            "カルシウム:28mg",
            "鉄:0.4mg",
            "食物繊維:1.6g",
            "飽和脂肪酸:0.02g",
            "塩分:0.4g"
        ]
    }, 
];

//rice
const riceArr = [
    {
        name: "白米",
        image: "./img/food/rice/rice2.png",
        calories: "234kcal",
        ingredients: ["米"],
        recipe: [
            "1 米を研ぎ、ざるにあげる。",
            "2 米と同量の水で炊く。"
        ],
        nutrition: [
            "炭水化物:55.7g",
            "たんぱく質:3.8g",
            "脂質:0.5g",
            "ビタミンA:0μ",
            "ビタミンB1:0.03mg",
            "ビタミンB2:0.02mg",
            "ビタミンE:0.1g",
            "カルシウム:1mg",
            "鉄:0mg",
            "食物繊維:2.1g",
            "飽和脂肪酸:0g",
            "塩分:0g"
        ]
    },  
    {
        name: "玄米",
        image: "./img/food/rice/brownrice.png",
        calories: "228kcal",
        ingredients: ["玄米"],
        recipe: [
            "1 玄米は洗い、水に浸す。",
            "2 米と２倍の重量の水で炊く。"
        ],
        nutrition: [
            "炭水化物:53.4g",
            "たんぱく質:4.2g",
            "脂質:1.5g",
            "ビタミンA:0μ",
            "ビタミンB1:0.24mg",
            "ビタミンB2:0.03mg",
            "ビタミンE:0.8g",
            "カルシウム:11mg",
            "鉄:0.9mg",
            "食物繊維:2.1g",
            "飽和脂肪酸:0g",
            "塩分:0g"
        ]
    },
    {
        name: "雑穀米",
        image: "./img/food/rice/multigrain.png",
        calories: "228kcal",
        ingredients: ["雑穀米"],
        recipe: [
            "1 雑穀米は洗い、水に浸す。",
            "2 米と同量の水で炊く。"
        ],
        nutrition: [
            "炭水化物:50.3g",
            "たんぱく質:4.8g",
            "脂質:0.8g",
            "ビタミンA:0μ",
            "ビタミンB1:0.8mg",
            "ビタミンB2:0.02mg",
            "ビタミンE:0.1g",
            "カルシウム:6mg",
            "鉄:0.7mg",
            "食物繊維:0.9g",
            "飽和脂肪酸:0g",
            "塩分:0g"
        ]
    },
    {
        name: "豆ごはん",
        image: "./img/food/rice/multigrain.png",
        calories: "228kcal",
        ingredients: ["米 2合","えんどう豆 さや付きで150〜200g（正味約75〜100g）","塩 小さじ"],
        recipe: [
            "1 米は洗い、ざるにあげておく",
            "2 同量の水に塩を溶かし、豆を加えて炊き上げる"
        ],
        nutrition: [
            "炭水化物:50.8g",
            "たんぱく質:5.4g",
            "脂質:0.6g",
            "ビタミンA:0μ",
            "ビタミンB1:0.15mg",
            "ビタミンB2:0.05mg",
            "ビタミンE:0.1g",
            "カルシウム:9mg",
            "鉄:0.9mg",
            "食物繊維:0.9g",
            "飽和脂肪酸:0g",
            "塩分:0g"
        ]
    },
    {
        name: "チキンライス",
        image: "./img/food/rice/chickenrice.png",
        calories: "544kcal",
        ingredients: ["ごはん (2膳分)","玉ねぎ 1/2個","ピーマン １個","にんじん 1/3個","鶏もも肉 (ウインナーでも可) 60g","酒 小さじ2","サラダ油 大さじ2","ケチャップ 大さじ2","塩こしょう"],
        recipe: [
            "1 玉ねぎ、ピーマン、人参はみじん切り、鶏もも肉は1.5cm角に切り、塩こしょうをふり、酒で漬け込む。",
            "2 フライパンでサラダ油をひき、中火で野菜から炒め、野菜に火が通ったら、鶏肉も炒める。",
            "3 具材が炒められたら、ぬるいご飯を加え馴染ませる。",
            "2 フライパンの中でご飯をドーナツ状によけたら、真ん中にケチャップを入れ軽く炒め、最後に塩こしょうで味を整える。"
        ],
        nutrition: [
            "炭水化物:83.9g",
            "たんぱく質:16.7g",
            "脂質:18.2g",
            "ビタミンA:63μ",
            "ビタミンB1:0.13mg",
            "ビタミンB2:0.09mg",
            "ビタミンE:1.8g",
            "カルシウム:19mg",
            "鉄:0.7mg",
            "食物繊維:4.1g",
            "飽和脂肪酸:5.9g",
            "塩分:2g"
        ]
    }   
]

// mainDishimageResult.src = randomMainDishimage; // 1 ...5

//const mainDishimageResult = $("#main-dish-image-result")

const generateBtn = document.getElementById("generate-btn");


const mainDishimageResult = document.getElementById("main-dish-image-result");
const sideDishimageResult = document.getElementById("side-dish-image-result");
const vegimageResult = document.getElementById("vegi-image-result");
const riceimageResult = document.getElementById("rice-image-result");

const mainDishimage = document.getElementById("main-dish-image");
const sideDishimage = document.getElementById("side-dish-image");
const vegiimage = document.getElementById("vegi-image");
const riceimage = document.getElementById("rice-image");

const mainDishlist = document.getElementById("main-dish-list");
const sideDishlist = document.getElementById("side-dish-list");
const vegilist = document.getElementById("vegi-list");
const ricelist = document.getElementById("rice-list");

const mainDishname = document.getElementById("main-dish-name");
const sideDishname = document.getElementById("side-dish-name");
const veginame = document.getElementById("vegi-name");
const ricename = document.getElementById("rice-name");

const totalCalories = document.getElementById("total-calories")

const ingredientslist = document.getElementById("ingredientslist")


generateBtn.addEventListener("click", () => {
    // const randomMainDishimage = mainDishimage[Math.floor(Math.random() * mainDishimage.length)];

    //これはメインディッシュ
    const randomMainDishimage = Math.floor(Math.random() * maindishArr.length);

    //これはサイドディッシュ
    const randomSideDishimage = Math.floor(Math.random() * sidedishArr.length);

    //これはベジタブル
    const randomVegiimage = Math.floor(Math.random() * vegiArr.length);

    //これはライス
    const randomRiceimage = Math.floor(Math.random() * riceArr.length);


    //
    console.log(randomMainDishimage, "randomMainDishimage")
    console.log(maindishArr[randomMainDishimage], )
    console.log(maindishArr[randomMainDishimage].image, )
    console.log(mainDishimage, )

    //
    console.log(randomSideDishimage, "randomSideDishimage")
    console.log(sidedishArr[randomSideDishimage], )
    console.log(sidedishArr[randomSideDishimage].image,)
    console.log(sideDishimage, )

    //
    console.log(randomVegiimage,"randomVegiimage")
    console.log(vegiArr[randomVegiimage],)
    console.log(vegiArr[randomVegiimage].image,)
    console.log(vegiimage,)

    //
    console.log(randomRiceimage,"randomRiceimage")
    console.log(riceArr[randomRiceimage],)
    console.log(riceArr[randomRiceimage].image,)
    console.log(riceimage,)



    //画像を書き換える
    mainDishimage.src = maindishArr[randomMainDishimage].image
    // 表示
    mainDishimage.style.display = "block";

    //画像を書き換える
    sideDishimage.src = sidedishArr[randomSideDishimage].image
    // 表示   
    sideDishimage.style.display = "block";

    //画像を書き換える
    vegiimage.src = vegiArr[randomVegiimage].image
    // 表示   
    vegiimage.style.display = "block";

    //画像を書き換える
    riceimage.src = riceArr[randomRiceimage].image
    // 表示   
    riceimage.style.display = "block";


    //カロリーの表示
    const mainDishcalories = Number(maindishArr[randomMainDishimage].calories.replace("kcal", ""));     // 306kcalという文字列→kcalを消す→文字列を数字に変換→他のと足し合わせる
    const sideDishicalories = Number(sidedishArr[randomSideDishimage].calories.replace("kcal", ""));    
    const vegicalories = Number(vegiArr[randomVegiimage].calories.replace("kcal", ""));
    const ricecalories = Number(riceArr[randomRiceimage].calories.replace("kcal", ""));
    totalCalories.innerHTML = mainDishcalories + sideDishicalories + vegicalories + ricecalories + "kcal";

    //名前表示
    //$("test").text()
    mainDishname.textContent = maindishArr[randomMainDishimage].name
    sideDishname.textContent = sidedishArr[randomSideDishimage].name
    veginame.textContent = vegiArr[randomVegiimage].name
    ricename.textContent = riceArr[randomRiceimage].name

    //mapという命令 javascriptが用意しているおまじない
    //メインディッシュのレシピ
    const mainDishRecipe = maindishArr[randomMainDishimage].recipe.map((item, index) => {
        const html = `<li>${item}</li>`
        console.log(html,)
        return html;
    })
    // $("#main-dish-list").html(maindishiArr[randomMainDishimage].name)
    mainDishlist.innerHTML = mainDishRecipe.join('');


    //サイドディッシュのレシピ
    const sideDishRecipe = sidedishArr[randomSideDishimage].recipe.map((item,index) => {
        const html = `<li>${item}</li>`
        console.log(html, )
        return html;
    })
    sideDishlist.innerHTML = sideDishRecipe.join('');

    //ベジタブルのレシピ
    const vegiRecipe = vegiArr[randomVegiimage].recipe.map((item,index) => {
        const html = `<li>${item}</li>`
        console.log(html, )
        return html;
    })
    vegilist.innerHTML = vegiRecipe.join('');

    //ライスのレシピ
    const riceRecipe = riceArr[randomRiceimage].recipe.map((item,index) => {
        const html = `<li>${item}</li>`
        console.log(html, )
        return html;
    })
    ricelist.innerHTML = riceRecipe.join('');


    //買い物リストを作る
    const mainDishingredients = maindishArr[randomMainDishimage].ingredients; 
    mainDishingredients.textContent = maindishArr[randomMainDishimage].ingredients
    for (let i=0;i<mainDishingredients.length;i++) {
        ingredientslist.innerHTML += "<li>"+ mainDishingredients[i] +"</li>"
    }
    console.log(mainDishingredients,"uuuuuuuuu")
    
    


    // const test = (chikuwa) => {
    //  return html = `
    //     <img src="./img/food/sidedish/${chikuwa}.png" />
    //   `
    // } 

    // test(maindishiArr.image)


});