import apiClient from "./client";

export const submitContactForm = async (payload) => {
  const response = await apiClient.post("/contact/contact", payload);
  return response.data;
};
