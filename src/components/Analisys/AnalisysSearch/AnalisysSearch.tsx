import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import { Input, Button } from "@mui/material";

import { domParser } from "../../../helpers/parseDom";
import { URL_REGEX } from "../../../config/config";

interface IAnalisysSearchProps {
  onDomUpdate?: React.SetStateAction<any>;
}

export default function AnalisysSearch({ onDomUpdate }: IAnalisysSearchProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const handleDomSearch = () => {
    const result = domParser(inputValue);
    onDomUpdate(result);
    setInputValue("");
  };

  const isValidUrl = URL_REGEX.test(inputValue);

  return (
    <>
      <Input
        placeholder="Put link in input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button disabled={!isValidUrl} onClick={handleDomSearch}>
        Analisys
      </Button>
    </>
  );
}
