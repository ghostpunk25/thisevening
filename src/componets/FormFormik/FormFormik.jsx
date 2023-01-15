import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as yup from "yup"
import { Box } from "componets/Box/Box";

const Input = styled(Field)`
padding: ${p => `${p.theme.space[4]}px`};
`

const FormikForm = styled(Form)`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 16px;
`

const Error = styled(ErrorMessage)`
color: red;
margin-top: 10px;
`

const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.red};
}
`

const schema = yup.object().shape({
   login: yup.string().required(),
   password: yup.string().min(6).max(16).required(),
});

const initialValues = {
   login: '',
   password: '',
};

export const FormFormik = () => {

   const handleSubmit = (values, actions) => {
      console.log(values);
      actions.resetForm()
   };

   return (
      <Box mb='8'>
         <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
            <FormikForm autoComplete="off">
               <label htmlFor="login">Login:
                  <Input type="text" name="login" />
                  <Error name="login" component="div" />
               </label>
               <label htmlFor="password">Password:
                  <Input type="password" name="password" />
                  <Error name="password" component="div" />
               </label>
               <Btn type="submit">Submit</Btn>
            </FormikForm>
         </Formik>
      </Box>
   );
};