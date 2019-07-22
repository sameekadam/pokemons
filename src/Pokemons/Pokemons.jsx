import "./Pokemons.css";
import React from "react";
import PokemonImage from "../PokemonImage/PokemonImage";


function template() {
  return (
    <div className="App">
      { this.state.pokemons.map((poke, index) => {
        if ( (index + 1) <= (this.state.currentPage * 3) &&  (index + 1) > ((this.state.currentPage - 1) * 3)) {
          return <PokemonImage key={poke.id} pokemon={poke} />;
        }
        return null
      }) }
      <div className="poke-btn">
      <div className="row m-4">
        <button
          className='prev btn'
          onClick={() => this.handleChange(this.state.currentId - 3, this.state.currentPage - 1 )}
          disabled={this.state.disablePrev}
          >Prev</button>
      </div>
      <h5 className="page-no">Page Number: {this.state.currentPage}</h5>
      <div className="row m-4">
        <button
          className='prev btn'
          onClick={() => this.handleChange(this.state.currentId + 3, this.state.currentPage + 1 )}
          disabled={this.state.disableNext}
          >Next</button>
      </div>
      </div>
    </div>
  );

};

export default template;
