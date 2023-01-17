import styled from "styled-components";

export const Name = styled.p`
font-size: ${p => p.theme.fontSize.s};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[5]}px;
`
export const Review = styled.p`
font-size: ${p => p.theme.fontSize.s};
line-height: 25px;
`

export const NoReviews = styled.p`
font-size: ${p => p.theme.fontSize.s};
line-height: 25px;
padding: ${p => p.theme.space[6]}px;
background: ${p => p.theme.colors.text};
`