import useToken from '../../hooks/useToken';
import { postActivity } from '../../services/activitiesApi';

export default function ActivitiesByDay() {
  const token = useToken();
  async function testeInscreverEmAtividade() {
    const body = {

    };

    await postActivity();
  }
  return (
    'oi, aqui é pra selecionar a atividade'
  );
};
