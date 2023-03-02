import styled from 'styled-components';

export default function BookingSummary({ active }) {
  return (
    <>
      <Summary>
        <h2>Fechado! O total ficou em <strong>XXXXX</strong> agora é só confirmar.</h2>
      </Summary>
      <Button active={active}>
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

