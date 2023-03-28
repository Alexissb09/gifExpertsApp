import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs.js";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category)
      .then((res) =>
        setImages({
          data: res,
          loading: false,
        })
      )
      .catch((error) => console.log(error));
  }, [category]);

  return images;
};
