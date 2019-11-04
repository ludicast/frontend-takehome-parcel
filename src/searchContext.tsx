import React, { useState } from 'react';

const defaultSearchContext = {query: "", setQuery: (str: string) => {}};
const SearchContext = React.createContext(defaultSearchContext);

const SearchProvider = (props: any) => {
 
  const [query, setQuery] = useState("");

  const searchObj = {query, setQuery};

  return (
    <SearchContext.Provider value={searchObj}>
      {props.children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };