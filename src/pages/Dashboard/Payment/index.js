import { useState } from 'react';
import PaymentConfirmation from '../../../components/Ticket and Payment/PaymentConfirmation';
import SelectionTicketType from '../../../components/Ticket and Payment/SelectionType';
import TicketSummary from '../../../components/Ticket and Payment/TicketSummary';
import PaymentCredentials from '../../../components/Ticket and Payment/PaymentCredentials';
import TicketSelected from '../../../components/Ticket and Payment/TicketSelected';

export default function Payment() {
  const [ticketTypeData, setTicketTypeData] = useState(null);
  const [ticketStatus, setTicketStatus] = useState(null);
  const [ticketId, setTicketId] = useState(null);

  return (
    <>
      {ticketStatus === null &&
        <SelectionTicketType
          setTicketTypeData={setTicketTypeData}
          setTicketStatus={setTicketStatus}
          ticketTypeData={ticketTypeData}
          setTicketId={setTicketId}
          ticketId={ticketId}
        />
      }
      {ticketStatus === 'selected' &&
       <>
         <SelectionTicketType
           setTicketTypeData={setTicketTypeData}
           setTicketStatus={setTicketStatus}
           ticketTypeData={ticketTypeData}
           setTicketId={setTicketId}
           ticketId={ticketId}
         />
         <TicketSummary
           setTicketStatus={setTicketStatus}
           ticketTypeData={ticketTypeData}
           setTicketId={setTicketId}
           ticketId={ticketId}
         />
       </>        
      }
      {ticketStatus === 'reserved' &&
        <>
          <TicketSelected ticketTypeData={ticketTypeData}  />
          <PaymentCredentials 
            setTicketStatus={setTicketStatus}
            ticketId={ticketId}
          />
        </>
      }      
      {ticketStatus === 'paid' &&
        <>
          <TicketSelected ticketTypeData={ticketTypeData} />
          <PaymentConfirmation />
        </>  
      }
    </>
  );
};
