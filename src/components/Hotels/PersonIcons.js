import { BsPerson, BsPersonFill } from 'react-icons/bs';

export default function PersonIcons({ vacancies, placesOccupied, setColor }) {
  let roomDescription = [];

  if (vacancies === 0) {
    setColor('#E9E9E9');
  } else {
    for (let i = 0; i < vacancies; i++) {
      roomDescription.push(<BsPerson size={30} />);
    }

    for (let j = 0; j < placesOccupied; j++) {
      roomDescription.push(<BsPersonFill size={30}/>);
    }
  }
  return (
    <>
    </>
  );
}
