import useToken from '../../hooks/useToken';
import { getActivitiesByDayId, postActivity } from '../../services/activitiesApi';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import MainActivity from './MainActivity';
import { useEffect, useState } from 'react';
import SecondaryActivities from './SecondaryActivities';
import WorkshopRoom from './WorkshopRoom';

export default function ActivitiesByDay({ dayId }) {
  const token = useToken();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getActivities() {
      const r = await getActivitiesByDayId(token, dayId);
      setData(r);
      
      return r;
    }
    getActivities();
  }, [dayId]);
  console.log(data);
  return (
    <>
      <ActivitiesContainer>
        <ActivitiesLocal>
          <Title>Auditório Principal</Title>
          <SelectActivity>
            {data.map((info) => <MainActivity info={info} setData={setData}/>)}
          </SelectActivity>
        </ActivitiesLocal>
    
        <ActivitiesLocal>
          <Title>Auditório Lateral</Title>
          <SelectActivity>
            {data.map((info) => <SecondaryActivities info={info} setData={setData}/>)}
          </SelectActivity>
        </ActivitiesLocal>
      
        <ActivitiesLocal>
          <Title>Sala de Workshop</Title>
          <SelectActivity>
            {data.map((info) => <WorkshopRoom info={info} setData={setData}/>)}
          </SelectActivity>
        </ActivitiesLocal>
      </ActivitiesContainer>     
    </>
  );
}
const ActivitiesContainer = styled.div`
display: flex;
flex-wrap: wrap;

`;

const ActivitiesLocal = styled.div`

`;

const Title = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 17px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #7B7B7B;

`;

const SelectActivity = styled.div`
height: 391px;
width: 288px;
border: 1px solid #CECECE;
overflow: scroll;
::-webkit-scrollbar {
    width: 4px;
}
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}
`;
