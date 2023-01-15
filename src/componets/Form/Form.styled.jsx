import styled from "styled-components"

export const Label = styled.label`
display: flex;
align-items: center;
gap: ${p => `${p.theme.space[4]}px`}
`
export const Input = styled.input`
padding: ${p => `${p.theme.space[4]}px`};
`
export const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.green};
color: ${p => p.theme.colors.white};
:hover{
   background: ${p => p.theme.colors.red};
}
`