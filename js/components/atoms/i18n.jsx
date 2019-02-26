import en from "../../i18n/en.json";
import fr from "../../i18n/fr.json";

// set up our supported languages
const langs = {
    en,
    fr
};

// return the lang (we will import as loadLang)
export default function (lang = "en") {
    return langs[lang];
};
