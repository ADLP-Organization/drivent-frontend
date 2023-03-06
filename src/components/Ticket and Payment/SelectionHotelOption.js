import { useState } from 'react';
import styled from 'styled-components';
import TicketSummary from './TicketSummary';

export default function SelectionHotelType({ price, setTicketStatus, ticketTypeData }) {
  const [hotelOptonSelected, setHotelOptonSelected] = useState(null);

  const hotelPrice = (price[2].price - price[1].price);
  let newTicketTypeData = ticketTypeData;
  function chooseOption(option) {
    if(option === 'withHotel') {
      setHotelOptonSelected(true);
    } else {
      setHotelOptonSelected(true);
      newTicketTypeData = { ...price[1] };
    }
  }

  return (
    <>
      <TitleTicketModel>Ótimo! Agora escolha sua modalidade de hospedagem</TitleTicketModel>
      <TicketModel><ButtonChoice onClick={() => () => chooseOption('withoutHotel')}><TicketType>Sem Hotel</TicketType><Price>+ R$ 0</Price></ButtonChoice><ButtonChoice onClick={() => chooseOption('withHotel')} ><TicketType>Com Hotel</TicketType><Price>+ R$ {hotelPrice}</Price></ButtonChoice>
      </TicketModel>
      { hotelOptonSelected? <TicketSummary setTicketStatus={setTicketStatus} ticketTypeData={newTicketTypeData}/>: null }
    </>);
}

const TitleTicketModel = styled.div`
height: 23px;
width: 500px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
color: #8E8E8E;
margin-top: 37px;
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
  cursor: pointer;
 /*  background-color: #FFEED2; */
;
  

`;
const Price = styled.div`
height: 16px;
border-bottom: 3px;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 100;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
margin-top: 3px;
color: #898989;
`;

const TicketType = styled.div`

`;
