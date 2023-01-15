import { Box } from "componets/Box/Box";
import React from "react";
import { Label, Input, Btn } from './Form.styled'


export class Form extends React.Component {
   state = {
      name: '',
      email: '',
      experience: 'junior',
   };

   handleIndutChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   submitForm = (e) => {
      e.preventDefault()

      this.props.onSubmit(this.state)

      this.reset()
   };

   reset = () => {
      this.setState({
         name: '',
         email: '',
      });
   };

   render() {
      return (
         <Box onSubmit={this.submitForm} as='form' display='flex' flexDirection='column' alignItems='center' gridGap='6' fontSize='4' mb='8'>
            <Box display='flex' flexDirection='column' alignItems='center' gridGap='5'>
               <Label htmlFor="c_1">Name
                  <Input onChange={this.handleIndutChange} type="text" name="name" value={this.state.value} id="c_1" />
               </Label>
               <Label htmlFor="c_2">Email
                  <Input type="text" name="email" onChange={this.handleIndutChange} value={this.state.value} id="c_2" />
               </Label>
            </Box>
            <Box display='flex' gridGap='6'>
               <Label htmlFor="b_1">Junior
                  <input checked={this.state.experience === 'junior'} onChange={this.handleIndutChange} type="radio" value='junior' name="experience" id="b_1" />
               </Label>
               <Label htmlFor="b_2">Middle
                  <input checked={this.state.experience === 'middle'} onChange={this.handleIndutChange} type="radio" value='middle' name="experience" id="b_2" />
               </Label>
               <Label htmlFor="b_3">Senior
                  <input checked={this.state.experience === 'senior'} onChange={this.handleIndutChange} type="radio" value='senior' name="experience" id="b_3" />
               </Label>
            </Box>
            <Btn type="submit">Submit</Btn>
         </Box>
      );
   };
};