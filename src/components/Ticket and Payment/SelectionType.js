import { useEffect, useState } from 'react';
import useEnrollment from '../../hooks/api/useEnrollment';
import useToken from '../../hooks/useToken';
import { ticketType } from '../../services/ticketApi';
import SelectionHotelType from './SelectionHotelOption';
import TicketSummary from './TicketSummary';
import { Container, EnrollTrue, EnrollFalse, TextEnrollFalse, Title, TitleTicketModel, TicketModel, ButtonChoice1, ButtonChoice2, Price,  TicketType } from '../Selection';

export default function SelectionTicketType({ setTicketStatus, ticketTypeData, setTicketTypeData, setTicketId, ticketId }) {
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
      const hotel1 = info.filter( option => option.isRemote === true);
      setTicketTypeData(hotel1[0]);
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
      const hotel2 = info.filter( option => option.isRemote === true);
      setTicketTypeData(hotel2[0]);
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
      {isPresential? <SelectionHotelType info={info} setTicketStatus={setTicketStatus} setTicketTypeData={setTicketTypeData} ticketTypeData={ticketTypeData} setTicketId={setTicketId} ticketId={ticketId}/> : null}
      {isOnline? <TicketSummary setTicketStatus={setTicketStatus} ticketTypeData={ticketTypeData} setTicketId={setTicketId} ticketId={ticketId} /> : null}
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
