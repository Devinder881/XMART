import { useState, useEffect } from "react";
import { getProducts } from "./api";

const useProductsData = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProductsData(response.data.data);
            
                
            } catch (err) {
                console.error(`Error ${err.message}`);

            } finally {
                setLoading(false)
            }
        }
        fetchProducts();

    }, [])

    return { productsData, loading };
};

export default useProductsData;