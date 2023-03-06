import styled from 'styled-components';

export default function TicketSelected({ ticketTypeData }) {
  return (
    <>      
      <TitleMain>Ingresso e pagamento</TitleMain>
      <Title>Ingresso</Title>
      {ticketTypeData.isRemote === true &&
        <CardTicket>
          <p>Online</p>
          <p>R$ {ticketTypeData.price}</p>
        </CardTicket>
      }
      {(ticketTypeData.isRemote === false && ticketTypeData.includesHotel === false) &&
        <CardTicket>
          <p>Presencial + Sem Hotel</p>
          <p>R$ {ticketTypeData.price}</p>
        </CardTicket>
      }
      {(ticketTypeData.isRemote === false && ticketTypeData.includesHotel === true) &&
        <CardTicket>
          <p>Presencial + Com Hotel</p>
          <p>R$ {ticketTypeData.price}</p>
        </CardTicket>
      }
    </>
  );
}

const TitleMain = styled.div`
height: 40px;
font-family: 'Roboto', sans-serif;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 25px;
`;

const Title = styled.div`
height: 23px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-bottom: 20px;
`;

const CardTicket = styled.div`
height: 108px;
width: 290px;
border: 1px solid #CECECE;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFEED2; 

  p:first-child {
    font-size: 16px;
    color: #898989;
  }

  p:last-child {
    font-size: 16px;
    color: #454545;
  }
`;
