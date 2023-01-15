import { Formik, Form, Field } from "formik"
import styled from "styled-components";

const FormFormik = styled(Form)`
display: flex;
justify-content: center;
margin-top: ${p => `${p.theme.space[6]}px`};
margin-bottom: ${p => `${p.theme.space[5]}px`};
gap: ${p => `${p.theme.space[2]}px`};
`

const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
border: ${p => p.theme.borders.normal};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.blue}; 
}
`
const Input = styled(Field)`
padding: ${p => `${p.theme.space[4]}px`};
`

export const Searchbar = ({ onSubmit }) => {

   const hendleSubmit = (values, actions) => {
      onSubmit(values.name);
      actions.resetForm();
   };

   return (
      <Formik initialValues={{ name: '' }} onSubmit={hendleSubmit}>
         <FormFormik>
            <Input
               type="text"
               name="name"
               autoComplete="on"
               autoFocus
               placeholder="Search images and photos"
            />
            <Btn type="submit">Search</Btn>
         </FormFormik>
      </Formik>
   );
};