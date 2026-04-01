import apiClient from "./client";

export const getStories = async () => {
  const response = await apiClient.get("/story/story");
  return response.data || [];
};

export const getVisions = async () => {
  const response = await apiClient.get("/vision/getvisions");
  return response.data || [];
};

export const getPrinciples = async () => {
  const response = await apiClient.get("/principles/getAll");
  return response.data || [];
};

export const getApproach = async () => {
  const response = await apiClient.get("/approach/getapproach");
  return response.data?.data || [];
};