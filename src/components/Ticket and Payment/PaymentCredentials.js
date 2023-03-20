import React from 'react';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import useToken from '../../hooks/useToken';
import { processPayment } from '../../services/paymentApi';
import { toast } from 'react-toastify';

let submitData = {
  cvc: '',
  expiry: '',
  name: '',
  number: '',
  issuer: '',
};
export class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    issuer: '',
  };

  handleCallback = ({ issuer }) => {
    this.setState({ issuer });
    if (typeof issuer === 'string' && issuer !== 'unknown');
    submitData.issuer = issuer;
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'number') {
      submitData.number = value;
    } else if (name === 'name') {
      submitData.name = value;
    } else if (name === 'cvc') {
      submitData.cvc = value;
    } else if (name === 'expiry') {
      submitData.expiry = value;
    }
    this.setState({ [name]: value });
  };

  render() {
    return (
      <PaymentFormContainer id="PaymentForm">

        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
          callback={this.handleCallback}
        />

        <form>
          <InputsContainer>
            <div>
              <GenericInput
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
                pattern='[\d| ]{16,22}'
                maxLength='19'
              />
            </div> 
            <Tip>E.g.: 49..., 51..., 36..., 37...</Tip>
            <br />
            <div>
              <GenericInput
                type="tel"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
                pattern='[a-z A-Z-]+'
              />
            </div>

            <div>
              <ExpiryInput
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
                maxLength='4'
              />
              <CvcInput
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
                maxLength='3'
              />
            </div>
          </InputsContainer>
        </form>
      </PaymentFormContainer>
    );
  }
}

export default function PaymentCredentials({ setTicketStatus, ticketId }) {
  const token = useToken();

  async function registerPayment() {
    const body = {
      ticketId: ticketId,
      cardData: {
        issuer: submitData.issuer,
        number: submitData.number,
        name: submitData.name,
        expirationDate: Date,
        cvv: submitData.cvc
      }
    };

    if(
      body.cardData.name === '' || 
      body.cardData.number === '' || 
      body.cardData.cvv === '' || 
      body.cardData.issuer === '' ||
      body.cardData.expirationDate === '') {
      toast('Preencha todos os campos');
      return;
    }
    try {
      await processPayment(token, body); 
      setTicketStatus('paid');      
      toast('Pagamento realizado com sucesso!');      
    } catch(err) {
      toast('Ops! Algo deu errado.');
      console.log(err.message);
    }
  }

  return (
    <>
      <Subtitle>Pagamento</Subtitle>
      <Payment>
        <PaymentForm />
        <SubmitButton
          onClick={registerPayment}
        >FINALIZAR PAGAMENTO</SubmitButton>
      </Payment>

    </>
  );
}

const Payment = styled.div`
  display: column;
  align-items: center;
  justify-content: center;
`;

const PaymentFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

const SubmitButton = styled.button`
  width: 182px;
  height: 37px;
  background: #E0E0E0;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

const InputsContainer = styled.div`
  display: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
`;

const Subtitle = styled.div`
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

const GenericInput = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
`;

const ExpiryInput = styled.input`
  height: 30px;
  border-radius: 5px;
  width: 170px;
  margin-right: 10px;
  margin-top: 10px;
`;
const CvcInput = styled.input`
  height: 30px;
  border-radius: 5px;
  width: 80px;
  border-color: grey;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Tip = styled.small`
  font-size: 15px;
  color: grey;
  margin-bottom: 15px;
`;
