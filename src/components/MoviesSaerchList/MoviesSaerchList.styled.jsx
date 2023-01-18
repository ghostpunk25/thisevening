import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const LinkItem = styled(Link)`
flex: 0 1 210px;
display: flex;
flex-direction: column;
gap: 10px;
transition: all 0.3s ease 0s;
:hover{
   color: ${p => p.theme.colors.blue};
}
}
`
export const Img = styled.img`
max-width: 100%;
flex: 0 1 285px;
`

export const Name = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};
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