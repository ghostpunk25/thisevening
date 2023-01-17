import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 40px;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 30px;
  line-height: 1.6;
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.red};
  margin-bottom: 20px;
  /* text-align: center; */
`;