import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
const ChatSearch = (props: any) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event: any) => {
    setQuery(event.target.value);
    
    // handleSearch();  
  };

  const handleSearch = () => {
    props?.onSearch(query);
  };

  return (
    <InputGroup className={props.style?.className}>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        // borderImage="linear-gradient(to right, #ff8a00, #e52e71) 1"
      />
    </InputGroup>
  );
};

export default ChatSearch;