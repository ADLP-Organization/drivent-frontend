import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import useToken from '../../hooks/useToken';
import { ticketType } from '../../services/ticketApi';

export default function SelectionTicketType({ setTicketTypeData }) {
  const token = useToken();
  const [enroll, setEnroll] = useState(false);
  const { enrollment } = useEnrollment();

  async function createTicket() {
    try {
      const result = await ticketType(token);
      setTicketTypeData(result[0]);
      console.log(result);
    } catch(err) {
      alert(err);
    }
  }
  createTicket();

  function confirmEnrollment() {
    if(!enrollment) {
      setEnroll(false);
      console.log('oi');
    } else {
      setEnroll(true);
      console.log('tchau');
    }
  }

  return (<Container>
    <Title>Ingresso e pagamento</Title>
    <EnrollTrue enroll = {enroll}>
      <TitleTicketModel>Primeiro, escolha sua modalidade de ingresso</TitleTicketModel>
      <TicketModel><ButtonChoice><TicketType>Presencial</TicketType><Price>R$ 250</Price></ButtonChoice> <ButtonChoice><TicketType>Online</TicketType><Price>R$ 100</Price></ButtonChoice></TicketModel>
    </EnrollTrue>
    <EnrollFalse enroll = {enroll}>
      <TextEnrollFalse>Você precisa completar sua inscrição antes
        de prosseguir pra escolha de ingresso</TextEnrollFalse>
    </EnrollFalse>
  </Container>);
}

const Container = styled.div`

`;

const EnrollTrue = styled.div`
display: ${(prop) => (!prop.enroll? 'initial' : 'none')};
`;

const EnrollFalse = styled.div`
width: 100%;
display: ${(prop) => (!prop.enroll? 'none' : 'flex')};
justify-content: center;
color:#8E8E8E;
`;

const TextEnrollFalse = styled.div`
margin-top: 206px;
height: 46px;
width: 388px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: center;
`;

const Title = styled.div`
height: 40px;
width: 340px;
font-family: 'Roboto', sans-serif;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 37px;
`;

const TitleTicketModel = styled.div`
height: 23px;
width: 411px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-bottom: 17px;
`;

const TicketModel = styled.div`
  width:310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;

const ButtonChoice = styled.div`
  height: 145px;
  width: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 /*  background-color: #FFEED2; */
;
  

`;
const Price = styled.div`
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

const TicketType = styled.div`

`;
