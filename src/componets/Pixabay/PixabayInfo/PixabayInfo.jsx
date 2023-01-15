import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../Button/Button";
import { ImageGallery } from "../ImageGallery/ImageGallery";

const API_KEY = '32669543-23ad2208591e836672e4cf851';

const Div = styled.div`
text-align: center;
`

const Spiner = keyframes`
0% {
   transform: rotate(0deg)
}
100% {
   transform: rotate(360deg)
}
`

const Loading = styled.img`
animation: 3s ${Spiner} linear 0s infinite;
`

export class PixabayInfo extends React.Component {
   state = {
      hits: [],
      page: 1,
      status: 'idle',
      err: null,
   };

   async componentDidUpdate(prevProps, prevState) {
      if (prevProps.pixabayName !== this.props.pixabayName) {
         this.setState({
            page: 1,
            hits: [],
         });
      };

      if (prevProps.pixabayName !== this.props.pixabayName) {
         this.setState({ status: 'pending' });
         try {
            const response = await (await fetch(`https://pixabay.com/api/?q=${this.props.pixabayName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=3`)).json();
            const hits = await response;
            this.setState({ ...hits, status: 'resolved' });
         } catch (err) {
            this.setState({ err, status: 'rejected' });
         };
      };

      if (prevState.page !== this.state.page) {
         if (this.state.page === 1) {
            return
         };

         this.setState({ status: 'pending' });
         try {
            const response = await (await fetch(`https://pixabay.com/api/?q=${this.props.pixabayName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=3`)).json();
            const hits = await response;
            this.setState(prevState => ({ hits: [...prevState.hits, ...hits.hits], status: prevState.status = 'resolved' }));
         } catch (err) {
            this.setState({ err, status: 'rejected' });
         };
      };
   };

   heandleClick = () => {
      this.setState(prevState => ({
         page: prevState.page + 1,
      }));
   };

   render() {
      if (this.state.status === 'pending') {
         return <Div><Loading src='https://img.icons8.com/ios-filled/512/loading-sign.png' alt="loading" /></Div>
      };
      if (this.state.status === 'idle') {
         return <Div>Введіть назву зображення</Div>
      };
      if (this.state.status === 'rejected') {
         return <Div>Упс!.. Щось пішло не так, перезавантажте сторінку.</Div>
      };
      if (this.state.status === 'resolved') {
         return <div><ImageGallery items={this.state.hits} /><Div><Button onClick={this.heandleClick} /></Div></div>
      };
   };
};




