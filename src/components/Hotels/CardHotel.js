import styled from 'styled-components';

export default function CardHotel({ id, image, name, setHotelId, hotelId }) {
  return (
    <Hotel id={id} onClick={() => setHotelId(id)}>
      <img src={image} alt='Hotel'/>
      <h1>{name}</h1>
      <h2>Tipos de acomodação:</h2>
      <p>Single, Double</p>
      <h2>Vagas disponíveis:</h2>
      <p>99</p>
    </Hotel>
  );
};

const Hotel = styled.div`
width: 196px;
height: 264px;
border-radius: 10px;
background-color: #EBEBEB;
margin-right: 15px;
margin-bottom: 15px;
font-family: 'Roboto', sans-serif;
font-style: normal;
padding: 10px;
position: absolute;
&:hover {
  cursor: pointer;
  background-color: #ccc;
}
&> *:nth-child(4) {
  margin-bottom: 10px;
}
h1 {
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #343434;
  width: 100%;
  margin: 10px 0px;
}
h2 {
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #3C3C3C;
  width: 100%;
}
p {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3C3C3C;
  margin: 5px 0px;
}
img {
  width: 168px;
  height: 109px;
  border-radius: 5px;
  position: relative;
  left: 5px;
  top: 5px;
}
`;

const Rooms = styled.div`
`;
