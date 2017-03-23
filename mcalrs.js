//Author: YAN NAING AYE 
//WebSite: http://cool-emerald.com/?p=1209
//License: Myanmar Calendrical Calculations by Yan Naing Aye is licensed
//         under a Creative Commons Attribution 3.0 Unported License.
//         http://creativecommons.org/licenses/by/3.0/
//  You are free:
//    to Share — to copy, distribute and transmit the work
//    to Remix — to adapt the work
//    to make commercial use of the work
//  Under the following conditions:
//    Attribution — You must attribute Myanmar Calendrical Calculations to Yan Naing Aye (with link).

//Internationalization---------------------------------------------------------
Language=document.getElementById('mcalr').lang;
//Catalog for Zawgyi-One
if (document.getElementById('mcalr').style.fontFamily=="Zawgyi-One") {
  X={
	'January':'ဇန္နဝါရီ',
	'February':'ေဖေဖာ္ဝါရီ',
	'March':'မတ္',
	'April':'ဧၿပီ',
	'May':'ေမ',
	'June':'ဇြန္',
	'July':'ဇူလိုင္',
	'August':'ဩဂုတ္',
	'September':'စက္တင္ဘာ',
	'October':'ေအာက္တိုဘာ',
	'November':'နိုဝင္ဘာ',
	'December':'ဒီဇင္ဘာ',
	'First Waso':'ပဝါဆို',
	'Tagu':'တန္ခူး',
	'Kason':'ကဆုန္',
	'Nayon':'နယုန္',
	'Waso':'ဝါဆို',
	'Wagaung':'ဝါေခါင္',
	'Tawthalin':'ေတာ္သလင္း',
	'Thadingyut':'သီတင္းကြ်တ္',
	'Tazaungmone':'တန္ေဆာင္မုန္း',
	'Natdaw':'နတ္ေတာ္',
	'Pyatho':'ျပာသို',
	'Tabodwe':'တပို႔တြဲ',
	'Tabaung':'တေပါင္း',
	'Waxing Moon':'လဆန္း',
	'Waning Moon':'လဆုတ္',
	'Full Moon':'လျပည့္',
	'Dark Moon':'လကြယ္',
	'Myanmar Year':'ျမန္မာသကၠရာဇ္',
	'Ku':'ခု',
	'Late':'ေႏွာင္း',
	'Second':'ဒု',
	'Sunday':'တနဂၤေႏြ',
	'Monday':'တနလၤာ',
	'Tuesday':'အဂၤါ',
	'Wednesday':'ဗုဒၶဟူး',
	'Thursday':'ၾကာသပေတး',
	'Friday':'ေသာၾကာ',
	'Saturday':'စေန',
	'Nay':'ေန႔',
	'Yat':'ရက္',
	'Sabbath Eve':'အဖိတ္',
	'Sabbath':'ဥပုသ္',
	'Yatyarzar':'ရက္ရာဇာ',
	'Afternoon Pyathadar':'မြန္းလြဲျပႆဒါး',
	'Pyathadar':'ျပႆဒါး',
	'New Year Day':'New Year\'s Day',
	'Independence Day':'လြတ္လပ္ေရးေန႔',
	'Union Day':'ျပည္ေထာင္စုေန႔',
	'Peasants Day':'ေတာင္သူ လယ္သမားေန႔',
	'Resistance Day':'ေတာ္လွန္ေရးေန႔',
	'Labour Day':'အလုပ္သမားေန႔',
	'Martyrs Day':'အာဇာနည္ေန႔',
	'Christmas Day':'ခရစၥမတ္ေန႔',
	'Buddha Day':'ေညာင္ေရ သြန္းပြဲ',
	'Start of Buddhist Lent':'ဓမၼစၾကာေန႔',
	'End of Buddhist Lent':'မီးထြန္းပြဲ',
	'Tazaungdaing':'တန္ေဆာင္တိုင္',
	'National Day':'အမ်ိဳးသားေန႔',
	'Karen New Year Day':'ကရင္နွစ္သစ္ကူး',
	'Tabaung Pwe':'တေပါင္းပြဲ',
	'Thingyan Akyo':'သၾကၤန္ အႀကိဳေန႔',
	'Thingyan Akya':'သႀကၤန္္ အက်ေန႔',
	'Thingyan Akyat':'သႀကၤန္္ အၾကတ္ေန႔',
	'Thingyan Atat':'သႀကၤန္္ အတက္ေန႔',
	'Myanmar New Year Day':'နွစ္ဆန္းတစ္ရက္ေန႔',
	'AMyeitTaSoke':'အၿမိတၱစုတ္',
	'WaraMeitTuGyi':'ဝါရမိတၱဳႀကီး',
	'WaraMeitTuNge':'ဝါရမိတၱဳငယ္',
	'ThaMarPhyu':'သမားျဖဴ',
	'ThaMarNyo':'သမားညိဳ',
	'YatPote':'ရက္ပုပ္',
	'YatYoteMar':'ရက္ယုတ္မာ',
	'MaharYatKyan':'မဟာရက္ၾကမ္း',
	'NagaPaw':'နဂါးေပၚ',
	'ShanYat':'ရွမ္းရက္',
	'The west':'အေနာက္',
	'The north':'ေျမာက္',
	'The east':'အေရွ႕',
	'The south':'ေတာင္',
	' is the facing direction of the Naga head':' အရပ္သို႔ နဂါးဦး လွည့္၏',
    '0': '၀',
    '1': '၁',
    '2': '၂',
	'3': '၃',
    '4': '၄',
    '5': '၅',
	'6': '၆',
    '7': '၇',
    '8': '၈',
	'9': '၉',
	',':'၊',
	'.':'။',
	'Mon National Day':'မြန္အမ်ိဳးသားေန႔',
	'Birthday of General Aung San':'ဗိုလ္ခ်ဳပ္ ေအာင္ဆန္း ေမြးေန႔',
	'Valentines Day':'ဗယ္လင္တိုင္းေန႔',
	'Earth Day':'ကမၻာေျမေန႔',
	'April Fools Day':'ဧၿပီအ႐ူးေန႔',
	'Red Cross Day':'ၾကက္ေျခနီေန႔',
	'United Nations Day':'ကုလသမၼဂၢေန႔',
	'Halloween':'သရဲေန႔',
	'Shan New Year Day':'ရွမ္းနွစ္သစ္ကူး',
	'Mothers Day':'အေမေန႔',
	'Fathers Day':'အေဖေန႔',
	'Sasana Sakaraj':'သာသနာ သကၠရာဇ္'
  };
}

//Catalog for  English Language
else if (Language=='en-MY') {
  X={
	'January':'January',
	'February':'February',
	'March':'March',
	'April':'April',
	'May':'May',
	'June':'June',
	'July':'July',
	'August':'August',
	'September':'September',
	'October':'October',
	'November':'November',
	'December':'December',
	'First Waso':'First Waso',
	'Tagu':'Tagu',
	'Kason':'Kason',
	'Nayon':'Nayon',
	'Waso':'Waso',
	'Wagaung':'Wagaung',
	'Tawthalin':'Tawthalin',
	'Thadingyut':'Thadingyut',
	'Tazaungmone':'Tazaungmone',
	'Natdaw':'Natdaw',
	'Pyatho':'Pyatho',
	'Tabodwe':'Tabodwe',
	'Tabaung':'Tabaung',
	'Waxing Moon':'Waxing Moon',
	'Waning Moon':'Waning Moon',
	'Full Moon':'Full Moon',
	'Dark Moon':'Dark Moon',
	'Myanmar Year':'Myanmar Year',
	'Ku':' ',
	'Late':'Late ',
	'Second':'Second ',
	'Sunday':'Sunday',
	'Monday':'Monday',
	'Tuesday':'Tuesday',
	'Wednesday':'Wednesday',
	'Thursday':'Thursday',
	'Friday':'Friday',
	'Saturday':'Saturday',
	'Nay':' ',
	'Yat':' ',
	'Sabbath Eve':'Sabbath Eve',
	'Sabbath':'Sabbath',
	'Yatyarzar':'Yatyarzar',
	'Afternoon Pyathadar':'Afternoon Pyathadar',
	'Pyathadar':'Pyathadar',
	'New Year Day':'New Year\'s Day',
	'Independence Day':'Independence Day',
	'Union Day':'Union Day',
	'Peasants Day':'Peasants Day',
	'Resistance Day':'Resistance Day',
	'Labour Day':'Labour Day',
	'Martyrs Day':'Martyrs\' Day',
	'Christmas Day':'Christmas Day',
	'Buddha Day':'Buddha Day',
	'Start of Buddhist Lent':'Start of Buddhist Lent',
	'End of Buddhist Lent':'End of Buddhist Lent',
	'Tazaungdaing':'Tazaungdaing',
	'National Day':'National Day',
	'Karen New Year Day':'Karen New Year Day',
	'Tabaung Pwe':'Tabaung Pwe',
	'Thingyan Akyo':'Thingyan Akyo',
	'Thingyan Akya':'Thingyan Akya',
	'Thingyan Akyat':'Thingyan Akyat',
	'Thingyan Atat':'Thingyan Atat',
	'Myanmar New Year Day':'Myanmar New Year Day',
	'AMyeitTaSoke':'AMyeitTaSoke',
	'WaraMeitTuGyi':'WaraMeitTuGyi',
	'WaraMeitTuNge':'WaraMeitTuNge',
	'ThaMarPhyu':'ThaMarPhyu',
	'ThaMarNyo':'ThaMarNyo',
	'YatPote':'YatPote',
	'YatYoteMar':'YatYoteMar',
	'MaharYatKyan':'MaharYatKyan',
	'NagaPaw':'NagaPaw',
	'ShanYat':'ShanYat',
	'The west':'The west',
	'The north':'The north',
	'The east':'The east',
	'The south':'The south',
	' is the facing direction of the Naga head':' is the facing direction of the Naga head',
    '0': '0',
    '1': '1',
    '2': '2',
	'3': '3',
    '4': '4',
    '5': '5',
	'6': '6',
    '7': '7',
    '8': '8',
	'9': '9',
	',':',',
	'.':'.',
	'Mon National Day':'Mon National Day',
	'Birthday of General Aung San':'Birthday of General Aung San',
	'Valentines Day':'Valentines Day',
	'Earth Day':'Earth Day',
	'April Fools Day':'April Fools\' Day',
	'Red Cross Day':'Red Cross Day',
	'United Nations Day':'United Nations Day',
	'Halloween':'Halloween',
	'Shan New Year Day':'Shan New Year Day',
	'Mothers Day':'Mothers\' Day',
	'Fathers Day':'Fathers\' Day',
	'Sasana Sakaraj':'Sasana Sakaraj'
  };
}

//Catalog for Mon Language  using Unicode
//Mon Language Translation by: 'ITVilla'
//http://it-villa.blogspot.com/
else if (Language=='my-Mon') {
  X={
	'January':'ဂျာန်နျူအာရဳ',
	'February':'ဝှေဝ်ဗျူအာရဳ',
	'March':'မာတ်ချ်',
	'April':'ဨပြေယ်လ်',
	'May':'မေ',
	'June':'ဂျုန်',
	'July':'ဂျူလာၚ်',
	'August':'အဝ်ဂါတ်',
	'September':'သိတ်ထီဗာ',
	'October':'အံက်ထဝ်ဗာ',
	'November':'နဝ်ဝါမ်ဗာ',
	'December':'ဒီဇြေန်ဗာ',
	'First Waso':'ဂိတုပ-ဒ္ဂိုန်',
	'Tagu':'ဂိတုစဲ',
	'Kason':'ဂိတုပသာ်',
	'Nayon':'ဂိတုဇှေ်',
	'Waso':'ဂိတုဒ္ဂိုန်',
	'Wagaung':'ဂိတုခ္ဍဲသဳ',
	'Tawthalin':'ဂိတုဘတ်',
	'Thadingyut':'ဂိတုဝှ်',
	'Tazaungmone':'ဂိတုက္ထိုန်',
	'Natdaw':'ဂိတုမြေက္ကသဵု',
	'Pyatho':'ဂိတုပှော်',
	'Tabodwe':'ဂိတုမာ်',
	'Tabaung':'ဂိတုဖဝ်ရဂိုန်',
	'Waxing Moon':'မံက်',
	'Waning Moon':'စွေက်',
	'Full Moon':'ပေၚ်',
	'Dark Moon':'အိုတ်',
	'Myanmar Year':'သက္ကရာဇ်ဍုၚ်',
	'Ku':'သၞာံ',
	'Late':'',
	'Second':'ဒု',
	'Sunday':'တ္ၚဲအဒိုတ်',
	'Monday':'တ္ၚဲစန်',
	'Tuesday':'တ္ၚဲအင္ၚာ',
	'Wednesday':'တ္ၚဲဗုဒ္ဓဝါ',
	'Thursday':'တ္ၚဲဗြဴဗတိ',
	'Friday':'တ္ၚဲသိုက်',
	'Saturday':'တ္ၚဲသ္ၚိသဝ်',
	'Nay':'',
	'Yat':'',
	'Sabbath Eve':'တ္ၚဲတိၚ်',
	'Sabbath':'တ္ၚဲသဳ',
	'Yatyarzar':'တ္ရဲရာဇာ',
	'Afternoon Pyathadar':'တ္ၚဲရာဟု',
	'Pyathadar':'တ္ၚဲပြာဗ္ဗဒါ',
	'New Year Day':'New Year\'s Day',
	'Independence Day':'တ္ၚဲသၠးပွး',
	'Union Day':'တ္ၚဲကၟိန်ဍုၚ်',
	'Peasants Day':'တ္ၚဲသၟာဗ္ၚ',
	'Resistance Day':'တ္ၚဲပၠန်ဂတးဗၟာ',
	'Labour Day':'တ္ၚဲသၟာကမၠောန်',
	'Martyrs Day':'တ္ၚဲအာဇာနဲ',
	'Christmas Day':'တ္ၚဲခရေဿမာတ်',
	'Buddha Day':'တ္ၚဲသ္ဘၚ်ဖဍာ်ဇြဲ',
	'Start of Buddhist Lent':'တ္ၚဲတွံဓဝ်ဓမ္မစက်',
	'End of Buddhist Lent':'တ္ၚဲအဘိဓရ်',
	'Tazaungdaing':'သ္ဘၚ်ပူဇဴပၟတ်ပၞာၚ်',
	'National Day':'တ္ၚဲကောန်ဂကူဗၟာ',	
	'Karen New Year Day':'ကရေၚ်လှာဲသၞာံ',
	'Tabaung Pwe':'သ္ဘၚ်ဖဝ်ရဂိုန်',
	'Thingyan Akyo':'တ္ၚဲဒစးအတး',
	'Thingyan Akya':'တ္ၚဲအတးစှေ်',
	'Thingyan Akyat':'တ္ၚဲအတးကြာပ်',
	'Thingyan Atat':'တ္ၚဲအတးတိုန်',
	'Myanmar New Year Day':'တ္ၚဲသၞာံတၟိ',
	'AMyeitTaSoke':'ကိုန်အမြိုတ်',
	'WaraMeitTuGyi':'ကိုန်ဝါရမိတ္တုဇၞော်',
	'WaraMeitTuNge':'ကိုန်ဝါရမိတ္တုဍောတ်',
	'ThaMarPhyu':'ကိုန်လေၚ်ဒိုက်',
	'ThaMarNyo':'ကိုန်ဟုံဗြမ်',
	'YatPote':'ကိုန်လီုလာ်',
	'YatYoteMar':'ကိုန်ယုတ်မာ',
	'MaharYatKyan':'ကိုန်ဟွံခိုဟ်', 
	'NagaPaw':'နာ်မံက်',
	'ShanYat':'တ္ၚဲဒတန်',
	'The west':'ပလိုတ်', 
	'The north':'သၟဝ်ကျာ', 
	'The east':'ဗၟံက်', 
	'The south':'သၠုၚ်ကျာ', 
	' is the facing direction of the Naga head':'နာ်ဂတးက္ဍိုပ်လ္ပာ်ဒိုဟ်',
    '0': '၀',
    '1': '၁',
    '2': '၂',
	'3': '၃',
    '4': '၄',
    '5': '၅',
	'6': '၆',
    '7': '၇',
    '8': '၈',
	'9': '၉',
	',':'၊',
	'.':'။',
	'Mon National Day':'တ္ၚဲကောန်ဂကူမန်', 
	'Mon Fallen Day':'တ္ၚဲဟံသာဝတဳလီု', 
	'Mon Revolution Day':'တ္ၚဲပၠန်ဂတးမန်',
	'Mon Women Day':'တ္ၚဲညးဗြဴမန်',
	'Birthday of General Aung San':'တ္ၚဲသၟိၚ်ဗၟာအံၚ်သာန်ဒှ်မၞိဟ်',
	'Valentines Day':'တ္ၚဲဝုတ်ဗၠာဲ',
	'Earth Day':'တ္ၚဲဂၠးကဝ်',
	'April Fools Day':'တ္ၚဲသ္ပပရအ်',
	'Red Cross Day':'တ္ၚဲဇိုၚ်ခ္ဍာ်ဍာဲ',
	'United Nations Day':'တ္ၚဲကုလသမ္မဂ္ဂ',
	'Halloween':'တ္ၚဲဟေဝ်လဝ်ဝိန်',
	'Shan New Year Day':'တ္ၚဲသေံလှာဲသၞာံ',
	'Mothers Day':'တ္ၚဲမိအံက်',
	'Fathers Day':'တ္ၚဲမအံက်',
	'Sasana Sakaraj':'သက္ကရာဇ်သာသနာ'
  };
}

//Catalog for  Shan Language
else if (Language=='my-Shan') {
  X={
	'January':'ဇန်နဝါရီ',
	'February':'ဖေဖော်ဝါရီ',
	'March':'မတ်',
	'April':'ဧပြီ',
	'May':'မေ',
	'June':'ဇွန်',
	'July':'ဇူလိုင်',
	'August':'ဩဂုတ်',
	'September':'စက်တင်ဘာ',
	'October':'အောက်တိုဘာ',
	'November':'နိုဝင်ဘာ',
	'December':'ဒီဇင်ဘာ',
	'First Waso':'ပဝါဆို',
	'Tagu':'တန်ခူး',
	'Kason':'ကဆုန်',
	'Nayon':'နယုန်',
	'Waso':'ဝါဆို',
	'Wagaung':'ဝါခေါင်',
	'Tawthalin':'တော်သလင်း',
	'Thadingyut':'သီတင်းကျွတ်',
	'Tazaungmone':'တန်ဆောင်မုန်း',
	'Natdaw':'နတ်တော်',
	'Pyatho':'ပြာသို',
	'Tabodwe':'တပို့တွဲ',
	'Tabaung':'တပေါင်း',
	'Waxing Moon':'လဆန်း',
	'Waning Moon':'လဆုတ်',
	'Full Moon':'လပြည့်',
	'Dark Moon':'လကွယ်',
	'Myanmar Year':'မြန်မာသက္ကရာဇ်',
	'Ku':'ခု',
	'Late':'နှောင်း',
	'Second':'ဒု',
	'Sunday':'တနင်္ဂနွေ',
	'Monday':'တနင်္လာ',
	'Tuesday':'အင်္ဂါ',
	'Wednesday':'ဗုဒ္ဓဟူး',
	'Thursday':'ကြာသပတေး',
	'Friday':'သောကြာ',
	'Saturday':'စနေ',
	'Nay':'နေ့',
	'Yat':'ရက်',
	'Sabbath Eve':'အဖိတ်',
	'Sabbath':'ဥပုသ်',
	'Yatyarzar':'ရက်ရာဇာ',
	'Afternoon Pyathadar':'မွန်းလွဲပြဿဒါး',
	'Pyathadar':'ပြဿဒါး',
	'New Year Day':'New Year\'s Day',
	'Independence Day':'လွတ်လပ်ရေးနေ့',
	'Union Day':'ပြည်ထောင်စုနေ့',
	'Peasants Day':'တောင်သူ လယ်သမားနေ့',
	'Resistance Day':'တော်လှန်ရေးနေ့',
	'Labour Day':'အလုပ်သမားနေ့',
	'Martyrs Day':'အာဇာနည်နေ့',
	'Christmas Day':'ခရစ္စမတ်နေ့',
	'Buddha Day':'ညောင်ရေ သွန်းပွဲ',
	'Start of Buddhist Lent':'ဓမ္မစကြာနေ့',
	'End of Buddhist Lent':'မီးထွန်းပွဲ',
	'Tazaungdaing':'တန်ဆောင်တိုင်',
	'National Day':'အမျိုးသားနေ့',
	'Karen New Year Day':'ကရင်နှစ်သစ်ကူး',
	'Tabaung Pwe':'တပေါင်းပွဲ',
	'Thingyan Akyo':'သင်္ကြန် အကြိုနေ့',
	'Thingyan Akya':'သင်္ကြန် အကျနေ့',
	'Thingyan Akyat':'သင်္ကြန် အကြတ်နေ့',
	'Thingyan Atat':'သင်္ကြန် အတက်နေ့',
	'Myanmar New Year Day':'နှစ်ဆန်းတစ်ရက်နေ့',
	'AMyeitTaSoke':'အမြိတ္တစုတ်',
	'WaraMeitTuGyi':'ဝါရမိတ္တုကြီး',
	'WaraMeitTuNge':'ဝါရမိတ္တုငယ်',
	'ThaMarPhyu':'သမားဖြူ',
	'ThaMarNyo':'သမားညို',
	'YatPote':'ရက်ပုပ်',
	'YatYoteMar':'ရက်ယုတ်မာ',
	'MaharYatKyan':'မဟာရက်ကြမ်း',
	'NagaPaw':'နဂါးပေါ်',
	'ShanYat':'ရှမ်းရက်',
	'The west':'အနောက်',
	'The north':'မြောက်',
	'The east':'အရှေ့',
	'The south':'တောင်',
	' is the facing direction of the Naga head':' အရပ်သို့ နဂါးဦး လှည့်၏',
    '0': '၀',
    '1': '၁',
    '2': '၂',
	'3': '၃',
    '4': '၄',
    '5': '၅',
	'6': '၆',
    '7': '၇',
    '8': '၈',
	'9': '၉',
	',':'၊',
	'.':'။',
	'Mon National Day':'မွန်အမျိုးသားနေ့',
	'Birthday of General Aung San':'ဗိုလ်ချုပ် အောင်ဆန်း မွေးနေ့',
	'Valentines Day':'ဗယ်လင်တိုင်းနေ့',
	'Earth Day':'ကမ္ဘာမြေနေ့',
	'April Fools Day':'ဧပြီအရူးနေ့',
	'Red Cross Day':'ကြက်ခြေနီနေ့',
	'United Nations Day':'ကုလသမ္မဂ္ဂနေ့',
	'Halloween':'Halloween',
	'Shan New Year Day':'ရှမ်းနှစ်သစ်ကူး',
	'Mothers Day':'အမေနေ့',
	'Fathers Day':'အဖေနေ့',
	'Sasana Sakaraj':'သာသနာ သက္ကရာဇ်'
  };
}

//Catalog for  Karen Language
else if (Language=='my-Karen') {
  X={
	'January':'ဇန်နဝါရီ',
	'February':'ဖေဖော်ဝါရီ',
	'March':'မတ်',
	'April':'ဧပြီ',
	'May':'မေ',
	'June':'ဇွန်',
	'July':'ဇူလိုင်',
	'August':'ဩဂုတ်',
	'September':'စက်တင်ဘာ',
	'October':'အောက်တိုဘာ',
	'November':'နိုဝင်ဘာ',
	'December':'ဒီဇင်ဘာ',
	'First Waso':'ပဝါဆို',
	'Tagu':'တန်ခူး',
	'Kason':'ကဆုန်',
	'Nayon':'နယုန်',
	'Waso':'ဝါဆို',
	'Wagaung':'ဝါခေါင်',
	'Tawthalin':'တော်သလင်း',
	'Thadingyut':'သီတင်းကျွတ်',
	'Tazaungmone':'တန်ဆောင်မုန်း',
	'Natdaw':'နတ်တော်',
	'Pyatho':'ပြာသို',
	'Tabodwe':'တပို့တွဲ',
	'Tabaung':'တပေါင်း',
	'Waxing Moon':'လဆန်း',
	'Waning Moon':'လဆုတ်',
	'Full Moon':'လပြည့်',
	'Dark Moon':'လကွယ်',
	'Myanmar Year':'မြန်မာသက္ကရာဇ်',
	'Ku':'ခု',
	'Late':'နှောင်း',
	'Second':'ဒု',
	'Sunday':'တနင်္ဂနွေ',
	'Monday':'တနင်္လာ',
	'Tuesday':'အင်္ဂါ',
	'Wednesday':'ဗုဒ္ဓဟူး',
	'Thursday':'ကြာသပတေး',
	'Friday':'သောကြာ',
	'Saturday':'စနေ',
	'Nay':'နေ့',
	'Yat':'ရက်',
	'Sabbath Eve':'အဖိတ်',
	'Sabbath':'ဥပုသ်',
	'Yatyarzar':'ရက်ရာဇာ',
	'Afternoon Pyathadar':'မွန်းလွဲပြဿဒါး',
	'Pyathadar':'ပြဿဒါး',
	'New Year Day':'New Year\'s Day',
	'Independence Day':'လွတ်လပ်ရေးနေ့',
	'Union Day':'ပြည်ထောင်စုနေ့',
	'Peasants Day':'တောင်သူ လယ်သမားနေ့',
	'Resistance Day':'တော်လှန်ရေးနေ့',
	'Labour Day':'အလုပ်သမားနေ့',
	'Martyrs Day':'အာဇာနည်နေ့',
	'Christmas Day':'ခရစ္စမတ်နေ့',
	'Buddha Day':'ညောင်ရေ သွန်းပွဲ',
	'Start of Buddhist Lent':'ဓမ္မစကြာနေ့',
	'End of Buddhist Lent':'မီးထွန်းပွဲ',
	'Tazaungdaing':'တန်ဆောင်တိုင်',
	'National Day':'အမျိုးသားနေ့',
	'Karen New Year Day':'ကရင်နှစ်သစ်ကူး',
	'Tabaung Pwe':'တပေါင်းပွဲ',
	'Thingyan Akyo':'သင်္ကြန် အကြိုနေ့',
	'Thingyan Akya':'သင်္ကြန် အကျနေ့',
	'Thingyan Akyat':'သင်္ကြန် အကြတ်နေ့',
	'Thingyan Atat':'သင်္ကြန် အတက်နေ့',
	'Myanmar New Year Day':'နှစ်ဆန်းတစ်ရက်နေ့',
	'AMyeitTaSoke':'အမြိတ္တစုတ်',
	'WaraMeitTuGyi':'ဝါရမိတ္တုကြီး',
	'WaraMeitTuNge':'ဝါရမိတ္တုငယ်',
	'ThaMarPhyu':'သမားဖြူ',
	'ThaMarNyo':'သမားညို',
	'YatPote':'ရက်ပုပ်',
	'YatYoteMar':'ရက်ယုတ်မာ',
	'MaharYatKyan':'မဟာရက်ကြမ်း',
	'NagaPaw':'နဂါးပေါ်',
	'ShanYat':'ရှမ်းရက်',
	'The west':'အနောက်',
	'The north':'မြောက်',
	'The east':'အရှေ့',
	'The south':'တောင်',
	' is the facing direction of the Naga head':' အရပ်သို့ နဂါးဦး လှည့်၏',
    '0': '၀',
    '1': '၁',
    '2': '၂',
	'3': '၃',
    '4': '၄',
    '5': '၅',
	'6': '၆',
    '7': '၇',
    '8': '၈',
	'9': '၉',
	',':'၊',
	'.':'။',
	'Mon National Day':'မွန်အမျိုးသားနေ့',
	'Birthday of General Aung San':'ဗိုလ်ချုပ် အောင်ဆန်း မွေးနေ့',
	'Valentines Day':'ဗယ်လင်တိုင်းနေ့',
	'Earth Day':'ကမ္ဘာမြေနေ့',
	'April Fools Day':'ဧပြီအရူးနေ့',
	'Red Cross Day':'ကြက်ခြေနီနေ့',
	'United Nations Day':'ကုလသမ္မဂ္ဂနေ့',
	'Halloween':'Halloween',
	'Shan New Year Day':'ရှမ်းနှစ်သစ်ကူး',
	'Mothers Day':'အမေနေ့',
	'Fathers Day':'အဖေနေ့',
	'Sasana Sakaraj':'သာသနာ သက္ကရာဇ်'
  };
}

//Catalog for Myanmar Language in Unicode 
else {
  X={
	'January':'ဇန်နဝါရီ',
	'February':'ဖေဖော်ဝါရီ',
	'March':'မတ်',
	'April':'ဧပြီ',
	'May':'မေ',
	'June':'ဇွန်',
	'July':'ဇူလိုင်',
	'August':'ဩဂုတ်',
	'September':'စက်တင်ဘာ',
	'October':'အောက်တိုဘာ',
	'November':'နိုဝင်ဘာ',
	'December':'ဒီဇင်ဘာ',
	'First Waso':'ပဝါဆို',
	'Tagu':'တန်ခူး',
	'Kason':'ကဆုန်',
	'Nayon':'နယုန်',
	'Waso':'ဝါဆို',
	'Wagaung':'ဝါခေါင်',
	'Tawthalin':'တော်သလင်း',
	'Thadingyut':'သီတင်းကျွတ်',
	'Tazaungmone':'တန်ဆောင်မုန်း',
	'Natdaw':'နတ်တော်',
	'Pyatho':'ပြာသို',
	'Tabodwe':'တပို့တွဲ',
	'Tabaung':'တပေါင်း',
	'Waxing Moon':'လဆန်း',
	'Waning Moon':'လဆုတ်',
	'Full Moon':'လပြည့်',
	'Dark Moon':'လကွယ်',
	'Myanmar Year':'မြန်မာသက္ကရာဇ်',
	'Ku':'ခု',
	'Late':'နှောင်း',
	'Second':'ဒု',
	'Sunday':'တနင်္ဂနွေ',
	'Monday':'တနင်္လာ',
	'Tuesday':'အင်္ဂါ',
	'Wednesday':'ဗုဒ္ဓဟူး',
	'Thursday':'ကြာသပတေး',
	'Friday':'သောကြာ',
	'Saturday':'စနေ',
	'Nay':'နေ့',
	'Yat':'ရက်',
	'Sabbath Eve':'အဖိတ်',
	'Sabbath':'ဥပုသ်',
	'Yatyarzar':'ရက်ရာဇာ',
	'Afternoon Pyathadar':'မွန်းလွဲပြဿဒါး',
	'Pyathadar':'ပြဿဒါး',
	'New Year Day':'New Year\'s Day',
	'Independence Day':'လွတ်လပ်ရေးနေ့',
	'Union Day':'ပြည်ထောင်စုနေ့',
	'Peasants Day':'တောင်သူ လယ်သမားနေ့',
	'Resistance Day':'တော်လှန်ရေးနေ့',
	'Labour Day':'အလုပ်သမားနေ့',
	'Martyrs Day':'အာဇာနည်နေ့',
	'Christmas Day':'ခရစ္စမတ်နေ့',
	'Buddha Day':'ညောင်ရေ သွန်းပွဲ',
	'Start of Buddhist Lent':'ဓမ္မစကြာနေ့',
	'End of Buddhist Lent':'မီးထွန်းပွဲ',
	'Tazaungdaing':'တန်ဆောင်တိုင်',
	'National Day':'အမျိုးသားနေ့',
	'Karen New Year Day':'ကရင်နှစ်သစ်ကူး',
	'Tabaung Pwe':'တပေါင်းပွဲ',
	'Thingyan Akyo':'သင်္ကြန် အကြိုနေ့',
	'Thingyan Akya':'သင်္ကြန် အကျနေ့',
	'Thingyan Akyat':'သင်္ကြန် အကြတ်နေ့',
	'Thingyan Atat':'သင်္ကြန် အတက်နေ့',
	'Myanmar New Year Day':'နှစ်ဆန်းတစ်ရက်နေ့',
	'AMyeitTaSoke':'အမြိတ္တစုတ်',
	'WaraMeitTuGyi':'ဝါရမိတ္တုကြီး',
	'WaraMeitTuNge':'ဝါရမိတ္တုငယ်',
	'ThaMarPhyu':'သမားဖြူ',
	'ThaMarNyo':'သမားညို',
	'YatPote':'ရက်ပုပ်',
	'YatYoteMar':'ရက်ယုတ်မာ',
	'MaharYatKyan':'မဟာရက်ကြမ်း',
	'NagaPaw':'နဂါးပေါ်',
	'ShanYat':'ရှမ်းရက်',
	'The west':'အနောက်',
	'The north':'မြောက်',
	'The east':'အရှေ့',
	'The south':'တောင်',
	' is the facing direction of the Naga head':' အရပ်သို့ နဂါးဦး လှည့်၏',
    '0': '၀',
    '1': '၁',
    '2': '၂',
	'3': '၃',
    '4': '၄',
    '5': '၅',
	'6': '၆',
    '7': '၇',
    '8': '၈',
	'9': '၉',
	',':'၊',
	'.':'။',
	'Mon National Day':'မွန်အမျိုးသားနေ့',
	'Birthday of General Aung San':'ဗိုလ်ချုပ် အောင်ဆန်း မွေးနေ့',
	'Valentines Day':'ဗယ်လင်တိုင်းနေ့',
	'Earth Day':'ကမ္ဘာမြေနေ့',
	'April Fools Day':'ဧပြီအရူးနေ့',
	'Red Cross Day':'ကြက်ခြေနီနေ့',
	'United Nations Day':'ကုလသမ္မဂ္ဂနေ့',
	'Halloween':'သရဲနေ့',
	'Shan New Year Day':'ရှမ်းနှစ်သစ်ကူး',
	'Mothers Day':'အမေနေ့',
	'Fathers Day':'အဖေနေ့',
	'Sasana Sakaraj':'သာသနာ သက္ကရာဇ်'
  };
}

//Myanmar Calendar Calculation-------------------------------------------------
//Input year, month and day in Gregorian calendar-  applicable only to the years after 1956
dt=new Date(); gy=dt.getFullYear(); gm=dt.getMonth()+1; gd=dt.getDate();
SY=365.2587565; LM=29.53058795; MO=1954168.0506; TH=22.1787; DW=132.3876458;//define constants
T4=(SY-12*LM)-(LM-TH);
a=Math.floor((14-gm)/12); y=gy+4800-a; m=gm+(12*a)-3;//To calculate Julian day number
jdn=gd+Math.floor((153*m+2)/5)+(365*y)+Math.floor(y/4)-Math.floor(y/100)+Math.floor(y/400)-32045;
my=Math.floor((jdn-0.5-MO)/SY);//Get Myanmar year		
rd=(SY*(my+3739))%LM;//Get remaining days (% is floating point modulus e.g. it should be fmod(x,y) in PHP)
if(rd<T4) rd+=LM;//Adjust remaining days
rd2=rd-(SY-12*LM);//remaining days for previous year
for(yd=1;rd2>=T4;yd++) rd2-=(SY-12*LM);//Find previous Warhtet year 
rd2+=LM;//get its remaining days
w2=Math.floor(SY*(my-yd)+MO-rd2+DW+0.5);//Get previous  2nd Waso full moon day in jdn
myType=0; wg=0;//initialized as Normal year and not Wargyi
if(rd>=TH){	//If Warhtet year, check Wargyi , Warnge 
  w=Math.floor(SY*my+MO-rd+DW+0.5);//Get 2nd Waso full moon day
  wg=Math.floor(((w-w2)%354)/31);//if Wargyi
  myType=wg+1;}//Myanmar year type 0:Normal, 1:Warnge, 2:Wargyi
tg1=w2+354*yd-102;//Get first day of Tagu waxing moon which normally is in previous year
md=jdn-tg1+1;//Get day count
myLen=354+myType*30-wg*29;//define Myanmar year length
mmt=Math.floor((md-1)/myLen);//Get Myanmar month type: Hnaung:1 or Oo:0
md-=mmt*myLen;//adjust day count
t=Math.floor(myLen/(md+266)); s=29.5+t*wg/5; c=117+t*wg*14/5;//get rate and offset
md+=t*266-(1-t)*(myLen-266);//modify day count
mm=Math.floor((md+c)/s);//Get month
md-=Math.floor(s*mm-c-0.1);//Get day
mm*=(1-Math.floor(mm/16));//correct 1st Waso month number
mmLen=30-mm%2+wg*Math.floor(mm/15);//Get the length of the current month
mm-=12*Math.floor(mm/13);//correct month number
ms=Math.floor(md/16);//check for Waning moon
msmd=md-15*ms;//Get moon day
ms+=2*Math.floor((msmd-ms)/15);//check for full moon
ms+=2*Math.floor(md/mmLen);//check for dark moon

//Display----------------------------------------------------------------------
emName=[X['January'],X['February'],X['March'],X['April'],X['May'],X['June'],
		X['July'],X['August'],X['September'],X['October'],X['November'],X['December']];
mName=[X['First Waso'],X['Tagu'],X['Kason'],X['Nayon'],X['Waso'],X['Wagaung'],X['Tawthalin'],
		 X['Thadingyut'],X['Tazaungmone'],X['Natdaw'],X['Pyatho'],X['Tabodwe'],X['Tabaung']];
msStr=[X['Waxing Moon'],X['Waning Moon'],X['Full Moon'],X['Dark Moon']]; 
str=n2str(gy)+"-"+emName[gm-1]+"-"+n2str(gd)+" "+X[',']+" ";
sy=my+1182; str+=X['Sasana Sakaraj']+" "+n2str(sy)+" "+X['Ku']+X[',']+" ";
str+=X['Myanmar Year']+" "+n2str(my)+" "+X['Ku']+X[',']+" ";
if(mmt) str+=X['Late']; if(myType && mm==4) str+=X['Second']; str+=mName[mm]+" ";
if (Language=='my-Mon') { if(ms<2) str+=n2str(msmd)+" "; str+=msStr[ms];}
else{str+=msStr[ms]; if(ms<2) str+=" "+n2str(msmd)+" "+X['Yat'];}
wdStr=[X['Sunday'],X['Monday'],X['Tuesday'],X['Wednesday'],X['Thursday'],X['Friday'],X['Saturday']]; 
wd=(jdn+1)%7; str+=X[',']+" "+wdStr[wd]+X['Nay'];
if((ms>=2)||(msmd==8)) str+=X[',']+" "+X['Sabbath'];
if((md==14)||(md==(mmLen-1))||(msmd==7)) str+=X[',']+" "+X['Sabbath Eve'];
yw=[0,4,3,0,3,1,2]; ym=mm%4; if(ym==yw[wd]) str+=X[',']+" "+X['Yatyarzar'];
if(((ym==1)&&(wd==3))||((ym==2)&&(wd==4))) str+=X[',']+" "+X['Yatyarzar'];
pw=[3,3,0,2,1,2,1]; if(ym==pw[wd]) str+=X[',']+" "+X['Pyathadar'];
if((ym==0)&&(wd==3)) str+=X[',']+" "+X['Afternoon Pyathadar'];
if((gm==1) && (gd==1)) str+=X[',']+" "+X['New Year Day'];
else if((gm==1) && (gd==4)) str+=X[',']+" "+X['Independence Day'];
else if((gm==2) && (gd==12)) str+=X[',']+" "+X['Union Day'];
else if((gm==3) && (gd==2)) str+=X[',']+" "+X['Peasants Day'];
else if((gm==3) && (gd==27)) str+=X[',']+" "+X['Resistance Day'];
else if((gm==5) && (gd==1)) str+=X[',']+" "+X['Labour Day'];
else if((gm==7) && (gd==19)) str+=X[',']+" "+X['Martyrs Day'];//Martyrs' Day 
else if((gm==12) && (gd==25)) str+=X[',']+" "+X['Christmas Day'];
if((mm==2) && (ms==2)) str+=X[',']+" "+X['Buddha Day'];//Vesak day
else if((mm==4)&& (ms==2)) str+=X[',']+" "+X['Start of Buddhist Lent'];//Warso day
else if((mm==7) && (ms==2)) str+=X[',']+" "+X['End of Buddhist Lent'];
else if((mm==8) && (ms==2)) str+=X[',']+" "+X['Tazaungdaing'];
else if((mm==8) && (md==25)) str+=X[',']+" "+X['National Day'];
else if((mm==10) && (md==1)) str+=X[',']+" "+X['Karen New Year Day'];
else if((mm==12) && (ms==2)) str+=X[',']+" "+X['Tabaung Pwe']+X[',']+" "+X['Fathers Day'];
else if((mm==11) && (md==16)) str+=X[',']+" "+X['Mon National Day'];// the ancient founding of Hanthawady
else if((mm==2) && (md==23)) str+=X[',']+" "+X['Mon Fallen Day'];
else if((mm==5) && (ms==2)) str+=X[',']+" "+X['Mon Revolution Day'];
else if((mm==12) && (md==12)) str+=X[',']+" "+X['Mon Women Day'];
else if((mm==9) && (md==1)) str+=X[',']+" "+X['Shan New Year Day'];//Natdaw waxing moon 1
else if((mm==10) && (ms==2)) str+=X[',']+" "+X['Mothers Day'];//Pyatho full moon
if((gm==2) && (gd==13)) str+=X[',']+" "+X['Birthday of General Aung San'];
else if((gm==2) && (gd==14)) str+=X[',']+" "+X['Valentines Day'];
else if((gm==4) && (gd==22)) str+=X[',']+" "+X['Earth Day'];
else if((gm==4) && (gd==1)) str+=X[',']+" "+X['April Fools Day'];
else if((gm==5) && (gd==8)) str+=X[',']+" "+X['Red Cross Day'];
else if((gm==10) && (gd==24)) str+=X[',']+" "+X['United Nations Day'];
else if((gm==10) && (gd==31)) str+=X[',']+" "+X['Halloween'];
atat=SY*(my+mmt)+MO; akn=Math.round(atat-2.169918982); atn=Math.round(atat);
if(jdn==(atn+1)) str+=X[',']+" "+X['Myanmar New Year Day'];
else if(jdn==atn) str+=X[',']+" "+X['Thingyan Atat'];
else if((jdn>akn)&&(jdn<atn)) str+=X[',']+" "+X['Thingyan Akyat'];
else if(jdn==akn) str+=X[',']+" "+X['Thingyan Akya'];
else if(jdn==(akn-1)) str+=X[',']+" "+X['Thingyan Akyo'];
m12=mm+Math.floor((12-mm)/12)*4;
wda=[8,3,7,2,4,1,5]; if(msmd==wda[wd]) str+=X[',']+" "+X['AMyeitTaSoke'];
wdwg=[1,4,8,9,6,3,7]; if(msmd==wdwg[wd]) str+=X[',']+" "+X['WaraMeitTuGyi'];
if((12-msmd)==wd) str+=X[',']+" "+X['WaraMeitTuNge'];
wdyp=[1,4,6,9,8,7,8]; if(msmd==wdyp[wd]) str+=X[',']+" "+X['YatPote'];
myy=(m12%2)?m12:((m12+9)%12); myy=(myy+4)%12+1; if(msmd==myy) str+=X[',']+" "+X['YatYoteMar'];
myk=(Math.floor((m12%12)/2)+4)%6+1; if(msmd==myk) str+=X[',']+" "+X['MaharYatKyan'];
mmsy=[2,8,8,2,2,9,3,3,5,1,4,7,4]; if(msmd==mmsy[mm]) str+=X[',']+" "+X['ShanYat'];
tmn1=[5,6,1,3,5,0,2,4,6,6,0,2,4];  tmn2=[6,0,2,4,6,1,3,5,0,0,1,3,5]; 
if((wd==tmn1[mm]) ||(wd==tmn2[mm])) str+=X[',']+" "+X['ThaMarNyo'];
tmp1=[2,6,6,5,4,7,1];  tmp2=[1,0,0,0,3,3,0]; if((msmd==6) && (wd==4)) str+=X[',']+" "+X['ThaMarPhyu'];
if((msmd==tmp1[wd]) ||(msmd==tmp2[wd])) str+=X[',']+" "+X['ThaMarPhyu'];
dirn=[X['The west'],X['The north'],X['The east'],X['The south']];
if (Language=='my-Mon') str+=X[',']+" "+X[' is the facing direction of the Naga head']+dirn[Math.floor((m12%12)/3)];
else  str+=X[',']+" "+dirn[Math.floor((m12%12)/3)]+X[' is the facing direction of the Naga head'];
document.getElementById('mcalr').innerHTML=str+X['.'];
function n2str(n) { s=""; n=Math.floor(n);   do{ r=n%10; n=Math.floor(n/10);  s=X[r.toString()]+s; }while(n>0);  return s; }
//Algorithm, Program and Calculation of Myanmar Calendar can be read at  http://cool-emerald.com/?p=1209
//The latest version of the script can be found at http://myanmar-calendar.cool-emerald.com/mcalrs.js