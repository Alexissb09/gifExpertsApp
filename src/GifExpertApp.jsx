import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifList } from "./components/GifList";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifList key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
