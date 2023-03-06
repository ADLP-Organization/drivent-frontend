import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import useToken from '../../hooks/useToken';
import { ticketType } from '../../services/ticketApi';
import SelectionHotelType from './SelectionHotelOption';
import TicketSummary from './TicketSummary';

export default function SelectionTicketType({ setTicketStatus, ticketTypeData, setTicketTypeData }) {
  const token = useToken();
  const [enroll, setEnroll] = useState(false);
  const [info, setInfo] = useState([]);
  const [load, setLoad] = useState(false);
  const [selectButton1, setSelectButton1] = useState(false);
  const [selectButton2, setSelectButton2] = useState(false);
  const [isPresential, setIsPresential] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const { enrollment } = useEnrollment();
  
  useEffect(() => {
    async function createTicket() {
      try {
        const result = await ticketType(token);
        setInfo(result);
        setLoad(true);
      } catch (err) {
        setLoad(false);
      }
    }
    createTicket();

    function confirmEnrollment() {
      if (enrollment !== null) {
        setEnroll(false);
      } else {
        setEnroll(true);
      }
    }
    confirmEnrollment();
  }, [enrollment]);

  function selectionType1() {
    setSelectButton1(true);
    setSelectButton2(false);
    if(info[0].isRemote) {
      setIsPresential(false);
      setIsOnline(true);
      setTicketTypeData(info[0]);
    } else {
      setIsPresential(true);
      setIsOnline(false);
    }
  }

  function selectionType2() {
    setSelectButton1(false);
    setSelectButton2(true);

    if(info[1].isRemote) {
      setIsPresential(false);
      setIsOnline(true);
      setTicketTypeData(info[0]);
    } else {
      setIsPresential(true);
      setIsOnline(false);
    }
  }

  if (info[0]) {
    return (<Container>
      <Title>Ingresso e pagamento</Title>
      <EnrollTrue enroll={enroll}>
        <TitleTicketModel>Primeiro, escolha sua modalidade de ingresso</TitleTicketModel>
        <TicketModel info={info}>
          <ButtonChoice1 onClick={selectionType1} selectButton1={selectButton1}><TicketType>{(info[0].isRemote ? 'Online' : 'Presencial')}</TicketType><Price>R$ { info[0].price }</Price></ButtonChoice1>
          <ButtonChoice2 onClick={selectionType2} selectButton2={selectButton2}><TicketType>{(info[1].isRemote ? 'Online' : 'Presencial')}</TicketType><Price>R$ { info[1].price }</Price></ButtonChoice2>
        </TicketModel>
      </EnrollTrue>
      <EnrollFalse enroll={enroll}>
        <TextEnrollFalse>Você precisa completar sua inscrição antes
          de prosseguir pra escolha de ingresso</TextEnrollFalse>
      </EnrollFalse>
      {isPresential? <SelectionHotelType info={info} setTicketStatus={setTicketStatus} setTicketTypeData={setTicketTypeData} ticketTypeData={ticketTypeData}/> : null}
      {isOnline? <TicketSummary setTicketStatus={setTicketStatus} ticketTypeData={ticketTypeData}/> : null}
    </Container>);
  } else {
    return (<Container>
      <Title>Ingresso e pagamento</Title>
      <EnrollTrue enroll={enroll}>
        <TitleTicketModel>Primeiro, escolha sua modalidade de ingresso</TitleTicketModel>
        <TicketModel info={info}>
          Loading...
        </TicketModel>
      </EnrollTrue>
      <EnrollFalse enroll={enroll}>
        <TextEnrollFalse>Você precisa completar sua inscrição antes
          de prosseguir pra escolha de ingresso</TextEnrollFalse>
      </EnrollFalse>
    </Container>);
  }
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
margin-bottom: 25px;
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
margin-bottom: 20px;
`;

const TicketModel = styled.div`
  width:310px;
  display: ${(prop) => (prop.info !== [] ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-between;
  `;

const ButtonChoice1 = styled.div`
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

const ButtonChoice2 = styled.div`
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

