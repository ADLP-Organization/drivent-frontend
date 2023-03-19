import { useState, useEffect } from 'react';
import { getTicket } from '../../../services/ticketApi';
import useToken from '../../../hooks/useToken';
import EventDays from '../../../components/Activities/EventDays';
import { OnlySubtitle, Title, Loading } from '../../../components/Activities';
import ActivitiesByDay from '../../../components/Activities/ActivitiesByDay';

export default function Activities() {
  const [status, setStatus] = useState('available'); //options: unnecessary, unpaid, available
  const token =  useToken();

  // useEffect( async() => {
  //   const ticket = await getTicket( token );
  //   if (ticket.TicketType.isRemote) {
  //     setStatus('unnecessary');
  //     return;
  //   }
  //   if ((!ticket.TicketType.isRemote) && (ticket.status === 'PAID')) {
  //     setStatus('available'); 
  //     return;
  //   }
  //   if (ticket.status === 'RESERVED') {
  //     setStatus('unpaid'); 
  //     return;
  //   }
  // }, []);

  if (status === null) {
    return (
      <>
        <Title>Escolha de atividades</Title>
        <ActivitiesByDay></ActivitiesByDay>
        <Loading>
          <img src='https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif' alt={'Loading...'}></img>
        </Loading>
      </>
    );
  }

  return (
    <>
      <Title>Escolha de atividades</Title>
      {status === 'unnecessary' &&
        <OnlySubtitle>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</OnlySubtitle>
      }
      {status === 'unpaid' &&
        <OnlySubtitle>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades.</OnlySubtitle>
      }
      {status === 'available' &&
        <EventDays/>
      }   
    </>
  );
};
