import React, { Component } from "react";
import "./App.css";
import RecipeApi from "../apis/recipeApi";

import Form from "./Form";
import RecipeItem from "./RecipeItem";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const KEY = "e22becad84eff8d2545c337161ef063e";
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const responce = await RecipeApi.get("/search", {
      params: { key: KEY, q: recipeName, page: 2 }
    });

    this.setState({
      recipes: responce.data.recipes
    });

    // console.log(this.state.recipes);
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  componentDidMount = () => {
    const recipes = JSON.parse(localStorage.getItem("recipes"));

    this.setState({
      recipes
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <RecipeItem recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
