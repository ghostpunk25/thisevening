import { Link } from "react-router-dom";
import styled from "styled-components";

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