import { useState } from 'react';
import PaymentConfirmation from '../../../components/Ticket and Payment/PaymentConfirmation';
import SelectionTicketType from '../../../components/Ticket and Payment/SelectionType';
import TicketSummary from '../../../components/Ticket and Payment/TicketSummary';
import TicketSelected from '../../../components/Ticket and Payment/TicketSelected';

export default function Payment() {
  const [ticketTypeData, setTicketTypeData] = useState(null);
  const [ticketStatus, setTicketStatus] = useState(null); //options: null, selected, reserved, paid

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
          <TicketSelected
            ticketTypeData={ticketTypeData}
          />
          <h1>substituir por componente de pagamento - Analice</h1>
        </>
      }      
      {ticketStatus === 'paid' &&
        <>
          <TicketSelected
            ticketTypeData={ticketTypeData}
          />
          <PaymentConfirmation />
        </>  
      }
    </>
  );
}
