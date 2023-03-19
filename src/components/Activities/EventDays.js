import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Day from './Day';
import { Subtitle, Loading  } from '../Hotels';
import ActivitiesByDay from './ActivitiesByDay';
import useToken from '../../hooks/useToken';
import { getDays } from '../../services/activitiesApi';

export default function EventDays() {
  const token = useToken();
  const [isClicked, setIsClicked] = useState(null);
  const [eventDays, setEventDays] = useState(null);

  useEffect(() => {
    async function DaysList() {
      try {
        const result = await getDays(token);
        console.log(result);
        setEventDays(result);
      } catch (err) {
        // eslint-disable-next-line no-undef
        toast('Ops! Algo deu errado.');
        // eslint-disable-next-line
        console.log(err.message);
      }
    }
    DaysList();
  }, []);

  if (eventDays === null) {
    return (
      <>
        <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
        <Loading>
          <img src='https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif' alt={'Loading...'}></img>
        </Loading>
      </>
    );
  } else {
    return (
      <>
        <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
  
        <Container>
          {eventDays.map((info) => <Day key={info.id} info={info} setIsClicked={setIsClicked} isClicked={isClicked} />)}
        </Container>
        {isClicked ? <ActivitiesByDay dayId={isClicked}/>: null}
  
      </>
  
    );
  }
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
  gap: 17px;
`;
