import { createI18n } from "vue-i18n";

// 导入翻译文件
import KO from "./locales/ko.json";
import JA from "./locales/ja.json";
import EN from "./locales/en.json";
import ZH from "./locales/zh.json";
const messages = {
  ZH,
  EN,
  JA,
  KO,
};
//获取浏览器默认语言
const browserLanguage = navigator.language;
let locale;
switch (browserLanguage) {
  case "zh-CN":
    locale = "ZH";
    break;
  case "en":
  case "en-US":
  case "en-GB":
    locale = "EN";
    break;
  case "ja":
    locale = "JA";
    break;
  case "ko":
    locale = "KO";
    break;
  default:
    locale = "EN";
}
const i18n = createI18n({
  legacy: false, // 禁用 legacy 模式
  locale: locale, // 设置默认语言
  fallbackLocale: locale,
  messages,
});

export default i18n;
