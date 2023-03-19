import styled from 'styled-components';
import useToken from '../../hooks/useToken';

export default function Day({ info, setIsClicked, isClicked }) {
  const daysOfTheWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const day = info.date.getDay();
  const data = `${daysOfTheWeek[day]}, ${info.date.format('DD:MM')}`;

  return (
    <DayContainer onClick={ () => setIsClicked(info.id)} isClicked={isClicked} id={info.id}>
      {data}
    </DayContainer>
  );
}

const DayContainer= styled.div`
    width: 131px;
    height: 37px;
    background-color: ${(props) => (props.isClicked === props.id? '#FFD37D' : '#E0E0E0')};
    cursor: pointer;
    &:hover {
        background-color:'#ccc';

}
`;
