import { Box } from "componets/Box/Box";
import styled from "styled-components";

const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.red};
}
`

export const LoginForm = () => {
   const handleSubmit = e => {
      e.preventDefault();

      const login = e.target.elements.login.value;
      const password = e.target.elements.password.value;
      console.log({ login, password });
   };

   // const handleSubmit = e => {
   //    e.preventDefault();

   //    const formData = new FormData(e.target)
   //    formData.forEach((login, password) => {
   //       console.log(login, password);
   //    });
   // };

   return (
      <Box as='form' display='flex' gridGap='4' justifyContent='center' autoComplete="off" onSubmit={handleSubmit} mb='7'>
         <label htmlFor="login">Login:
            <input type="text" name="login" />
         </label>
         <label htmlFor="password">Password:
            <input type="password" name="password" />
         </label>
         <Btn type="submit">Submit</Btn>
      </Box>
   );
};