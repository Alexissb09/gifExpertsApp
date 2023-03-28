import PropType from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifList = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <div className="card-grid">
        <h3>{category}</h3>

        {loading && <p>Loading...</p>}

        {images.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

GifList.propType = {
  category: PropType.string.isRequired,
};
