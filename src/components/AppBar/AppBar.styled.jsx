import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
display: flex;
align-items: center;
gap: ${p => p.theme.space[3]}px;
border-radius: 4px;
padding: ${p => p.theme.space[4]}px;

&.active {
   color: ${p => p.theme.colors.active};
}

:hover:not(.active),
:focus-visible:not(.active){
   color: ${p => p.theme.colors.blue};
}
`