import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const H1 = styled.h1`
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[5]}px;
`
export const H2 = styled.h2`
font-size: ${p => p.theme.fontSize.m};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[4]}px;
`
export const H3 = styled.h3`
font-size: ${p => p.theme.fontSize.s};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[4]}px;
`
export const P = styled.p`
margin-bottom: ${p => p.theme.space[6]}px;
max-width: 600px;
line-height: 20px;
`
export const Btn = styled(Link)`
display: inline-block;
margin-bottom: ${p => p.theme.space[5]}px;
padding: ${p => p.theme.space[4]}px;
background: ${p => p.theme.colors.btn};
transition: all 0.3s ease 0s;
border:  ${p => p.theme.borders.normal};
:hover{
   background: ${p => p.theme.colors.hover};
}
`
export const AddP = styled.p`
font-size: ${p => p.theme.fontSize.m};
font-weight: ${p => p.theme.fontWeights.bold};
text-align: center;
`
export const Img = styled.img`
max-width: 100%;
`

export const Spiner = keyframes`
0% {
   transform: rotate(0deg)
}
100% {
   transform: rotate(360deg)
}
`
export const Loading = styled.img`
animation: 3s ${Spiner} linear 0s infinite;
`