import styled from 'styled-components';
import { toast } from 'react-toastify';
import { postTicketAPI } from '../../services/ticketApi';
import useToken from '../../hooks/useToken';

export default function TicketSummary({ setTicketStatus, ticketTypeData, setTicketId, ticketId }) {
  const token = useToken();
  const body = {
    ticketTypeId: ticketTypeData.id
  };
  const price = ticketTypeData.price;
  
  async function createTicket() {
    try {
      const res = await postTicketAPI(body, token); 
      setTicketId(res.id);
      setTicketStatus('reserved');   
      toast('Informações salvas com sucesso!');      
    } catch(err) {
      toast('Ops! Algo deu errado.');
      console.log(err.message);
    }
  }

  return (
    <>
      <Summary>
        <h2>Fechado! O total ficou em <strong>R${price}</strong> agora é só confirmar.</h2>
      </Summary>
      <Button onClick={createTicket}>
        <h2>RESERVAR INGRESSO</h2>
      </Button>
    </>    
  );
}

const Button = styled.button`
  width: 170px;
  height: 37px;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
  background-color: #e0e0e0;

  &:hover {
    background-color: #ccc;
  }

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }

  & > *:first-child {
    font-size: 14px;
    color: #000000;
  }

  @media (max-width: 600px) {
    height: 80px;
  }
`;

const Summary = styled.div`
  margin-top:20px;
  margin-bottom: 17px;

  h2 {
    font-size: 20px;
    color: #8E8E8E;
  }
`;

