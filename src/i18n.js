import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "/public/locals/en.json";
import ar from "/public/locals/ar.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (lng === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    localStorage.setItem("language", "ar");
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    localStorage.setItem("language", "en");
  }
});

export default i18n;
