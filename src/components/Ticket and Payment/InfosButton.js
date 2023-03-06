import { useState } from 'react';
import styled from 'styled-components';

export default function InfosButton({ price, isRemote, info }) {
  const [selectButton1, setSelectButton1] = useState(false);
  const [selectButton2, setSelectButton2] = useState(false);
  
  function selectionType() {
    setSelectButton1(!selectButton1); 
    setSelectButton2(!selectButton2);    
    console.log('oi', selectButton1, selectButton2);
  }
  return(
    <>
      <ButtonChoice onClick={selectionType} selectButton ={selectButton1}><TicketType>{(isRemote ? 'Online' : 'Presencial')}</TicketType><Price>R$ { price }</Price></ButtonChoice>
    </>
  );
}

const ButtonChoice = styled.div`
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
