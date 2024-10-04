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

        <section>
            <input type="text" className="border-2 rounded px-2 sm:mb-0"
            placeholder="Buscar producto"/>

            <div className="flex justify-center items-center">
            <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" placeholder="Max"/>
            <input type="text" className="border-2 mr-2 px-5 py-3 mb-3 w-full" placeholder="Min"/>
            </div>

        {/* Seccion de categorías */}

        <div>
            <h2 className="text-xl font-semibold">Categorías</h2>
        </div>


            <section>
            {categories.map((category, index) => (
            <label key={index} className="block mb-2">
                    <input type="radio" name="category" value={category} className="mr-2 w-[16px] h-[16px]" />
                {category.toUpperCase()}
            </label>
            ))}
            </section>

            {/* Sección de busqueda */}

            <div className="mb-5 mt-4">
                <h2 className="text-xl font-semibold mb-4">
                    
                </h2>
                <div>
                    {keywoards.map((keywoard, index) => (
                        <button key={index} className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200">
                            {keywoard.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>


            <button className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">Reiniciar filtros</button>



        </section>
    </div>
  )
}

