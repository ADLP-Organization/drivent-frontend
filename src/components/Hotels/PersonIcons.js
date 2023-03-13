import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { Icon } from './Rooms';

export default function PersonIcons({ vacancies, placesOccupied, setColor, isClicked, id }) {
  let roomDescription = [];

  if (vacancies === 0) {
    setColor('#E9E9E9');
    for (let j = 0; j < placesOccupied; j++) {
      roomDescription.push(<BsPersonFill size={30}/>);
    }
  } else { for (let i = 0; i < vacancies; i++) {
    if( i === (vacancies -1) && isClicked === id) {
      roomDescription.push(<Icon isClicked={isClicked} id={id}><BsPersonFill size={30} /></Icon>);
    }else {
      roomDescription.push(<Icon isClicked={isClicked} id={0}><BsPerson size={30} /></Icon>);
    }; 
  }
  for (let j = 0; j < placesOccupied; j++) {
    roomDescription.push(<BsPersonFill size={30} />);
  }
  }
  return (
    <>{roomDescription}</>
  );
}

