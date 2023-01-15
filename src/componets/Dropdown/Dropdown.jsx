import { Box } from "componets/Box/Box";
import React from "react";
import styled from "styled-components";


const Menu = styled.div`
padding: ${p => `${p.theme.space[6]}px`};
background: ${p => p.theme.colors.green};
color: ${p => p.theme.colors.white};
text-align: center;
position: absolute;
bottom: -120px;
left: 0;
width: 100%
`

const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.yellow};
border: ${p => p.theme.borders.normal};
:hover{
   background: ${p => p.theme.colors.blue}; 
   color: ${p => p.theme.colors.white};
}
`

export class Dropdown extends React.Component {
   state = {
      visible: false
   };

   toggle = () => {
      this.setState((prevState) => ({
         visible: !prevState.visible,
      }));
   };

   render() {
      return (
         <Box display='flex' flexDirection='column' gridGap='6' fontSize="6" border="normal" position='relative' mb='8'>
            <Btn onClick={this.toggle}>{this.state.visible ? 'Close' : 'Show'}</Btn>
            {this.state.visible && <Menu>Dropdown</Menu>}
         </Box>
      );
   };
};