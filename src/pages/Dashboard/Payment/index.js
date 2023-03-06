import { useState } from 'react';
import PaymentConfirmation from '../../../components/Ticket and Payment/PaymentConfirmation';
import SelectionTicketType from '../../../components/Ticket and Payment/SelectionType';
import TicketSummary from '../../../components/Ticket and Payment/TicketSummary';
import PaymentCredentials from '../PaymentCredentials';

export default function Payment() {
  const [ticketTypeData, setTicketTypeData] = useState(null);
  const [ticketStatus, setTicketStatus] = useState(null); //options: null, selected, reserved, paid

  //Analice, quando fizer o post do pagamento, favor atualizar para setTicketStatus(paid)
  //Quem fizer a seleção de modalidade/hotel, favor atualizar para setTicketStatus(selected)

  return (
    <>
      {ticketStatus === null &&
        <SelectionTicketType
          setTicketTypeData={setTicketTypeData}
          setTicketStatus={setTicketStatus}
          ticketTypeData={ticketTypeData}
        />
      }
      {ticketStatus === 'selected' &&
       <>
         <SelectionTicketType
           setTicketTypeData={setTicketTypeData}
           setTicketStatus={setTicketStatus}
           ticketTypeData={ticketTypeData}
         />
         <TicketSummary
           setTicketStatus={setTicketStatus}
           ticketTypeData={ticketTypeData}
         />
       </>        
      }
      {ticketStatus === 'reserved' &&
        <>
          <PaymentCredentials ticketTypeData = {ticketTypeData}/>
        </>
      }      
      {ticketStatus === 'paid' &&
        <>
          <h1>substituir por componente de ingresso escolhido</h1>
          <PaymentConfirmation/>
        </>  
      }
    </>

  );
}
