import { Field, Form, Formik, ErrorMessage } from "formik"
import * as yup from 'yup';
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
const FormFormik = styled(Form)`
display: flex;
gap: ${p => `${p.theme.space[2]}px`};
flex-direction: column;
`
const Input = styled(Field)`
padding: ${p => `${p.theme.space[4]}px`};
border: ${p => p.theme.borders.normal};
`

const schema = yup.object().shape({
   title: yup.string().required('Поле повино бути заповнине'),
   link: yup.string().required('Поле повино бути заповнине'),
});


export const MaterialsForm = ({ onSubmit }) => {

   const handleSubmit = (values, actions) => {

      onSubmit(values);

      actions.setSubmitting(false);
      actions.resetForm();
   };

   return (
      <Box display='flex' justifyContent='center' mb='6' fontSize='4'>
         <Formik validationSchema={schema} initialValues={{ title: '', link: '', }} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
               <FormFormik>
                  <label htmlFor="">Title: <Input type='text' name='title' /></label>
                  <ErrorMessage name='title' component="div" />
                  <label htmlFor="">Link: <Input type='text' name='link' /></label>
                  <ErrorMessage name='link' component="div" />
                  <Btn type="submit" disabled={isSubmitting}>Submit</Btn>
               </FormFormik>
            )}
         </Formik>
      </Box>
   );
};