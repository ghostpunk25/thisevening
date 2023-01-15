import { Box } from "componets/Box/Box";
import React from "react";
import styled from "styled-components";

const Input = styled.input`
border: ${p => p.theme.borders.normal};
`
const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.blue};
}
`
export class ModalContent extends React.Component {
   state = {
      title: '',
      link: '',
   };

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   handleSunmit = (e) => {
      e.preventDefault()

      this.props.onSubmit(this.state)

      this.setState({
         title: '',
         link: '',
      });
   };

   render() {
      return (
         <Box display="flex" flexDirection='column' gridGap='5' as='form' onSubmit={this.handleSunmit}>
            <label htmlFor="">Title:</label>
            <Input onChange={this.handleChange} required type="text" name="title" value={this.state.title} id="" />
            <label htmlFor="">Link:</label>
            <Input onChange={this.handleChange} required value={this.state.link} type="text" name="link" id="" />
            <Btn type="submit">Update</Btn>
            <Btn type="button" onClick={this.props.onUpdate}>Save</Btn>
            <Btn type="button" onClick={this.props.toggleModal}>Close</Btn>
         </Box >
      );
   };
};