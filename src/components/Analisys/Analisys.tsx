import React, { useState, useEffect } from "react";

import AnalisysList from "./AnalisysList/AnalisysList";
import AnalisysSearch from "./AnalisysSearch/AnalisysSearch";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

import { findMaxElement } from "../../helpers/findMaxElement";
import { findDeepestTag } from "../../helpers/findDeepestTag";

import {
  IMostUsedTag,
  allDomTags,
  IDeepestTag,
} from "../../types/types";
import styled from "@emotion/styled";

interface IDomStructureInfo {
  mostUsedTag: IMostUsedTag;
  allDomTags: allDomTags;
  deepestTagPath: IDeepestTag;
}

interface ITagsAnalized {
  [key: string]: number;
}

const StyledContainer = styled(Box)`
  margin-top: 15px;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  font-size: 40px;
`;

export default function Analisys() {
  const [dom, setDom] = useState(null);
  const [dataFromDom, setDataFromDom] = useState<IDomStructureInfo>({
    mostUsedTag: { tag: "", amount: 0 },
    allDomTags: [],
    deepestTagPath: [],
  });

  const { mostUsedTag, deepestTagPath, allDomTags } = dataFromDom;

  const handleDomUpdate = (value: string) => {
    setDom(value);
  };

  useEffect(() => {
    if (dom) {
      const domElements: Array<HTMLElement> = Array.from(
        dom.querySelectorAll("*")
      );
      const domStructureTags: Array<string> = domElements.map(
        (item) => item.localName
      );
      const domStructureAnalized = domStructureTags.reduce(
        (acc: ITagsAnalized, item, index) => {
          if (acc.hasOwnProperty(item)) {
            return { ...acc, [item]: acc[item] + 1 };
          }
          return { ...acc, [item]: 1 };
        },
        {}
      );
      setDataFromDom({
        mostUsedTag: findMaxElement(Object.entries(domStructureAnalized)),
        allDomTags: Object.keys(domStructureAnalized),
        deepestTagPath: findDeepestTag(domElements),
      });
    }
  }, [dom]);

  return (
    <StyledContainer>
      <Typography variant="h3">Analisys</Typography>
      <AnalisysSearch onDomUpdate={handleDomUpdate} />
      <Typography variant="h3">
        Most commonly used tag - {mostUsedTag.tag}{" "}
      </Typography>
      <AnalisysList title="List of unique tags" elements={allDomTags} />
      <AnalisysList title="Longest elements path" elements={deepestTagPath} />
    </StyledContainer>
  );
}
