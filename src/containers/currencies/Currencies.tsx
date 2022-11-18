import React from "react";

import Currency from "../../components/Currency/Currency";

import { useAppDispatch } from "../../hooks/useAppDIspatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTimeInterval } from "../../hooks/useTimeInterval";

import { getCurrencies } from "../../store/currencies/thunkActions";
import { RootState } from "../../store/store";

import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledErrorTitle = styled.div``;

export default function CurrenciesContainer() {
  const { currencies, chartName, lastTimeUpdated, error } = useAppSelector(
    (state: RootState) => state.currency
  );
  const dispatch = useAppDispatch();
  const intervalTime = 5000;
  const getData = () => {
    dispatch(getCurrencies());
  };
  useTimeInterval(getData, intervalTime);

  return (
    <StyledContainer>
      {error ? (
        <StyledErrorTitle>Unnown error is occured </StyledErrorTitle>
      ) : (
        <Currency
          lastTimeUpdated={lastTimeUpdated}
          charName={chartName}
          currencies={currencies}
        ></Currency>
      )}
    </StyledContainer>
  );
}
