import { Box } from "componets/Box/Box";
import React from "react";
import styled from "styled-components";
import { ContactsList } from "./ContactsList/ContactsList";
import { nanoid } from 'nanoid'

const TitleH1 = styled.h1`
font-size: ${p => p.theme.fontSize.xl};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => `${p.theme.space[6]}px`};
`
const TitleH2 = styled.h2`
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => `${p.theme.space[6]}px`};
`
const Form = styled.form`
margin-bottom: ${p => `${p.theme.space[6]}px`};
border: ${p => p.theme.borders.normal};
padding: ${p => `${p.theme.space[6]}px`};
max-width: 500px;
`
const Label = styled.label`
display: flex;
flex-direction: column;
gap: ${p => `${p.theme.space[4]}px`};
font-size: ${p => p.theme.fontSize.l};
`
const Input = styled.input`
margin-bottom: ${p => `${p.theme.space[6]}px`};
padding: ${p => `${p.theme.space[4]}px`};
border: ${p => p.theme.borders.normal};
`
const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.smallBlue};
border: ${p => p.theme.borders.normal};
:hover{
   background: ${p => p.theme.colors.green};
}
`

export class PhonebookV1 extends React.Component {

   state = {
      name: '',
      number: '',
   };

   handleChange = e => {
      this.setState(
         {
            [e.target.name]: e.target.value,
         })
   };


   hendleSubmit = e => {
      e.preventDefault();

      console.log(this.state.name);

      const contact = {
         name: this.state.name,
         number: this.state.number,
         id: nanoid(),
      };

      if (this.props.contacts.find(num => num.name === contact.name)) {
         return alert('Контакт вже існує')
      };

      this.props.onSubmit(contact);

      this.setState({
         name: '',
         number: '',
      });
   };

   render() {

      return (
         <Box background='white' py='6'>
            <TitleH1>Phonebook</TitleH1>
            <Form onSubmit={this.hendleSubmit}>
               <Label htmlFor="">Name:
                  <Input
                     onChange={this.handleChange}
                     value={this.state.name}
                     type="text"
                     name="name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                  /> </Label>
               <Label htmlFor="">Number:
                  <Input
                     onChange={this.handleChange}
                     value={this.state.number}
                     type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                  /> </Label>
               <Btn type="submit">Add contact</Btn>
            </Form>
            <Box fontSize='5'>
               <TitleH2>Contacts</TitleH2>
               <Label htmlFor="">Finde contacts by name:
                  <Input
                     onChange={this.props.chengeFilter}
                     value={this.props.filter}
                     type="text"
                     name="filter"
                  /> </Label>
               <ContactsList items={this.props.contacts} contactsDelete={this.props.contactsDelete} />
            </Box>
         </Box>
      );
   };
};