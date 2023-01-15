import { Box } from "componets/Box/Box";
import { Modal } from "componets/Modal/Modal";
import React from "react"
import styled from "styled-components";


const Img = styled.img`
max-width: 100%;
cursor: pointer;
flex: 1 1 auto;
`

const ImgBig = styled.img`
min-width: 100%;
cursor: pointer;
`

export class ImageGalleryItem extends React.Component {
   state = {
      isShowModal: false
   };

   toggleShow = () => {
      this.setState(prevState => ({
         isShowModal: !prevState.isShowModal
      }));
   };

   render() {
      return (
         <Box display='flex' flexDirection='column' flex='1 1 auto'>
            <Img onClick={this.toggleShow} src={this.props.item.webformatURL} alt={this.props.item.tags} />
            {this.state.isShowModal && <Modal onClose={this.toggleShow}><ImgBig onClick={this.toggleShow} src={this.props.item.largeImageURL} alt={this.props.item.tags} /></Modal>}
         </Box>
      );
   };
};