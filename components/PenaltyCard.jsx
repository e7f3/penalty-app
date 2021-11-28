import { useData } from "../hooks/useData";
import { observer } from "mobx-react-lite";
import { getDate } from "../utils/getDate";

const PenaltyCard = observer(() => {
  // Получение из контекста penaltyStore
  const { penaltyStore } = useData();
  
  // Получение информации о штрафе
  const penaltyNumber = penaltyStore.penalty.number || "";
  const docNumber = penaltyStore.penalty.doc_number || "";
  const date = getDate(penaltyStore.penalty.bill_at) || "";
  const koapCode = penaltyStore.penalty.koap_code || "";
  const where = penaltyStore.penalty.payee_username || "";
  const inn = penaltyStore.penalty.payee_inn || "";
  const kpp = penaltyStore.penalty.payee_kpp || "";
  const bankAccount = penaltyStore.penalty.payee_bank_account || "";
  const bankName = penaltyStore.penalty.payee_bank_name || "";
  const bik = penaltyStore.penalty.payee_bank_bik || "";
  const oktmo = penaltyStore.penalty.payee_oktmo || "";
  const kbk = penaltyStore.penalty.kbk || "";
  const amount = penaltyStore.penalty.amount || "";
  const discount = penaltyStore.penalty.discount_at || "";
  const amountToPay = penaltyStore.penalty.amount_to_pay || "";

  return (
    <div className="penalty-card">
      <table>
        <caption className="title">Постановление #{penaltyNumber}</caption>
        <tbody>
          <tr>
            <td>Свидетельство о регистрации:</td>
            <td>{docNumber}</td>
          </tr>
          <tr>
            <td>Дата постановления:</td>
            <td>{date}</td>
          </tr>
          <tr>
            <td>Нарушение:</td>
            <td>{koapCode}</td>
          </tr>
          <tr>
            <td>Получатель платежа:</td>
            <td>{where}</td>
          </tr>
          <tr>
            <td>ИНН:</td>
            <td>{inn}</td>
          </tr>
          <tr>
            <td>КПП:</td>
            <td>{kpp}</td>
          </tr>
          <tr>
            <td>Расчётный счёт:</td>
            <td>{bankAccount}</td>
          </tr>
          <tr>
            <td>Банк получателя:</td>
            <td>{bankName}</td>
          </tr>
          <tr>
            <td>БИК:</td>
            <td>{bik}</td>
          </tr>
          <tr>
            <td>ОКТМО(ОКАТО):</td>
            <td>{oktmo}</td>
          </tr>
          <tr>
            <td>КБК:</td>
            <td>{kbk}</td>
          </tr>
          <tr>
            <td>Сумма штрафа:</td>
            <td>{amount}</td>
          </tr>
          <tr>
            <td>Скидка:</td>
            <td>{discount}</td>
          </tr>
          <tr>
            <td>К оплате:</td>
            <td>{amountToPay}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

export default PenaltyCard;
