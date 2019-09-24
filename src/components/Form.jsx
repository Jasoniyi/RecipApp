import React from "react";

const Form = ({ getRecipe }) => {
  return (
    <form onSubmit={getRecipe} style={{ marginBottom: "2em" }}>
      <input
        type="name"
        className="form__input"
        placeholder="Input food ..."
        name="recipeName"
      />
      <button className="form__button">Search</button>
    </form>
  );
};

export default Form;
