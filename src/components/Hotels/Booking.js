import { RommSeleced, Container } from '../Hotels';
import ChangeRoomButton from './ChangeRoomButton';

export default function Booking( { hotels, roomData, setBookingStatus, setRoomData }) {
  let typeRoom;

  if (roomData.capacity === 1) typeRoom = 'Single';
  if (roomData.capacity === 2) typeRoom = 'Double';
  if (roomData.capacity === 3) typeRoom = 'Triple';
  
  return (
    <Container >
      <RommSeleced >
        <img src={hotels[0].image} alt='Room'/>
        <h1>{hotels[0].name}</h1>
        <h2>Quarto reservado</h2>
        <p>{`${roomData.name} (${typeRoom})`}</p>
        <h2>Pessoas no seu quarto</h2>
        <p>{typeRoom === 'Single'? 'Apenas você': `Você e mais ${roomData.capacity - 1}`}</p>
      </RommSeleced >
      <ChangeRoomButton 
        setBookingStatus={setBookingStatus}
        setRoomData={setRoomData}
        roomData={roomData}
      />
    </Container>
  );
}
