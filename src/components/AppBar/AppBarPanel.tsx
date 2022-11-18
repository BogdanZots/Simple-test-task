import * as React from "react";
import { Link } from "react-router-dom";

import { Box, AppBar, Toolbar } from "@mui/material";

import { patches } from "../../config/config";

import styled from "styled-components";

const AppBarPanelContainer = styled(Box)``;

const StyledLink = styled(Link)`
  margin: 15px;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #77b6f373;
  position: static;
`;

const StyledToolbar = styled(Toolbar)`
display: flex,
justify-content: flex-start,
border-bottom: 1px solid black,
`;

function AppBarPanel() {
  return (
    <AppBarPanelContainer>
      <StyledAppBar>
        <StyledToolbar>
          <StyledLink to={patches.home}>Home</StyledLink>
          <StyledLink to={patches.currency}>Currency</StyledLink>
          <StyledLink to={patches.analisys}>Analisys</StyledLink>
        </StyledToolbar>
      </StyledAppBar>
    </AppBarPanelContainer>
  );
}

export default AppBarPanel;
