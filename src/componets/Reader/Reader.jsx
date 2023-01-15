import { Box } from "componets/Box/Box";
import React from "react";
import styled from "styled-components";


const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.red};
}
`
const Span = styled.span`
font-size: ${p => p.theme.fontSize.l};
`

const Title = styled.h2`
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
`

export class Reader extends React.Component {
   state = {
      index: 0,
   };

   prevClick = () => {
      if (this.state.index > 0) {
         this.setState(prevState => ({
            index: prevState.index - 1,
         }));
      };
   };

   nextClick = () => {
      if (this.state.index < this.props.items.length - 1) {
         this.setState(prevState => ({
            index: prevState.index + 1,
         }));
      };
   };

   render() {

      const activePublication = this.props.items[this.state.index];

      return (
         <Box mb='6'>
            <Box as='section' display='flex' gridGap='4' mb='5'>
               <Btn onClick={this.prevClick} type="button">Назад</Btn>
               <Btn onClick={this.nextClick} type="button">Вперед</Btn>
            </Box>
            <Span>{this.state.index + 1}/{this.props.items.length}</Span>
            <Box fontSize='4' as='article' flexDirection='column' display='flex' gridGap='6' mt='5'>
               <Title>{activePublication.title}</Title>
               <p>{activePublication.text}</p>
            </Box>
         </Box>
      );
   };
};