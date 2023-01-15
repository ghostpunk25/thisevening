import styled from "styled-components";

export const Status = styled.span`
width: 20px;
height: 20px;
background:${p => p.isOnline ? p => p.theme.colors.green : p => p.theme.colors.red};
border-radius: ${p => p.theme.radii.round};
`