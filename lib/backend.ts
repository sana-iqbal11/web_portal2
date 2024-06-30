import secureLocalStorage from "react-secure-storage";
import { AuthAPI } from "./api";
import { BASE_URL } from "@/app/[locale]/constants";

const backendURL = BASE_URL;
export const IMAGE_URL =
  "https://shwraapidevops.azurewebsites.net/api/Files/DownloadFile?fileName=";
export const backend = new AuthAPI(secureLocalStorage, backendURL);
console.log({ backendURL });
