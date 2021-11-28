import { $host } from "./index";

export const checkPenalty = async (penaltyId) => {
  const response = await $host.get(`/fines/${penaltyId}`);
  return response.data;
};
