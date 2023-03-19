import styled from 'styled-components';
import useToken from '../../hooks/useToken';

export default function Day({ info, setIsClicked, isClicked }) {
  const dateInMs = new Date(info.date);
  const daysOfTheWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const dayOfWeek = daysOfTheWeek[dateInMs.getDay()];
  const dayOfTheMonth =  dateInMs.getDate() >= 10? dateInMs.getDate(): ('0' + dateInMs.getDate() );
  const monthOfTheYear = dateInMs.getMonth() + 1 >= 10  ? dateInMs.getMonth() + 1 : ('0' + (dateInMs.getMonth() +1) );
  const data = `${dayOfWeek}, ${dayOfTheMonth}/${monthOfTheYear}`;
  function selectDay() {
    setIsClicked(info.id);
  }
  return (
    <DayContainer onClick={selectDay} isClicked={isClicked} id={info.id}>
      <span>{data}</span>
    </DayContainer>
  );
}

const DayContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 131px;
    height: 37px;
    background-color: ${(props) => (props.isClicked === props.id? '#FFD37D' : '#E0E0E0')};
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    &:hover {
        background-color:'#ccc';
    }
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
}
`;
