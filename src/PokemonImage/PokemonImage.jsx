import "./PokemonImage.css";
import React from "react";

function template() {
  return (
    <div>
      <img src={this.props.pokemon.img} alt={this.props.pokemon.pokemon.name}/>
      <div className="pokemon-details">
      <div>id: {this.props.pokemon.id}</div>
      <div className="pokemon-name">Name: {this.props.pokemon.pokemon.name}</div>
      </div>
      </div>
  );
};

export default template;
