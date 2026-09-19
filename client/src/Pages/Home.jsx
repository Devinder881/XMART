import Carousel from "../Components/layout/Carousel/Carousel";
import Grid_UI from "../Components/layout/UI/Grid_UI/GridUI";
import Carousel_UI from "../Components/layout/UI/Carousel_UI/CarouselUI";
import HybridGrid_UI from "../Components/layout/UI/HybridGrid_UI/HybridGridUI";
import ProductRow_UI from "../Components/layout/UI/ProductRow_UI/ProductRowUI";
import { getHomepage } from "../Services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [homepageData, setHomepageData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchHomepage = async () => {
      try {
        const res = await getHomepage();
        setHomepageData(res.data.data);
      } catch (err) {
        console.error(`Error : ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchHomepage();
  }, []);

  return (
    <>
      <div className="main">
        <Carousel />
        <div>
          {loading ? (
            <div>loading...</div>
          ) : (
            <>
              <Grid_UI data={homepageData} order={1} type={"Grid"} />
              <Carousel_UI data={homepageData} order={1} type={"Carousel"} />
              <HybridGrid_UI
                data={homepageData}
                order={1}
                type={"hybridGrid"}
              />
              <ProductRow_UI
                data={homepageData}
                order={1}
                type={"productRow"}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
