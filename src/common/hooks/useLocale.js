import React, { useState, useEffect } from "react";
import { save, load } from "../storage";

const KEY = "locale";
export function useLocale() {
  const [lang, setLang] = useState(() => load(KEY, "en"));
  useEffect(() => {
    save(KEY, lang);
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  function toggle() {
    setLang(prev => (prev === "en" ? "ar" : "en"));
  }

  const strings = {
    en: {
      title: "City Pulse",
      searchPlaceholder: "Search events or keyword",
      cityPlaceholder: "City",
      favorites: "Favorites",
      profile: "Profile",
      login: "Login",
      logout: "Logout"
    },
    ar: {
      title: "City Pulse (AR)",
      searchPlaceholder: "ابحث عن حدث",
      cityPlaceholder: "المدينة",
      favorites: "المفضلة",
      profile: "الملف",
      login: "تسجيل الدخول",
      logout: "تسجيل الخروج"
    }
  };

  return { lang, toggle, t: strings[lang] };
}
