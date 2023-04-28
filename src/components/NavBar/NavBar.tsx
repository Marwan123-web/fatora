import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const { t, i18n } = useTranslation("common");

  const changeLangFun = () => {
    localStorage.setItem("lang", i18n.language === "en" ? "ar" : "en");
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const navs = [
    {
      id: "Create Invoice",
      name: "navbar.createInvoice",
      url: "/",
    },
    {
      id: "Invoices",
      name: "navbar.invoices",
      url: "/invoices",
    },
  ];
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="text-gray-700 italic text-7xl">
          FATORA
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col gap-5 items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navs?.map((nav: any) => (
              <li key={nav.id}>
                <NavLink to={nav?.url}>{t(nav?.name)}</NavLink>
              </li>
            ))}
            <li
              onClick={() => changeLangFun()}
              className={"flag " + (i18n.language === "en" ? "ar" : "en")}
            ></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
