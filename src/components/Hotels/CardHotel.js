import { useState } from 'react';
import { Hotel, Rooms } from '../Hotels';

export default function CardHotel({ id, image, name, setHotelId, setBookingStatus }) {
  const [isClicked, setIsClicked] = useState(false);

  function selectHotel() {
    setBookingStatus('selected');
    setHotelId(id);
    setIsClicked(!isClicked);
  }; 

  return (
    <Hotel id={id} isClicked={isClicked} onClick={selectHotel}>
      <img src={image} alt='Hotel'/>
      <h1>{name}</h1>
      <h2>Tipos de acomodação:</h2>
      <p>Single, Double</p>
      <h2>Vagas disponíveis:</h2>
      <p>99</p>
    </Hotel>
  );
};
