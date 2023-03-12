import styled from 'styled-components';

export const Container = styled.div`

`;

export const EnrollTrue = styled.div`
display: ${(prop) => (!prop.enroll ? 'initial' : 'none')};
`;

export const EnrollFalse = styled.div`
width: 100%;
display: ${(prop) => (!prop.enroll ? 'none' : 'flex')};
justify-content: center;
color:#8E8E8E;
`;

export const TextEnrollFalse = styled.div`
margin-top: 206px;
height: 46px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: center;
`;

export const Title = styled.div`
height: 40px;
font-family: 'Roboto', sans-serif;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 25px;
`;

export const TitleTicketModel = styled.div`
height: 23px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-bottom: 20px;
`;

export const TicketModel = styled.div`
  width:310px;
  display: ${(prop) => (prop.info !== [] ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-between;
  `;

export const ButtonChoice1 = styled.div`
  height: 145px;
  width: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => (!prop.selectButton1 ? '#FFFFFF' : '#FFEED2')}; 
`;

export const ButtonChoice2 = styled.div`
  height: 145px;
  width: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => (!prop.selectButton2 ? '#FFFFFF' : '#FFEED2')}; 
`;

export const Price = styled.div`
height: 16px;
width: 46px;
border-bottom: 3px;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 100;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
color: #898989;
`;

export const TicketType = styled.div`

`;
