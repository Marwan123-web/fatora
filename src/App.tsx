import "./App.scss";
import { useTranslation } from "react-i18next";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });

  const { t, i18n } = useTranslation("common");
  if (error) {
    console.log(error);
  }
  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {data && data?.id + "" + t("hello") + " " + i18n.language}
    </div>
  );
}

export default App;
