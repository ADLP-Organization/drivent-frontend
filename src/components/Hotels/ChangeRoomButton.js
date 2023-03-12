import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';

export default function ChangeRoomButton({ setBookingStatus, setRoomData, hotels }) {
  async function returnRoomsPage() {
    try{
      setBookingStatus('selected');
    } catch(err) {
      alert('Ops, deu ruim');
    }
  }
  return(
    <Button onClick={() => returnRoomsPage()}>
        TROCAR DE QUARTO
    </Button>
  );
}

const Button = styled(MuiButton)`
    margin-top: 38px !important;
    width: 182px;
    height: 37px;
    left: 0px;
    top: 0px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;
