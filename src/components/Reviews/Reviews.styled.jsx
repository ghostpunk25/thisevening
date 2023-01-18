import styled, { keyframes } from "styled-components";

export const Name = styled.p`
font-size: ${p => p.theme.fontSize.s};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[5]}px;
`
export const Review = styled.p`
line-height: 20px;
`

export const NoReviews = styled.p`
font-size: ${p => p.theme.fontSize.s};
line-height: 25px;
padding: ${p => p.theme.space[6]}px;
background: ${p => p.theme.colors.text};
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