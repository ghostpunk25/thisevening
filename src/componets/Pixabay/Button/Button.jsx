import styled from "styled-components";

const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
border: ${p => p.theme.borders.normal};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.blue}; 
}
`

export const Button = ({ onClick }) => {
   return (
      <Btn onClick={onClick}>Load more</Btn>
   );
};