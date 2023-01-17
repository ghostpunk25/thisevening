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

export const Img = styled.img`
max-width: 100%;
`