const translationSb = {
    source: {
        sbTitle1: "Secure",
        sbText1: "We use 256 bit Encription",
        sbTitle2: "Private",
        sbText2: "Your Privacy is Guaranteed",
        sbTitle3: "Safe",
        sbText3: "100% Safe, Private and Secure",
        textCityPlayBefore: "in",
        textCityPlayAfter: " people play the game:",
    },
    en: {
        sbTitle1: "Secure",
        sbText1: "We use 256 bit Encription",
        sbTitle2: "Private",
        sbText2: "Your Privacy is Guaranteed",
        sbTitle3: "Safe",
        sbText3: "100% Safe, Private and Secure",
        textCityPlayBefore: "in",
        textCityPlayAfter: " people play the game:",
    },
    de: {
        sbTitle1: "Sichern",
        sbText1: "Wir verwenden 256-Bit-Verschlüsselung",
        sbTitle2: "Privat",
        sbText2: "Ihre Privatsphäre ist garantiert",
        sbTitle3: "Sicher",
        sbText3: "100% sicher, privat und sicher",
        textCityPlayBefore: "in",
        textCityPlayAfter: " Menschen spielen das Spiel:",
    },
    ja: {
        sbTitle1: "安全",
        sbText1: "256ビットの暗号化を使用します",
        sbTitle2: "民間",
        sbText2: "あなたのプライバシーは保証されています",
        sbTitle3: "安全",
        sbText3: "100％安全、プライベート、安全",
        textCityPlayBefore: "では、",
        textCityPlayAfter: " 人がゲームをプレイしています:",
    },
    sv: {
        sbTitle1: "Säkra",
        sbText1: "Vi använder 256 bitars kryptering",
        sbTitle2: "Privat",
        sbText2: "Din integritet garanteras",
        sbTitle3: "Säker",
        sbText3: "100% säkert, privat och säkert",
        textCityPlayBefore: "i",
        textCityPlayAfter: " personer spelar spelet:",
    },
    da: {
        sbTitle1: "Sikker",
        sbText1: "Vi bruger 256 bit kryptering",
        sbTitle2: "Privat",
        sbText2: "Dit privatliv garanteres",
        sbTitle3: "Sikker",
        sbText3: "100% sikkert, privat og sikkert",
        textCityPlayBefore: "I",
        textCityPlayAfter: " mennesker spiller spillet:",
    },
    ar: {
        sbTitle1: "آمن",
        sbText1: "نستخدم تشفير 256 بت",
        sbTitle2: "نشر",
        sbText2: "خصوصيتك مضمونة",
        sbTitle3: "آمنة",
        sbText3: "100٪ آمنة وخصوصية وآمنة",
        textCityPlayBefore: "في",
        textCityPlayAfter: "  شخص يلعبون اللعبة:",
    },
    pt: {
        sbTitle1: "Seguro",
        sbText1: "Usamos criptografia de 256 bits",
        sbTitle2: "Privado",
        sbText2: "Sua privacidade é garantida",
        sbTitle3: "Seguro",
        sbText3: "100% seguro, privado e seguro",
        textCityPlayBefore: "em",
        textCityPlayAfter: " pessoas jogam o jogo:",
    },
    it: {
        sbTitle1: "Sicuro",
        sbText1: "Usiamo la crittografia a 256 bit",
        sbTitle2: "Privato",
        sbText2: "La tua privacy è garantita",
        sbTitle3: "Sicuro",
        sbText3: "100% sicuro, privato e protetto",
        textCityPlayBefore: "In",
        textCityPlayAfter: " persone giocano il gioco:",
    },
    zh: {
        sbTitle1: "安全",
        sbText1: "我們使用256位加密",
        sbTitle2: "私人的",
        sbText2: "您的隱私得到保證",
        sbTitle3: "安全",
        sbText3: "100％安全，私人和安全",
        textCityPlayBefore: "在",
        textCityPlayAfter: " 人玩游戏:",
    },
    es: {
        sbTitle1: "Seguro",
        sbText1: "Usamos cifrado de 256 bits",
        sbTitle2: "Privado",
        sbText2: "Tu privacidad está garantizada",
        sbTitle3: "Seguro",
        sbText3: "100% seguro, privado y protegido",
        textCityPlayBefore: "En",
        textCityPlayAfter: " personas juegan el juego:",
    },
    fr: {
        sbTitle1: "Sécurise",
        sbText1: "Nous utilisons un cryptage 256 bits",
        sbTitle2: "Privé",
        sbText2: "Votre confidentialité est garantie",
        sbTitle3: "Sûr",
        sbText3: "100% sûr, privé et sécurisé",
        textCityPlayBefore: "Dans",
        textCityPlayAfter: " personnes jouent au jeu:",
    },
    nl: {
        sbTitle1: "Veilig",
        sbText1: "We gebruiken 256 bit-codering",
        sbTitle2: "Privaat",
        sbText2: "Uw privacy is gegarandeerd",
        sbTitle3: "Veilig",
        sbText3: "100% veilig, privé en beveiligd",
        textCityPlayBefore: "In",
        textCityPlayAfter: " mensen spelen het spel:",
    },
    ru: {
        sbTitle1: "Безопасный",
        sbText1: "Мы используем 256-битное шифрование",
        sbTitle2: "Приватный",
        sbText2: "Ваша конфиденциальность гарантирована",
        sbTitle3: "Защищенный",
        sbText3: "100% безопасно, конфиденциально и надежно",
        textCityPlayBefore: "в",
        textCityPlayAfter: " человек играют в игру:",
    },
    uk: {
        sbTitle1: "Безпечний",
        sbText1: "Ми використовуємо 256-бітове шифрування",
        sbTitle2: "Приватний",
        sbText2: "Ваша конфіденційність гарантована",
        sbTitle3: "Сейф",
        sbText3: "100% безпечний, приватний та безпечний",
        textCityPlayBefore: "у",
        textCityPlayAfter: " людей грают в гру:",
    },
};
function detect_language() {
    var userLang =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;
    if (userLang == "zh-CN" || userLang == "zh-SG" || userLang == "zh-MY" || userLang == "zh-CHS") {
        userLang = "zh";
    } else if (
        userLang == "zh-HK" ||
        userLang == "zh-MO" ||
        userLang == "zh-TW" ||
        userLang == "zh-CHT"
    ) {
        userLang = "zh";
    } else if (userLang.length > 2) {
        userLang = userLang[0] + userLang[1];
    }
    return userLang;
}
document.addEventListener("DOMContentLoaded", function (event) {

    let browserLang = detect_language();
    const langTranslation =
    translationSb[browserLang] && Object.keys(translationSb[browserLang]).length > 0
            ? translationSb[browserLang]
            : translationSb["source"];
    for (const textKey of Object.keys(langTranslation)) {
        const textString = langTranslation[textKey];
        if (textKey === "title") {
            $(textKey).text(textString);
        } else {
            $(`.${textKey}
             `).text(textString);
        }
    }
});
