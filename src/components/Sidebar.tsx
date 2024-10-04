import { useState, useEffect } from "react"


interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[];
}

export const Sidebar = () => {

    const [categories, setCategories] = useState<string[]>([]);
    const [keywoards] = useState<string[]>([
        "apple",
        "watch",
        "fashion",
        "trend",
        "shoes",
        "shirt",
    ]);
    
    useEffect(() => {
      const fetchCategories = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data: FetchResponse = await response.json();
            const categoriaUnica = Array.from(new Set(data.products.map((product) => product.category)))
            setCategories(categoriaUnica);
            
        } catch (error) {
            console.log("Error en el fetch de datos", error);
            
        }
      }

      fetchCategories();

    }, [])

  return (
    <div className="w-64 p-5 h-screen">
        <h1 className="text-2xl font-bold mb-10 mt-4">
            Tienda React
        </h1>
    </div>
  )
}

