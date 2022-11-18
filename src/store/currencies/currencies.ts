import { createSlice } from "@reduxjs/toolkit";
import { CoinsType } from "../../types/types";
import { getCurrencies } from "./thunkActions";

interface IState {
  loading: boolean;
  error: string;
  currencies: CoinsType;
  lastTimeUpdated: string;
  chartName: string;
}

const initialState: IState = {
  loading: false,
  error: "",
  currencies: [],
  lastTimeUpdated: null,
  chartName: "",
};

export const currenciesSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      const { bpi, chartName, time } = action.payload;
      state.currencies = Object.values(bpi);
      state.chartName = chartName;
      state.lastTimeUpdated = time.updated;
      state.loading = false;
    });
  },
});

export default currenciesSlice.reducer;
