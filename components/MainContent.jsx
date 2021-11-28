import PenaltyForm from "./PenaltyForm.jsx";
import { observer } from "mobx-react-lite";
import Penalty from "./Penalty.jsx";

const MainContent = observer(({ props }) => {
  return (
    <div className="main__content">
      <h1 className="title">Получение информации о штрафе по УИН</h1>
      <PenaltyForm />
      <Penalty />
    </div>
  );
});
export default MainContent;
