import { Formik, Form, Field } from "formik";
import { Box } from "componets/Box/Box";
import styled from 'styled-components';

const FormFormik = styled(Form)`
display: flex;
gap: ${p => `${p.theme.space[2]}px`};
`
const Input = styled(Field)`
padding: ${p => `${p.theme.space[4]}px`};
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

const initialValues = {
   name: '',
};

export const PokemonFormik = ({ pokemonName }) => {

   const submitForm = (values, actions) => {

      pokemonName(values.name.toLowerCase());

      actions.resetForm();
   };

   return (
      <Box mb='6'>
         <Formik initialValues={initialValues} onSubmit={submitForm}>
            <FormFormik>
               <Input type='text' name='name' />
               <Btn type="submit">Search</Btn>
            </FormFormik>
         </Formik>
      </Box>
   );
};