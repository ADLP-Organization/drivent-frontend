import { useState } from 'react';
import styled from 'styled-components';
import Day from './Day';

export default function EventDays() {
  const [isClicked, setIsClicked] = useState(null);

  const days = [{
    id: 1,
    eventId: 1,
    date: '2023-05-07 03:00:00',
    createdAt: '2023-03-19 11:54:38.854',
    updatedAt: '2023-03-19 11:54:38.855',
  },
  {
    id: 2,
    eventId: 1,
    date: '2023-05-08 03:00:00',
    createdAt: '2023-03-19 11:54:38.854',
    updatedAt: '2023-03-19 11:54:38.855',
  },
  {
    id: 3,
    eventId: 1,
    date: '2023-05-09 03:00:00',
    createdAt: '2023-03-19 11:54:38.854',
    updatedAt: '2023-03-19 11:54:38.855',
  },
  ];

  return (
    <>
      <Container>
        {days.map((info) => <Day key={info.id} info={info} setIsClicked={setIsClicked} isClicked={isClicked} />)}
      </Container>
    </>

  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
