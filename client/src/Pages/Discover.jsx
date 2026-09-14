import Products_UI from "../Components/layout/UI/ProductPages_UI/ProductsUI";
import { useSearchParams } from "react-router-dom";

export default function Discover() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  return (
    <>
      <div style={{ minHeight: "100%" }}>
        <Products_UI searchTerm={searchTerm} />
      </div>

      
    </>
  );
}
