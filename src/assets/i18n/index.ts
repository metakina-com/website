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

const i18n = createI18n({
  legacy: false, // 禁用 legacy 模式
  locale: "ZH", // 设置默认语言
  fallbackLocale: "ZH",
  messages,
});

export default i18n;
