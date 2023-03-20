import styled from 'styled-components';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { CgEnter } from 'react-icons/cg';

export function CapacityIconOpen(props) {
  return( <Enroll>
    <CgEnter size={25} color={'#078632'}/>
    <OpenText>{props.vacancies} vagas</OpenText>
  </Enroll>);
}

export function CapacityIconSoldOff(props) {
  return( <Enroll>
    <BsXCircle size={25} color={'#CC6666'}/>
    <SoldOfText>Esgotado</SoldOfText>
  </Enroll>);
}

export function RegisteredIcon(props) {
  return( <Enroll>
    <BsCheckCircle size={25} color={'#078632'}/>
    <SoldOfText>Inscrito</SoldOfText>
  </Enroll>);
} 

const SoldOfText = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 10px;
font-weight: 400;
line-height: 11px;
letter-spacing: 0em;
text-align: left;
color: #CC6666;
`;

const OpenText = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 10px;
font-weight: 400;
line-height: 11px;
letter-spacing: 0em;
text-align: left;
color: #078632;
`;

const Enroll = styled.div`
height: 100%;
width: 59px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
}
`;

