import React    from "react";
import template from "./PokemonImage.jsx";

class PokemonImage extends React.Component {
  constructor(props) {
    super(props);
    console.log('aaaaaaa', props);
  }
  render() {
    return template.call(this);
  }

  // componentDidMount() {
  //   fetch(this.props.pokemon.pokemon.url).then(results => {
  //     console.log('Imageresults', results);
  //     return results.json();
  //   }).then(data => {
  //     console.log('Imagedata', data);
  //     // data.pokemon.forEach((element, index) => {
  //     //   element.id = index + 1;
  //     // });
  //     // this.setState({pokemons: data.pokemon});
  //     // console.log('this.state', this.state.pokemons);
  //   });
  // }

}

export default PokemonImage;
