import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./assets/local/common/en.json";
import common_ar from "./assets/local/common/ar.json";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lang") || "en", // default language
  resources: {
    en: {
      common: common_en,
    },
    ar: {
      common: common_ar,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
