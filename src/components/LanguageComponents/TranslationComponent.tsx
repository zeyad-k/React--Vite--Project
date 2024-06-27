import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import React, { ReactNode } from "react";

import global_en from "../../translation/en/global.json";
import global_ar from "../../translation/ar/global.json";

interface TranslationComponentProps {
  children: ReactNode;
}

const TranslationComponent: React.FC<TranslationComponentProps> = (props) => {
  const { children } = props;
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        global: global_en,
      },
      ar: {
        global: global_ar,
      },
    },
  });

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

export default TranslationComponent;
