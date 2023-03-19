import { useState } from 'react';
import styled from 'styled-components';
import Day from './Day';
import { Subtitle } from '../Hotels';
import ActivitiesByDay from './ActivitiesByDay';

export default function EventDays() {
  const [isClicked, setIsClicked] = useState(null);

  const days = [{
    id: 1,
    eventId: 1,
    date: '2023-01-07 03:00:00',
    createdAt: '2023-03-19 11:54:38.854',
    updatedAt: '2023-03-19 11:54:38.855',
  },
  {
    id: 2,
    eventId: 1,
    date: '2023-10-08 03:00:00',
    createdAt: '2023-03-19 11:54:38.854',
    updatedAt: '2023-03-19 11:54:38.855',
  },
  {
    id: 3,
    eventId: 1,
    date: '2023-12-25 03:00:00',
    createdAt: '2023-03-19 11:54:38.854',
    updatedAt: '2023-03-19 11:54:38.855',
  },
  ];
  console.log('dayId: ', isClicked);
  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
      <Container>
        {days.map((info) => <Day key={info.id} info={info} setIsClicked={setIsClicked} isClicked={isClicked} />)}
      </Container>
      {isClicked ? <ActivitiesByDay dayId={isClicked}/>: null}
    </>

  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
  gap: 17px;
`;
