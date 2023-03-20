import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { postActivity } from '../../services/activitiesApi';
import { CgEnter } from 'react-icons/cg';
import { CapacityIconOpen, CapacityIconSoldOff } from './CapacityIcons';

export default function MainActivity({ info, setData }) {
  const activitieDuration = info.hourEnd - info.hourStart;
  console.log(activitieDuration);
  const token = useToken();
  async function activityEnroll(activityId, hourStart, hourEnd) {
    const body = {
      activityId: activityId,
      hourStart: hourStart,
      hourEnd: hourEnd
    };

    const r = await postActivity(token, body);
    console.log(r);
    if (r === 'Choose activities that take place at different times') {
      toast('Essa atividade ocorrerá no mesmo horário que outras atividades em que você está inscrito!');
      return;
    } else if (r === 'Canceled activity subscription') {
      toast('Inscrição cancelada.');
      return;
    } else if (r === 'Enrollment in the activity done successfully') {
      toast('Inscrição realizada com sucesso.');
      return;
    }
  }
  
  if(info.localId === 2) {
    if(info.capacity > 0) {
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
        <Activity activitieDuration={activitieDuration}>
          <ActivityContent>
            <InfosActivity>
              <SubTitle>{info.name}</SubTitle>
              <EventTime>{info.hourStart}:00 - {info.hourEnd}:00</EventTime>
            </InfosActivity>
            <CapacityIconSoldOff vacancies={info.capacity}/>
          </ActivityContent>
        </Activity>   
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

const Enroll = styled.div`
height: 100%;
width: 59px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

h1{
  font-family: 'Roboto', sans-serif;
font-size: 10px;
font-weight: 400;
line-height: 11px;
letter-spacing: 0em;
text-align: left;
color: #078632;

}
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
