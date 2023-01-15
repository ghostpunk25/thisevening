import { Box } from "componets/Box/Box";
import React from "react"
import { createPortal } from "react-dom";
import styled from "styled-components";

const Div = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: ${p => p.theme.colors.white};
padding: ${p => `${p.theme.space[6]}px`};
min-height: 350px;
max-width: 90%;
display: flex;
flex-direction: column;
gap: ${p => `${p.theme.space[6]}px`};
overflow: hidden;
`

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
   componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
   };

   componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
   };

   handleKeyDown = (e) => {
      if (e.key === 'Escape') {
         this.props.onClose()
      };
   };

   render() {
      return createPortal(
         <Box width='100vw' display='flex' height='100vh' position='fixed' top='0' left='0' background='rgba(0,0,0,0.5)'>
            <Div>{this.props.children}</Div>
         </Box>, modalRoot
      );
   };
};