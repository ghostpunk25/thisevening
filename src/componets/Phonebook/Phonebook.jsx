import { Box } from "componets/Box/Box";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { ContactsFormikList } from "./ContactsFormikList/ContactsFormikList";
import { nanoid } from "nanoid";
import * as yup from 'yup';

let schema = yup.object().shape({
   name: yup.string().required(`Тут повинно бути ваше і'мя`).min(2),
   number: yup.number().required(),
});

const Error = styled(ErrorMessage)`
color: ${p => p.theme.colors.red};
position: absolute;
bottom: 10px;
font-size: ${p => p.theme.fontSize.m};
`

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
const FormikForm = styled(Form)`
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
position: relative;
`
const Input = styled(Field)`
margin-bottom: ${p => `${p.theme.space[6]}px`};
padding: ${p => `${p.theme.space[4]}px`};
border: ${p => p.theme.borders.normal};
`
const InputFilter = styled.input`
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
const initialValues = {
   name: '',
   number: '',
};

export const Phonebook = ({ onSubmit, contacts, contactsDelete, filter, chengeFilter }) => {

   const handleSubmit = (values, actions) => {

      const contact = {
         name: values.name,
         number: values.number,
         id: nanoid(),
      };

      if (contacts.find(num => num.name === contact.name)) {
         return alert('Контакт вже існує')
      };

      onSubmit(contact);

      actions.resetForm();
   };

   return (
      <Box background='white' py='6'>
         <TitleH1>Phonebook</TitleH1>
         <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <FormikForm action="#" >
               <Label htmlFor="">Name
                  <Input
                     type="text"
                     name="name"
                  />
                  <Error name="name" component="div" />
               </Label>

               <Label htmlFor="">Number
                  <Input
                     type="text"
                     name="number"
                  />
                  <Error name="number" component="div" />
               </Label>
               <Btn type="submit">Add contact</Btn>
            </FormikForm>
         </Formik>
         <Box fontSize='5'>
            <TitleH2>Contacts</TitleH2>
            <Label htmlFor="">Finde contacts by name:
               <InputFilter type="text" name="filter" value={filter} onChange={chengeFilter} />
            </Label>
            <ContactsFormikList items={contacts} contactsDelete={contactsDelete} />
         </Box>
      </Box>
   );
};
