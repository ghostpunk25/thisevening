import React from "react";
import { VideoList } from "../VideoList/VideoList";
import playerUrl from "../../../playerUrl.json"
import { PlayerReact } from "../PlayerReact/PlayerReact";
import styled from "styled-components";
import { Box } from "componets/Box/Box";

const Title = styled.h1`
margin-bottom: ${p => `${p.theme.space[6]}px`};
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
`

export class Example extends React.Component {
   state = {
      videoLink: null,
   };

   selectVideo = (url) => {
      this.setState({
         videoLink: url,
      });
   };

   render() {
      return (
         <Box mb='6'>
            <Title>Video links: {this.state.videoLink}</Title>
            <VideoList items={playerUrl} onSelect={this.selectVideo} />
            <PlayerReact url={this.state.videoLink} />
         </Box>
      );
   };
};