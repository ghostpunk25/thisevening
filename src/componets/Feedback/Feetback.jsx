import { Box } from "componets/Box/Box";
import React from "react";
import styled from "styled-components";
import { StatisticsFeedback } from "./StatisticsFeedback/StatisticsFeedback";

const Btn = styled.button`
padding: ${p => `${p.theme.space[4]}px`};
background: ${p => p.theme.colors.smallBlue};
border: ${p => p.theme.borders.normal};
:hover{
   background: ${p => p.theme.colors.green};
}
`

const TitleH1 = styled.h1`
font-size: ${p => p.theme.fontSize.xl};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => `${p.theme.space[6]}px`}
`

const TitleH2 = styled.h2`
font-size: ${p => p.theme.fontSize.l};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => `${p.theme.space[6]}px`}
`

export class Feedback extends React.Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0,
      vissble: false,
   };

   hendleOnClick = (e) => {
      this.setState(prewState => {
         if (e.target.dataset.state === 'good') {
            return {
               good: prewState.good + 1,
               vissble: true,
            };
         };
         if (e.target.dataset.state === 'neutral') {
            return {
               neutral: prewState.neutral + 1,
               vissble: true,
            };
         };
         if (e.target.dataset.state === 'bad') {
            return {
               bad: prewState.bad + 1,
               vissble: true,
            };
         };
      });
   };

   countTotalFeedback = () => {
      const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
      return totalFeedback;
   }


   countPositiveFeedbackPrecentage = () => {
      const positiveFeedbackPrecentage = this.state.good / this.countTotalFeedback() * 100;
      return Math.round(positiveFeedbackPrecentage);
   };

   render() {
      return (
         <Box fontSize='4' background='white' py='6' mb='8'>
            <TitleH1>Please leave </TitleH1>
            <Box display='flex' gridGap='6' mb='7' onClick={this.hendleOnClick}>
               <Btn data-state='good'>Good</Btn>
               <Btn data-state='neutral'>Neutral</Btn>
               <Btn data-state='bad'>Bad</Btn>
            </Box>
            <div>
               <TitleH2>Statistics</TitleH2>
               {this.state.vissble ? <StatisticsFeedback
                  Good={this.state.good}
                  Neutral={this.state.neutral}
                  Bad={this.state.bad}
                  Total={this.countTotalFeedback()}
                  Positive={!this.countPositiveFeedbackPrecentage() ? '0' : this.countPositiveFeedbackPrecentage()}
               /> : 'There is on feedback'}
            </div>
         </Box>
      );
   };
};
