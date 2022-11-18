import React from "react";

import Typography from "@mui/material/Typography/Typography";

import styled from "styled-components";

interface IAnalisysListProps {
  elements?: string[];
  title?: string;
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledListItem = styled.li`
  margin-right: 15px;
  font-weight: 700;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  font-size: 32px;
  margin-top: 15px;
`;

export default function AnalisysList({ elements, title }: IAnalisysListProps) {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {elements?.map((item, i) => (
          <StyledListItem key={item + String(i)}>{item}</StyledListItem>
        ))}
      </StyledList>
    </>
  );
}
