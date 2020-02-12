const birdData = [
    [
        {
            id : 0,
            name:'Воробей',
            special:'Passeridae',
            song:'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC527227-Saxaul%20Sparrow%20Dunes%20170523_3032.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/1926685/dd9dc8ca-1be3-40ba-9c18-94ca3b2647cc/s1200',
            info:'Воробьи (Passeridae) – небольшие птицы многочисленного семейства воробьиные. Являются самыми известными пернатыми, предпочитающими гнездиться рядом с людьми. Воробьев легко узнать по пестрому оперению и задорному чириканью.',
        },
        {
            id : 1,
            name:'Ворон',
            special:'Corvus corax',
            song:'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC517654-kolk0918.mp3',
            img:'https://o-prirode.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/3.0-1.jpg.webp',
            info:'Ворон – птица представительная. Выглядит внушительно за счет массивного острого клюва, длинных лап, крупных глаз. Цвет крыла — черный. Ворона не спутать с другими подобными птицами из рода Воронов – его отличают длинные узкие крылья, а также густо оперенный хвост в форме клина.',
        },
        {
            id : 2,
            name:'Голубь',
            special:'Columba',
            song:'https://www.xeno-canto.org/sounds/uploaded/RJNSQXBIJE/XC513867-4.%20Columba%20livia%20XC.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/467185/f449d15b-9ffa-463a-8034-575359f8c5a9/s1200',
            info:'Голуби – сравнительно маленькие птицы, которые, в отличие от многих других домашних птиц, сохранили способность летать.Длина тела в среднем достигает 40 см, размах крыльев от 50 до 70 см, масса от 250 до 400 г. Окрас оперения очень изменчив и отличается у разных пород, но перья всегда плотные и густые. Туловище голубя продолговатое, крылья широкие с острыми кончиками. Хвост короткий с закругленным краем. Ноги короткие, как правило, без оперения. Клюв среднего размера, темный.',
        },
        {
            id : 3,
            name:'Сеница',
            special:'Parus',
            song:'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC527321-Great%20Tit%20Jalman%20170601_3237.mp3',
            img:'https://avatars.mds.yandex.net/get-zen_doc/53963/pub_5acda50cc3321b8a7c2578f8_5acda52edcaf8e42c2ae30f1/scale_1200',
            info:'Синицы (Parus) – достаточно многочисленный род птиц, относящихся к семейству Синицевые и отряду Воробьинообразные. Обычным представителем рода является большая синица (Parus major), получившая достаточно широкое распространение на территории многих регионов России.',
        },
        {
            id : 4,
            name:'Аист',
            special:'Ciconia',
            song:'https://www.xeno-canto.org/sounds/uploaded/WIPMNWUHXI/XC421078-Zwooi%28j%29_Karula_20180612_1656.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/467185/07625c61-3664-4d05-bded-2cb7d7224c24/s1200',
            info:'Аист – крупная птица из рода Аистов семейства аистовых, отряда аистообразных. Масса тела составляет 2-4,5 килограмма, длина – от 80 до 105 сантиметров, высота – 1 метр, размах крыльев достигает 1,5-2 метра.',
        },
        {
            id : 5,
            name:'Орел',
            special:'Aquila',
            song:'https://www.xeno-canto.org/sounds/uploaded/KHGERYPVPK/XC459459-20181218_070850_Tawny_eagle.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/1542587/aa7fd53a-2b04-4767-aa0d-025f398c1b63/s1200',
            info:'Орел является хищной птицей, которая принадлежит к семейству ястребиные. Это птица с массивным телосложением, длинными, широкими крыльями, массивным клювом. Когти у орла загнуты внутрь, в области бедер расположены «штаны» из перьев. Длина тела орла от 75 до 88 см, хвост короткий, крылья широкие, их размах достигает 2,5 м.',
        }
    ],
    [
        {
            id : 0,
            name:'Орел',
            special:'Aquila',
            song:'https://www.xeno-canto.org/sounds/uploaded/XKXDFWNSPA/XC208128-Common%20Ostrich.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/1542587/aa7fd53a-2b04-4767-aa0d-025f398c1b63/s1200',
            info:'Орел является хищной птицей, которая принадлежит к семейству ястребиные. Это птица с массивным телосложением, длинными, широкими крыльями, массивным клювом. Когти у орла загнуты внутрь, в области бедер расположены «штаны» из перьев. Длина тела орла от 75 до 88 см, хвост короткий, крылья широкие, их размах достигает 2,5 м.',
        },
        {
            id : 1,
            name:'Страус',
            special:'Struthio camelus',
            song:'https://www.xeno-canto.org/sounds/uploaded/XKXDFWNSPA/XC208128-Common%20Ostrich.mp3',
            img:'https://avatars.mds.yandex.net/get-zen_doc/1550999/pub_5cd942fcdc10c300b339b88f_5cd945d05204fd00b23d05b8/scale_1200',
            info:'Страус – самая крупная птица на сегодняшний день. Их высота достигает 3 м, вес – 150 кг. Телосложение страусов плотное с длинной шеей и плоской маленькой головой. Прямой, уплощенный клюв украшен наростом. Глаза крупные с пушистыми ресницами.Крылья у страусов развиты недостаточно, поэтому птицы не могут летать. А вот ноги с двумя пальцами у них очень сильные. На одном пальце образовано подобие копыта – опора для бега.',
        },
        {
            id : 2,
            name:'Фламинго',
            special:'Phoenicopterus',
            song:1,
            img:'https://i.pinimg.com/originals/a9/33/72/a93372cbd362a5f01505e8f576e1b840.jpg',
            info:'Птицы фламинго имеют уникальные строение тела и окрас оперения. Фламинго — общительные болотные птицы, обычно от 90 до 150 сантиметров в высоту с бочкообразным животом, длинной сильно изогнутой шеей. Голова у фламинго небольшая с крупным массивным клювом, сильно изогнутым книзу в серединной части. Птицы передвигают на длинных ногах-ходулях. Самка фламинго ростом меньше самца. Окрас пера у разнополых птиц одинаков. Цветовая гамма включает оттенки розового – от белого до бордового. Ноги у большинства видов птиц желтые. Маховые перья и кончик клюва черные.',
        },
        {
            id : 3,
            name:'Беркут',
            special:'Aquila chrysaetos',
            song:'https://www.xeno-canto.org/sounds/uploaded/XUPSIWNTHV/XC518824-200110_0174_3nr.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/2059105/78d003be-f75b-461e-9f12-00facbfa773c/s1200',
            info:'Крупная и сильная птица с длиной тела от 76 до 93 см, размахом крыльев 180-240 см. Самки крупнее, чем самцы, их масса находится в пределах от 3,8 до 6,7 кг, у самцов она составляет 2,8-4,6 кг. Клюв похож на орлиный: высокий, сплюснутый с боков, загнут вниз в виде крючка. Перья на зашейке удлинённые. Крылья длинные, широкие, к основанию сужаются так, так что в полете задний край крыла изгибается как латинская буква S. Особенно заметна эта характеристика у молодых птиц. Хвост закруглённый, длинный.',
        },
        {
            id : 4,
            name:'Стерьвятник',
            special:'Neophron',
            song:'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/percnoptere%20dEgypte%20chickcall.mp3',
            img:'https://cdn.pixabay.com/photo/2017/10/30/10/55/vulture-2902092_1280.jpg',
            info:'Длина тела взрослых стервятников находится в пределах от 60 до 70 см, масса от 1,5 до 2,2 кг. Размах крыльев достигает 165 см. Оперение у стервятника белого цвета, а по краям крыльев расположены чёрные длинные перья, особенно хорошо заметные во время полёта. Горлышко с желтоватым оттенком. Шея не оперена. И у самок, и у самцов есть тёмная, практически чёрная полоса на лице.',
        },
        {
            id : 5,
            name:'Цапля',
            special:'Ardea cinerea',
            song:'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC526931-Grey%20Heron%20Bayan%20Nuur%201170529_3152.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/2408597/e3af9455-9986-4964-adb7-88a39a2a1f83/s1200',
            info:'У серой цапли очень длинная шея, длинные и тонкие ноги и длинный клюв. Вес этой крупной птицы в среднем около 1,5 кг, достигает 2 кг. Длина тела до 102 см. Размах крыльев от 1,5 до 1,75 м. Длина клюва от 10 до 13 см. Клюв конический, желтовато-бурого цвета. Радужина жёлтая, окологлазное кольцо зеленое. Лапы оливково-бурого цвета.',
        }
    ],
    [
        {
            id : 0,
            name:'Дятел',
            special:'Loxia',
            song:'https://www.xeno-canto.org/sounds/uploaded/GELAPBFFDU/XC521440-20200119%200920%20St%C3%B6rre%20korsn%C3%A4bb%20excitement%20call%20Stora%20B%C3%B6tet.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/214107/43d34f44-4f67-435e-8a80-c56cab8e25b5/s1200',
            info:'Дятлы – это маленькие или среднего размера птицы, которые ведут в основном древесный образ жизни. Их длинный, прямой, конусообразный клюв позволяет извлекать насекомых прямо из-под коры деревьев. Череп у дятла крупный и крепкий. Хвост клинообразный, из жестких перьев, что позволяет использовать его в качестве опоры. Оперение у всех видов пёстрое, чёрно-белое, с красными или жёлтыми отметинами на голове и других частях тела.',
        },
        {
            id : 1,
            name:'Ястреб',
            special:'Accipitrinae',
            song:'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/472427/fda7e5b1-508e-4a48-b709-83d46cce6809/s1200',
            info:'Самки ястреба обычно крупнее, чем самцы, и масса достигает 2 кг при длине тела от 60 до 65 см и размахе крыльев более 1 м. Масса самцов находится обычно в пределах от 650 до 1150 г, соответственно, и длина тела и размах крыльев у них меньше.',
        },
        {
            id : 2,
            name:'Кукушка',
            special:'Cuculus',
            song:'https://www.xeno-canto.org/sounds/uploaded/FBRAYAXGSJ/XC500260-20181229%20085324%20%28online-audio-converter.com%29.mp3',
            img:'https://regnum.ru/uploads/pictures/news/2015/08/24/1440441315_%D0%BA%D1%83%D0%BA%D1%83%D1%88%D0%BA%D0%B0_regjpg_normal.jpg',
            info:'Кукушка – небольшая лесная птица из одноименного рода. Средняя длина тела птицы – 32 -34 сантиметра, размах крыльев – 6 -7 сантиметров, вес – 90 -190 граммов. У кукушки длинное худощавое тело, узкие, заостроенные на конце крылья, хвост длинный, скошен по краю в форме клина. Ноги короткие, развиты слабо, непригодны для ходьбы по земле. Строение лап зигодактильное – два когтя смотрят вперед, а два остальных повернуты назад. Клюв короткий, загнут книзу.',
        },
        {
            id : 3,
            name:'Сова',
            special:'Strigiformes',
            song:'https://www.xeno-canto.org/sounds/uploaded/GSWWLWKEGN/XC524166-GR-MONED-BAR_20190318_013302_Gufo%20reale_duetto%20e%20copula%20%28bis%29.mp3',
            img:'https://i.pinimg.com/736x/bd/91/86/bd9186d4643614bc5d9ad35f511b05d2--pretty-eyes-beautiful-eyes.jpg',
            info:'Совы – это хищные птицы, которые представляют класс «Птицы» и отряд «Совообразные». В этот отряд входит больше 2-х сотен видов птиц, как крупных, так и среднего размера. Пернатые хищники предпочитают охотиться в темное время суток. «Совообразных» можно встретить практически на всех континентах.',
        },
        {
            id : 4,
            name:'Филин',
            special:'Bubo bubo',
            song:'https://www.xeno-canto.org/sounds/uploaded/GSWWLWKEGN/XC524179-GR-MONED-BAR_20190214_064702_Gufo%20reale_richiamo_f%20%28forte%29_serie.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/1948860/351becc7-0632-40bd-b820-1d8dc0f7629c/s1200',
            info:'Полет филина бесшумный, что важно во время ночной охоты, когда все в лесу спит. Зрение очень острое. Также знаменита способность филина вертеть головой: они могут повернуть ее до 270 градусов, делая практически полный оборот головы вокруг шеи. Все эти особенности делают птицу непревзойденным ночным охотником.',
        },
        {
            id : 5,
            name:'Дрозд',
            special:'Turdus',
            song:'https://www.xeno-canto.org/sounds/uploaded/WDTGKKSKNG/XC504016-Groundscraper%20Thrush.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/879261/15da915c-965b-49eb-af85-7f9b00f25a8d/s1200',
            info:'Дрозды считаются птицами, входящими в отряд воробьиных. В отличие от других видов, эти птицы имеют ряд отличительных особенностей. Они отличаются образом жизни и характером поведения, а также природными местами обитания, где они строят для себя гнезда и выращивают свое потомство. Существует много разновидностей дроздов, в зависимости от ареала обитания.',
        }
    ],
    [
        {
            id : 0,
            name:'Соловей',
            special:'Luscinia',
            song:'https://www.xeno-canto.org/sounds/uploaded/JQSYKZHEMB/XC437641-TarphocertSWBA12a.mp3',
            img:'https://storage.myseldon.com/news_pict_0C/0CEE70DB7B6DB823A91F3043AD3DDB27',
            info:'Самая известная певчая птица в странах СНГ – это соловей из семейства мухоловковые отряда воробьинообразные. Несмотря на чудный голос, внешней красотой соловьи не отличаются',
        },
        {
            id : 1,
            name:'Многоголосый пересмешник',
            special:'Mimus polyglottos',
            song:'https://www.xeno-canto.org/sounds/uploaded/KADPGEQPZI/XC505947-audio%20nomo%200806%20xc.mp3',
            img:'https://s.poembook.ru/theme/f2/da/c6/add794eb6a22635d1ac4bd7b9b910b1b24d60188.jpeg',
            info:'Они любят петь, часто в предрассветные утренние часы, повторяя мелодию снова и снова, а иногда воспроизводят то, что слышат: лай собак, сирены, скрипение ворот или пение других птиц. Исследование проведенное обществом Одюбона в Массачусетсе каталогизировало 36 песен других пернатых в репертуаре одной птицы.',
        },
        {
            id : 2,
            name:'Полевой жаровонок',
            special:'Alauda arvensis',
            song:'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC527437-2018-10-29%20Ouessant%20Alouette%20des%20champs%20migr.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/2389283/074054d1-28d0-4f51-aacd-7ac61ed23dae/s1200',
            info:'Длина тела колеблется от 11 до 20 см, а масса — от 29 до 70 грамм. Во время полета быстрые и маневренные. Окрашены жаворонки скромно по отношению к другим птица. Спина пестрая, на груди заметны светлые окантованные перья, живот светлый с темными пятнами. На голове присутствует своеобразный хохолок. Клюв более утонченный, нежели у воробья.',
        },
        {
            id : 3,
            name:'Крапивник',
            special:'Troglodytes troglodytes',
            song:'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC527468-2018-10-29%20Ouessant%20Troglodytes%20divers%20cris%20et%20chant.mp3',
            img:'https://erbirds.ru/photos/0004/001/00040001901.jpg',
            info:'Крапивник известен также под названиями орешек, подкоренник и задерихвост. Все эти народные имена указывают на особенности внешнего вида этих певчих птиц. Крапивники – очень маленькие, около 12 см в длину, с плотным круглым телом, короткой шеей, крупной круглой головой и длинным, торчащим кверху, хвостом. Их коричневато-каштановое оперение мягкое и пушистое, немного светлее на животе, чем на спине. Кроме того, птиц отличает тонкий и длинный, загнутый книзу клюв.',
        },
        {
            id : 4,
            name:'Певчий дрозд',
            special:'Turdus',
            song:'https://www.xeno-canto.org/sounds/uploaded/WDTGKKSKNG/XC504016-Groundscraper%20Thrush.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/805160/951253f7-033c-441a-ac72-b85d509a63a6/s1200',
            info:'Несмотря на большую разновидность дроздов, самым распространенным остается певчий дрозд. Масса взрослой особи достигает 55-100 грамм, а длина до 25 см. Обладают характерным способом передвижения — дрозды прыгают и одновременно приседают.',
        },
        {
            id : 5,
            name:'Скворец',
            special:'Sturnus',
            song:'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC527444-2018-10-29%20Ouessant%20Etourneau%20sansonnet%20groupe%20pose%20chaos.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/472427/fa81d5b4-4e81-4adf-881a-5fbcc9410146/s1200',
            info:'Певчие птицы скворцы принадлежат к семейству Скворцовые отряда воробьинообразные. Они не только мелодично поют и отличаются способностями пересмешников, но и уничтожают насекомых, за что полюбились во всех уголках нашей планеты, куда были завезены человеком.',
        }
    ],
    [
        {
            id : 0,
            name:'Орел',
            special:'Aquila',
            song:'https://www.xeno-canto.org/sounds/uploaded/FIDXCHEYJO/XC314486-Frigatebird_vs_Booby_best_598.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/1542587/aa7fd53a-2b04-4767-aa0d-025f398c1b63/s1200',
            info:'Орел является хищной птицей, которая принадлежит к семейству ястребиные. Это птица с массивным телосложением, длинными, широкими крыльями, массивным клювом. Когти у орла загнуты внутрь, в области бедер расположены «штаны» из перьев. Длина тела орла от 75 до 88 см, хвост короткий, крылья широкие, их размах достигает 2,5 м.',
        },
        {
            id : 1,
            name:'Ястреб',
            special:'Accipitrinae',
            song:'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/472427/fda7e5b1-508e-4a48-b709-83d46cce6809/s1200',
            info:'Самки ястреба обычно крупнее, чем самцы, и масса достигает 2 кг при длине тела от 60 до 65 см и размахе крыльев более 1 м. Масса самцов находится обычно в пределах от 650 до 1150 г, соответственно, и длина тела и размах крыльев у них меньше.',
        },
        {
            id : 2,
            name:'Беркут',
            special:'Aquila chrysaetos',
            song:'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC518798-guila%20Real-%5BAudioTrimmer.com%5D.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/2059105/78d003be-f75b-461e-9f12-00facbfa773c/s1200',
            info:'Крупная и сильная птица с длиной тела от 76 до 93 см, размахом крыльев 180-240 см. Самки крупнее, чем самцы, их масса находится в пределах от 3,8 до 6,7 кг, у самцов она составляет 2,8-4,6 кг. Клюв похож на орлиный: высокий, сплюснутый с боков, загнут вниз в виде крючка. Перья на зашейке удлинённые. Крылья длинные, широкие, к основанию сужаются так, так что в полете задний край крыла изгибается как латинская буква S. Особенно заметна эта характеристика у молодых птиц. Хвост закруглённый, длинный.',
        },
        {
            id : 3,
            name:'Сова',
            special:'Strigiformes',
            song:'https://www.xeno-canto.org/sounds/uploaded/GSWWLWKEGN/XC524166-GR-MONED-BAR_20190318_013302_Gufo%20reale_duetto%20e%20copula%20%28bis%29.mp3',
            img:'https://i.pinimg.com/736x/bd/91/86/bd9186d4643614bc5d9ad35f511b05d2--pretty-eyes-beautiful-eyes.jpg',
            info:'Совы – это хищные птицы, которые представляют класс «Птицы» и отряд «Совообразные». В этот отряд входит больше 2-х сотен видов птиц, как крупных, так и среднего размера. Пернатые хищники предпочитают охотиться в темное время суток. «Совообразных» можно встретить практически на всех континентах.',
        },
        {
            id : 4,
            name:'Филин',
            special:'Bubo bubo',
            song:'https://www.xeno-canto.org/sounds/uploaded/GSWWLWKEGN/XC524179-GR-MONED-BAR_20190214_064702_Gufo%20reale_richiamo_f%20%28forte%29_serie.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/1948860/351becc7-0632-40bd-b820-1d8dc0f7629c/s1200',
            info:'Полет филина бесшумный, что важно во время ночной охоты, когда все в лесу спит. Зрение очень острое. Также знаменита способность филина вертеть головой: они могут повернуть ее до 270 градусов, делая практически полный оборот головы вокруг шеи. Все эти особенности делают птицу непревзойденным ночным охотником.',
        },
        {
            id : 5,
            name:'Чайка',
            special:'Larus',
            song:'https://www.xeno-canto.org/sounds/uploaded/MXMFTGKZDR/XC383925-GMCLAC_6211-PGull.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/251121/dd09a44a-1e37-4fb2-b40c-d80f41ef1e19/s1200',
            info:'Род чайки включает много видов, для которых можно выделить некоторые общие характерные внешние черты. Как правило, это птицы большого или среднего размера, окрас оперения у них обычно белого или серого цвета, часто украшен чёрными отметинами в области головы или на крыльях. Одной из отличительных черт является сильный клюв чаек, немного загнутый на кончике, а также развитые плавательные перепонки на лапах.',
        }
    ],
    [
        {
            id : 0,
            name:'Баклан',
            special:'Phalacrocorax',
            song:'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC267552-Phalacrocorax%20gaimardii150811_T97.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/163339/8c595ad7-b7d8-4aa6-8fcb-a3666f97dc1a/s1200',
            info:'Все представители морских видов, кроме бакланов и определенных разновидностей крачек, обладают оперением, пропитанным слоем жира. Это водоотталкивающее свойство служит надежной защитой от промокания, а плотный пух обеспечивает постоянную температуру тела даже в холодной воде. Баклан – птица, которая имеет преимущество, по сравнению с другими своими сородичами, заключающееся в особом строении перьев. Это позволяет ему не мерзнуть даже в том случае, если приходится много и долго нырять. Больший удельный вес обеспечивает этому представителю пернатых возможность длительного пребывания под водой.',
        },
        {
            id : 1,
            name:'Пингвин',
            special:'Spheniscidae',
            song:'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
            img:'https://images.wallpaperscraft.ru/image/pingvin_para_sneg_lednik_detenysh_29307_1920x1080.jpg',
            info:'Практически все представители семейства морских птиц обладают окрасом оперения черных, серых или белых тонов. Однако существуют пернатые, имеющие расцветку более яркую и пеструю. Например, пингвин - это птица, отдельные виды которой являются обладателями разноцветного оперения в области шеи и груди. Окрас очень важен в условиях дикой природы. Основная его функция – камуфляж, то есть способность сливаться с цветовой гаммой определенной местности. Это позволяет не только птицам, но и всем животным скрыться от нападения хищника или не выдать себя на охоте за добычей.',
        },
        {
            id : 2,
            name:'чайка',
            special:'Larus',
            song:'https://www.xeno-canto.org/sounds/uploaded/MXMFTGKZDR/XC383925-GMCLAC_6211-PGull.mp3',
            img:'https://avatars.mds.yandex.net/get-pdb/251121/dd09a44a-1e37-4fb2-b40c-d80f41ef1e19/s1200',
            info:'Еще одна водоплавающая морская птица - чайка. Питается в основном мелкой рыбой. Добывает пропитание разными способами: улов на поверхности, ныряние с воздуха на определенную глубину, охота под водой с преследованием, не брезгует и представителями высших позвоночных животных.',
        },
        {
            id : 3,
            name:'Топорики',
            special:'Fratercula cirrhata',
            song:'https://www.xeno-canto.org/sounds/uploaded/MXMFTGKZDR/XC383925-GMCLAC_6211-PGull.mp3',
            img:'https://i.ucrazy.ru/files/pics/2015.05/1430885344_26.jpg',
            info:'Северная морская птица является завсегдатаем традиционных многочисленных базаров пернатых. Топорики и кайры считаются рекордсменами среди тех, кто способен собираться в столь густонаселенной местности. Благодаря своим коротким крыльям они превосходно погружаются в воду, обеспечивая себя пищей. Этих представителей можно называть наиболее приспособленными к морским водам. Их птенцы, которые еще не умеют летать, выпадают из гнезд в скалистой местности прямо в волны.',
        },
        {
            id : 4,
            name:'Полярная крачка',
            special:'Sterna paradisaea',
            song:'https://www.xeno-canto.org/sounds/uploaded/LSJZSKQNIG/XC491003-DS7_5932.mp3',
            img:'https://2krota.ru/wp-content/uploads/2019/07/0811b3c5-1024x682.jpg',
            info:'Этой небольшой птичке с чёрной шапочкой на голове принадлежит мировой рекорд по дальности перелётов. Только представьте: эти пернатые ежегодно преодолевают расстояние более 70 ООО километров! Зимует и гнездится полярная крачка у берегов Антарктиды, а всё остальное время проводит в долгих перелётах с одного полюса Земли на другой. В случае опасности она способна ожесточённо защищать своё гнездо от врагов.',
        },
        {
            id : 5,
            name:'Водорез',
            special:'Rynchops',
            song:'https://www.xeno-canto.org/sounds/uploaded/QICUNWILKU/XC356723-2017-02-19_06%2752%2703%27Rhynchops%20niger1.mp3',
            img:'https://c2.staticflickr.com/2/1892/42308234050_c50014796c_k.jpg',
            info:'Водорез, или ножеклюв, летает над самой волной и как бы срезает верхний слой воды. Своим удивительным клювом он буквально снимает пищу с поверхности, подобно тому как ложкой снимают сливки с молока. Никакой другой птице это больше не удается, потому что ни у одной другой птицы нет такого клюва.',
        }
    ],
]

export default birdData;