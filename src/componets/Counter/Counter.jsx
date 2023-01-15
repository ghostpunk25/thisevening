import { Box } from "componets/Box/Box";
import React from "react";
import { Span, Btn } from "./Counter.styled";


export class Counter extends React.Component {
   state = {
      value: 0,
   };

   onDicriment = () => {
      this.setState(prevState => {
         return {
            value: prevState.value + 1,
         };
      });
   };

   onIncriment = () => {
      this.setState(prevState => {
         if (prevState.value > 0) {
            return {
               value: prevState.value - 1,
            };
         };
      });
   };

   render() {
      return (
         <Box display='flex' flexDirection='column' alignItems='center' fontSize='6' border='normal' p='6' mb='8'>
            <Span>{this.state.value}</Span>
            <Box display='flex' flexWrap='wrap' gridGap='8' color='white' justifyContent='center'>
               <Btn onClick={this.onDicriment}>Збільшити</Btn>
               <Btn onClick={this.onIncriment}>Зменшити</Btn>
            </Box>
         </Box>
      );
   };
};