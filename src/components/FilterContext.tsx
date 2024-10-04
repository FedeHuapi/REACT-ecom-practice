import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
    searchQuery: string,
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    minPrice: number | undefined;
    setMinPrice: (price: number | undefined) => void;
    maxPrice : number | undefined;
    setMaxPrice: (price: number | undefined) => void;
    keywoard: string;
    setKeyword: (keyword: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [minPrice, setMinPrice] = useState<string | undefined>(undefined)
    const [maxPrice, setMaxPrice] = useState<string | undefined>(undefined)
    const [keyword, setKeyword] = useState<string>("")

    return (
        <FilterContext.Provider value={{ 
            searchQuery,
            setSearchQuery,
            selectedCategory,
            setSelectedCategory,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice,
            keyword,
            setKeyword,
        }}>
            {children}
        </FilterContext.Provider>
    );
};


export const useFilter = () => {
    const context = useContext(FilterContext) 
    
    if (context === undefined) {
        throw new Error("La función debe ser usada dentro de FilterProvider")
    }

    return context;
}