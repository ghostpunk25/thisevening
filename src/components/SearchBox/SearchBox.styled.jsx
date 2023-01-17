import styled from "styled-components";

export const Input = styled.input`
border: ${p => p.theme.borders.normal};
padding: ${p => p.theme.space[2]}px;
`

export const Btn = styled.button`
display: inline-block;
padding: ${p => p.theme.space[4]}px;
background: ${p => p.theme.colors.btn};
transition: all 0.3s ease 0s;
border: ${p => p.theme.borders.normal};
:hover{
   background: ${p => p.theme.colors.hover};
}
`