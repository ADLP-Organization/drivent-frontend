import { useState } from 'react';
import TicketSummary from './TicketSummary';
import { TitleTicketModel, TicketModel, ButtonChoice1, ButtonChoice2, Price,  TicketType } from '../Selection';

export default function SelectionHotelType({ info, setTicketStatus, setTicketTypeData, ticketTypeData, setTicketId, ticketId }) {
  const [hotelOptonSelected, setHotelOptonSelected] = useState(null);
  const [selectButton1, setSelectButton1] = useState(false);
  const [selectButton2, setSelectButton2] = useState(false);
  const hotelPrice = (info[2].price - info[1].price);

  function selectionType1() {
    setSelectButton1(true);
    setSelectButton2(false);
    if(info[1].includeHotel) {
      setHotelOptonSelected(true);
      setTicketTypeData(info[2]);
    } else {
      setHotelOptonSelected(true);
      setTicketTypeData(info[1]);
    }
  }

  function selectionType2() {
    setSelectButton1(false);
    setSelectButton2(true);

    if(info[2].includeHotel) {
      setHotelOptonSelected(true);
      setTicketTypeData(info[2]);
    } else {
      setHotelOptonSelected(true);
      setTicketTypeData(info[2]);
    }
  }

  return (
    <>
      <TitleTicketModel>Ótimo! Agora escolha sua modalidade de hospedagem</TitleTicketModel>
      <TicketModel>
        <ButtonChoice1 onClick={selectionType1} selectButton1={selectButton1}><TicketType>{(info[1].includesHotel ? 'Com Hotel' : 'Sem hotel')}</TicketType><Price>R$ { (info[1].includesHotel ? hotelPrice : 0) }</Price></ButtonChoice1>
        <ButtonChoice2 onClick={selectionType2} selectButton2={selectButton2}><TicketType>{(info[2].includesHotel ? 'Com Hotel' : 'Sem hotel')}</TicketType><Price>R$ { (info[2].includesHotel ? hotelPrice : 0) }</Price></ButtonChoice2>
      </TicketModel>
      { hotelOptonSelected? <TicketSummary setTicketStatus={setTicketStatus} ticketTypeData={ticketTypeData} setTicketId={setTicketId} ticketId={ticketId} />: null }
    </>);
}
