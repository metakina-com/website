import { createI18n } from 'vue-i18n';

// 导入翻译文件
import en from './locales/en.json';
import zh from './locales/zh.json';

const messages = {
  en,
  zh,
};

const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  messages,
});

export default i18n;
