import styled from "styled-components";

export const Input = styled.input`
border: ${p => p.theme.borders.normal};
padding: ${p => p.theme.space[2]}px;
width: 100%;
`

export const Btn = styled.button`
display: inline-block;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
padding-left: ${p => p.theme.space[5]}px;
padding-right: ${p => p.theme.space[5]}px;
background: ${p => p.theme.colors.btn};
transition: all 0.3s ease 0s;
border: ${p => p.theme.borders.normal};
:hover{
   background: ${p => p.theme.colors.hover};
}
`