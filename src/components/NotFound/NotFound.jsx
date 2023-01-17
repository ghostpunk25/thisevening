import { Container, Title } from './NotFound.styled';


const NotFound = ({ text = 'Not found' }) => {
   return (
      <Container>
         <Title>{text}</Title>
      </Container>
   );
};

export default NotFound;
