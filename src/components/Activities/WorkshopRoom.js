import { toast } from 'react-toastify';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { postActivity } from '../../services/activitiesApi';
import { CapacityIconOpen, CapacityIconSoldOff, RegisteredIcon } from './CapacityIcons';

export default function WorkshopRoom({ info, userActivitiesIds, click, setClick, setData }) {
  const activitieDuration = info.hourEnd - info.hourStart;
  const token = useToken();
  
  async function activityEnroll(activityId, hourStart, hourEnd) {
    const body = {
      activityId: activityId,
      hourStart: hourStart,
      hourEnd: hourEnd
    };
    const r = await postActivity(token, body);

    if (r === 'Choose activities that take place at different times') {
      toast('Essa atividade ocorrerá no mesmo horário que outras atividades em que você está inscrito!');
      return;
    } else if (r === 'Canceled activity subscription') {
      setClick(!click);
      toast('Inscrição cancelada.');
      return;
    } else if (r === 'Enrollment in the activity done successfully') {
      setClick(!click);
      toast('Inscrição realizada com sucesso.');
      return;
    }
  }
  
  if(info.localId === 3) {
    if(userActivitiesIds.includes(info.id)) {
      return (
        <RegisteredActivity onClick={() => activityEnroll(info.id, info.hourStart, info.hourEnd)} activitieDuration={activitieDuration}>
          <ActivityContent>
            <InfosActivity>
              <SubTitle>{info.name}</SubTitle>
              <EventTime>{info.hourStart}:00 - {info.hourEnd}:00</EventTime>
            </InfosActivity>
            <RegisteredIcon vacancies={info.capacity}/>
          </ActivityContent>
        </RegisteredActivity>   
      );
    }else if(info.capacity > 0) {
      return (
        <Activity onClick={() => activityEnroll(info.id, info.hourStart, info.hourEnd)} activitieDuration={activitieDuration}>
          <ActivityContent>
            <InfosActivity>
              <SubTitle>{info.name}</SubTitle>
              <EventTime>{info.hourStart}:00 - {info.hourEnd}:00</EventTime>
            </InfosActivity>
            <CapacityIconOpen vacancies={info.capacity}/>
          </ActivityContent>
        </Activity>   
      );
    }else {
      return (
        <ActivitySoldOut activitieDuration={activitieDuration}>
          <ActivityContent>
            <InfosActivity>
              <SubTitle>{info.name}</SubTitle>
              <EventTime>{info.hourStart}:00 - {info.hourEnd}:00</EventTime>
            </InfosActivity>
            <CapacityIconSoldOff vacancies={info.capacity}/>
          </ActivityContent>
        </ActivitySoldOut>   
      );
    }
  } else { return <></>; }
}

const Activity = styled.div`
height: ${(props) => (props.activitieDuration * 79)}px;
width: 265px;
border-radius: 5px;
background-color: #F1F1F1;
margin-top: 10px;
padding-top: 10px;
margin-left: 10px;

&:hover {
  background-color: #ccc;
  cursor: pointer;cursor: pointer;
}
`;

const RegisteredActivity = styled.div`
height: ${(props) => (props.activitieDuration * 79)}px;
width: 265px;
border-radius: 5px;
background-color: #D0FFDB;
margin-top: 10px;
padding-top: 10px;
margin-left: 10px;

&:hover {
  background-color: #ccc;
  cursor: pointer;cursor: pointer;
}
`;

const ActivitySoldOut = styled.div`
height: ${(props) => (props.activitieDuration * 79)}px;
width: 265px;
border-radius: 5px;
background-color: #F1F1F1;
margin-top: 10px;
padding-top: 10px;
margin-left: 10px;
`; 

const ActivityContent = styled.div`
display: flex;
height: 95%;

`;

const InfosActivity = styled.div`
height: 100%;
width: 190px;
padding-top: 12px;
margin-left: 10px;
border-right: 1px solid #CFCFCF;
display: flex;
flex-direction: column;

`;

const SubTitle = styled.div`
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
margin-top: 10px;
`;
