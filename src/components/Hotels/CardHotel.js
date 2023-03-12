import { Hotel, Rooms } from '../Hotels';

export default function CardHotel({ id, image, name, setHotelId, setIsClicked, isClicked  }) {
  function selectHotel() {
    setHotelId(id);
    setIsClicked(id);
  }; 

  return (
    <Hotel id={id} isClicked={isClicked} hotelId={ id } onClick={selectHotel}>
      <img src={image} alt='Hotel'/>
      <h1>{name}</h1>
      <h2>Tipos de acomodação:</h2>
      <p>Single, Double</p>
      <h2>Vagas disponíveis:</h2>
      <p>99</p>
    </Hotel>
  );
};
