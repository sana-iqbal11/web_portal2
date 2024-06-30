import { sendGetRequest } from "./index";
import { BASE_URL } from "@/app/[locale]/constants";

export type User = {
  id: string;
  name: string;
  email: string;
  is_guest: boolean;
  created_at: string;
  updated_at: string;
};

export async function getUserByJwt(jwtToken: string): Promise<User> {
  const url = `${BASE_URL}/users/me`;
  return sendGetRequest<User>(url, jwtToken);
}
