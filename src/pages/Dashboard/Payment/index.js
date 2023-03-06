import { useState } from 'react';
import PaymentConfirmation from '../../../components/Ticket and Payment/PaymentConfirmation';
import SelectionTicketType from '../../../components/Ticket and Payment/SelectionType';
import TicketSummary from '../../../components/Ticket and Payment/TicketSummary';

export default function Payment() {
  //return (<>
  //<SelectionTicketType />
  //{/* <OnlineTicketSummary /> */}
  //</>
  const [ticketTypeData, setTicketTypeData] = useState(null);
  const [ticketStatus, setTicketStatus] = useState(null); //options: null, selected, reserved, paid

  //Analice, quando fizer o post do pagamento, favor atualizar para setTicketStatus(paid)
  //Quem fizer a seleção de modalidade/hotel, favor atualizar para setTicketStatus(selected)

  return (
    <>
      {ticketStatus === null &&
        <SelectionTicketType
          setTicketTypeData={setTicketTypeData}
        />
      }
      {ticketStatus === 'selected' &&
       <>
         <SelectionTicketType
           setTicketTypeData={setTicketTypeData}
         />
         <TicketSummary
           setTicketStatus={setTicketStatus}
           ticketTypeData={ticketTypeData}
         />
       </>        
      }
      {ticketStatus === 'reserved' &&
        <>
          <h1>substituir por componente de ingresso escolhido</h1>
          <h1>substituir por componente de pagamento - Analice</h1>
        </>
      }      
      {ticketStatus === 'paid' &&
        <>
          <h1>substituir por componente de ingresso escolhido</h1>
          <PaymentConfirmation />
        </>  
      }
    </>

  );
}
