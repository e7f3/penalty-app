import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "./UI/Input.jsx";
import SuggestedInput from "./SuggestedInput.jsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { checkPenalty } from "../http/penaltyAPI.js";
import { useAsync } from "../hooks/useAsync.js";
import { useData } from "../hooks/useData";
import { observer } from "mobx-react-lite";

//  Настройка yup валидации для полей формы

const schema = yup.object().shape({
  UIN: yup.string().required(),
});

const PenaltyForm = observer(() => {
  // Получение из контекста penaltyStore
  const { penaltyStore } = useData();

  // ref для сообщения о несовпадении длины УИН
  const ref = useRef();

  // Хук для работы с формой
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // Хук для отслеживания статуса, резальтата и ошибок асинхронных запросов
  const { execute, status, value, error } = useAsync(checkPenalty, false);

  // On submit выполнить запрос к API для проверки УИН
  const onSubmit = (data) => {
    penaltyStore.penaltyId = data.UIN;

    // Предупредить пользователя, если длина УИН не верна
    if (data.UIN.length !== 20 && data.UIN.length !== 25) {
      ref.current.classList.add("warning");
      setTimeout(() => {
        ref.current.classList.remove("warning");
      }, 10000);
    } else {
      ref.current.classList.remove("warning");
    }

    execute(data.UIN);
  };

  // При изменении статуса запроса изменить статус в контексте
  useEffect(() => {
    penaltyStore.fetchStatus = status;
  }, [status]);

  // В случае ошибки в результате запроса
  useEffect(() => {
    if (error) {
      if (error.response) console.log(error.response);
      else console.log(error.message);
    }
  }, [error]);

  // В случае успешного запроса
  useEffect(() => {
    if (value) {
      penaltyStore.penalty = value;
    }
  }, [value]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <SuggestedInput
        inputProps={{
          className: "input",
          placeholder: "Введите УИН",
          ...register("UIN"),
        }}
        ref={ref}
      />
      <Input className="button" type="submit" value="Найти" />
    </form>
  );
});

export default PenaltyForm;
