import React from "react";
import ReactPlayer from 'react-player/youtube'
import styled from "styled-components";


const Title = styled.h2`
margin-bottom: ${p => `${p.theme.space[6]}px`};
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
`

export class PlayerReact extends React.Component {
   state = {
      isVideoVisible: false,
   };

   componentDidUpdate(prevProps) {
      if (prevProps.url !== this.props.url) {
         this.setState({ isVideoVisible: false })
      };
   };

   render() {
      return (
         <div>
            {this.props.url && !this.state.isVideoVisible && <Title>Video loading...</Title>}
            <ReactPlayer url={this.props.url} width='100%' onReady={() => { this.setState({ isVideoVisible: true }) }} />
         </div>
      );
   };
};