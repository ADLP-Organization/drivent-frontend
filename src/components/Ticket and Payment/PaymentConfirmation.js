import styled from 'styled-components';
import { FcOk } from 'react-icons/fc';

export default function PaymentConfirmation() {
  return (
    <>
      <Confirmation>
        <h2>Pagamento</h2>
        <BoxConfirmation>
          <FcOk style={{ fontSize: '40px' }}/>
          <Text>
            <p><strong>Pagamento confirmado!</strong></p>
            <p>Prossiga para escolha de hospedagem e/ou atividades</p>
          </Text>  
        </BoxConfirmation>         
      </Confirmation> 
    </>       
  );
}

const Confirmation = styled.div`
  color: #454545;
  font-size: 16px;
  line-height: 19px;
  font-size: 20px;

  h2 {
    font-size: 20px;
    color: #8E8E8E;
    margin: 10px 0;
  }
`;

const BoxConfirmation = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px; 
  margin-left: 10px;
  font-size: 16px;
`;
