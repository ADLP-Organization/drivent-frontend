import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { postTicketAPI } from '../../services/ticketApi';
import useToken from '../../hooks/useToken';

export default function OnlineTicketSummary({ active }) {
  const navigate = useNavigate();
  const token = useToken();
  const body = {
    ticketTypeId: 1 //context ticketType.id
  };
  const price = 1000; //context ticketType.price

  async function createTicket() {
    try {
      const result = await postTicketAPI(body, token);
      if (result) {
        navigate('dashboard/payments');
      }
    } catch(err) {
      alert(err);
    }
  }

  return (
    <>
      <Summary>
        <h2>Fechado! O total ficou em <strong>${price}</strong> agora é só confirmar.</h2>
      </Summary>
      <Button active={active} onClick={createTicket}>
        <h2>RESERVAR INGRESSO</h2>
      </Button>
    </>    
  );
}

const Button = styled.button`
  width: 162px;
  height: 37px;
  border: none;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;

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
  margin-bottom: 25px;

  h2 {
    font-size: 20px;
    color: #8E8E8E;
  }
`;

