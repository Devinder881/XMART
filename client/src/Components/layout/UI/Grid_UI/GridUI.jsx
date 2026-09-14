import "./style.css";

export default function Grid_UI({ data, order, type }) {
  const section = data.find((obj) => {
    return obj.order === order && obj.type === type;
  });

  if (!section) return null;

  const gridCard = section.objects;

  return (
    <>
      <div className="root-grid">
        {gridCard.map((card, i) => (
          <div className="box" key={i}> 
            <h1 className="title">{card.title}</h1>
            <div className="imagesContainer">
              {card.tiles.map((image, index) => (
                <div
                  key={index}
                  className="img"
                  style={{ backgroundImage: `url(${image.url})` }}
                ></div>
              ))}
            </div>
            <div
              className="redirectLink"
              onClick={() => window.open(card.directURL, "_blank")}
            >
              See more
            </div>
          </div>
        ))}
      </div>
      {/* mapping of homepagedata comes here  */}
    </>
  );
}
