import React, { useContext, useState } from "react";

type SearchContext = {
  company: string;
  location: string;
  listingId: string;
  saveSearchValues: (company: string, location: string) => void;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [company, setCompany] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [listingId, setListingId] = useState<string>("");

  const saveSearchValues = (
    company: string,
    location: string,
    listingId?: string
  ) => {
    setCompany(company);
    setLocation(location);
    if (listingId) {
      setListingId(listingId);
    }
  };

  return (
    <SearchContext.Provider
      value={{ company, location, listingId, saveSearchValues }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context as SearchContext;
};
