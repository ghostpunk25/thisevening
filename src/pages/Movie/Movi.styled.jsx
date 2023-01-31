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
:hover Img{
   transform: scale(1.03);
   box-shadow: 0px 0px 117px -19px rgba(0,0,0,1);
}
}
`
export const H1 = styled.h1`
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[5]}px;
text-align: center;
`

export const Img = styled.img`
max-width: 100%;
transition: all 0.3s ease 0s;
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