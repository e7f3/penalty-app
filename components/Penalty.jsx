import { observer } from "mobx-react-lite";
import { useData } from "../hooks/useData";
import Loader from "react-loader-spinner";
import Image from "next/image";
import PenaltyCard from "../components/PenaltyCard";

const Penalty = observer(() => {
  // Получение из контекста penaltyStore
  const { penaltyStore } = useData();

  // В случае если статус запроса pending - отобразить колесо загрузки
  if (penaltyStore.fetchStatus === "pending") {
    return (
      <div className="penalty penalty--loading">
        <Loader type="Oval" color="#000000" height={77} width={77} />
        <span>Загрузка</span>
      </div>
    );
  }

  // В случае если статус запроса error - отобразить сообщение об ошибке
  if (penaltyStore.fetchStatus === "error") {
    return (
      <div className="penalty penalty--not-found">
        <Image src="/not_found.svg" alt="Not found" width="92" height="92" />
        <span>Штраф {penaltyStore.penaltyId} не найден</span>
      </div>
    );
  }

  // В случае если статус запроса success - отобразить PenaltyCard
  if (penaltyStore.fetchStatus === "success") {
    return <PenaltyCard />;
  }
  
  return <></>;
});
export default Penalty;
