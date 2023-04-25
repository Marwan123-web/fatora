import logo from "./logo.svg";
import "./App.scss";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation("common");
  return <div className="App">{t("hello") + " " + i18n.language}</div>;
}

export default App;
