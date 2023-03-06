import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import useToken from '../../hooks/useToken';
import { ticketType } from '../../services/ticketApi';
import InfosButton from './InfosButton';

export default function SelectionTicketType() {
  const token = useToken();
  const [enroll, setEnroll] = useState(false);
  const [price, setPrice] = useState([]);
  const { enrollment } = useEnrollment();
  console.log(enrollment);
  useEffect(() => {
    async function createTicket() {
      try {
        const result = await ticketType(token);
        setPrice(result);
        console.log(result);
      } catch (err) {
        alert(err);
      }
    }
    createTicket();

    function confirmEnrollment() {
      if (enrollment !== null) {
        setEnroll(false);
        console.log('oi');
      } else {
        setEnroll(true);
        console.log('tchau');
      }
    }
    confirmEnrollment();
  }, [enrollment]);
  
  return (<Container>
    <Title>Ingresso e pagamento</Title>
    <EnrollTrue enroll={enroll}>
      <TitleTicketModel>Primeiro, escolha sua modalidade de ingresso</TitleTicketModel>
      <TicketModel>
        {price.map((info) => <InfosButton key={info.id} price={info.price} isRemote ={info.isRemote} info = {info}/>)}
      </TicketModel>
    </EnrollTrue>
    <EnrollFalse enroll={enroll}>
      <TextEnrollFalse>Você precisa completar sua inscrição antes
        de prosseguir pra escolha de ingresso</TextEnrollFalse>
    </EnrollFalse>
  </Container>);
}

const Container = styled.div`

`;

const EnrollTrue = styled.div`
display: ${(prop) => (!prop.enroll ? 'initial' : 'none')};
`;

const EnrollFalse = styled.div`
width: 100%;
display: ${(prop) => (!prop.enroll ? 'none' : 'flex')};
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
