import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkItem = styled(Link)`
display: flex;
flex-direction: column;
gap: 10px;
transition: all 0.3s ease 0s;

:hover{
   color: ${p => p.theme.colors.blue};
}
}
`
export const H1 = styled.h1`
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[5]}px;
`

export const Img = styled.img`
max-width: 100%;
`
export const Name = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};
text-align: center;
`