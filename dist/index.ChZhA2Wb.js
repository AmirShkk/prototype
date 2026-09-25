const languageLabels = {
  en: "English",
  hi: "हिंदी",
  mr: "मराठी"
};
function setLanguage(language) {
  window.localStorage.setItem("krishilink_lang", language);
}
export {
  languageLabels as l,
  setLanguage as s
};
