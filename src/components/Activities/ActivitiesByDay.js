import useToken from '../../hooks/useToken';
import { getActivitiesByDayId, postActivity } from '../../services/activitiesApi';
import styled from 'styled-components';

export default function ActivitiesByDay({ dayId }) {
  const token = useToken();
  async function activityEnroll(activityId) {
    const body = {
      activityId: activityId,
      hourStart: 9,
      hourEnd: 10
    };

    const r = await postActivity(token, body);
    console.log(r);
    //status do retorno definirá se haverá mensagem de choque de horário
  }
  async function getActivities() {
    return await getActivitiesByDayId(token, dayId);
  }
  getActivities();
  return (

    <ActivitiesContainer>
      <ActivitiesLocal>
        <Title>Auditório Principal</Title>
        <SelectActivity>
          <Activity onClick={() => activityEnroll(1)}>
            <ActivityContent>
              <SubTitle>Minecraft: montando o PC ideal</SubTitle>
              <EventTime>09:00 - 10:00</EventTime>
            </ActivityContent>
          </Activity>
        </SelectActivity>
      </ActivitiesLocal>

      <ActivitiesLocal>
        <Title>Auditório Lateral</Title>
        <SelectActivity>
          <Activity>
            <ActivityContent>
              <SubTitle>Minecraft: montando o PC ideal</SubTitle>
              <EventTime>09:00 - 10:00</EventTime>
            </ActivityContent>
          </Activity>
        </SelectActivity>
      </ActivitiesLocal>

      <ActivitiesLocal>
        <Title>Sala de Workshop</Title>
        <SelectActivity>
          <Activity>
            <ActivityContent>
              <SubTitle>Minecraft: montando o PC ideal</SubTitle>
              <EventTime>09:00 - 10:00</EventTime>
            </ActivityContent>
          </Activity>
        </SelectActivity>
      </ActivitiesLocal>
    </ActivitiesContainer>
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

`;

const Activity = styled.div`
height: 79px;
width: 265px;
border-radius: 5px;
background-color: #F1F1F1;
margin-top: 10px;
margin-left: 10px;

&:hover {
  background-color: #ccc;
  cursor: pointer;cursor: pointer;
}
`;

const ActivityContent = styled.div`
height: 79px;
width: 190px;
padding-top: 12px;
margin-left: 10px;
display: flex;
flex-direction: column;
`;
const SubTitle = styled.div`
height: 14px;
width: 190px;
font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
text-align: left;


`;

const EventTime = styled.div`
height: 14px;
width: 80px;
font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
margin-top: 6px;
`;

const Capacity = styled.div`
`;
