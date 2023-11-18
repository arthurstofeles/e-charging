import { apiInstance } from "@/utils/api-instance";
import { ENDPOINTS } from "@/utils/constants";

export const login = async (payload) => {
  const { data } = await apiInstance.post(ENDPOINTS.LOGIN, payload);
  return data;
};

export const installations = async () => {
  const { data } = await apiInstance.get(ENDPOINTS.INSTALLATIONS);
  return data;
};

export const faturas = async (id) => {
  const { data } = await apiInstance.get(ENDPOINTS.FATURAS + '?installation=' + id);
  return data;
};

export const lead = async (payload) => {
  const { data } = await apiInstance.post(ENDPOINTS.LEAD, payload);
  return data;
};

