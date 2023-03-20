import styled from 'styled-components';
import { BsBoxArrowInRight, BsXCircle } from 'react-icons/bs';

export function CapacityIconOpen(vacancies) {
  return( <Box>
    <BsBoxArrowInRight/>
  </Box>);
}
//capacityIconSoldOff
//capacityIconOpen
//<BsXCircle/>
const Box = styled.div`
display: flex;
justify-content: center;
max-height: 80%;
display: flex;

border-left: 1px solid #CFCFCF;
`;

const Capacity = styled.div`
background: pink;
`;

const Line = styled.div`

width: 60px;
height: 0px;
margin-top: 0;
margin-bottom: 0;
border: 1px solid #CFCFCF;
transform: rotate(-90deg);
`;

