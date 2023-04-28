import "./App.scss";
import { useTranslation } from "react-i18next";
import useFetch from "./hooks/useFetch";
import Invoice from "./components/invoice/Invoice";
import { Routes, Route } from "react-router-dom";
import InvoiceInfo from "./components/invoices/InvoiceInfo";
import Invoices from "./components/invoices/Invoices";
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
        <Routes>
          <Route path="/" element={<Invoice />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoices/:id" element={<InvoiceInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
