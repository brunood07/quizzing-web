import { api } from "../services/api";

type CreateProfileData = {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  document: string;
  password: string;
};

type CreateProfileResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  document: string;
  password: string;
  createdAt: string;
};

export function useProfile() {
  async function createProfile(
    data: CreateProfileData
  ): Promise<CreateProfileResponse> {
    const { data: createResponse } = await api.post("/users/", data);
    return createResponse;
  }

  return { createProfile };
}
