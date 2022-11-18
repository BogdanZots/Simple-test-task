import React from "react";

import Table from "../common/Table/Table";

import { Typography, Box } from "@mui/material";

import { CoinsType } from "../../types/types";

import styled from "styled-components";

interface ICurrencyProps {
  lastTimeUpdated?: string;
  charName: string;
  currencies: CoinsType;
}

const getTableRows = () => {
  return [
    {
      title: "Code",
    },
    {
      title: "Rate",
    },
    {
      title: "Description",
    },
    {
      title: "Rate Float",
    },
  ];
};

const StyledCurrencyContainer = styled(Box)``;

export default function Currency({
  lastTimeUpdated,
  charName,
  currencies,
}: ICurrencyProps) {
  return (
    <StyledCurrencyContainer>
      <Typography variant="h2">Currencies</Typography>
      <Typography variant="h6">
        Last time updated : {lastTimeUpdated}
      </Typography>
      <Typography variant="h6">Char Name : {charName}</Typography>
      <Table tableRows={getTableRows()} tableColumns={currencies} />
    </StyledCurrencyContainer>
  );
}
