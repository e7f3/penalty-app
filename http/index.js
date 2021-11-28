import axios from "axios";

/*  Конфигурация axios */

const $host = axios.create({
  baseURL: process.env.API_URL,
});

export { $host };
