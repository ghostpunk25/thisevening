import React from "react";
import { Modal } from "componets/Modal/Modal";
import { ModalContent } from "../ModalContent/ModalContent";
import styled from "styled-components";
import { Box } from "componets/Box/Box";

const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.blue};
}
`

export class Material extends React.Component {
   state = {
      title: '',
      link: '',
      showModal: false,
   };

   toggleModal = () => {
      this.setState(prevState => ({
         showModal: !prevState.showModal,
      }));
   };

   modalData = (data) => {

      this.setState({
         title: data.title,
         link: data.link
      });
   };

   render() {
      return (
         <Box display="flex" flexDirection='column' gridGap='5' fontSize='4' alignItems='center'>
            <p>Title: {this.props.item.title}</p>
            <p>Link: {this.props.item.link}</p>
            <Btn type="button" onClick={() => this.props.onDelete(this.props.item.id)}>Delete</Btn>
            <Btn type="button" onClick={this.toggleModal}>Update</Btn>
            {this.state.showModal && <Modal>
               <ModalContent onSubmit={this.modalData}
                  toggleModal={this.toggleModal} onUpdate={() =>
                     this.props.onUpdate({ id: this.props.item.id, title: this.state.title, link: this.state.link, })} />
            </Modal>}
         </Box>
      );
   };
};