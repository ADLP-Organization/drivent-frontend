import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import { postTicket } from '../../services/ticketApi';
import useToken from '../../hooks/useToken';
import { processPayment } from '../../services/paymentApi';

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
              <input
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
            <div>
              <input
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
              <input
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
                maxLength='4'
              />
              <input
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

export default function PaymentCredentials({ ticketTypeData }) {
  const token = useToken();
  // const body = {
  //   ticketId: 41,
  //   cardData: {
  //     issuer: submitData.issuer,
  //     number: submitData.number,
  //     name: submitData.name,
  //     expirationDate: Date,
  //     cvv: submitData.cvc
  //   }
  // };
  const body = {
    ticketId: 41,
    cardData: {
      issuer: submitData.issuer,
      number: submitData.number,
      name: submitData.name,
      expirationDate: Date,
      cvv: submitData.cvc
    }
  };
  async function submit() {
    try {
      await processPayment(token, body);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Payment>
        <PaymentForm />
        <SubmitButton
          onClick={submit}
        >FINALIZAR PAGAMENTO</SubmitButton>
      </Payment>

    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

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
  }

`;

const InputsContainer = styled.div`
  display: column;
  align-items: center;
  justify-content: center;
  width: 400px;
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
