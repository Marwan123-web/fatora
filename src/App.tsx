import "./App.scss";
import { useTranslation } from "react-i18next";
import useFetch from "./hooks/useFetch";
import Invoice from "./components/invoice/Invoice";
function App() {
  const { data, loading, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });

  const { t, i18n } = useTranslation("common");
  if (error) {
    console.log(error);
  }
  return (
    <div
      className="min-h-screen bg-gray-100"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <div className="mx-auto max-w-7xl">
        <Invoice />
      </div>
    </div>
  );
}

export default App;
