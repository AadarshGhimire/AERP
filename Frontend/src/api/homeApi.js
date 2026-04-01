import apiClient from "./client";

export const getWhyChooseUs = async () => {
  const response = await apiClient.get("/whychooseus/choose-us");
  return response.data?.data || [];
};

export const getIndustries = async () => {
  const response = await apiClient.get("/industries/industries");
  return response.data || [];
};

export const getHeritage = async () => {
  const response = await apiClient.get("/heritage/AllHeritage");
  return response.data || [];
};
