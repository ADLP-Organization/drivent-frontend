import styled from 'styled-components';

export const AllHotels = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
`;

export const Hotel = styled.div`
width: 196px;
height: 264px;
border-radius: 10px;
background-color: ${(props) => (props.isClicked === props.hotelId ? '#FFEED2' : '#F1F1F1')};
margin-right: 15px;
margin-bottom: 15px;
font-family: 'Roboto', sans-serif;
font-style: normal;
padding: 10px;

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

export const RommSeleced = styled.div`
width: 196px;
height: 264px;
border-radius: 10px;
background-color: #FFEED2;
margin-right: 15px;
margin-bottom: 15px;
font-family: 'Roboto', sans-serif;
font-style: normal;
padding: 10px;

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

export const Container = styled.div`
width: 100%;
height: auto;
`;

export const Rooms = styled.div`
`;

export const Title = styled.div`
height: 40px;
font-family: 'Roboto', sans-serif;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 25px;
`;

export const Subtitle = styled.div`
height: 23px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-bottom: 20px;
`;

export const Loading = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50vh;
  img {
    height: 170px;
  }
`;
