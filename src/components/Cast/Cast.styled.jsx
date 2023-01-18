import styled, { keyframes } from "styled-components";

export const Img = styled.img`
max-width: 100%;
flex: 0 1 250px;
`
export const NoCast = styled.p`
font-size: ${p => p.theme.fontSize.s};
line-height: 25px;
padding: ${p => p.theme.space[6]}px;
background: #ffffffad;
text-align: center;
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