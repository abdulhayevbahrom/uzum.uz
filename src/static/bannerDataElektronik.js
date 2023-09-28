const allData = [
    // elektronika
    {
        title: "Smartfon",
        description: "Smartfon Tecno Spark Go 2023",
        price: 1359000,
        images: ["https://images.uzum.uz/cjhgmc4vutve1vhnunkg/original.jpg", "https://images.uzum.uz/cjhgmcbk9fqe2mb6c670/original.jpg", "https://images.uzum.uz/cjhgmc4jvf2i5uiugmfg/original.jpg", "https://images.uzum.uz/cjdgo8rk9fqdtbu5tnhg/original.jpg", "https://images.uzum.uz/cjhgmc4jvf2i5uiugmg0/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: ["4/64GB, 2 SIM"],
        fullinfo: [
            "Rasmiy kafolat 1 yil. IMEI ro'yxatdan o'tgan", "Tecno Spark Go 2023 6.6 dyuymli 720 x 1600 pikselli ekrani IPS texnologiyasi bo‘yicha ishlab chiqarilgan", "Tecno Spark Go 2023 asosiy kamerasi 13+2 Mp piksellar soniga va f/1.9 diafragmaga ega, bu har qanday syujetlar uchun yetarli hisoblanadi. Old selfi kamerasi - 5 Mp", "Katta 5000 mAs batareyasi smartfonning standart rejimda bir kun ishlashini va yuqori yukmalarda 12 soat ishlashini ta'minlaydi", "To‘plamda quvvatlovchi qurilmasi, himoya g‘ilofi va yo‘riqnomasi bor. Himoya oynasi ishlab chiqaruvchi tomonidan o'rnatilgan", "10 Vt tez quvvatlanish", "2 Nano-SIM kartalar", "4 Gb operativ xotira, 64 Gb asosiy xotira, xotira hajmini oshirish uchun microSD uyasi mavjud"
        ]
    },
    {
        title: "Noutbuk",
        description: "Noutbuk Lenovo V15 Intel Celeron ",
        price: 2599000,
        images: ["https://images.uzum.uz/ck2348svutvccfo2b4p0/original.jpg", "https://images.uzum.uz/ck2348bk9fq74920hla0/original.jpg", "https://images.uzum.uz/ck2348cvutvccfo2b4og/original.jpg", "https://images.uzum.uz/ck23484jvf2qegt3n5q0/original.jpg", "https://images.uzum.uz/ck23484vutvccfo2b4ng/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "Iron Grey",
        sizes: ["N4020 DDR4 4 GB, 256 GB SSD, Iron Grey, 15.6"],
        fullinfo: [
            "Operatsion tizim o'rnatilmagan", "Model: V15 IGL 82C3", "Protsessor: Intel® Celeron® Processor N4020 4M kesh, 2.80 GHz gacha", "Displey: 15.6 HD", "Operativ xotira: 4GB DD    4", "Doimiy xotira: 256GB SSD", "Rangi: Iron Grey",
        ]
    },
    {
        title: "Televizor",
        description: "Televizor Volto Led ",
        price: 1399000,
        images: ["https://images.uzum.uz/cjnsmmbk9fqe82mvnbfg/original.jpg", "https://images.uzum.uz/cjnsmmcjvf2q0hiqd2n0/original.jpg", "https://images.uzum.uz/cjnsmmcvutv7lqbs4ue0/original.jpg", "https://images.uzum.uz/cjnsmmcvutv7lqbs4udg/original.jpg", "https://images.uzum.uz/cjnsmmcvutv7lqbs4ud0/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: ["32-4000 Smart"],
        fullinfo: [
            "TelevizorLED VOLTO 32-4000 Smart", "Ekran diagonali, (dyuym) 32", "Android 9.0 operatsion tizimi", "Kafolat muddati, ishlab chiqaruvchidan, 3 yil", "HD o'lchamlari 1366 (RGB)×768, WXGA", "HDMI, Usb old/yon paneldagi ulagichlar", "Audio dekoderlar BG,DK, I, MPEG-2, L/L", "Qo'llab-quvvatlanadigan media MPEG-2 MP@ML,MPEG-2 MP@HL,H. 264, H. 265", "Kirishlar AV yilda, naushnik, HDMI x3,USB x2, optik,", "T/T2/C/S/S2 raqamli televizor tyuneri"
        ]
    },
    {
        title: "Smartfon",
        description: "Smartfon Samsung Galaxy Flip 5",
        price: 12999000,
        images: ["https://images.uzum.uz/cjqvihkjvf2hdh3emitg/original.jpg", "https://images.uzum.uz/cjtbi1jk9fq13g45hv6g/original.jpg", "https://images.uzum.uz/chm7cqbltlh4bk4k4qpg/original.jpg", "https://images.uzum.uz/cjtbi7bk9fq13g45hv7g/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "Sargʻish",
        sizes: ["Flip 5"],
        fullinfo: ["Asosiy ekran o'lchamlari 2640 x 1080 (FHD+), Dynamic AMOLED 2x, 120 Hz", "Orqa kamera-12.0 MP + 12.0 MP", "SIM-kartalar soni - ikkita SIM-karta", "NFC funktsiyasi", "Old kamera - 10.0 MP", "Batareya quvvati 3700 mА/soat", "Qo'shimcha ekran o'lchamlari 720 * 748 Super AMOLED"
        ]
    },
    {
        title: "Naushnik",
        description: "Simsiz quloqchinlar Huawei FreeBuds SE",
        price: 450000,
        images: ["https://images.uzum.uz/cihc8htenntd8rfcqa10/original.jpg", "https://images.uzum.uz/cihc8k36edfostii9jcg/original.jpg", "https://images.uzum.uz/cihc8fd40v9pplt561e0/original.jpg", "https://images.uzum.uz/cihc8t540v9pplt561g0/original.jpg", "https://images.uzum.uz/cihc8gb6edfostii9jb0/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [],
        fullinfo: [
            "Eshitish vositalarining batareya quvvati: 37 ma/soat", "Eshitish vositalarining batareya quvvati: 37 ma/soat", "Musiqa vaqti: 6 soat", "Ovozli qo'ng'iroqlarni amalga oshirish vaqti: 4 soat", "Zaryadlash qutisi yordamida musiqa tinglash: 24 soat", "Zaryadlash qutisi yordamida qo'ng'iroqlarni amalga oshirish vaqti: 16 soat", "Ishlab chiqaruvchidan 1 yillik kafolat"
        ]
    },
    {
        title: "Planshet",
        description: "Planshet va telefonlar metall sirtli",
        price: 49000,
        images: ["https://images.uzum.uz/cjhfidbk9fqe2mb6bq7g/original.jpg", "https://images.uzum.uz/cihc8k36edfostii9jcg/original.jpg", "https://images.uzum.uz/cjhfid4jvf2i5uiugai0/original.jpg", "https://images.uzum.uz/cjhfidcvutve1vhnublg/original.jpg", "https://images.uzum.uz/cjhfidcvutve1vhnubl0/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: [],
        fullinfo: [
            "Turi: planshet va telefonlar uchun ushlagich   ", "Material: alyuminiy qotishmasi", "O'lchamlari: 25.2 * 12.5 * 9 mm/9.92 * 4.92 * 3.54 dyuym", "Xususiyatlari: har qanday o'lchamdagi mobil qurilmalar uchun qulay aksessuar ovqat pishirish, filmlarni tomosha qilish, YouTube, tiktok, video qo'ng'iroqlarda qo'llaringizni bo'shatadi. Telefon stendidagi sirpanishga qarshi smartfoni tirnalishdan himoya"
        ]
    },
    {
        title: "Naushnik",
        description: "Simsiz quloqchinlar Huawei FreeBuds SE",
        price: 450000,
        images: ["https://images.uzum.uz/cihc8htenntd8rfcqa10/original.jpg", "https://images.uzum.uz/cihc8k36edfostii9jcg/original.jpg", "https://images.uzum.uz/cihc8fd40v9pplt561e0/original.jpg", "https://images.uzum.uz/cihc8t540v9pplt561g0/original.jpg", "https://images.uzum.uz/cihc8gb6edfostii9jb0/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [],
        fullinfo: [
            "Eshitish vositalarining batareya quvvati: 37 ma/soat", "Eshitish vositalarining batareya quvvati: 37 ma/soat", "Musiqa vaqti: 6 soat", "Ovozli qo'ng'iroqlarni amalga oshirish vaqti: 4 soat", "Zaryadlash qutisi yordamida musiqa tinglash: 24 soat", "Zaryadlash qutisi yordamida qo'ng'iroqlarni amalga oshirish vaqti: 16 soat", "Ishlab chiqaruvchidan 1 yillik kafolat"
        ]
    },
    {
        title: "Qo'l soati",
        description: "Qo'l soati Smart Zeblaze Beyond 2",
        price: 399000,
        images: ["https://images.uzum.uz/cj6v6jvhj8j900prcu1g/original.jpg", "https://images.uzum.uz/cj6v6jr0lbjbpr7ffrsg/original.jpg", "https://images.uzum.uz/cj6v6jr0lbjbpr7ffrt0/original.jpg", "https://images.uzum.uz/cj6v6jr0lbjbpr7ffrs0/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: [],
        fullinfo: [""
        ]
    },
    {
        title: "O'yin pristavkasi Game Stick Lite", description: "O'yin pristavkasi Game Stick Lite ",
        price: 298000,
        images: ["https://images.uzum.uz/cevcnagv1htd23akmkvg/original.jpg", "https://images.uzum.uz/cevcnagl08k0o9qhk2dg/original.jpg", "https://images.uzum.uz/cevcnagv1htd23akmkv0/original.jpg", "https://images.uzum.uz/cevcnagl08k0o9qhk2e0/original.jpg", "https://images.uzum.uz/cevcnaivtie1lhbglbq0/original.jpg", "https://images.uzum.uz/cevcnagl08k0o9qhk2eg/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: ["64 Gb, 4k Ultra HD, 2 geympad, 10000 ta oyin"],
        fullinfo: ["O'rnatilgan o'yinlar soni: 10227", "Interfeys: Bluetooth; Wi-fi; Simsiz", "O'yin konsollari seriyasi: PlayStation, Sega, Nintendo, Dendy", "O'yin formati bilan mos keladi: MAME, PS1, GB, GBA, GBC, MD, SFC, FC va ATARI", "Xotira: 64 Gb", "Qo'llab-quvvatlanadigan maksimal ruxsat: 3840 x 2160 4K UHD"
        ]
    },
    {
        title: "Blootooth naushnik",
        description: "Simsiz Bluetooth quloqchinlari P47",
        price: 47000,
        images: ["https://images.uzum.uz/chnl5on5d7kom1tgea20/original.jpg", "https://images.uzum.uz/chnl5ol6sfhndlbmt5mg/original.jpg", "https://images.uzum.uz/chnl5on5d7kom1tgea1g/original.jpg", "https://images.uzum.uz/chnl5p36edfostifjdp0/original.jpg", "https://images.uzum.uz/chnl5p5enntd8rfa3rag/original.jpg", "https://images.uzum.uz/chnl5prltlh4bk4ka88g/original.jpg"],
        type: "Elektronika",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [],
        fullinfo: [""
        ]
    },

    //kiyim

    {
        title: "Ayollar futbolkasi",
        description: "Ayollar futbolkasi Trendyol",
        price: 85000,
        images: ["https://images.uzum.uz/ck4jqvkvutvccfo2n9gg/original.jpg", "https://images.uzum.uz/ck4jqvkvutvccfo2n9gg/original.jpg", "https://images.uzum.uz/ck4jr0bk9fq8tdq5bk2g/original.jpg", "https://images.uzum.uz/ck4jr0kjvf2qegt43h20/original.jpg", "https://images.uzum.uz/ck4jr0rk9fq8tdq5bk40/original.jpg  "],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "Sargʻish",
        sizes: ["XS", "S", "M", "L "],
        fullinfo: []
    },
    {
        title: "Ayollar kiymi ",
        description: "Ayollar tepa past longslivi ikki qismli ",
        price: 1099000,
        images: ["https://images.uzum.uz/cfcg3tgv1ht6qqgha74g/original.jpg", "https://images.uzum.uz/cfcg3tlegss4smt17q20/original.jpg", "https://images.uzum.uz/cf7or3avtie1lhbhc6e0/original.jpg", "https://images.uzum.uz/cfhqo8925kualhm84kdg/original.jpg", "https://images.uzum.uz/cfhqo8nhgiopn8lbt5o0/original.jpg", "https://images.uzum.uz/cfhqo8lennt3ujbrs460/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: ["XS", "S", "M", "L "],
        fullinfo: [
        ]
    },
    {
        title: "Erkaklar vetrovkasi ",
        description: "Erkaklar vetrovkasi, bomber Ramonso",
        price: 182000,
        images: ["https://images.uzum.uz/cjq77krk9fq13g450ng0/original.jpg", "https://images.uzum.uz/cjq77ksjvf2hdh3ehgc0/original.jpg", "https://images.uzum.uz/cjq77krk9fq13g450nfg/original.jpg", "https://images.uzum.uz/cjq77krk9fq13g450ngg/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: ["XS", "S", "M", "L "],
        fullinfo: [

        ]
    },
    {
        title: "Jemper Terra Pro",
        description: "Jemper Terra Pro",
        price: 170000,
        images: ["https://images.uzum.uz/ck4os7jk9fq8tdq5csm0/original.jpg", "https://images.uzum.uz/ck4os7kvutvccfo2ohhg/original.jpg", "https://images.uzum.uz/ck4os7jk9fq8tdq5csl0/original.jpg", "https://images.uzum.uz/ck4os7jk9fq8tdq5cslg/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "green",
        sizes: ["XS", "S", "M", "L "],
        fullinfo: [

        ]
    },
    {
        title: "Vetrovka TERRA",
        description: "Vetrovka TERRA PRO",
        price: 360000,
        images: ["https://images.uzum.uz/cf4ksv8v1htd23al3vn0/original.jpg", "https://images.uzum.uz/cf4ksv8l08k0o9qi1qtg/original.jpg", "https://images.uzum.uz/cf4ksvavtie1lhbh3gdg/original.jpg", "https://images.uzum.uz/cf4ksv8l08k0o9qi1qt0/original.jpg", "https://images.uzum.uz/cf0la58l08k0o9qhnn50/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: ["XS", "S", "M", "L "],
        fullinfo: [
            "Material: polyester", "Vetrovka", "Mavsum: Kuz-Qish", "Uslub: Kundalik"
        ]
    },
    {
        title: "Yomg'ir ko'ylagi",
        description: "Yomg'ir ko'ylagi erkaklar uchun Perfecto kuzgi vetrovka",
        price: 199000,
        images: ["https://images.uzum.uz/cjkt8brk9fqacmkvi34g/original.jpg", "https://images.uzum.uz/cjq6jcjk9fq13g450h60/original.jpg", "https://images.uzum.uz/cjkt8bsvutv1g2ril9r0/original.jpg", "https://images.uzum.uz/cjkt8c4vutv1g2ril9rg/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "Mis rang",
        sizes: ["XS", "S", "M", "L "],
        fullinfo: [
            "Mato turi - 100% poliester", "O'lchov setkasiga axamiyat bering", "Fasl: bahor, yoz, kuz", "Rang: 17 rang", "Sport uchun qulay", "Kiyimlar parvarishi - extiyotkorlik bilan 30C darajada yuving",
        ]
    },
    {
        title: "Kurtka erkaklar uchun ",
        description: "Kurtka erkaklar uchun Lc Waikiki, zamsh, Demi-mavsum, haqiqiy charm",
        price: 399000,
        images: ["https://images.uzum.uz/cftg7mnhj8j9g698gld0/original.jpg", "https://images.uzum.uz/cftg7mnhj8j9g698glcg/original.jpg", "https://images.uzum.uz/cftg7mnhj8j9g698gldg/original.jpg", "https://images.uzum.uz/cftg7mnhj8j9g698gldg/original.jpg", "https://images.uzum.uz/cftg7mnhgiov1qid21h0/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "Brown",
        sizes: [],
        fullinfo: ["Kundalik kiyim va maxsus holatlar uchun juda mos keladi", "U teginish uchun yoqimli bo'lgan maxsus yumshoq tuzilishga ega", "Yuqori aşınma qarshilikka ega", "Xiaomi Mi Smart Air Purifier 4 Pro aqlli havo tozalagichi 500 m³/soatgacha CADR ko‘rsatkichiga ega bo‘lib, bir daqiqada 8330 litrgacha havoni tozalaydi. Maydoni 60 m² gacha bo‘lgan xonalar uchun juda yaxshi mos keladi."
        ]
    },
    {
        title: "qlli robot changyutgich",
        description: "Aqlli robot changyutgich Xiaomi Robot Vacuum E10, S10, S10+ Global versiyasi",
        price: 2485000,
        images: ["https://images.uzum.uz/cj6bved6sfhggrk1kkvg/original.jpg", "https://images.uzum.uz/cj6bvel6sfhggrk1kl00/original.jpg", "https://images.uzum.uz/cj6v6jr0lbjbpr7ffrt0/original.jpg", "https://images.uzum.uz/cj6bvel6sfhggrk1kl10/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [],
        fullinfo: ["Xiaomi Robot Vacuum S10+ yuvuvchi robot-changyutgich – samarali cho‘tkasiz dvigatel o‘rnatilgan va 4000 Pa so‘rishning oshirilgan kuchi bo‘lgan changyutgich.", "Robot Vacuum S10+ atrofni 3D    ko‘radi va juda mayda obyektlar bilan to‘qnashuvdan saqlanadi, hattoki paypoqlar ham g‘ildirak ostiga tasodifan tushib qolmaydi. Tizim birinchi yig‘ishtirish boshlashdan avval xona xaritasini shakllantirib oladi.", "S10+ nam yig‘ishtirish uchun uchliklar to‘qilgan materialdan tayyorlangan va bir tekis namlikni ushlab qoladi, hamda poldagi dog‘larni samarali olib tashlaydi, bunda uning yuzasini himoyasini ta’minlaydi. Pollarni haqiqiy yuvish samarasi.", "Ishlab chiqaruvchidan rasmiy kafolat: 1 yil.", "Xiaomi Robot Vacuum E10 – bu yuqori texnologik robot-changyutgich bo‘lib, u uyingizning polidagi chang va ifloslarni yig‘ishtirish uddasidan chiqadi. Yandeks Alisa, Google Assistent ovozli assistentlar bilan birga ishlaydi.", "U kuchli dvigatel va navigatsiya tizimi bilan jihozlangan, u unga xonalar bo‘ylab harakatlanishga va to‘siqlarni aylanib o‘tishga imkon beradi. Natijada, siz zo‘riqishni talab etmaydigan sifatli yig‘ishtirishni qo‘lga kiritasiz.", "Bundan tashqari, Xiaomi Robot Vacuum E10 changyutgichi HEPA filtri bilan jihozlangan, u 99,97% allergenlarni va mikrozarralarni tutib qoladi. Bu uyingizdagi havoni, ayniqsa, allergiyadan aziyat chekuvchi odamlar uchun, yanada toza va sog‘lom qiladi.", "Xiaomi Robot Vacuum S10 – bu uyda yig‘ishtirish jarayonini avtomatlashtirish uchun zamonaviy robot-changyutgich. U aqlli funksiyalarga ega, ular unga foydalanuvchining minimal aralashuvi bilan quruq va nam yig‘ishtirishni bajarishga imkon beradi.", "Xiaomi S10 robot-changyutgichi 360°ga Lidar oraliq masofa ultrazamonaviy lazer datchigi bilan jihozlangan, u joylashish joyini xatosiz aniqlashni, oraliq masofani aniq o‘lchashni va yuqori unumdorlikni ta’minlaydi.", "Aqlli rezervuarga ega bo‘lgan S10 yuvuvchi robot changyutgich polni yuvishda uzluksiz namlantirishni ta’minlab va ortiqcha namlikni olib tashlab, suvni bir tekis taqsimlaydi."
        ]
    },
    {
        title: "Qizlar uchun kurtka  ",
        description: "Qizlar uchun kurtka  ",
        price: 230000,
        images: ["https://images.uzum.uz/cjdnmv4vutv09e774ul0/original.jpg", "https://images.uzum.uz/cjdnmvcvutv09e774um0/original.jpg", "https://images.uzum.uz/cjdnmvcvutv09e774ulg/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "puple",
        sizes: [152, 158, 164],
        fullinfo: [
        ]
    },
    {
        title: "Erkaklar uchun longsliv",
        description: "Erkaklar uchun longsliv Terra Pro",
        price: 180000,
        images: ["https://images.uzum.uz/cjhgqp3k9fqe2mb6c73g/original.jpg", "https://images.uzum.uz/cjhgqp4jvf2i5uiugnd0/original.jpg", "https://images.uzum.uz/cjhgqp4vutve1vhnuom0/original.jpg", "https://images.uzum.uz/cjhgqp4jvf2i5uiugncg/original.jpg", "https://images.uzum.uz/cjhgqpcvutve1vhnuomg/original.jpg"],
        type: "Kiyim", delivery: "1 kun, bepul",
        color: "white",
        sizes: ["XS", "S", "L", "XL", "XXl"],
        fullinfo: ["Uzun yengli futbolka", "Fasl: kuz-qish", "Uslub: casual", "Tarkibi: 100% paxta", "Material: paxta"
        ]
    },
    {
        title: "Soch Olgich",
        description: "Simsiz trimmerlar VGR soch va soqol olish uchun VGR ",
        price: 89000,
        images: ["https://images.uzum.uz/ck1do6kvutvccfo27pag/original.jpg", "https://images.uzum.uz/cjs703rk9fq13g45db2g/original.jpg", "https://images.uzum.uz/cjs7h04vutvfmkmj8b30/original.jpg", "https://images.uzum.uz/cjs7h24jvf2hdh3eu7eg/original.jpg", "https://images.uzum.uz/cjs7h2kvutvfmkmj8b40/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: [],
        fullinfo: [
            "To'liq quvvat bilan ishlash vaqti: 120 minut", "Tig'lar zanglamas po'latdan tayyorlangan", "Komplektda 3 tadan 5 tagacha nasatka bor (Modelga qarab farq qiladi)", "Quvvat olish: 600 mA/soat Akkumlyator + USB zaryadlagich", "Quvvat to'lishi: 1.5 soat ichida"
        ]
    },
    {
        title: "Chanyutgich Bosch ",
        description: "Chanyutgich Bosch BGBS2BA1P",
        price: 1099000,
        images: ["https://images.uzum.uz/cjs1m6sjvf2hdh3esdh0/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "Iron Grey",
        sizes: ["BGBS2BA1P"],
        fullinfo: [
        ]
    },
    {
        title: "Elektr konvektorli isitgich",
        description: "Elektr konvektorli isitgich Ardesto CHH-2000MWC, ochiq isitish. element",
        price: 1399000,
        images: ["https://images.uzum.uz/cjnsmmbk9fqe82mvnbfg/original.jpghttps://images.uzum.uz/ck6248rk9fqd6b9tu310/original.jpg", "https://images.uzum.uz/ck6248rk9fqd6b9tu30g/original.jpg", "https://images.uzum.uz/ck6248svutv2kev20feg/original.jpg", "https://images.uzum.uz/ck6248svutv2kev20fe0/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: ["785 x 450 x 90"],
        fullinfo: [
            "Xizmat maydoni, kv. m 20", "Quvvat, Vt 1250/2000", "Zamin isitgichining turi", "Sovutish suvi turi ochiq", "HDMI, Usb old/yon paneldagi ulagichlar", "Chang va namlikdan himoya qilish klassi IP20", "Og'irligi, kg 5.2"
        ]
    },
    {
        title: "Kir yuvish mashinasi",
        description: "Kir yuvish mashinasi Volta VP7 yarim avtomatik",
        price: 1199000,
        images: ["https://images.uzum.uz/cjkt73cvutv1g2ril990/original.jpg", "https://images.uzum.uz/cjkt73svutv1g2ril99g/original.jpg", "https://images.uzum.uz/cjkt74bk9fqacmkvi2kg/original.jpg", "https://images.uzum.uz/cjkt75cvutv1g2ril9a0/original.jpg", "https://images.uzum.uz/cjkt75rk9fqacmkvi2lg/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "blue",
        sizes: ["Flip 5"],
        fullinfo: [
            "Displey mavjud emas", "Kir yuvish samaradorligi A sinfi", "Maksimal kir yuki 7kg", "Maksimal kir yuki 7kg", "Kir yuvish samaradorligi A sinfi", "Shovqin darajasi, dB, yuvish paytida 64", "Quvvat iste'moli, Vt, yuvish 155", "Kir yuvish mashinasi yarim avtomatik VOLTO VP7", "Energiya samaradorligi (energiya iste'moli) A klassi"
        ]
    },
    {
        title: "Soch quritgich",
        description: "Soch quritgich FaKang ",
        price: 89000,
        images: ["https://images.uzum.uz/cf4ksv8v1htd23al3vn0/original.jpg", "https://images.uzum.uz/cf4ksv8l08k0o9qi1qtg/original.jpg", "https://images.uzum.uz/cf4ksvavtie1lhbh3gdg/original.jpg", "https://images.uzum.uz/cf4ksv8l08k0o9qi1qt0/original.jpg", "https://images.uzum.uz/cf0la58l08k0o9qhnn50/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: [],
        fullinfo: ["Sovuq havo tugmasi", "Quvvat turi: tarmoq 220 V", "Quvvat - 2200 Vt", "Shnur uzunligi 1 metr"
        ]
    },
    {
        title: "Blendr",
        description: "Blender Bosch ",
        price: 550000,
        images: ["https://images.uzum.uz/ck6hpejk9fqd6b9tvsjg/original.jpg"],
        type: "Kiyim",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: ["MSM24500"],
        fullinfo: [

        ]
    },

    //maishiy texnika

    {
        title: "Havo tozalagich Xiaomi ",
        description: "Havo tozalagich Xiaomi Mi Smart Air Purifier 4/Pro/Lite, Compact, Global versiyasi",
        price: 450000,
        images: ["https://images.uzum.uz/cihc8htenntd8rfcqa10/original.jpg", "https://images.uzum.uz/cihc8k36edfostii9jcg/original.jpg", "https://images.uzum.uz/cihc8fd40v9pplt561e0/original.jpg", "https://images.uzum.uz/cihc8t540v9pplt561g0/original.jpg", "https://images.uzum.uz/cihc8gb6edfostii9jb0/original.jpg"],
        type: "Maishiy texnika",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [],
        fullinfo: [
            "Xiaomi Mi Smart Air Purifier 4 Lite aqlli namlantirgichi 360 m³/soatgacha yetadigan yuqori CADR ko‘rsatkichiga ega, bu unga uzluksiz bir daqiqa ishlaganda 6000 litrgacha havoni tozalash imkonini beradi. 45 m² gacha maydonni samarali tozalashga qodir.", "Ishlab chiqaruvchining bir yillik rasmiy kafolati. Har bir model haqidagi batafsil axborot tavsifda.", "Xiaomi Mi Smart Air Purifier 4 Lite aqlli namlantirgichi 360 m³/soatgacha yetadigan yuqori CADR ko‘rsatkichiga ega, bu unga uzluksiz bir daqiqa ishlaganda 6000 litrgacha havoni tozalash imkonini beradi. 45 m² gacha maydonni samarali tozalashga qodir.", "Uy uchun mo‘ljallangan Xiaomi Smart Air Purifier 4 tozalagichi 400 m³/soatgacha CADR ko‘rsatkichiga ega bo‘lib, bir daqiqada 6600 litr havoni tozalaydi. Filtr 48 m² gacha o‘lchamli xonada havoni tozalashga qodir.", "Masofadan boshqariladigan Xiaomi Smart Air Purifier 4 Pro havo tozalagichi havodagi yoqimsiz hidlarni, allergenlarni va hatto viruslarni ham samarali bartaraf qilishga qodir.", "Xiaomi Mi Smart Air Purifier 4 Pro aqlli havo tozalagichi 500 m³/soatgacha CADR ko‘rsatkichiga ega bo‘lib, bir daqiqada 8330 litrgacha havoni tozalaydi. Maydoni 60 m² gacha bo‘lgan xonalar uchun juda yaxshi mos keladi.", "Toza va musaffo havodan nafas olishni istaysizmi? Unda Xiaomi Smart Air Purifier 4 Compact - aynan sizga kerakli buyum! U 230 m³/ soatgacha yetadigan CADR ko‘rsatkichiga ega, bu uning kamtarona o‘lchamlari uchun juda yaxshi ko‘rsatkich.    ", "Xiaomi Smart Air Purifier 4 Compact modeli maydoni 25-43 m2 bo‘lgan xonalardagi havoni tozalash uchun mo‘ljallangan bo‘lib, ixcham o‘lchamlari bilan ajralib turadi – 240 x 220 x 355 mm.", "Aqlli havo tozalagich-namlantirgichning to‘g‘ri modelini tanlash uchun o‘zingiz havoni tozalamoqchi bo‘lgan xona o‘lchamlarini baholang.", "Xiaomi Smart Air Purifier 4 EU havo tozalagichi, chang, mikroblar, hayvonlarning juni, tamaki hidi, allergenlar, bakteriyalar va yoqimsiz hidlardan oson xalos bo‘lishga yordam beradi."
        ]
    },
    {
        title: "qlli robot changyutgich",
        description: "Aqlli robot changyutgich Xiaomi Robot Vacuum E10, S10, S10+ Global versiyasi",
        price: 2485000,
        images: ["https://images.uzum.uz/cj6bved6sfhggrk1kkvg/original.jpg", "https://images.uzum.uz/cj6bvel6sfhggrk1kl00/original.jpg", "https://images.uzum.uz/cj6v6jr0lbjbpr7ffrt0/original.jpg", "https://images.uzum.uz/cj6bvel6sfhggrk1kl10/original.jpg"],
        type: "Maishiy texnika",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [], fullinfo: ["Xiaomi Robot Vacuum S10+ yuvuvchi robot-changyutgich – samarali cho‘tkasiz dvigatel o‘rnatilgan va 4000 Pa so‘rishning oshirilgan kuchi bo‘lgan changyutgich.", "Robot Vacuum S10+ atrofni 3D    ko‘radi va juda mayda obyektlar bilan to‘qnashuvdan saqlanadi, hattoki paypoqlar ham g‘ildirak ostiga tasodifan tushib qolmaydi. Tizim birinchi yig‘ishtirish boshlashdan avval xona xaritasini shakllantirib oladi.", "S10+ nam yig‘ishtirish uchun uchliklar to‘qilgan materialdan tayyorlangan va bir tekis namlikni ushlab qoladi, hamda poldagi dog‘larni samarali olib tashlaydi, bunda uning yuzasini himoyasini ta’minlaydi. Pollarni haqiqiy yuvish samarasi.", "Ishlab chiqaruvchidan rasmiy kafolat: 1 yil.", "Xiaomi Robot Vacuum E10 – bu yuqori texnologik robot-changyutgich bo‘lib, u uyingizning polidagi chang va ifloslarni yig‘ishtirish uddasidan chiqadi. Yandeks Alisa, Google Assistent ovozli assistentlar bilan birga ishlaydi.", "U kuchli dvigatel va navigatsiya tizimi bilan jihozlangan, u unga xonalar bo‘ylab harakatlanishga va to‘siqlarni aylanib o‘tishga imkon beradi. Natijada, siz zo‘riqishni talab etmaydigan sifatli yig‘ishtirishni qo‘lga kiritasiz.", "Bundan tashqari, Xiaomi Robot Vacuum E10 changyutgichi HEPA filtri bilan jihozlangan, u 99,97% allergenlarni va mikrozarralarni tutib qoladi. Bu uyingizdagi havoni, ayniqsa, allergiyadan aziyat chekuvchi odamlar uchun, yanada toza va sog‘lom qiladi.", "Xiaomi Robot Vacuum S10 – bu uyda yig‘ishtirish jarayonini avtomatlashtirish uchun zamonaviy robot-changyutgich. U aqlli funksiyalarga ega, ular unga foydalanuvchining minimal aralashuvi bilan quruq va nam yig‘ishtirishni bajarishga imkon beradi.", "Xiaomi S10 robot-changyutgichi 360°ga Lidar oraliq masofa ultrazamonaviy lazer datchigi bilan jihozlangan, u joylashish joyini xatosiz aniqlashni, oraliq masofani aniq o‘lchashni va yuqori unumdorlikni ta’minlaydi.", "Aqlli rezervuarga ega bo‘lgan S10 yuvuvchi robot changyutgich polni yuvishda uzluksiz namlantirishni ta’minlab va ortiqcha namlikni olib tashlab, suvni bir tekis taqsimlaydi."
        ]
    },
    {
        title: "Aqlli yerda turadigan tarozilar ",
        description: "Aqlli yerda turadigan tarozilar Xiaomi Mi Body Composition Scale 2 Global ",
        price: 298000,
        images: ["https://images.uzum.uz/ck00tajk9fq7492068m0/original.jpg", "https://images.uzum.uz/ck00takjvf2qegt3brag/original.jpg", "https://images.uzum.uz/cgne4br57mg9720dvc0g/original.jpg"],
        type: "Maishiy texnika",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [""],
        fullinfo: ["Xususiyatlari: vaznni nazorat qilish", "Xotiradagi foydalanuvchilar soni: 16", "Maksimal o'lchanadigan vazn: 150 kg", "Korpus materiali: shisha, plastik", "Diagnostika: tana vazni indeksini hisoblash, tana tarkibini tahlil qilish   ", "Qo‘shimcha: yoritishga qarab nurdiodlarning yorqinligini sozlash", "Xotira: ilova bilan sinxronlashmasdan 800 tagacha o'lchov", "Og'irligi: 1 kg, o‘lchami (E x U x B): 30x30x2.5 sm", "Quvvatlanishi: batareyalardan"
        ]
    },
    {
        title: "Dazmol",
        description: "Dazmol HADiD BI-101",
        price: 180000,
        images: ["https://images.uzum.uz/ci7h6tt6sfhndlboifj0/original.jpg", "https://images.uzum.uz/ci7h6tr6edfostih81f0/original.jpg", "https://images.uzum.uz/ci7h6tt40v9pplt453j0/original.jpg", "https://images.uzum.uz/chnl5p36edfostifjdp0/original.jpg", "https://images.uzum.uz/ci7h6tlenntd8rfbp8i0/original.jpg", "https://images.uzum.uz/ci7h6tv5d7kom1ti3hfg/original.jpg"],
        type: "Maishiy texnika",
        delivery: "1 kun, bepul",
        color: "blue",
        sizes: ["BI-101"],
        fullinfo: ["HADID BI-101", "MODEL NO.:BI-101", "220-240V kuchlanish 50-60Hz", "Quvvat 1200-1600 W  ", "Suv idishining hajmi: 200ml.", "Keramika tagligi", "Balandligi 250 (mm) 25 sm.", "Bug'li dazmol", "Made in P.R.C"
        ]
    }
    ,
    //Poyavzallar


    {
        title: "Krossovka PEAK",
        description: "Krossovka PEAK",
        price: 670000,
        images: ["https://images.uzum.uz/cejdm72vtie1lhbfeiq0/original.jpg", "https://images.uzum.uz/cejdm70l08kcldtp69sg/original.jpg", "https://images.uzum.uz/cejdm72vtie1lhbfeiqg/original.jpg", "https://images.uzum.uz/cejdm72vtie1lhbfeir0/original.jpg", "https://images.uzum.uz/cejdm70v1htd23ajha20/original.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "black",
        sizes: [39,40,41,42,43,44,45],
        fullinfo: [""
        ]
    },
    {
        title: "Krossovka",
        description: "Erkaklar uchun krossovka",
        price: 162000,
        images: ["https://images.uzum.uz/cjov7bkjvf2hdh3e9mmg/t_product_240_high.jpg", "https://images.uzum.uz/cjov7bjk9fq13g44ou80/original.jpg", "https://images.uzum.uz/cjov7bjk9fq13g44ou8g/original.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [39,40,41,42,43,44],
        fullinfo: [""
        ]
    }
    ,
    {
        title: "Krossovka",
        description: "Krossovkalar erkaklar uchun charm",
        price: 179000,
        images: ["https://images.uzum.uz/cj4cecr6edfostik71vg/original.jpg", "https://images.uzum.uz/cjo2ahsvutv7lqbs59eg/original.jpg", "https://images.uzum.uz/cjo2ahsjvf2q0hiqdddg/original.jpg","https://images.uzum.uz/cjo2ahsvutv7lqbs59f0/original.jpg","https://images.uzum.uz/cj4ceu36edfostik724g/original.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "brown",
        sizes: [39,40,41,42,43,44],
        fullinfo: [""
        ]
    }
    ,
    {
        title: "Krossovka",
        description: "Erkaklar krossovkalari",
        price: 119000,
        images: ["https://images.uzum.uz/cidb0fv5d7kom1tinrc0/t_product_240_high.jpg", "https://images.uzum.uz/cidb0flenntd8rfcdf2g/t_product_240_high.jpg", "https://images.uzum.uz/cidb0fv5d7kom1tinrcg/t_product_240_high.jpg","https://images.uzum.uz/chebgbh2uqk7mc7o4bng/t_product_240_high.jpg","https://images.uzum.uz/chebgdd4f2sbulptv6sg/t_product_240_high.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [39,40,41,42,43,44,45],
        fullinfo: ["Sun'iy charm, to'qimachilik","PVX murakkab yagona material","Oyoq kiyimlarni yugurish maqsadi; uy uchun; turizm Uniseks","Mavsum yoz; demi-mavsum"
        ]
    }
    ,
    {
        title: "Krossovka",
        description: "Erkaklar krossovkalari",
        price: 119000,
        images: ["https://images.uzum.uz/cidb0fv5d7kom1tinrc0/t_product_240_high.jpg", "https://images.uzum.uz/cidb0flenntd8rfcdf2g/t_product_240_high.jpg", "https://images.uzum.uz/cidb0fv5d7kom1tinrcg/t_product_240_high.jpg","https://images.uzum.uz/chebgbh2uqk7mc7o4bng/t_product_240_high.jpg","https://images.uzum.uz/chebgdd4f2sbulptv6sg/t_product_240_high.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [39,40,41,42,43,44,45],
        fullinfo: ["Sun'iy charm, to'qimachilik","PVX murakkab yagona material","Oyoq kiyimlarni yugurish maqsadi; uy uchun; turizm Uniseks","Mavsum yoz; demi-mavsum"
        ]
    }
    ,
    {
        title: "Zamsh",
        description: "Mokasinlar ayollar uchun",
        price: 155000,
        images: ["https://images.uzum.uz/cjipfusjvf2hn7fe7o3g/original.jpg", "https://images.uzum.uz/cjipfusjvf2hn7fe7o3g/original.jpg", "https://images.uzum.uz/cjipfusjvf2hn7fe7o40/original.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "turquoise",
        sizes: [36,37,38,39,40],
        fullinfo: ["Razmeri razmeriga yuradi.."
        ]
    }
    ,
    {
        title: "Tufli",
        description: "Ayollar uchun tufli, poshnali",
        price: 228000,
        images: ["https://images.uzum.uz/cjdo3tsvutv09e7753b0/original.jpg", "https://images.uzum.uz/cjdo3tsvutv09e7753c0/original.jpg", "https://images.uzum.uz/cjdo3tsjvf2trp6s2u00/original.jpg","https://images.uzum.uz/cjdo3tsvutv09e7753bg/original.jpg","https://images.uzum.uz/cjdo3tsjvf2trp6s2u0g/original.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "flirting",
        sizes: [36,37,38,39,40],
        fullinfo: ["Model: Lattini Labutin","Ishlab chiqarilgan davlat: Xitoy","Material: Material ter","Ayollar poshnali tuflisi","O`lcham: 35 - 39","Rang: oq (timsoh), bej (timsoh) va qora (tekis)"
        ]
    }
    ,
    {
        title: "Krocs",
        description: "Krocs shippaklari uniseks",
        price: 159000,
        images: ["https://images.uzum.uz/cii5p73ltlh4bk4n4140/original.jpg", "https://images.uzum.uz/cii5p836edfostiicdig/original.jpg", "https://images.uzum.uz/cii5p9540v9pplt58psg/original.jpg","https://images.uzum.uz/cii5pa36edfostiicdk0/original.jpg","https://images.uzum.uz/cit60rl40v9pplt6di50/original.jpg","https://images.uzum.uz/cit60rlenntd8rfe1pe0/original.jpg","https://images.uzum.uz/cit60rn5d7kom1tkc4gg/original.jpg","https://images.uzum.uz/cit60rl40v9pplt6di4g/original.jpg","https://images.uzum.uz/cit60rn5d7kom1tkc4h0/original.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "flirting",
        sizes: [36,37,38,39,40],
        fullinfo: ["Ajablanarli darajada engil va bardoshli","Ichidagi qismi massaj effektini yaratadi","Oson parvarish","Teshiklar havo aylanishiga imkon beradi","Yoz uchun eng yaxshi poyabzal","Tibbiyot xodimlari uchun ideal, ","Bu yozda ajoyib dizayn","EVA ekologik materialdan tayyorlangan","Elastik va juda qulay"
        ]
    }
    ,
    {
        title: "Krasovkalar",
        description: "Erkaklar sport krossovkalari, yozgi",
        price: 99000,
        images: ["https://images.uzum.uz/cj1smnlenntd8rfeh07g/original.jpg", "https://images.uzum.uz/cj1smnl40v9pplt6st00/original.jpg", "https://images.uzum.uz/cj1smnlenntd8rfeh080/original.jpg","https://images.uzum.uz/cj1smnlenntd8rfeh080/original.jpg"],
        type: "Poyavzallar",
        delivery: "1 kun, bepul",
        color: "Gray",
        sizes: [39,40,41,42,42,44],
        fullinfo: [""
        ]
    }

    //aksuasarlar
    ,
    {
        title: "Ziraklar",
        description: "Ziraklar to'plami, 12 juft",
        price: 19000,
        images: ["https://images.uzum.uz/ccshl9f0tgqvlm57nacg/original.jpg", "https://images.uzum.uz/ccshl970tgqvlm57nac0/original.jpg", "https://images.uzum.uz/ccshl9n0tgqvlm57nadg/original.jpg","https://images.uzum.uz/ccshl9f0tgqvlm57nad0/original.jpg","https://images.uzum.uz/ccshl9jb3ho5lmuprrjg/original.jpg","https://images.uzum.uz/ccshknv0tgqvlm57nab0/original.jpg","https://images.uzum.uz/ccshknr5a95unf11v6kg/original.jpg"],
        type: "Aksesuarlar",
        delivery: "1 kun, bepul",
        color: "silvery",
        sizes: [],
        fullinfo: ["Material: zargarlik qotishmasi","Metall rangi: oltin, kumush","Miqdori: 12 juft","Qulf turi: chinnigullar","Og'irligi: 11,2 g","Turli holatlar uchun turli o'lchamdagi sirg'alar","O'smirlar, qiz do'stingiz, onangiz va o'zingiz uchun ajoyib sovg'a","Ishlab chiqarilgan mamlakat: Xitoy"
        ]
    }
    ,
    {
        title: "Uzuklar",
        description: "Ayollar uzuklari",
        price: 27000,
        images: ["https://images.uzum.uz/cd00mpf0tgqvlm57tfpg/original.jpg", "https://images.uzum.uz/cd00mp3b3ho5lmuq21hg/original.jpg", "https://images.uzum.uz/cd00mpbb3ho5lmuq21ig/original.jpg","https://images.uzum.uz/cd00mov0tgqvlm57tfp0/original.jpg","https://images.uzum.uz/cir770540v9pplt66nrg/original.jpg","https://images.uzum.uz/cd00mpbb3ho5lmuq21i0/original.jpg","https://images.uzum.uz/cd00mpf0tgqvlm57tfpg/original.jpg"],
        type: "Aksesuarlar",
        delivery: "1 kun, bepul",
        color: "silvery",
        sizes: [],
        fullinfo: ["Olchamlari: 16 mm - 18 mm","Material: zargarlik qotishmasi","Metall rangi: kumush","Bir paketdagi miqdor: 15 dona","Original zamonaviy dizayn","Ushbu uzuk to'plami qiz do'stingiz, xotiningiz, onangiz yoki hayotingizdagi boshqa maxsus ayol uchun ajoyib sovg'a bo'lishi mumkin"
        ]
    }
    ,
    {
        title: "Sirg'alar",
        description: "Quloq manjetli sirg'alari",
        price: 27000,
        images: ["https://images.uzum.uz/cbpsig4ff5b7qe6p2iq0/original.jpg", "https://images.uzum.uz/cctr2pn0tgqvlm57o31g/original.jpg","https://images.uzum.uz/cd00mov0tgqvlm57tfp0/original.jpg","https://images.uzum.uz/cctr2pn0tgqvlm57o32g/original.jpg","https://images.uzum.uz/cctr2pn0tgqvlm57o320/original.jpg"],
        type: "Aksesuarlar",
        delivery: "1 kun, bepul",
        color: "silvery",
        sizes: [],
        fullinfo: ["Yorqin va zamonaviy zargarlik buyumlari to'plami","Quloqni teshishni talab qilmaydi va ishonchli ushlab turadi","Material: zargarlik qotishmasi","Sifatli materiallardan tayyorlangan va turli dizaynlarga ega","Shaxsiylikni ta'kidlang va har qanday tasvirga yorqinlik qo'shing","Ushbu rasm ajoyib sovg'a bo'ladi.","Og'irligi: 7.6 g"
        ]
    }
    ,
    {
        title: "Hamyon",
        description: "Hamyon ayollar uchun",
        price: 22000,
        images: ["https://images.uzum.uz/cetq310v1htd23akhcfg/original.jpg", "https://images.uzum.uz/cemoj5ivtie1lhbg38u0/original.jpg","https://images.uzum.uz/cetq312vtie1lhbggn40/original.jpg","https://images.uzum.uz/cetq310l08k0o9qhfcc0/original.jpg","https://images.uzum.uz/cetq310v1htd23akhcg0/original.jpg","https://images.uzum.uz/cetq310v1htd23akhcgg/original.jpg"],
        type: "Aksesuarlar",
        delivery: "1 kun, bepul",
        color: "Lavender",
        sizes: [],
        fullinfo: ["Material: soxta teri","Kartalar uchun 5 ta filial","Astar materiallari: soxta teri","Hamyon hajmi: 11,5*1,5*9 qarang","Hisob-kitoblar uchun 1 ta bo'lim","Yopish turi: tugma"
        ]
    }
    ,
    {
        title: "Sumka",
        description: "Ayollar sumkasi",
        price: 59000,
        images: ["https://images.uzum.uz/celfbbol08kcldtpan5g/original.jpg", "https://images.uzum.uz/cf9t7iqvtie1lhbhkkhg/original.jpg","https://images.uzum.uz/cf9t7iol08k0o9qij41g/original.jpg","https://images.uzum.uz/cf9t7j2vtie1lhbhkki0/original.jpg","https://images.uzum.uz/cf9t7j0v1htd23allnrg/original.jpg","https://images.uzum.uz/celfbbol08kcldtpan5g/original.jpg","https://images.uzum.uz/cf9t7iqvtie1lhbhkkhg/original.jpg","https://images.uzum.uz/cf9t7iol08k0o9qij41g/original.jpg"],
        type: "Aksesuarlar",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [],
        fullinfo: ["Asosiy material: sun'iy teri","Astar materiallari: polyester","Ichki qism: fermuarli ichki cho'ntak","Chop etish: hayvon","Tasma uzunligi: 26 sm","Hajmi: 20 * 24 * 16 sm"
        ]
    }
    ,
    {
        title: "Sumka",
        description: "Ayollar sumkasi, fermuar, messenjer sumkasi",
        price: 95000,
        images: ["https://images.uzum.uz/ccrtg070tgqvlm57mpk0/original.jpg", "https://images.uzum.uz/ccrtg035a95unf11ul40/original.jpg"],
        type: "Aksesuarlar",
        delivery: "1 kun, bepul",
        color: "white",
        sizes: [],
        fullinfo: ["Ayollar elkama-sumkasi","Zipli sumka","Zanjirli tutqichli messenjer sumkasi","Aksessuar 2 rangda taqdim etilgan: qora va oq","U uchun ajoyib sovg'a","Uzunligi: 22 sm, balandligi: 13 sm, pastki chuqurligi: 7 sm, yuqori chuqurligi: 4 sm"
        ]
    }
    ,
    {
        title: "Sumka",
        description: "Ayollar baget elkama-sumkasi, kichkina",
        price: 83000,
        images: ["https://images.uzum.uz/cic49nl40v9pplt4lho0/original.jpg", "https://images.uzum.uz/cic49nd40v9pplt4lhng/original.jpg","https://images.uzum.uz/cic49nf5d7kom1tik5t0/original.jpg","https://images.uzum.uz/cic49nlenntd8rfc9obg/original.jpg","https://images.uzum.uz/cic49nl40v9pplt4lhog/original.jpg","https://images.uzum.uz/cic486bltlh4bk4mgea0/original.jpg"],
        type: "Aksesuarlar",
        delivery: "1 kun, bepul",
        color: "Brown",
        sizes: [],
        fullinfo: ["Klassik va zamonaviy ayollar baget sumkasi shkafning ajralmas atributidir.","Sumka juda yengil, ixcham va keng.","Yuqori sifatli eko-teridan qilingan, teginish yoqimli.","Sumka o'lchamlari 20 * 6 * 11 sm"
        ]
    }
    //Parfumerlar
    ,
    {
        title: "Parfyuma",
        description: "Parfyumlangan suv Avon Incandessence Soleil, 50 ml",
        price: 30000,
        images: ["https://images.uzum.uz/cdq9l12vtie1lhbe1frg/original.jpg", "https://images.uzum.uz/cdq9l10v1htd23ai3cpg/original.jpg","https://images.uzum.uz/cdq9l0ov1htd23ai3cp0/original.jpg","https://images.uzum.uz/cdq9l0qvtie1lhbe1fr0/original.jpg"],
        type: "Go'zallik",
        delivery: "1 kun, bepul",
        color: "Brown",
        sizes: [],
        fullinfo: ["Xushbo'y hid turi: gul-mevali","Yuqori notalar: Limon, Mandarin, Pulpanat","O'rta notalar: magnoliya, frezya, osmantus absolyut","Asosiy notalar: sandal daraxti, mushk, Ambrox Super (kremsimon yog'och nota)"
        ]
    }
    ,
    {
        title: "Parfyuma",
        description: "Gel oddiy va yog'li teri uchun tozalovchi CeraVe, 236 ml",
        price: 89000,
        images: ["https://images.uzum.uz/ci6p7hdenntd8rfbmol0/original.jpg", "https://images.uzum.uz/ci6p7m3ltlh4bk4lt510/original.jpg  ","https://images.uzum.uz/ci6pabd40v9pplt42hj0/original.jpg","https://images.uzum.uz/ci6p7hdenntd8rfbmol0/original.jpg"],
        type: "Go'zallik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: ["Chuqur tozalash","Terini yangilaydi","Tarkibida niatsinamid mavjud","Parabensiz","Komedogen bo'lmagan","Osiyo bozori uchun lux replica"
        ]
    }
    ,
    {
        title: "Zardob ",
        description: "Zardob yuz uchun qarishga qarshi The Ordinary Peeling, Caffeine, Hyaluronic Acid, 30 ml",
        price: 120000,
        images: ["https://images.uzum.uz/cijcvej6edfostiigekg/original.jpg", "https://images.uzum.uz/cijcvld40v9pplt5ctj0/original.jpg","https://images.uzum.uz/cijcvlf5d7kom1tjbhog/original.jpg","https://images.uzum.uz/cijcvldenntd8rfd15jg/original.jpg","https://images.uzum.uz/cijcvlf5d7kom1tjbhp0/original.jpg","https://images.uzum.uz/cijcvlbltlh4bk4n84ig/original.jpg"],
        type: "Go'zallik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: ["Peeling Solution-mikrorelef tekislash, qora nuqtalarni olib tashlash, oqartirish, tozalash, mustahkamlash, yallig'lanishni olib tashlash, rangni yaxshilash","Caffeine Solution-qora doiralar bilan kurashish uchun, Teri tonlanadi, namlanadi, bir tekis ohang va namlikga ega boladi.","Hyaluronic Acid-kuchli va doimiy namlovchi ta'sirga ega bo'lib, terini elastik, silliq va yoshartiradi."
        ]
    }
    ,
    {
        title: "Zardob ",
        description: "Yuzni oqartirish va sepkillarni yo'qotish uchun zardob mohiyati, 30 ml",
        price: 27000,
        images: ["https://images.uzum.uz/cf589jqvtie1lhbh57q0/t_product_240_high.jpg", "https://images.uzum.uz/cf589jol08k0o9qi3k30/original.jpg","https://images.uzum.uz/cijcvldenntd8rfd15jg/original.jpg","https://images.uzum.uz/cf589jgv1htd23al5otg/original.jpg"],
        type: "Go'zallik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: ["Terini namlaydi, uni oq, elastik va silliq qiladi","Qorong'u dog'larni yoritadi va terining ohangini yaxshilaydi","Pigmentatsiya va sepkillarni keltirib chiqaradigan kirlarni yo'q qiladi"
        ]
    }
    ,
    {
        title: "Yuz uchun zardob ",
        description: "Yuz uchun zardob essensiya Hiisees, niatsinamid bilan, 30 ml",
        price: 25000,
        images: ["https://images.uzum.uz/cf2i06qvtie1lhbgtar0/original.jpg", "https://images.uzum.uz/cf2i092vtie1lhbgtarg/original.jpg","https://images.uzum.uz/cf589sgv1htd23al5oug/original.jpg","https://images.uzum.uz/cf589sgv1htd23al5ov0/original.jpg","https://images.uzum.uz/cf589sivtie1lhbh57qg/original.jpg"],
        type: "Go'zallik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: ["Natriy gialuronat: teri elastik, silliq, ipakdek bo'ladi","Terini torting va oqartiring","Teri silliqligi uchun salyangoz sekretsiyasi filtrati: yuzdagi akne va qo'pol teri uchun","Oltin barg tarkibi terini isitadi va oziqlantiradi, quruqlik va suvsizlanishni yo'qotadi","Teshiklarni toraytiradi, akne (qora nuqta, sivilcalar) va yog'li teriga qarshi kurashadi","Ikkilamchi tozalash effekti bilan yoshartiradi","Yumshoq parvarish va namlovchi","Niatsinamid + Oltin: Niatsinamid va oltin terini parvarish qilish uchun ingredientlarni o'z ichiga oladi, teriga yumshoq g'amxo'rlik qiladi va foydalanishdan keyin uni yumshoq qiladi."
        ]
    }

    //salomatlik
    ,
    {
        title: "Massajor nefritli ",
        description: "Massajor nefritli 3 tasi 1 da, massaj to'plami rolik, cho'tka, skrebok guash",
        price: 40000,
        images: ["https://images.uzum.uz/cetakj0v1htd23akgflg/original.jpg", "https://images.uzum.uz/ceu2ot8l08k0o9qhh21g/original.jpg","https://images.uzum.uz/ceu2ou2vtie1lhbgibng/original.jpg","https://images.uzum.uz/ceu2ougl08k0o9qhh220/original.jpg"],
        type: "salomatlik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: [""
        ]
    }
    ,
    {
        title: "Uqalagich ",
        description: "Bosh terisi va tana uchun uqalagich",
        price: 25000,
        images: ["https://images.uzum.uz/ccbqm2622va03rn5fv20/original.jpg", "https://images.uzum.uz/ccbqm56ha885kmcq9kig/original.jpg","https://images.uzum.uz/ccvf88b5a95unf122ck0/original.jpg","https://images.uzum.uz/ccvf88bb3ho5lmuq1g50/original.jpg","https://images.uzum.uz/ccvf88jb3ho5lmuq1g5g/original.jpg","https://images.uzum.uz/ccvf88j5a95unf122ckg/original.jpg"],
        type: "salomatlik",
        delivery: "1 kun, bepul",
        color: "purple",
        sizes: [],
        fullinfo: ["Materiallar: plastik, silikon","Hipoalerjenik, aşınmaya bardoshli, yumshoq tish materiallari","Ergonomik massaj dizayni: qulay tutqich, yumaloq shakl, osma teshik","Muntazam foydalanish qon aylanishini yaxshilaydi va soch o'sishiga yordam beradi","Stress va bosh og'rig'ini engillashtiradi, tinchlantiradi","Massajchining korpusidagi tutqich ushlagichi uni qo'lingizga mahkam o'rnatishga imkon beradi","Vannada yoki dushda foydalanish mumkin","O'lcham: 7.5 * 7 sm"
        ]
    }
    ,
    {
        title: "Lifting massajchi ",
        description: "Lifting massajchi 3D Massager yuz, qo'l va tana uchun",
        price: 31000,
        images: ["https://images.uzum.uz/cee3o4gv1htd23aj5lq0/original.jpg", "https://images.uzum.uz/cee3o4gv1htd23aj5lq0/original.jpg","https://images.uzum.uz/cdtn2s0l08kcldtnu5lg/original.jpg","https://images.uzum.uz/cdtn2v2vtie1lhbe62o0/original.jpg","https://images.uzum.uz/cdtn2v0v1htd23ai813g/original.jpg","https://images.uzum.uz/ce11iogv1htd23aid7l0/original.jpg","https://images.uzum.uz/ce11ioqvtie1lhbeamf0/original.jpg"],
        type: "salomatlik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: [""
        ]
    }
    ,
    {
        title: "Holatni tuzatuvchi Smart Sensor Corrector, ",
        description: "Holatni tuzatuvchi Smart Sensor Corrector, vibratsiyali ortopedik korset",
        price: 48000,
        images: ["https://images.uzum.uz/cdtut6gl08kcldtnued0/original.jpg", "https://images.uzum.uz/ce6pd0ov1htd23ainrb0/original.jpg","https://images.uzum.uz/ce6pd10l08kcldtoc5a0/original.jpg","https://images.uzum.uz/ce6pd10l08kcldtoc5a0/original.jpg","https://images.uzum.uz/ce6pd10v1htd23ainrbg/original.jpg","https://images.uzum.uz/ce6pd10v1htd23ainrc0/original.jpg"],
        type: "salomatlik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: ["Tik turgan va o'tirgan holatda to'g'ri holatni saqlashga yordam beradi","Noto'g'ri pozitsiyani qabul qilganingizdan so'ng ovoz va tebranish signali yoqiladi","Tuzatuvchini sozlash oson - 15 dan 95 kg gacha bo'lgan odamlar uchun javob beradi","Hajmi universal sozlanishi","Quvvat: o'rnatilgan 500mah batareya","Batareya quvvati 2 soatdan 15 kungacha ishlaydi","Ko'krak hajmi oralig'i 70 dan 120 sm gacha","Holatni tuzatuvchisini kuniga 2 soat kiyish tavsiya etiladi.","USB orqali zaryadlash"
        ]
    }
    ,
    {
        title: "Gigiyenik plastir ",
        description: "Gigiyenik plastirlar, 19 * 72 mm, 100 dona",
        price: 1000,
        images: ["https://images.uzum.uz/cjffrlkjvf2pi6u79it0/original.jpg", "https://images.uzum.uz/cjffrl4jvf2pi6u79is0/original.jpg","https://images.uzum.uz/cjffrlcjvf2pi6u79isg/original.jpg"],
        type: "salomatlik",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [10,20,30,40,50,60,70,80,90,100,110,120,130],
        fullinfo: [""
        ]
    }
    //uy ro'zg'or buyumlari
    ,
    {
        title: "Choynak Kukmara zanglamaydigan",
        description: "Choynak Kukmara zanglamaydigan po'latdan, hushtak bilan, 3 litr",
        price: 124000,
        images: ["https://images.uzum.uz/cammvre3p3gj5u389pc0/original.jpg  ", "https://images.uzum.uz/cammvvm3p3gj5u389pcg/original.jpg","https://images.uzum.uz/camn0gu3p3gj5u389pdg/original.jpg"],
        type: "Buyumlar",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [10,20,30,40,50,60,70,80,90,100,110,120,130],
        fullinfo: [""
        ]
    }
    ,
    {
        title: "Kastryulka ",
        description: "Kukmara Granit Uitra Blue, shisha qopqoq bilan AP",
        price: 216000,
        images: ["https://images.uzum.uz/cdcbg2r5a95unf139220/original.jpg ", "https://images.uzum.uz/ch9od2p6i6dim8r6sb6g/original.jpg","https://images.uzum.uz/cdcbg2r5a95unf13922g/original.jpg","https://images.uzum.uz/cdcbg2r5a95unf139230/original.jpg"],
        type: "Buyumlar",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: ["Devorlar va pastki qismning sezilarli qalinligi panning tanasining deformatsiyasini yo'q qiladi;","Devorlar va pastki qismning sezilarli qalinligi panning tanasining deformatsiyasini yo'q qiladi","Mustahkamlangan yopishmaydigan tizim;","Mahsulotlar yonmaydi va ta'mini saqlamaydi;","Yuvish qulayligi;","induksiyadan tashqari barcha turdagi pechkalar uchun javob beradi;"
        ]
    }
    ,
    {
        title: "tova",
        description: "Tova O.M.S 3210 00 07, yopishmaydigan qoplamali, 28 * 6 sm, 3 litr",
        price: 199000,
        images: ["https://images.uzum.uz/cglvuoj57mg9720dm9e0/original.jpg ", "https://images.uzum.uz/cfpocifg49devoa8nac0/original.jpg","https://images.uzum.uz/cfpocifhgiov1qicj06g/original.jpg","https://images.uzum.uz/cfpocifg49devoa8nabg/original.jpg"],
        type: "Buyumlar",
        delivery: "1 kun, bepul",
        color: "",
        sizes: [],
        fullinfo: [""
        ]
    }
    ,
    {
        title: "Parda",
        description: "Pardalar kdf, monoxrom dekorativ pardalar, yotoq va bolalar xonasi uchun blackaut pardalar",
        price: 199000,
        images: ["https://images.uzum.uz/cji7u7svutv1klhdoclg/original.jpg", "https://images.uzum.uz/cfpocifg49devoa8nac0/original.jpg","https://images.uzum.uz/ci99jlr6edfostihe0ug/original.jpg","https://images.uzum.uz/ci99jm5enntd8rfbv6h0/original.jpg","https://images.uzum.uz/ci99jlr6edfostihe0v0/original.jpg"],
        type: "Buyumlar",
        delivery: "1 kun, bepul",
        color: "broen",
        sizes: [],
        fullinfo: ["Uskunalar: 1 dona","Material: Polyester","Parda lentasidagi pardalar 6 sm","Teginganda yumshoq va baxmal","Komplekta pardalar kanchasiz","Maqsad: yotoqxona, bolalar xonasi, oshxona, yashash xonasi uchun","Rang haqiqiydan bir necha tonnaga farq qilishi mumkin, bu holat ranglarning ko'payishi bilan bog'liq va zavod nikohi emas.","O'lcham: 150*280 sm"
        ]
    }
    ,
    {
        title: "Choyshab",
        description: "Choyshab bilan qoplangan ikki kishilik choyshablar to'plami",
        price: 220000,
        images: ["https://images.uzum.uz/ck6lgprk9fqd6b9u0smg/original.jpg", "https://images.uzum.uz/ck6lgt4jvf2su072qnf0/original.jpg","https://images.uzum.uz/ck6lh13k9fqd6b9u0sqg/original.jpg","https://images.uzum.uz/ck3cs3kvutvccfo2gcq0/original.jpg"],
        type: "Buyumlar",
        delivery: "1 kun, bepul",
        color: "blue",
        sizes: [],
        fullinfo: ["Mato HB saten 70 %","Teginganda yumshoq va baxmal","Yostiq jildlar: 50  70 2 dona","Adyol 220  200, hoyshab 220  230"
        ]
    }
]

function addID(allData) {
    return allData.map((i, index) => i ? { ...i, id: index } : i)
}

let data = addID(allData)


export default data
