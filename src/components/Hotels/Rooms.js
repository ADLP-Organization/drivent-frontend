import { BsPerson, BsPersonFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function Rooms({ info }) {
  return (
    <Room><a>{info.name}</a><BsPerson size={30} /></Room>
  );
};

const Room = styled.div`
  height: 45px;
  width: 190px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding-right: 12.28px;
  margin-bottom: 8px;
  background-color: ${(prop) => (prop.clickButton ? '#FFEED2' : '#FFFFFF')};
  color:${(prop) => (!prop.clickButton ? '' : '#FF4791')};;
  a{
    height: 23px;
    width: 35px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    text-align: center;
    color: #454545;
    margin-left:16px;
  }
`;
