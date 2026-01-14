// AI Kartářka - Tarot Reading s Gemini API

// Kompletní databáze 78 tarotových karet
const karty = [
    // PENTAKLY (Mince) - Element Země
    { name: "Eso pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["nová příležitost", "prosperita", "zdraví", "materiální začátek"], meaning: "Nabízí novou příležitost v materiálním světě. Může to být nová práce, zvýšení platu, dar nebo začátek podnikání. Je to 'semínko', které pokud zasadíte a budete o něj pečovat, vyroste v něco stabilního a hodnotného. Znamená prosperitu a zdraví." },
    { name: "Dvojka pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["rovnováha", "přizpůsobivost", "žonglování", "flexibilita"], meaning: "Představuje hledání rovnováhy a přizpůsobivost. Žonglujete s penězi, časem nebo povinnostmi a snažíte se udržet vše v chodu. Karta říká, že situace je proměnlivá, a vy musíte být flexibilní, abyste nespadli. Zvládnete to, ale vyžaduje to soustředění." },
    { name: "Trojka pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["týmová práce", "mistrovství", "spolupráce", "uznání"], meaning: "Je kartou týmové práce a mistrovství. Ukazuje, že úspěchu nedosáhnete sami, ale spoluprací s odborníky. Znamená to uznání vašich dovedností, učení se od druhých a budování něčeho, co má trvalou hodnotu a kvalitu." },
    { name: "Čtyřka pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["stabilita", "jistota", "lpění", "lakomost"], meaning: "Symbolizuje stabilitu a jistotu, ale také lpění na majetku. Postava křečovitě svírá své mince ze strachu, že o ně přijde. Karta varuje před lakotou a uzavřeností. Peníze a energie musí proudit – pokud budete jen hromadit, ztratíte radost ze života." },
    { name: "Pětka pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["chudoba", "ztráta", "vyloučení", "pomoc"], meaning: "Značí materiální či duchovní chudobu a pocit vyloučení. Dvě postavy jdou sněhem kolem osvětleného kostela, ale nejdou dovnitř. Karta naznačuje finanční ztrátu nebo pocit osamění v těžkých časech. Připomíná však, že pomoc je často nablízku, jen se musíte odvážit o ni požádat." },
    { name: "Šestka pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["štědrost", "charita", "spravedlnost", "rovnováha"], meaning: "Představuje rovnováhu mezi dáváním a přijímáním. Jde o štědrost, charitu nebo spravedlivé přerozdělení zdrojů. Pokud máte dostatek, měli byste pomoci. Pokud jste v nouzi, pomoc přijde. Také může znamenat, že dostanete přesně to, co si zasloužíte." },
    { name: "Sedmička pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["trpělivost", "hodnocení", "investice", "čekání"], meaning: "Je kartou trpělivosti a hodnocení. Zasadili jste, pracovali jste a teď čekáte na úrodu. Je to čas zastavit se a zhodnotit, zda vaše investice (času či peněz) přináší očekávané výsledky, a rozhodnout se, zda pokračovat, nebo změnit strategii." },
    { name: "Osmička pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["tvrdá práce", "píle", "mistrovství", "detail"], meaning: "Symbolizuje tvrdou práci, píli a zdokonalování se v řemesle. Nejde o rychlý zisk, ale o potěšení z dobře odvedené práce a smysl pro detail. Karta říká, že úspěch přijde skrze disciplínu a soustředěné úsilí na jednu věc." },
    { name: "Devítka pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["nezávislost", "soběstačnost", "luxus", "úspěch"], meaning: "Představuje nezávislost, soběstačnost a luxus. Žena v zahradě si užívá plody své práce. Znamená to, že jste dosáhli bodu, kdy se o sebe dokážete postarat, máte dostatek zdrojů a můžete si dopřát životní radosti, aniž byste na někom záviseli." },
    { name: "Desítka pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["dědictví", "rodinné bohatství", "stabilita", "tradice"], meaning: "Ztělesňuje vrchol materiálního úspěchu, dědictví a rodinné bohatství. Nejde jen o peníze, ale o vytvoření zázemí pro další generace. Znamená trvalou stabilitu, tradice a pocit, že vaše rodina je zabezpečena." },
    { name: "Páže pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["student", "příležitost", "spolehlivost", "pilnost"], meaning: "Je to pilný student, který stojí na začátku nové cesty. Představuje příležitost naučit se něco praktického, novou pracovní nabídku nebo začátek spoření. Je spolehlivý, stojí nohama na zemi a má chuť budovat svou budoucnost krok za krokem." },
    { name: "Rytíř pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["vytrvalost", "rutina", "odpovědnost", "spolehlivost"], meaning: "Představuje nejpracovitějšího a nejspolehlivějšího rytíře. Není rychlý, ale je vytrvalý a nevzdává se. Znamená rutinu, odpovědnost a metodický postup. Karta říká, že teď není čas na riskování, ale na poctivou, i když možná trochu nudnou práci." },
    { name: "Královna pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["péče", "praktičnost", "domov", "štědrost"], meaning: "Ztělesňuje archetyp pečující matky země. Je praktická, rozumná a dokáže vytvořit útulný domov i spravovat finance. Představuje rovnováhu mezi prací a rodinou. Radí vám, abyste byli pragmatičtí, pečovali o své tělo a zdroje a byli štědří k těm, které máte rádi." },
    { name: "Král pentaklů", arcana: "Malá", suit: "Pentakly", element: "Země", keywords: ["úspěch", "podnikání", "autorita", "majetek"], meaning: "Je symbolem úspěšného podnikatele a poskytovatele. Dosáhl vrcholu, má majetek a vliv. Znamená finanční jistotu, obchodní talent a schopnost proměnit vše, na co sáhnete, ve zlato. Vyzývá k odpovědnému nakládání s mocí a majetkem." },

    // POHÁRY - Element Vody
    { name: "Eso pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["nová láska", "emoce", "duchovní probuzení", "naplnění"], meaning: "Symbolizuje začátek hlubokého citového prožitku. Může jít o novou lásku, narození dítěte nebo duchovní probuzení. Váš 'pohár přetéká' emocemi a vy jste otevřeni přijímat i dávat lásku. Je to nabídka emocionálního naplnění, kterou byste neměli odmítnout." },
    { name: "Dvojka pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["partnerství", "spojení", "harmonie", "vzájemnost"], meaning: "Karta partnerství a spojení. Mluví o harmonickém setkání dvou duší – ať už v lásce, přátelství nebo obchodu. Znamená vzájemný respekt, přitažlivost a rovnováhu. Jste na stejné vlně." },
    { name: "Trojka pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["přátelství", "komunita", "oslava", "radost"], meaning: "Je kartou přátelství, komunity a sdílené radosti. Často předpovídá večírky, svatby nebo jen příjemná setkání s lidmi, kteří vás podporují. Připomíná vám, že problémy se lépe zvládají v kolektivu a že je důležité slavit život s ostatními." },
    { name: "Čtyřka pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["nuda", "apatie", "zahledění", "příležitost"], meaning: "Značí nudu, apatii a zahledění do sebe. Sedíte a trucujete, nebo jste tak pohrouženi do svých myšlenek, že nevidíte novou příležitost (pohár), kterou vám vesmír nabízí. Je to výzva k probuzení – přestaňte se litovat a rozhlédněte se kolem sebe." },
    { name: "Pětka pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["smutek", "ztráta", "lítost", "naděje"], meaning: "Karta smutku a ztráty. Zaměřujete se na tři rozlité poháry (to, co se pokazilo) a nevidíte dva plné, které vám za zády zbyly. Je přirozené truchlit, ale tato karta varuje před uvíznutím v minulosti. Je čas se otočit a pracovat s tím, co zůstalo." },
    { name: "Šestka pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["nostalgie", "vzpomínky", "nevinnost", "dětství"], meaning: "Představuje nostalgii, vzpomínky na dětství a nevinnost. Může znamenat návrat někoho z minulosti nebo situaci, která ve vás vyvolává pocity bezpečí a prosté radosti. Vyzývá k laskavosti, hravosti a dívání se na svět dětskýma očima." },
    { name: "Sedmička pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["iluze", "možnosti", "fantazie", "volba"], meaning: "Je kartou iluzí a mnoha možností. Stojíte před výběrem, ale ne všechno je takové, jak se zdá – některé poháry skrývají poklad, jiné draka. Varuje před stavěním vzdušných zámků a sněním bez akce. Musíte se uzemnit a vybrat si jednu reálnou cestu." },
    { name: "Osmička pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["odchod", "hledání", "opuštění", "smysl"], meaning: "Symbolizuje dobrovolný odchod. Znamená, že něco (vztah, práce, situace), co vás dříve naplňovalo, už vám nic nedává. I když to bolí, rozhodnete se odejít a hledat hlubší smysl jinde. Je to cesta za duchovním hledáním a opuštění materialismu." },
    { name: "Devítka pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["splněná přání", "spokojenost", "požitkářství", "štěstí"], meaning: "Často nazývaná 'karta splněných přání'. Představuje spokojenost, požitkářství a pocit, že se vše vydařilo. Sedíte si pohodlně a užíváte si plody života. Varuje jen před přílišnou samolibostí – nezapomínejte sdílet své štěstí." },
    { name: "Desítka pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["rodinné štěstí", "harmonie", "naplnění", "happy end"], meaning: "Ztělesňuje absolutní rodinné štěstí a citovou harmonii. Je to ten 'happy end' z pohádek. Znamená trvalé vztahy, bezpečí a pocit naprostého naplnění v osobním životě. Vaše emocionální potřeby jsou plně uspokojeny." },
    { name: "Páže pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["posel lásky", "intuice", "citlivost", "zpráva"], meaning: "Představuje posla lásky nebo intuice. Často naznačuje příchod romantické zprávy, omluvy, nebo náhlý kreativní nápad. Je to jemná, citlivá energie, která vás vybízí, abyste otevřeli své srdce a nebáli se ukázat své city, i když se cítíte zranitelní." },
    { name: "Rytíř pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["romantika", "svůdce", "inspirace", "umění"], meaning: "Je to romantický snílek a svůdník. Řídí se srdcem, nikoli hlavou. Přináší nabídky lásky, uměleckou inspiraci a krásu. Jeho stinnou stránkou může být náladovost nebo nereálná očekávání, ale obecně přináší do života poezii a cit." },
    { name: "Královna pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["empatie", "soucit", "intuice", "péče"], meaning: "Ztělesňuje empatii, soucit a hlubokou intuici. Je to vrba, které se každý svěřuje. Tato karta vás vyzývá, abyste naslouchali svému vnitřnímu hlasu a pečovali o emocionální zdraví sebe i ostatních. Jednejte s láskou a pochopením." },
    { name: "Král pohárů", arcana: "Malá", suit: "Poháry", element: "Voda", keywords: ["emoční zralost", "klid", "diplomacie", "rovnováha"], meaning: "Představuje emoční zralost. Cítí hluboce, ale nenechá se emocemi ovládat. Je schopen zůstat klidný i v bouři a jednat diplomaticky. Radí vám, abyste našli rovnováhu mezi srdcem a rozumem a byli oporou pro své okolí." },

    // HOLE - Element Ohně
    { name: "Eso holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["inspirace", "energie", "nový projekt", "potenciál"], meaning: "Představuje výbuch čisté energie a inspirace. Je to ten moment, kdy dostanete skvělý nápad nebo pocítíte silnou motivaci něco začít. Karta vám dává 'zelenou' pro nové projekty a naznačuje, že máte obrovský potenciál růstu, pokud se chopíte příležitosti hned teď." },
    { name: "Dvojka holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["rozhodování", "plánování", "expanze", "odvaha"], meaning: "Zobrazuje okamžik rozhodování a plánování. Už máte prvotní jiskru (Eso), ale nyní držíte svět v rukou a zvažujete, jakým směrem se vydat. Je to karta o opuštění komfortní zóny – ptá se vás, zda zůstanete v bezpečí domova, nebo se odvážíte vykročit do neznáma za větším úspěchem." },
    { name: "Trojka holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["expanze", "výsledky", "cestování", "vize"], meaning: "Znamená expanzi a vyhlížení výsledků vaší práce. Vaše lodě vypluly a vy čekáte, co přivezou. Tato karta naznačuje, že vaše plány se začínají realizovat a vy byste měli myslet ve velkém. Je čas na spolupráci, cestování nebo rozšiřování obzorů za hranice toho, co znáte." },
    { name: "Čtyřka holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["oslava", "domov", "radost", "milník"], meaning: "Je kartou radosti, oslav a pocitu domova. Často se objevuje po dosažení důležitého milníku, kdy je čas se zastavit a užít si plody své práce s přáteli a rodinou. Symbolizuje harmonii, stabilitu a pocit, že někam patříte a jste v bezpečí." },
    { name: "Pětka holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["konflikt", "chaos", "soutěživost", "neshody"], meaning: "Představuje konflikt, chaos a soutěživost. Nejde nutně o válku, ale spíše o situaci, kde se překřikuje mnoho hlasů a každý chce prosadit svou. Je to výzva, abyste se v tomto zmatku nenechali strhnout, ale našli způsob, jak se konstruktivně prosadit, nebo pochopili, že ne každý boj stojí za to." },
    { name: "Šestka holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["vítězství", "uznání", "sláva", "úspěch"], meaning: "Karta vítězství a veřejného uznání. Představuje moment, kdy se vracíte z boje jako hrdina a ostatní vám tleskají. Znamená to, že vaše úsilí bude oceněno a dosáhnete úspěchu. Pozor však na pýchu – užívejte si slávu, ale zůstaňte nohama na zemi." },
    { name: "Sedmička holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["obrana", "odvaha", "vytrvalost", "konkurence"], meaning: "Symbolizuje obranu a odvahu stát si za svým. Jste v pozici, kterou vám ostatní závidí nebo kterou chtějí ohrozit. Tato karta říká, že i když jste v přesile nebo pod tlakem, máte sílu a právo svou pozici uhájit. Nevzdávejte se, i když je to vyčerpávající." },
    { name: "Osmička holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["rychlost", "pohyb", "zprávy", "pokrok"], meaning: "Je kartou rychlosti a pohybu. Věci se dají do pohybu nečekaně rychle – přicházejí zprávy, cestování nebo náhlé zvraty. Znamená to konec průtahů. Vaším úkolem je naskočit na vlnu a nechat se unášet proudem událostí, které směřují k vašemu cíli." },
    { name: "Devítka holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["odolnost", "vytrvalost", "obrana", "únava"], meaning: "Představuje odolnost a vytrvalost těsně před cílem. Jste unavení, možná i zranění z předchozích bojů, ale stále stojíte na stráži. Karta vás povzbuzuje, abyste to nevzdávali – toto je poslední zkouška vaší vůle. Máte dost síly na to, abyste to dotáhli do konce." },
    { name: "Desítka holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["přetížení", "břemeno", "odpovědnost", "pomoc"], meaning: "Znamená přetížení a břemeno odpovědnosti. Nabrali jste si toho na záda příliš mnoho a teď pod tou tíhou klopýtáte. Je to varování, že pokud něco nepustíte nebo nepožádáte o pomoc, zkolabujete těsně před cílem. Úspěch je na dosah, ale musíte si ulehčit." },
    { name: "Páže holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["dobré zprávy", "nápady", "zvídavost", "nadšení"], meaning: "Je poslem dobrých zpráv a nových nápadů. Představuje mladistvou, zvídavou energii, která chce objevovat svět. Často naznačuje příchod inspirativní zprávy nebo začátek nové, vzrušující fáze, ke které byste měli přistupovat s hravostí a bez strachu." },
    { name: "Rytíř holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["akce", "dobrodružství", "impulzivnost", "vášeň"], meaning: "Představuje akci, dobrodružství a impulzivnost. Je to energie typu 'nejdřív střílej, pak se ptej'. Karta naznačuje, že se věci budou dít rychle a vášnivě, ale varuje před zbrklostí. Je skvělá pro krátkodobé projekty vyžadující odvahu, ale horší pro dlouhodobé plánování." },
    { name: "Královna holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["sebevědomí", "charisma", "nezávislost", "vřelost"], meaning: "Ztělesňuje sebevědomí, charisma a nezávislost. Je to archetyp osoby, která je vřelá, společenská a ví, co chce. Když se objeví, radí vám, abyste věřili své síle, byli odvážní a nebáli se být středem pozornosti. Vaše energie je nakažlivá." },
    { name: "Král holí", arcana: "Malá", suit: "Hole", element: "Oheň", keywords: ["vizionář", "vůdce", "strategie", "autorita"], meaning: "Představuje vizionáře a přirozeného vůdce. Je to někdo, kdo nejen má nápady, ale dokáže nadchnout ostatní, aby je realizovali. Tato karta vás vyzývá, abyste převzali velení, mysleli strategicky a využili svou autoritu k dosažení velkých cílů." },

    // MEČE - Element Vzduchu
    { name: "Eso mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["jasnost", "pravda", "nový nápad", "rozhodnutí"], meaning: "Představuje radikální jasnost myšlení a nový nápad. Je to jako blesk z čistého nebe, který prořízne zmatek a ukáže pravdu. Symbolizuje sílu intelektu a rozhodnutí rozetnout gordický uzel. Může také znamenat začátek komunikace, která je přímá a ostrá." },
    { name: "Dvojka mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["nerozhodnost", "pat", "vyhýbání", "volba"], meaning: "Zobrazuje nerozhodnost a patovou situaci. Máte zavázané oči a odmítáte vidět pravdu nebo učinit bolestivé rozhodnutí. Karta říká, že vyhýbání se volbě je také volba, a ta situaci jen zhoršuje. Musíte sundat pásku z očí a čelit realitě, ať je jakákoliv." },
    { name: "Trojka mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["zlomené srdce", "zármutek", "zrada", "bolest"], meaning: "Je kartou zlomeného srdce, zármutku a zrady. Tři meče probodávající srdce značí bolestivou pravdu, rozchod nebo slova, která zranila. Ačkoli je to bolestivé, je to nutný proces uvolnění emocí, aby mohlo dojít k uzdravení." },
    { name: "Čtyřka mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["odpočinek", "rekonvalescence", "meditace", "klid"], meaning: "Znamená odpočinek a rekonvalescenci. Po boji je nutné se stáhnout do ústraní a nechat mysl i tělo odpočinout. Není to čas na akci, ale na tichou meditaci a nabrání sil. Pokud to neuděláte dobrovolně, tělo si o to řekne nemocí." },
    { name: "Pětka mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["prázdné vítězství", "hádka", "nečestnost", "ego"], meaning: "Představuje prázdné vítězství, hádku a nečestnost. Možná jste vyhráli spor, ale za cenu ztráty důvěry nebo přátelství. Je to karta ega a zastrašování. Ptá se vás: 'Je důležitější mít pravdu, nebo být šťastný?' Někdy je lepší odejít, než vyhrát za každou cenu." },
    { name: "Šestka mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["přechod", "cesta", "úleva", "naděje"], meaning: "Symbolizuje přechod a cestu do klidnějších vod. Opouštíte bouřlivou situaci a směřujete k něčemu lepšímu, i když si s sebou nesete smutek nebo zátěž z minulosti. Je to karta naděje na úlevu, ale vyžaduje to nechat staré věci za sebou." },
    { name: "Sedmička mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["lest", "strategie", "podvod", "diplomacie"], meaning: "Je kartou lsti, strategie a možná i podvodu. Někdo se snaží vyhnout odpovědnosti nebo získat něco nečestně ('odnést meče potají'). Může také znamenat, že musíte být chytří a diplomatičtí, abyste vyřešili problém, místo přímého útoku." },
    { name: "Osmička mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["uvěznění", "bezmoc", "strach", "osvobození"], meaning: "Zobrazuje pocit uvěznění a bezmoci. Žena je svázaná a obklopená meči, ale pouta jsou volná a cestu ven nic neblokuje. Znamená to, že vězení je ve vaší hlavě – omezují vás vaše vlastní strachy a přesvědčení. Máte moc se osvobodit, jakmile změníte myšlení." },
    { name: "Devítka mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["úzkost", "noční můry", "starosti", "strach"], meaning: "Karta úzkosti, nočních můr a starostí, které vás budí ze spaní. Často je strach v naší hlavě mnohem horší než realita samotná. Vyzývá vás, abyste své obavy sdíleli nebo je analyzovali logicky, protože ve tmě vypadají stíny větší, než jsou." },
    { name: "Desítka mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["konec", "zrada", "dno", "nový začátek"], meaning: "Znamená dramatický konec, zradu a dno. Muž leží probodán deseti meči. Dobrou zprávou je, že už to nemůže být horší. Cyklus bolesti skončil a jediná cesta vede nahoru. Je to definitivní tečka za něčím, co už nelze vzkřísit." },
    { name: "Páže mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["zvídavost", "pravda", "ostražitost", "logika"], meaning: "Představuje zvídavou, bystrou mysl, která hledá pravdu. Může to být špion, student nebo někdo, kdo rád drbe. Přináší zprávy, které mohou být ostré, ale pravdivé. Vyzývá vás k ostražitosti a používání logiky." },
    { name: "Rytíř mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["rychlost", "agresivita", "ambice", "upřímnost"], meaning: "Je nejrychlejší a nejagresivnější rytíř. Řítí se za svým cílem bez ohledu na následky. Představuje ambice, ostrý jazyk a asertivitu. Je skvělý, když potřebujete rychle jednat, ale dejte pozor, abyste svou upřímností nebo dravostí nepošlapali ostatní." },
    { name: "Královna mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["úsudek", "nezávislost", "upřímnost", "hranice"], meaning: "Ztělesňuje jasný úsudek, nezávislost a upřímnost bez příkras. Má za sebou těžké zkoušky, které ji zbavily iluzí. Je spravedlivá, ale nesnese lži. Radí vám, abyste se rozhodovali hlavou, stanovili si jasné hranice a nenechali se ovlivnit sentimentem." },
    { name: "Král mečů", arcana: "Malá", suit: "Meče", element: "Vzduch", keywords: ["autorita", "soudce", "logika", "etika"], meaning: "Představuje intelektuální autoritu, soudce a stratéga. Je to symbol etiky, práva a logiky. Emoce má pod kontrolou a rozhoduje na základě faktů. V situaci značí potřebu profesionálního, chladného a objektivního přístupu." },

    // VELKÁ ARKÁNA
    { name: "Blázen (The Fool)", arcana: "Velká", suit: "", element: "", keywords: ["nový začátek", "nevinnost", "spontánnost", "důvěra"], meaning: "Představuje nové začátky, nevinnost a spontánnost. Je to karta skoku do neznáma s důvěrou, že vás vesmír chytí. Pokud ji vytáhnete, naznačuje to, že stojíte na prahu nového dobrodružství, které vyžaduje odvahu, otevřenou mysl a ochotu riskovat, aniž byste přesně věděli, kam cesta vede." },
    { name: "Mág (The Magician)", arcana: "Velká", suit: "", element: "", keywords: ["manifestace", "síla vůle", "dovednost", "potenciál"], meaning: "Symbolizuje manifestaci, sílu vůle a dovednost. Máte k dispozici všechny nástroje a zdroje potřebné k tomu, abyste své sny proměnili v realitu. Tato karta vás vybízí k akci, využití vašeho potenciálu a připomíná vám, že vy jste tvůrcem svého osudu." },
    { name: "Velekněžka (The High Priestess)", arcana: "Velká", suit: "", element: "", keywords: ["intuice", "podvědomí", "tajemství", "pasivita"], meaning: "Ztělesňuje intuici, podvědomí a tajemství. Vyzývá vás, abyste naslouchali svému vnitřnímu hlasu a věnovali pozornost svým snům. Znamená, že odpovědi, které hledáte, nejsou ve vnějším světě, ale hluboko uvnitř vás. Je čas na pasivitu a vnímání, ne na akci." },
    { name: "Císařovna (The Empress)", arcana: "Velká", suit: "", element: "", keywords: ["plodnost", "ženskost", "příroda", "hojnost"], meaning: "Představuje plodnost, ženskost, přírodu a hojnost. Je to karta mateřské péče a tvořivosti. Pokud vyjde, naznačuje období růstu, smyslnosti a užívání si krás života. Může také znamenat těhotenství (doslovné či metaforické – zrození nápadu)." },
    { name: "Císař (The Emperor)", arcana: "Velká", suit: "", element: "", keywords: ["autorita", "struktura", "otec", "řád"], meaning: "Symbolizuje autoritu, strukturu, otcovskou figuru a řád. Představuje logiku a vládu nad situací. Tato karta naznačuje potřebu disciplíny, stanovení hranic a převzetí odpovědnosti. Je to signál k tomu, abyste do svého života vnesli stabilitu a jednali s rozumem." },
    { name: "Velekněz (The Hierophant)", arcana: "Velká", suit: "", element: "", keywords: ["tradice", "duchovní moudrost", "instituce", "konformita"], meaning: "Značí tradici, duchovní moudrost, instituce a konformitu. Často poukazuje na učení se od mentora nebo následování zavedených společenských norem. Může naznačovat, že řešení vašeho problému spočívá v osvědčených postupech, nikoliv v revoluci." },
    { name: "Milenci (The Lovers)", arcana: "Velká", suit: "", element: "", keywords: ["láska", "harmonie", "volba", "hodnoty"], meaning: "Karta lásky, harmonie, ale především volby. Ačkoli často značí romantický vztah a hluboké spojení, na hlubší úrovni jde o rozhodování mezi dvěma cestami a o sladění vašich hodnot s vašimi činy. Představuje morální křižovatku." },
    { name: "Vůz (The Chariot)", arcana: "Velká", suit: "", element: "", keywords: ["triumf", "pevná vůle", "kontrola", "vítězství"], meaning: "Představuje triumf, pevnou vůli a kontrolu. Je to karta vítězství dosaženého skrze disciplínu a odhodlání. Naznačuje, že ačkoliv mohou existovat protichůdné síly, vy máte otěže pevně v rukou a pokud vytrváte, dosáhnete cíle. Je to signál k pohybu vpřed." },
    { name: "Síla (Strength)", arcana: "Velká", suit: "", element: "", keywords: ["vnitřní síla", "trpělivost", "soucit", "odvaha"], meaning: "Nejde o hrubou fyzickou sílu, ale o sílu vnitřní – trpělivost, soucit a odvahu. Znamená schopnost čelit strachu a ovládnout své instinkty s láskou a klidem. Pokud ji vytáhnete, zvládnete překážky díky své vytrvalosti a laskavosti." },
    { name: "Poustevník (The Hermit)", arcana: "Velká", suit: "", element: "", keywords: ["samota", "introspekce", "moudrost", "hledání"], meaning: "Symbolizuje samotu, introspekci a hledání vnitřní pravdy. Je to výzva k tomu, abyste se na chvíli stáhli ze světa a hledali odpovědi sami v sobě. Není to osamělost ze smutku, ale vědomá izolace pro načerpání moudrosti." },
    { name: "Kolo štěstí (Wheel of Fortune)", arcana: "Velká", suit: "", element: "", keywords: ["cykly", "změna", "osud", "karma"], meaning: "Představuje cykly, změnu, osud a štěstí. Připomíná, že nic netrvá věčně – ani to dobré, ani to špatné. Situace se mění a často jsou mimo vaši kontrolu. Je to karta karmy a náhlých zvratů, které vás posunou tam, kde máte být." },
    { name: "Spravedlnost (Justice)", arcana: "Velká", suit: "", element: "", keywords: ["pravda", "férovost", "zákon", "důsledky"], meaning: "Ztělesňuje pravdu, férovost a zákon příčiny a následku. Znamená, že vaše činy (minulé i současné) budou spravedlivě posouzeny. Pokud jednáte čestně, nemáte se čeho bát. Často se objevuje při právních záležitostech nebo když je třeba udělat objektivní rozhodnutí." },
    { name: "Viselec (The Hanged Man)", arcana: "Velká", suit: "", element: "", keywords: ["oběť", "nový úhel pohledu", "pozastavení", "čekání"], meaning: "Karta oběti, nového úhlu pohledu a pozastavení. Věci se nehýbou, ale má to svůj důvod. Jste vyzváni, abyste se vzdali kontroly a podívali se na svět jinýma očima. Někdy je nutné něco obětovat, abyste získali něco cennějšího." },
    { name: "Smrt (Death)", arcana: "Velká", suit: "", element: "", keywords: ["transformace", "konec", "nový začátek", "změna"], meaning: "Jedna z nejobávanějších, ale nejvíce nepochopených karet. Málokdy znamená fyzickou smrt; spíše značí konec jedné etapy, radikální transformaci a uvolnění místa pro něco nového. Staré musí zemřít, aby se mohlo zrodit nové. Je to karta nevyhnutelné změny." },
    { name: "Mírnost (Temperance)", arcana: "Velká", suit: "", element: "", keywords: ["rovnováha", "trpělivost", "umírněnost", "harmonie"], meaning: "Symbolizuje rovnováhu, trpělivost a umírněnost. Jde o smísení protikladů za účelem nalezení harmonie. Vyzývá vás, abyste nejednali v extrémech, ale hledali zlatou střední cestu a uzdravili se skrze klid a integraci." },
    { name: "Ďábel (The Devil)", arcana: "Velká", suit: "", element: "", keywords: ["závislosti", "materialismus", "posedlost", "uvěznění"], meaning: "Představuje závislosti, materialismus, posedlost a pocit uvěznění. Ukazuje na to, kde jsme otroky svých tužeb nebo strachů. Dobrou zprávou této karty je, že řetězy jsou často volné – vězení si vytváříme sami a máme moc se osvobodit, pokud si to uvědomíme." },
    { name: "Věž (The Tower)", arcana: "Velká", suit: "", element: "", keywords: ["náhlá změna", "zhroucení", "chaos", "očista"], meaning: "Značí náhlou, šokující změnu, zhroucení starých struktur a chaos. Je to blesk z čistého nebe, který ničí to, co stálo na vratkých základech. Ačkoliv je to bolestivé, proces je očistný a uvolňuje cestu pro pravdu a novou stavbu na pevnějších základech." },
    { name: "Hvězda (The Star)", arcana: "Velká", suit: "", element: "", keywords: ["naděje", "inspirace", "uzdravení", "víra"], meaning: "Karta naděje, inspirace a duchovního uzdravení. Přichází po bouři (Věž) jako balzám na duši. Znamená, že jste na správné cestě, vesmír vám žehná a můžete věřit v lepší zítřky. Je to čas klidu, obnovy a víry." },
    { name: "Luna (The Moon)", arcana: "Velká", suit: "", element: "", keywords: ["iluze", "strach", "podvědomí", "nejistota"], meaning: "Představuje iluze, strach, podvědomí a nejistotu. Věci nejsou takové, jaké se zdají být. Varuje před klamem a sebeklamem. Vyzývá vás, abyste prozkoumali své stíny a intuici, ale abyste byli opatrní, protože cesta není jasně osvětlena." },
    { name: "Slunce (The Sun)", arcana: "Velká", suit: "", element: "", keywords: ["radost", "úspěch", "vitalita", "jasnost"], meaning: "Nejpozitivnější karta v balíčku. Ztělesňuje radost, úspěch, vitalitu a jasnost. Vše je osvětleno, problémy mizí a vy cítíte teplo a energii. Znamená štěstí, naplnění a veřejné uznání. Je to 'ano' na vaše otázky." },
    { name: "Soud (Judgement)", arcana: "Velká", suit: "", element: "", keywords: ["znovuzrození", "vnitřní volání", "rozhřešení", "probuzení"], meaning: "Karta znovuzrození, vnitřního volání a rozhřešení. Znamená, že přichází moment, kdy musíte zhodnotit svou minulost, odpustit si a povstat k nové verzi sebe sama. Je to probuzení do vyššího smyslu života." },
    { name: "Svět (The World)", arcana: "Velká", suit: "", element: "", keywords: ["dokončení", "celistvost", "úspěch", "naplnění"], meaning: "Symbolizuje dokončení, celistvost a úspěch. Jeden velký životní cyklus se uzavřel a vy jste dosáhli cíle. Cítíte se naplnění a na svém místě. Může také znamenat cestování nebo mezinárodní propojení." }
];

// API klíč pro Gemini
const API_KEY = 'AIzaSyC575zHdaM2hwInGZlNqp4V7yrU_WKDHE0';

async function provedVyklad() {
    const otazka = document.getElementById('question').value.trim();
    const vysledekDiv = document.getElementById('result');
    const nazevKartyElem = document.getElementById('cardName');
    const detailyKartyElem = document.getElementById('cardDetails');
    const interpretaceElem = document.getElementById('interpretation');
    const drawButton = document.getElementById('drawButton');
    const cardImageElem = document.getElementById('cardImage');

    if (!otazka) {
        alert("Prosím, zadej otázku.");
        return;
    }

    // Deaktivace tlačítka během načítání
    drawButton.disabled = true;
    drawButton.textContent = "Konzultuji s hvězdami...";

    // 1. Náhodný výběr karty
    const nahodnaKarta = karty[Math.floor(Math.random() * karty.length)];

    // Zobrazíme kartu uživateli
    vysledekDiv.style.display = 'block';
    nazevKartyElem.textContent = nahodnaKarta.name;

    // Zobrazit obrázek karty
    // Soubory jsou ve složce ../karty/ a mají příponu .png, jméno souboru je bez diakritiky, mezer, závorek a speciálních znaků
    function normalizeCardFileName(name) {
        return name
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove diacritics
            .replace(/\s/g, '') // Remove spaces
            .replace(/\(|\)/g, '') // Remove parentheses
            .replace(/-/g, '') // Remove hyphens
            .replace(/,/g, '') // Remove commas
            .replace(/\./g, '') // Remove dots
            .replace(/'/g, '') // Remove apostrophes
            .replace(/[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/g, '') // Remove any remaining Czech diacritics
            ;
    }
    const imagesFolder = '../karty/';
    const cardName = nahodnaKarta.name;
    const imageFileName = normalizeCardFileName(cardName) + '.png';
    const cacheBust = `?v=${Date.now()}`; // force refresh so staré obrázky nezůstanou v cache
    cardImageElem.src = imagesFolder + imageFileName + cacheBust;
    cardImageElem.alt = cardName;

    // Detaily karty s elementem a barvou (pokud existují)
    let detaily = `${nahodnaKarta.arcana} arkána`;
    if (nahodnaKarta.suit) {
        detaily += ` • ${nahodnaKarta.suit}`;
    }
    if (nahodnaKarta.element) {
        detaily += ` (${nahodnaKarta.element})`;
    }
    detaily += ` • Klíčová slova: ${nahodnaKarta.keywords.join(', ')}`;

    detailyKartyElem.textContent = detaily;
    interpretaceElem.textContent = "Konzultuji s hvězdami (a AI)...";

    // 2. Volání AI (Gemini)
    try {
        const textVykladu = await ziskejVykladOdAI(nahodnaKarta, otazka);
        interpretaceElem.textContent = textVykladu;
    } catch (error) {
        console.error('Chyba při volání API:', error);
        interpretaceElem.textContent = "Omlouváme se, spojení s vesmírem selhalo. Zkuste to prosím znovu.";
    } finally {
        // Reaktivace tlačítka
        drawButton.disabled = false;
        drawButton.textContent = "Vytáhnout kartu a vyložit";
    }
}

async function ziskejVykladOdAI(karta, otazka) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`;
    
    // Tvorba Promptu - instrukce pro AI
    const promptText = `Jsi zkušená kartářka se schopností hlubokého vhledu.
Uživatel se ptá: "${otazka}".
Vytažená tarotová karta je: "${karta.name}" (${karta.arcana} arkána).
${karta.suit ? "Barva: " + karta.suit : ""}
${karta.element ? "Element: " + karta.element : ""}
Klíčová slova karty: ${karta.keywords.join(', ')}.
Význam karty: ${karta.meaning}

Úkol: Stručně (max 5 vět) a mysticky vylož význam této karty vzhledem k položené otázce.
Mluv přímo k uživateli a buď empatický a povzbudivý.
Nezapomeň zmínit klíčová témata karty a jak souvisí s otázkou.`;

    const data = {
        contents: [{
            parts: [{ text: promptText }]
        }]
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        throw new Error(`API vrátilo chybu ${response.status}`);
    }

    const json = await response.json();
    console.log('API Response:', json);
    
    // Kontrola, zda odpověď obsahuje data
    if (!json.candidates || !json.candidates[0] || !json.candidates[0].content) {
        throw new Error('Neplatná odpověď od API');
    }
    
    // Vytáhnutí textu z odpovědi Google API
    return json.candidates[0].content.parts[0].text;
}
