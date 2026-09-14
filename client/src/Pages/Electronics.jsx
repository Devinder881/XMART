import Products_UI from "../Components/layout/UI/ProductPages_UI/ProductsUI";

export default function Electronics({ defaultCategory = "Electronics" }) {
  return (
    <>
      <div style={{ minHeight: "100%" }}>
        <Products_UI pageCategory={defaultCategory} />
      </div>
    </>
  );
}
