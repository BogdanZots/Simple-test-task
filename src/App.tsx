import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./config/config";
import AppBarPanel from "./components/AppBar/AppBarPanel";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppBarPanel />
        <Routes>
          {routes.map((route) => {
            return <Route path={route.patch} element={<route.component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
