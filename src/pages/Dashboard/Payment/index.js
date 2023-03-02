import styled from 'styled-components';

export default function Payment() {
  return (<Container>
    <Title>Ingresso e pagamento</Title>
    <TitleTicketModel>Primeiro, escolha sua modalidade de ingresso</TitleTicketModel>
    <TicketModel><ButtonChoice><TicketType>Presencial</TicketType><Price>R$ 250</Price></ButtonChoice> <ButtonChoice><TicketType>Online</TicketType><Price>R$ 100</Price></ButtonChoice></TicketModel>
  </Container>);
}

const Container = styled.div`
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
  

`;
const Price =styled.div`
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
