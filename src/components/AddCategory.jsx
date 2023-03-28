import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [category, setCategory] = useState(null);

  const handleInput = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // El callback de la funcion setCategories obtiene el estado anterior, por eso no lo llamamos desde props

    if (category.trim().length > 2) {
      setCategories((cats) => [category, ...cats]);
      e.target.addCategoryInput.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addCategoryInput">
        <h2>Add category</h2>
      </label>
      <input
        type="text"
        name="addCategoryInput"
        id="addCategoryInput"
        placeholder="Add a category"
        onChange={handleInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
