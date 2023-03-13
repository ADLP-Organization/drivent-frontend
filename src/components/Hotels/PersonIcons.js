import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { Icon } from './Rooms';

export default function PersonIcons({ vacancies, placesOccupied, setColor, isClicked, id }) {
  let roomDescription = [];

  if (vacancies === 0) {
    setColor('#E9E9E9');
  } else {
    for (let i = 0; i < vacancies; i++) {
      if( i === 0 ) {
        roomDescription.push(<Icon isClicked={isClicked} id={id}><BsPerson size={30} /></Icon>);
      }else {
        roomDescription.push(<Icon><BsPerson size={30} /></Icon>);
      }; 
    }

    for (let j = 0; j < placesOccupied; j++) {
      roomDescription.push(<BsPersonFill size={30}/>);
    }
  }
  return (
    <></>
  );
}
