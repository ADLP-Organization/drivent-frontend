import { Hotel } from '../Hotels';

export default function CardHotel({ id, image, name, setHotelId, setIsClicked, isClicked, roomTypes, capacity, hotels  }) {
  let vaccancy;
  let stringTypes = '';

  function selectHotel() {
    setHotelId(id);
    setIsClicked(id);
  }; 

  roomTypesByHotel(id);
  busyRooms(id);

  function roomTypesByHotel(id) {
    const rooms = (roomTypes.filter(hotel => hotel.hotelId === id));
    if (rooms.some(r => r.capacity === 1)) stringTypes += 'Single';
    if (rooms.some(r => r.capacity === 2)) stringTypes.length>0 ? stringTypes += ', Double' : stringTypes += 'Double';
    if (rooms.some(r => r.capacity === 3)) stringTypes.length>0 ? stringTypes += ', Triple' : stringTypes += 'Triple';
    
    return stringTypes;
  };

  function busyRooms(id) {
    if (capacity) capacity = ((capacity.filter(hotel => hotel.hotelId === id))[0]._sum.capacity); 
    let occupancy  = 0;
    const rooms  = hotels.filter(hotel => hotel.id === id).map((room) => { return room.Rooms;} )[0];
    rooms.map((room) => occupancy  += (room.Booking.length));
    vaccancy = capacity - occupancy;

    return vaccancy;
  };

  return (
    <Hotel id={id} isClicked={isClicked} hotelId={ id } onClick={selectHotel}>
      <img src={image} alt='Hotel'/>
      <h1>{name}</h1>
      <h2>Tipos de acomodação:</h2>
      <p>{stringTypes}</p>
      <h2>Vagas disponíveis:</h2>
      <p>{vaccancy}</p>
    </Hotel>
  );
};
