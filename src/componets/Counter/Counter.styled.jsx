import styled from "styled-components"

export const Span = styled.span`
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => `${p.theme.space[7]}px`};
padding: ${p => `${p.theme.space[6]}px`};
background: ${p => p.theme.colors.white};
border: ${p => p.theme.borders.normal};
`
export const Btn = styled.button`
padding: ${p => `${p.theme.space[5]}px`};
background: ${p => p.theme.colors.green};
:hover{
   background: ${p => p.theme.colors.red};
}
`