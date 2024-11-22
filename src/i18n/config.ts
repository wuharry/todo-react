import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  "zh-TW": {
    translation: {
      todoList: "待辦事項",
      progress: "進度",
      inputPlaceholder: "輸入任務...",
      addTask: "新增任務",
      delete: "刪除",
      settings: "設定",
      loading: "載入中...",
      completed: "已完成",
      menu: "選單",
      language: "語言",
      theme: "主題",
      error: {
        required: "此欄位為必填",
      },
    },
  },
  en: {
    translation: {
      todoList: "Todo List",
      progress: "Progress",
      inputPlaceholder: "Enter task...",
      addTask: "Add Task",
      delete: "Delete",
      settings: "Settings",
      loading: "Loading...",
      completed: "Completed",
      menu: "Menu",
      language: "Language",
      theme: "Theme",
      error: {
        required: "This field is required",
      },
    },
  },
  ja: {
    translation: {
      todoList: "タスクリスト",
      progress: "進捗",
      inputPlaceholder: "タスクを入力...",
      addTask: "追加",
      delete: "削除",
      settings: "設定",
      loading: "読み込み中...",
      completed: "完了",
      menu: "メニュー",
      language: "言語",
      theme: "テーマ",
      error: {
        required: "この項目は必須です",
      },
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "zh-TW",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
