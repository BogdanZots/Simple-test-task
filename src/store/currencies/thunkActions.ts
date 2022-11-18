import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { ICurrencyApi } from "../../types/types";
import { currenciesURL } from "../../config/config";

export const getCurrencies = createAsyncThunk<ICurrencyApi>(
  currenciesURL,
  async () => {
    const response = await fetch(currenciesURL);
    const data = response.json();
    return data;
  }
);
