import React from "react";
import styled from "styled-components";


const Div = styled.div`
font-size: ${p => p.theme.fontSize.l};
margin-bottom: ${p => `${p.theme.space[6]}px`};
`

export class PokemonApi extends React.Component {
   state = {
      pokemon: null,
      err: null,
      status: 'idle',
   };

   async componentDidUpdate(prevProps) {
      if (prevProps.pokemonName !== this.props.pokemonName) {
         this.setState({ status: 'pending' });
         try {
            const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)).json();
            const pokemon = await response;
            this.setState({
               pokemon,
               status: 'resolved'
            })
         } catch (err) {
            if (err) {
               this.setState({
                  err: `Нема покемону з назвою ${this.props.pokemonName}`,
                  status: 'rejected'
               })
            }
         };
      };
   };

   render() {
      if (this.state.status === 'idle') {
         return <Div>Введіть ім'я покемона</Div>
      };
      if (this.state.status === 'pending') {
         return <Div>Завантаження...</Div>
      };
      if (this.state.status === 'rejected') {
         return <Div>{this.state.err}</Div>
      };
      if (this.state.status === 'resolved') {
         return (
            <Div>
               <p>Name: {this.state.pokemon.name}</p>
               <img src={this.state.pokemon.sprites.other['official-artwork'].front_default}
                  alt={this.state.pokemon.name}
                  width="240" />
            </Div>
         );
      };
   };
};