let language_opts = document.querySelectorAll("language");
let save_language = document.getElementById("save-language");
// let selectedLanguage = localStorage.getItem("favLanguage");

setTimeout(function() {
    language_opts = document.querySelectorAll("input");
    save_language = document.getElementById("save-language");
    if (language_opts && save_language) {
        for (const language_opt of language_opts) {
            language_opt.removeAttribute("checked");
        }
        for (const language_opt of language_opts) {
            console.log(language_opt.value);
            if (language_opt.value == selectedLanguage) {
                language_opt.setAttribute("checked", "checked");
                setLanguage(selectedLanguage);
                break;
            }
        }
        save_language.addEventListener("click", (event) => {
            event.preventDefault();
            let selectedLanguage;
            for (const lang_opt of language_opts) {
                if (lang_opt.checked) {
                    selectedLanguage = lang_opt.value;
                    setLanguage(selectedLanguage);
                    break;
                }
            }
            console.log("selected language: " + selectedLanguage);  
            localStorage.setItem("favLanguage", selectedLanguage);
        })
    }
}, 1000);
