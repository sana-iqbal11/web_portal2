import { sendPostRequest } from "./index";
import { BASE_URL } from "@/app/[locale]/constants";

export type LoginParams = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export async function login(params: LoginParams): Promise<LoginResponse> {
  const url = `${BASE_URL}/Account/login`;
  return sendPostRequest<LoginResponse>(url, params);
}
