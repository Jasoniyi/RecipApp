import React, { Component } from "react";
import RecipeApi from "../apis/recipeApi";

import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const KEY = "e22becad84eff8d2545c337161ef063e";
    const title = this.props.location.state.recipe;

    const req = await RecipeApi.get("/search", {
      params: { key: KEY, q: title }
    });

    console.log(req.data.recipes[0]);

    this.setState({
      activeRecipe: req.data.recipes[0]
    });
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 ? (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher:<span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href="{recipe.publisher_url}">{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        ) : (
          <div className="loading spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
