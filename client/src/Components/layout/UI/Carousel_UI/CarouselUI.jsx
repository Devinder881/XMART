import "./style.css";
import CarouselRow from "../../../CustomHooks/carouselRowMechanics";

export default function Carousel_UI({ data, order, type }) {
  const section = data.find((obj) => obj.order === order && obj.type === type);
  if (!section) return null;

  const carouselObject = section.objects;

  return (
    <div className="root-carousel">
      {carouselObject.map((carousel, i) => (
        <CarouselRow carousel={carousel} key={i} />
      ))}
    </div>
  );
}
