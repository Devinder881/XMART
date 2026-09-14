import { useState, useEffect } from "react";
import { getHomepage } from './api'


const useHomePageData = () => {
    const [homepageData, setHomepageData] = useState([]);

    useEffect(() => {
        const fetchHomepage = async () => {
            try {
                const response = await getHomepage();
                setHomepageData(response.data.data);
            } catch (err) {
                console.error(`Error:${err.message}`);
            } 
        };

        fetchHomepage();
    }, [])


    return { homepageData };
}


export default useHomePageData;