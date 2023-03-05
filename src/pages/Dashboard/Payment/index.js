import PaymentConfirmation from '../../../components/Ticket and Payment/PaymentConfirmation';
import SelectionTicketType from '../../../components/Ticket and Payment/SelectionType';

export default function Payment() {
  return (<>
    <SelectionTicketType />
    <PaymentConfirmation />
  </>
  );
}
