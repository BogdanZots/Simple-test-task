import Home from "../components/Home/Home";
import Analisys from "../components/Analisys/Analisys";
import CurrenciesContainer from "../containers/currencies/Currencies";

export const patches = {
  home: "/home",
  currency: "/currency",
  analisys: "/analisys",
};

export const routes = [
  {
    patch: patches.home,
    component: Home,
  },
  {
    patch: patches.analisys,
    component: Analisys,
  },
  {
    patch: patches.currency,
    component: CurrenciesContainer,
  },
  {
    patch: "*",
    component: Home,
  },
];

export const currenciesURL =
  "https://api.coindesk.com/v1/bpi/currentprice.json";

export const URL_REGEX = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
