import { useState } from 'react';
import styled from 'styled-components';
import TicketSummary from './TicketSummary';

export default function SelectionHotelType({ info, setTicketStatus, setTicketTypeData, ticketTypeData }) {
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
      { hotelOptonSelected? <TicketSummary setTicketStatus={setTicketStatus} ticketTypeData={ticketTypeData}/>: null }
    </>);
}

const TitleTicketModel = styled.div`
height: 23px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-top: 13px;
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

