import Carousel from "../Components/layout/Carousel/Carousel";
import Grid_UI from "../Components/layout/UI/Grid_UI/GridUI";
import Carousel_UI from "../Components/layout/UI/Carousel_UI/CarouselUI";
import HybridGrid_UI from "../Components/layout/UI/HybridGrid_UI/HybridGridUI";
import ProductRow_UI from "../Components/layout/UI/ProductRow_UI/ProductRowUI";
import useHomePageData from "../Services/homePageDataRequest";

export default function Home() {
  const { homepageData } = useHomePageData();

  return (
    <>
      <div className="main">
        <Carousel />
        <Grid_UI data={homepageData} order={1} type={"Grid"} />
        <Carousel_UI data={homepageData} order={1} type={"Carousel"} />
        <HybridGrid_UI data={homepageData} order={1} type={"hybridGrid"} />
        <ProductRow_UI data={homepageData} order={1} type={"productRow"} />
      </div>
    </>
  );
}
