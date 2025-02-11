'use strict';
{
    const open = document.getElementById('open')
    const mask = document.getElementById('mask')
    const modal_content = document.getElementById('modal_content')
    const close = document.getElementById('close')
    const title = document.getElementById('title')
    const item1 = document.getElementById('item1')
    const item2 = document.getElementById('item2')
    const item3 = document.getElementById('item3')
    const item4 = document.getElementById('item4')
    const item5 = document.getElementById('item5')
    const item6 = document.getElementById('item6')
    const item7 = document.getElementById('item7')
    const item8 = document.getElementById('item8')
    const item9 = document.getElementById('item9')
    const item10 = document.getElementById('item10')
    const item11 = document.getElementById('item11')
    const item12 = document.getElementById('item12')
    const img = document.getElementById('img')

    var default_text = ["男性", "女性", "犬 ", "猫 ", "うさぎ ", "クマ ", "花 ", "手 ", "鳥 ", "食べ物 ", "サメ ", "いつぬい"]

    var clickCount = 0
    var selectButton = ""

    var array1 = ["学生", "子ども", "成人", "高齢", "", "", "", "", "", "", "", ""]
    var array2 = ["チワワ", "パグ", "柴犬", "トイプードル", "サモエド", "ドーベルマン",
        "コーギー", "ゴールデン・レトリバー", "ダックスフント", "ビーグル", "秋田犬", "ハスキー"]
    var array3 = ["三毛", "ラグドール", "シャム", "メインクーン", "アメリカンショートヘア", "エキゾチック",
        "スコティッシュ", "ブリティッシュ", "ロシアンブルー", "マンチカン", "カオマニー", ""]
    var array4 = ["ホーランドロップ", "ミニロップ", "ネザーランドドワーフ", "ロップイヤー", "レッキス", "", "", "", "", "", "", ""]
    var array5 = ["ホッキョクグマ", "ヒグマ", "ツキノワグマ", "ナマケグマ", "", "", "", "", "", "", "", ""]
    var array6 = ["バラ", "桜", "チューリップ", "カーネーション", "ネモフィラ", "アネモネ",
        "カスミソウ", "マーガレット", "胡蝶蘭", "ベゴニア", "", ""]
    var array7 = ["グー", "チョキ", "パー", "", "", "", "", "", "", "", "", ""]
    var array8 = ["ハト", "ニワトリ", "ウグイス", "ペンギン", "スズメ", "シマエナガ", "", "", "", "", "", ""]
    var array9 = ["餅", "カレーライス", "エビフライ", "キッシュ", "麻婆豆腐", "", "", "", "", "", "", ""]
    var array10 = ["ジンベエザメ", "メガロドン", "シュモクザメ", "ホホジロザメ", "", "", "", "", "", "", "", ""]
    var array11 = ["明星 スバル", "氷鷹 北斗", "遊木 真", "衣更 真緒", "乱 凪砂", "巴 日和", "七種 茨", "漣 ジュン", "", "", "", ""]

    var array_taste = ["イラスト", "アニメーション", "漫画風", "実写", "写真風", "", "", "", "", "", "", ""]

    open.addEventListener('click', () => {
        modal_content.classList.remove('hidden');
        mask.classList.remove('hidden');
        clearButtonText();
        setDefaultButton();
        clickCount = 0;
    });

    close.addEventListener('click', () => {
        modal_content.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', () => {
        modal_content.classList.add('hidden');
        mask.classList.add('hidden');
    });

    item1.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item1.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(1)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item2.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item2.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(1)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item3.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item3.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(2)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item4.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item4.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(3)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item5.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item5.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(4)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item6.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item6.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(5)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item7.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item7.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(6)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item8.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item8.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(7)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item9.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item9.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(8)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item10.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item10.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(9)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item11.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item11.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(10)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    item12.addEventListener('click', () => {
        ++clickCount;
        if (clickCount < 3) {
            if (clickCount == 2) {
                selectButton = item12.textContent
            }
            clearButtonText()
        }
        if (clickCount == 1) {
            title.textContent = "どんな見た目？"
            setButtonText(11)
            setButtonVisible()
        }
        if (clickCount == 2) {
            title.textContent = "どんな感じで描く？"
            //引数は適当(使わない)
            setButtonText(0)
            setButtonVisible()
        }
        if (clickCount == 3) {
            modal_content.classList.add('hidden');
            mask.classList.add('hidden');
            setImage()
            clickCount = 0
        }
    })

    function clearButtonText() {
        item1.textContent = "";
        item2.textContent = "";
        item3.textContent = "";
        item4.textContent = "";
        item5.textContent = "";
        item6.textContent = "";
        item7.textContent = "";
        item8.textContent = "";
        item9.textContent = "";
        item10.textContent = "";
        item11.textContent = "";
        item12.textContent = "";
        item1.style.visibility = 'hidden';
        item2.style.visibility = 'hidden';
        item3.style.visibility = 'hidden';
        item4.style.visibility = 'hidden';
        item5.style.visibility = 'hidden';
        item6.style.visibility = 'hidden';
        item7.style.visibility = 'hidden';
        item8.style.visibility = 'hidden';
        item9.style.visibility = 'hidden';
        item10.style.visibility = 'hidden';
        item11.style.visibility = 'hidden';
        item12.style.visibility = 'hidden';
    }

    function setButtonText(idx) {
        if (clickCount == 1) {
            if (idx == 1) {
                item1.textContent = array1[0]
                item2.textContent = array1[1]
                item3.textContent = array1[2]
                item4.textContent = array1[3]
                item5.textContent = array1[4]
                item6.textContent = array1[5]
                item7.textContent = array1[6]
                item8.textContent = array1[7]
                item9.textContent = array1[8]
                item10.textContent = array1[9]
                item11.textContent = array1[10]
                item12.textContent = array1[11]
            }
            if (idx == 2) {
                item1.textContent = array2[0]
                item2.textContent = array2[1]
                item3.textContent = array2[2]
                item4.textContent = array2[3]
                item5.textContent = array2[4]
                item6.textContent = array2[5]
                item7.textContent = array2[6]
                item8.textContent = array2[7]
                item9.textContent = array2[8]
                item10.textContent = array2[9]
                item11.textContent = array2[10]
                item12.textContent = array2[11]
            }
            if (idx == 3) {
                item1.textContent = array3[0]
                item2.textContent = array3[1]
                item3.textContent = array3[2]
                item4.textContent = array3[3]
                item5.textContent = array3[4]
                item6.textContent = array3[5]
                item7.textContent = array3[6]
                item8.textContent = array3[7]
                item9.textContent = array3[8]
                item10.textContent = array3[9]
                item11.textContent = array3[10]
                item12.textContent = array3[11]
            }
            if (idx == 4) {
                item1.textContent = array4[0]
                item2.textContent = array4[1]
                item3.textContent = array4[2]
                item4.textContent = array4[3]
                item5.textContent = array4[4]
                item6.textContent = array4[5]
                item7.textContent = array4[6]
                item8.textContent = array4[7]
                item9.textContent = array4[8]
                item10.textContent = array4[9]
                item11.textContent = array4[10]
                item12.textContent = array4[11]
            }
            if (idx == 5) {
                item1.textContent = array5[0]
                item2.textContent = array5[1]
                item3.textContent = array5[2]
                item4.textContent = array5[3]
                item5.textContent = array5[4]
                item6.textContent = array5[5]
                item7.textContent = array5[6]
                item8.textContent = array5[7]
                item9.textContent = array5[8]
                item10.textContent = array5[9]
                item11.textContent = array5[10]
                item12.textContent = array5[11]
            }
            if (idx == 6) {
                item1.textContent = array6[0]
                item2.textContent = array6[1]
                item3.textContent = array6[2]
                item4.textContent = array6[3]
                item5.textContent = array6[4]
                item6.textContent = array6[5]
                item7.textContent = array6[6]
                item8.textContent = array6[7]
                item9.textContent = array6[8]
                item10.textContent = array6[9]
                item11.textContent = array6[10]
                item12.textContent = array6[11]
            }
            if (idx == 7) {
                item1.textContent = array7[0]
                item2.textContent = array7[1]
                item3.textContent = array7[2]
                item4.textContent = array7[3]
                item5.textContent = array7[4]
                item6.textContent = array7[5]
                item7.textContent = array7[6]
                item8.textContent = array7[7]
                item9.textContent = array7[8]
                item10.textContent = array7[9]
                item11.textContent = array7[10]
                item12.textContent = array7[11]
            }
            if (idx == 8) {
                item1.textContent = array8[0]
                item2.textContent = array8[1]
                item3.textContent = array8[2]
                item4.textContent = array8[3]
                item5.textContent = array8[4]
                item6.textContent = array8[5]
                item7.textContent = array8[6]
                item8.textContent = array8[7]
                item9.textContent = array8[8]
                item10.textContent = array8[9]
                item11.textContent = array8[10]
                item12.textContent = array8[11]
            }
            if (idx == 9) {
                item1.textContent = array9[0]
                item2.textContent = array9[1]
                item3.textContent = array9[2]
                item4.textContent = array9[3]
                item5.textContent = array9[4]
                item6.textContent = array9[5]
                item7.textContent = array9[6]
                item8.textContent = array9[7]
                item9.textContent = array9[8]
                item10.textContent = array9[9]
                item11.textContent = array9[10]
                item12.textContent = array9[11]
            }
            if (idx == 10) {
                item1.textContent = array10[0]
                item2.textContent = array10[1]
                item3.textContent = array10[2]
                item4.textContent = array10[3]
                item5.textContent = array10[4]
                item6.textContent = array10[5]
                item7.textContent = array10[6]
                item8.textContent = array10[7]
                item9.textContent = array10[8]
                item10.textContent = array10[9]
                item11.textContent = array10[10]
                item12.textContent = array10[11]
            }
            if (idx == 11) {
                item1.textContent = array11[0]
                item2.textContent = array11[1]
                item3.textContent = array11[2]
                item4.textContent = array11[3]
                item5.textContent = array11[4]
                item6.textContent = array11[5]
                item7.textContent = array11[6]
                item8.textContent = array11[7]
                item9.textContent = array11[8]
                item10.textContent = array11[9]
                item11.textContent = array11[10]
                item12.textContent = array11[11]
            }
        }
        if (clickCount == 2) {
            item1.textContent = array_taste[0]
            item2.textContent = array_taste[1]
            item3.textContent = array_taste[2]
            item4.textContent = array_taste[3]
            item5.textContent = array_taste[4]
            item6.textContent = array_taste[5]
            item7.textContent = array_taste[6]
            item8.textContent = array_taste[7]
            item9.textContent = array_taste[8]
            item10.textContent = array_taste[9]
            item11.textContent = array_taste[10]
            item12.textContent = array_taste[11]
        }
    }

    function setImage() {
        if (selectButton == "コーギー") {
            img.src = "image/dog_corgi_tricolor.png"
            img.alt = "dog_corgi_tricolor.png"
        }
        if (selectButton == "ダックスフント") {
            img.src = "image/dog_dachshund_choumou.png"
            img.alt = "dog_dachshund_choumou.png"
        }
        if (selectButton == "サモエド") {
            img.src = "image/dog_samoyed.png"
            img.alt = "dog_samoyed.png"
        }
        if (selectButton == "学生") {
            img.src = "image/drink_tapioka_tea_schoolboy.png"
            img.alt = "drink_tapioka_tea_schoolboy.png"
        }
        if (selectButton == "子ども") {
            img.src = "image/sweets_okashi_erabu_boy.png"
            img.alt = "sweets_okashi_erabu_boy.png"
        }
        if (selectButton == "成人") {
            img.src = "image/fashion_osyare_middle_man.png"
            img.alt = "fashion_osyare_middle_man.png"
        }
        if (selectButton == "高齢") {
            img.src = "image/tsue_koukikoureisya_ojiisan.png"
            img.alt = "tsue_koukikoureisya_ojiisan.png"
        }
        if (selectButton == "餅") {
            img.src = "image/syougatsu_mark_mochi.png"
            img.alt = "syougatsu_mark_mochi.png"
        }
        if (selectButton == "カレーライス") {
            img.src = "image/food_curryrice_white.png"
            img.alt = "food_curryrice_white.png"
        }
        if (selectButton == "エビフライ") {
            img.src = "image/food_ebi_fry_set.png"
            img.alt = "food_ebi_fry_set.png"
        }
        if (selectButton == "麻婆豆腐") {
            img.src = "image/food_mabo_doufu.png"
            img.alt = "food_mabo_doufu.png"
        }
        if (selectButton == "キッシュ") {
            img.src = "image/food_quiche_kissyu.png"
            img.alt = "food_quiche_kissyu.png"
        }
        if (selectButton == "明星 スバル") {
            img.src = "image/akehoshi_subaru.png"
            img.alt = "akehoshi_subaru.png"
        }
        if (selectButton == "氷鷹 北斗") {
            img.src = "image/hidaka_hokuto.png"
            img.alt = "hidaka_hokuto.png"
        }
        if (selectButton == "遊木 真") {
            img.src = "image/yuuki_makoto.png"
            img.alt = "yuuki_makoto.png"
        }
        if (selectButton == "衣更 真緒") {
            img.src = "image/isara_mao.png"
            img.alt = "isara_mao.png"
        }
        if (selectButton == "乱 凪砂") {
            img.src = "image/ran_nagisa.png"
            img.alt = "ran_nagisa.png"
        }
        if (selectButton == "巴 日和") {
            img.src = "image/tomoe_hiyori.png"
            img.alt = "tomoe_hiyori.png"
        }
        if (selectButton == "七種 茨") {
            img.src = "image/saegusa_ibara.png"
            img.alt = "saegusa_ibara.png"
        }
        if (selectButton == "漣 ジュン") {
            img.src = "image/sazanami_jun.png"
            img.alt = "sazanami_jun.png"
        }
    }

    function setButtonVisible() {
        if (!item1.textContent == "") { item1.style.visibility = 'visible' }
        if (!item2.textContent == "") { item2.style.visibility = 'visible' }
        if (!item3.textContent == "") { item3.style.visibility = 'visible' }
        if (!item4.textContent == "") { item4.style.visibility = 'visible' }
        if (!item5.textContent == "") { item5.style.visibility = 'visible' }
        if (!item6.textContent == "") { item6.style.visibility = 'visible' }
        if (!item7.textContent == "") { item7.style.visibility = 'visible' }
        if (!item8.textContent == "") { item8.style.visibility = 'visible' }
        if (!item9.textContent == "") { item9.style.visibility = 'visible' }
        if (!item10.textContent == "") { item10.style.visibility = 'visible' }
        if (!item11.textContent == "") { item11.style.visibility = 'visible' }
        if (!item12.textContent == "") { item12.style.visibility = 'visible' }
    }

    function setDefaultButton() {
        item1.textContent = default_text[0]
        item2.textContent = default_text[1]
        item3.textContent = default_text[2]
        item4.textContent = default_text[3]
        item5.textContent = default_text[4]
        item6.textContent = default_text[5]
        item7.textContent = default_text[6]
        item8.textContent = default_text[7]
        item9.textContent = default_text[8]
        item10.textContent = default_text[9]
        item11.textContent = default_text[10]
        item12.textContent = default_text[11]
        setButtonVisible();
    }
}