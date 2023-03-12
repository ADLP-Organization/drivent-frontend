import { RommSeleced, Container } from '../Hotels';

export default function Booking( hotels ) {
  return (
    <Container >
      <RommSeleced >
        <img src={hotels.image} alt='Room'/>
        <h1>{hotels.name}</h1>
        <h2>Quarto reservado</h2>
        <p>101 (Double)</p>
        <h2>Pessoas no seu quarto</h2>
        <p>Você e mais 1</p>
      </RommSeleced >
    </Container>
  );
}
