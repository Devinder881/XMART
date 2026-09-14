import "./style.css";


export default function HybridGrid_UI({ data, order, type }) {
  const response = data.find((obj) => obj.order === order && obj.type === type);
  if (!response) return null;

  const res = response.objects; 

  return (
    <div className="hybrid-root">
      {res.map((object, i) => {
        const isSingleTile = object.tiles.length < 2;

        return isSingleTile ? (
          <div className="card" key={i}>
            <div className="card-title" title={object.title}>
              {object.title}
            </div>
            <div className="cardImage-conatiner">
              <div
                className="card-image"
                style={{ backgroundImage: `url('${object.tiles[0].url}')` }}
              ></div>
            </div>
            <div
              className="card-url"
              onClick={() => window.open(object.directURL, "_blank")}
            >
              See more
            </div>
          </div>
        ) : (
          <div className="gridcard" key={i}>
            <h1 className="gridcard-title" title={object.title}>
              {object.title}
            </h1>
            <div className="gridcard-images">
              {object.tiles.map((tile, index) => (
                <div
                  key={index}
                  className="gridcard-image"
                  style={{ backgroundImage: `url('${tile.url}')` }}
                ></div>
              ))}
            </div>
            <div
              className="gridcard-url"
              onClick={() => window.open(object.directURL, "_blank")}
            >
              See more
            </div>
          </div>
        );
      })}
    </div>
  );
}
