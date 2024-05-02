let language_opts = document.querySelectorAll("input");
let save_language = document.getElementById("save-language");
let settings = document.getElementsByTagName("h1");
let sett_title = document.getElementsByTagName("h3");
let sett_h2 = document.getElementsByTagName("h5");
let lang = document.getElementsByTagName("label");
let french = lang[0];
let english = lang[1];
let spanish = lang[2];

setTimeout(function() {
    save_language = document.getElementById("save-language");
    language_opts = document.querySelectorAll("input");
    settings = document.getElementsByTagName("h1");
    sett_title = document.getElementsByTagName("h3");
    sett_h2 = document.getElementsByTagName("h5");
    lang = document.getElementsByTagName("label");
    console.log("settings");
    if (language_opts && save_language && settings && sett_title && sett_h2 && lang) {
        for (const language_opt of language_opts) {
            language_opt.removeAttribute("checked");
        }
        for (const language_opt of language_opts) {
            if (language_opt.value == document.cookie.substring(9)) {
                language_opt.setAttribute("checked", "checked");
                setLanguage(language_opt.value);
                break;
            }
        }
        save_language.addEventListener("click", (event) => {
            event.preventDefault();
            for (const lang_opt of language_opts) {
                if (lang_opt.checked) {
                    document.cookie = "language=" + lang_opt.value;
                    setLanguage(document.cookie.substring(9));
                    languageSelect.value = document.cookie.substring(9);
                    break;
                }
            }
            // remove cookie
            console.log("cookie:"+document.cookie.substring(9));
            setLanguage2(document.cookie.substring(9));
        })
    }
}, 1000);


////////////////////////TRANSLATION//////////////////////////


const setLanguage2 = (language) => {
    if(language == "fr")
    {
        home_elt.innerText = translations.fr.home;
        match_elt.innerText = translations.fr.match;
        ai_elt.innerText = translations.fr.ia_match;
        tournament_elt.innerText = translations.fr.tournament;
        title_elt.innerText = translations.fr.title;
        parag_elt.innerText = translations.fr.parag;
        brand.innerText = translations.fr.brand;
        settings[0].innerText = translations.fr.settings;
        sett_title[0].innerText = translations.fr.sett_title;
        sett_h2[0].innerText = translations.fr.sett_h2;
        lang[0].innerText = translations.fr.french;
        lang[1].innerText = translations.fr.english;
        lang[2].innerText = translations.fr.spanish;
        save_language.innerText = translations.fr.save;
    }
    else if(language == "en")
    {
        home_elt.innerText = translations.en.home;
        match_elt.innerText = translations.en.match;
        ai_elt.innerText = translations.en.ia_match;
        tournament_elt.innerText = translations.en.tournament;
        title_elt.innerText = translations.en.title;
        parag_elt.innerText = translations.en.parag;
        brand.innerText = translations.en.brand;
        settings[0].innerText = translations.en.settings;
        sett_title[0].innerText = translations.en.sett_title;
        sett_h2[0].innerText = translations.en.sett_h2;
        lang[0].innerText = translations.en.french;
        lang[1].innerText = translations.en.english;
        lang[2].innerText = translations.en.spanish;
        save_language.innerText = translations.en.save;
    }
    else if(language == "es")
    {
        home_elt.innerText = translations.es.home;
        match_elt.innerText = translations.es.match;
        ai_elt.innerText = translations.es.ia_match;
        tournament_elt.innerText = translations.es.tournament;
        title_elt.innerText = translations.es.title;
        parag_elt.innerText = translations.es.parag;
        brand.innerText = translations.es.brand;
        settings[0].innerText = translations.es.settings;
        sett_title[0].innerText = translations.es.sett_title;
        sett_h2[0].innerText = translations.es.sett_h2;
        lang[0].innerText = translations.es.french;
        lang[1].innerText = translations.es.english;
        lang[2].innerText = translations.es.spanish;
        save_language.innerText = translations.es.save;
    }
}
