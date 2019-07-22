import React from "react";
import template from "./Pokemons.jsx";

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1,
      currentPage: 1,
      pokemons: [],
      disablePrev: true,
      disableNext: false
    };
  }
  render() {
    return template.call(this);
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/type/3/")
      .then(results => {
        console.log("results", results);
        return results.json();
      })
      .then(data => {
        console.log("data", data);
        data.pokemon.forEach((element, index) => {
          element.id = index + 1;
          element.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${
            element.id
          }.png`;
        });
        this.setState({ pokemons: data.pokemon });
        console.log("this.state", this.state.pokemons);
      });
  }
  handleChange(currentId, currentPage) {
    // console.log('currentId', currentId);
    // console.log('currentPage', currentPage);
    this.setState({ currentId });
    this.setState({ currentPage });
    this.setState({ disablePrev: currentId <= 1 });
    // console.log(currentId, (currentPage * 3));
    this.setState({
      disableNext: this.state.pokemons.length < currentPage * 3
    });
  }
}
export default Pokemons;
