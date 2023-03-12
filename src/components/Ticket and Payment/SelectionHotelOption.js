import { useState } from 'react';
import TicketSummary from './TicketSummary';
import { TitleTicketModel, TicketModel, ButtonChoice1, ButtonChoice2, Price,  TicketType } from '../Selection';

export default function SelectionHotelType({ info, setTicketStatus, setTicketTypeData, ticketTypeData, setTicketId, ticketId }) {
  const [hotelOptonSelected, setHotelOptonSelected] = useState(null);
  const [selectButton1, setSelectButton1] = useState(false);
  const [selectButton2, setSelectButton2] = useState(false);
  const presential = info.filter(option => option.isRemote === false)
  const hotelPrice = Math.abs((presential[0].price - presential[1].price));

  function selectionType1() {
    setSelectButton1(true);
    setSelectButton2(false);
    if(presential[0].includeHotel) {
      setHotelOptonSelected(true);
      setTicketTypeData(presential[1]);
    } else {
      setHotelOptonSelected(true);
      setTicketTypeData(presential[0]);
    }
  }

  function selectionType2() {
    setSelectButton1(false);
    setSelectButton2(true);

    if(presential[1].includeHotel) {
      setHotelOptonSelected(true);
      setTicketTypeData(presential[0]);
    } else {
      setHotelOptonSelected(true);
      setTicketTypeData(presential[1]);
    }
  }

  return (
    <>
      <TitleTicketModel>Ótimo! Agora escolha sua modalidade de hospedagem</TitleTicketModel>
      <TicketModel>
        <ButtonChoice1 onClick={selectionType1} selectButton1={selectButton1}><TicketType>{(presential[0].includesHotel ? 'Com Hotel' : 'Sem hotel')}</TicketType><Price>R$ { (presential[0].includesHotel ? hotelPrice : 0) }</Price></ButtonChoice1>
        <ButtonChoice2 onClick={selectionType2} selectButton2={selectButton2}><TicketType>{(presential[1].includesHotel ? 'Com Hotel' : 'Sem hotel')}</TicketType><Price>R$ { (presential[1].includesHotel ? hotelPrice : 0) }</Price></ButtonChoice2>
      </TicketModel>
      { hotelOptonSelected? <TicketSummary setTicketStatus={setTicketStatus} ticketTypeData={ticketTypeData} setTicketId={setTicketId} ticketId={ticketId} />: null }
    </>);
}
