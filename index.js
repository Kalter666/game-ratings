const readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout);

const getAns = (ans) => {
    if (ans === 'y') return true;
    return false;
};

function* rankings () {
    let ans = [];
    console.log('18+');
    ans[0] = yield "Побуждающет ли детей к совершению действий, представляющих угрозу их жизни и (или) здоровью, в том числе к причинению вреда своему здоровью, самоубийству, демонстрация культуры общества ЛГБТ?";
    ans[1] = yield "Способна вызвать у детей желание употребить наркотические средства, психотропные и (или) одурманивающие вещества, табачные изделия, алкогольную и спиртосодержащую продукцию, пиво и напитки, изготавливаемые на его основе, принять участие в азартных играх, заниматься проституцией, близости с животным, за исключением случаев, предусмотренных настоящим Федеральным законом?";
    ans[2] = yield 'Отрицает семейные ценности и формирующая неуважение к родителям и (или) другим членам семьи?';
    ans[3] = yield 'Оправдывает противоправное поведение?';
    ans[4] = yield 'содержит нецензурную брань (мат)?';
    ans[5] = yield 'содержит информацию порнографического характера?';
    for (let i = 0; i < 6; i++)
        if (getAns(ans[i])) return '18+';
    console.log('16+ Содержит ли игра:');
    ans[6] = yield 'изображение или описание несчастного случая, аварии, катастрофы, заболевания, смерти без натуралистического показа их последствий, которые могут вызывать у детей страх, ужас или панику?';
    ans[7] = yield 'изображение или описание жестокости и (или) насилия (за исключением сексуального насилия) без натуралистического показа процесса лишения жизни или нанесения увечий при условии, что выражается сострадание к жертве и (или) отрицательное, осуждающее отношение к жестокости, насилию (за исключением насилия, применяемого в случаях защиты прав граждан и охраняемых законом интересов общества или государства)';    
    ans[8] = yield 'информация о наркотических средствах или о психотропных и (или) об одурманивающих веществах (без их демонстрации), об опасных последствиях их потребления с демонстрацией таких случаев при условии, что выражается отрицательное или осуждающее отношение к потреблению таких средств или веществ и содержится указание на опасность их потребления';
    ans[9] = yield 'отдельные бранные слова и (или) выражения, не относящиеся к нецензурной брани';
    ans[10] = yield 'не эксплуатирующие интереса к сексу и не носящие оскорбительного характера изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера';
    for (let i = 6; i < 11; i++)
        if (getAns(ans[i])) return '16+';
    console.log('12+ К допускаемой к обороту информационной продукции для детей, достигших возраста двенадцати лет, может быть отнесена информационная продукция, предусмотренная статьей 8 настоящего Федерального закона, а также информационная продукция, содержащая оправданные её жанром и (или) сюжетом:');    
    ans[11] = yield 'эпизодические изображение или описание жестокости и (или) насилия (за исключением сексуального насилия) без натуралистического показа процесса лишения жизни или нанесения увечий при условии, что выражается сострадание к жертве и (или) отрицательное, осуждающее отношение к жестокости, насилию (за исключением насилия, применяемого в случаях защиты прав граждан и охраняемых законом интересов общества или государств)';
    ans[12] = yield 'изображение или описание, не побуждающие к совершению антиобщественных действий (в том числе к потреблению алкогольной и спиртосодержащей продукции, табачных изделии, пива и напитков, изготавливаемых на его основе, участию в азартных играх, занятию бродяжничеством или попрошайничеством), эпизодическое упоминание (без демонстрации) наркотических средств, психотропных и (или) одурманивающих веществ при условии, что не обосновывается и не оправдывается допустимость антиобщественных действий, выражается отрицательное, осуждающее отношение к ним и содержится указание на опасность потребления указанных продукции, средств, веществ, изделий;';
    ans[13] = yield 'не эксплуатирующие интереса к сексу и не носящие возбуждающего или оскорбительного характера эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера';
    for (let i = 11; i < 14; i++)
        if (getAns(ans[i])) return '12+';
    console.log('6+ К допускаемой к обороту информационной продукции для детей, достигших возраста шести лет, может быть отнесена информационная продукция, предусмотренная статьей 7 настоящего Федерального закона, а также информационная продукция, содержащая оправданные её жанром и (или) сюжетом:');
    ans[14] = yield 'кратковременные и ненатуралистические изображение или описание заболеваний человека (за исключением тяжелых заболеваний) и (или) их последствий в форме, не унижающей человеческого достоинства';
    ans[15] = yield 'ненатуралистические изображение или описание несчастного случая, аварии, катастрофы либо ненасильственной смерти без демонстрации их последствий, которые могут вызывать у детей страх, ужас или панику';
    ans[16] = yield 'не побуждающие к совершению антиобщественных действий и (или) преступлений эпизодические изображение или описание этих действий и (или) преступлений при условии, что не обосновывается и не оправдывается их допустимость и выражается отрицательное, осуждающее отношение к лицам, их совершающим.';
    for (let i = 14; i < 17; i++)
        if (getAns(ans[i])) return '6+';
    ans[17] = yield 'К информационной продукции для детей, не достигших возраста шести лет, может быть отнесена информационная продукция, содержащая информацию, не причиняющую вреда здоровью и (или) развитию детей (в том числе информационная продукция, содержащая оправданные её жанром и (или) сюжетом эпизодические ненатуралистические изображение или описание физического и (или) психического насилия (за исключением сексуального насилия) при условии торжества добра над злом и выражения сострадания к жертве насилия и (или) осуждения насилия).';    
    if (getAns(ans[17])) return '0+';
    return '0+';
}; 



const rank = rankings();

rl.on('line', (line) => {
    if(rank.next(line).done){
        console.log('Проверка завершена.');
        process.exit(0);
    }
    console.log(rank.next(line).value);
}).on('close', () => {
    console.log('Спасибо за использование программы.');
  process.exit(0);
});
console.log('Нажмите ввод для продолжения. ctrl + c для выхода. На вопрос следует отвечать "y" для утвердительного ответа, "n" для отрицательного.');