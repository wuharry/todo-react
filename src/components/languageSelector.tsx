import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@nextui-org/react";

const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { key: "zh-TW", name: "繁體中文" },
    { key: "en", name: "English" },
    { key: "ja", name: "日本語" },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("preferredLanguage", langCode);
  };

  return (
    <div className="flex gap-2">
      {languages.map((language) => (
        <Button
          key={language.key}
          size="sm"
          variant={i18n.language === language.key ? "solid" : "bordered"}
          className={
            i18n.language === language.key
              ? "bg-white text-[#0071FF] min-w-0 px-2"
              : "text-white border-white hover:bg-white/20 min-w-0 px-2"
          }
          onClick={() => changeLanguage(language.key)}
        >
          {language.name}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelector;
