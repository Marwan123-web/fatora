import "./App.scss";
import { useTranslation } from "react-i18next";
import Invoice from "./components/invoice/Invoice";
import { Routes, Route } from "react-router-dom";
import InvoiceInfo from "./components/invoices/InvoiceInfo";
import Invoices from "./components/invoices/Invoices";
import NavBar from "./components/NavBar/NavBar";
function App() {
  const { t, i18n } = useTranslation("common");
  return (
    <div
      className="min-h-screen bg-gray-100"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <NavBar />
      <main className="pt-5">
        <div className="mx-auto max-w-7xl">
          <Routes>
            <Route path="/" element={<Invoice />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/:id" element={<InvoiceInfo />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
