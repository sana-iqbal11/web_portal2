import axios from "axios";
import wretch, { Wretch } from "wretch";
import Cookies from "universal-cookie";
import { BASE_URL } from "@/app/[locale]/constants";

export interface Storage {
  removeItem(key: string): void;

  setItem(key: string, value: string | object | number | boolean): void;

  getItem(key: string): string | object | number | boolean | null;
}

export type AuthPayload = {
  result: any;
  token: string;
  errors: any;
};

export type CategoryLanguagePayload = {
  result: any;
  status: boolean;
  errors: any;
};
export type CountPayload = {
  result: any;
  status: boolean;
  errors: any;
};

export type User = {
  status: string;
  result: {
    id: string;
    userName: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    phoneNumber: string;
    status: string;
    gender: string;
    birthDate: string;
    profileImageUrl: string;
    isAvailable: boolean;
    userGPTStatus: string;
  };
};

export type RegisterWithOtpDto = {
  FirstName: string;
  LastName: string;
  CountryCode: string | number;
  PhoneNumber: string | number;
};

export type RequestOtpDto = {
  countryCode: string;
  phone: string;
};

export type LoginWithOtpDto = {
  phoneNumber: string;
  otp: string;
};

export class AuthAPI {
  private api: Wretch;
  private storage: Storage;
  private accessToken?: string;
  cookies = new Cookies(null, { path: "/" });

  constructor(storage: Storage, backendURL: string) {
    this.storage = storage;
    this.api = wretch(backendURL).middlewares([
      (next) => async (url, opts) => {
        console.log("WRETCH: ", url, opts);
        return next(url, opts);
      },
    ]);
  }

  private handleAuthHeader = async (accessToken: string) => {
    return this.api
      .catcher(401, async (error) => {
        console.error("WRETCH: 401 Unauthorized:", error);
        await this.storage.removeItem("access_token");
        throw error;
      })
      .auth(`Bearer ${accessToken}`);
  };

  setAccessToken = async (accessToken: string) => {
    this.accessToken = accessToken;
    this.cookies.set("token", accessToken);
    await this.storage.setItem("access_token", accessToken);
    localStorage.setItem("itemName", accessToken);
    return this.handleAuthHeader(accessToken);
  };

  removeAccessToken = async () => {
    await this.storage.setItem("access_token", "");
  };

  private getAccessToken = async () => {
    return await this.storage.getItem("access_token");
  };

  getAuthedApi = async () => {
    console.log("WRE: ", this.accessToken);
    return this.handleAuthHeader(
      this.accessToken || (await this.cookies.get("token"))!
    );
  };

  registerWithOtp = async (dto: FormData) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://shwraapidevops.azurewebsites.net/api/B2b/register",
      data: dto,
    };
    const response = axios.request(config);
    return (await response).data;
  };

  requestOtp = async (dto: RequestOtpDto) => {
    try {
      const response = await this.api
        .url("B2b/login")
        .post(dto)
        .json<AuthPayload>();
      return response;
    } catch (error) {
      //   handleErrors(error,"/users/requestOtp");
      return null;
    }
  };

  loginWithOtp = async (dto: LoginWithOtpDto) => {
    const user = await this.api
      .url("B2b/authenticate")
      .post(dto)
      .json<AuthPayload>();
    await this.setAccessToken(user.result.token);
    await localStorage.setItem("itemName", user.result.token);
    return user;
  };

  getMe = async () => {
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi.url("B2b/CurrentUser").get().json<User>();
      return user;
    } catch (error) {
      return null;
    }
  };
  mobileRequestCategoryLanguageWise = async () => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url("B2b/MobileRequestCategoryLanguageWise")
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CategoryLanguagePayload>();
      return user;
    } catch (error) {
      return null;
    }
  };
  getRequestCount = async () => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    try {
      const authedApi = await this.getAuthedApi();
      let CurrentUser = await this.getMe();
      const user = await authedApi
        .url(
          `B2b/GetMasterRequestApprovedCountByStatus?status=0&UserId=${CurrentUser?.result?.id}`
        )
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };
  getUpcomingCount = async () => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    try {
      const authedApi = await this.getAuthedApi();
      let CurrentUser = await this.getMe();
      const user = await authedApi
        .url(
          `B2b/AppointmentStatusWiseCountByUserId?MobileUserId=${CurrentUser?.result?.id}&Status=2`
        )
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  masterRequestAqood = async (dto: FormData) => {
    const accessToken = await this.cookies.get("token");
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${BASE_URL}B2b/MasterRequestAqood`,
      data: dto,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = axios.request(config);
    return (await response).data;
  };

  uploadFiles = async (dto: any) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Accept: "*/*",
      },
    };
    const response = axios.post(`${BASE_URL}B2b/Upload`, dto, config);
    return (await response).data;
  };

  masterRequestMuzakirat = async (dto: FormData) => {
    const accessToken = await this.cookies.get("token");
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${BASE_URL}B2b/MasterRequestMuzakirat`,
      data: dto,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = axios.request(config);
    return (await response).data;
  };
  masterRequestOthers = async (dto: FormData) => {
    const accessToken = await this.cookies.get("token");
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${BASE_URL}B2b/MasterRequestOthers`,
      data: dto,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = axios.request(config);
    return (await response).data;
  };

  getPackageLanguageWise = async () => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(`B2b/GetPackagesLanguageWise`)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  getScheduleAvailability = async (
    isSelectedPackage: boolean,
    categoryId: string,
    packageId: string,
    date: string
  ) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let urlWithPackageId = `MobileRequestCategories/availability/${categoryId}/${date}?packageId=${packageId}`;
    let urlWithoutPackageId = `MobileRequestCategories/availability/${categoryId}/${date}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(isSelectedPackage ? urlWithPackageId : urlWithoutPackageId)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  // ------------REQUEST TABS API-------------

  // API For new request and offers varies on RequestType
  getNewRequestAndOffers = async (
    status: number,
    size: number,
    requestType: number,
    page: number
  ) => {
    const userId = await this.getMe();
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/MasterRequestList/?Status=${status}&userid=${userId?.result?.id}&Size=${size}&RequestType=${requestType}&Page=${page}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  // API For completed and under implementation request varies on Status

  getCompletedAndUnderImplementationRequest = async (
    status: number,
    size: number
  ) => {
    const userId = await this.getMe();
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/MasterRequestApproved/?Status=${status}&userid=${userId?.result?.id}&Size=${size}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  // Request Details New

  getNewRequestDetail = async (masterRequestId: string) => {
    const userId = await this.getMe();
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/GetByIdMasterRequest/?MasterRequestId=${masterRequestId}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  //Request Detail UnderImplementation and Complete

  getCompletedAndProcessingRequestDetail = async (masterRequestId: string) => {
    const userId = await this.getMe();
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/MasterRequestApprovedGetById/?MasterRequestApprovedId=${masterRequestId}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  // ------------Appointments TABS API-------------

  // API For Appointments varies on StatusId

  getAppointments = async (page: number, size: number, statusId: number) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/user/?page=${page}&size=${size}&statusid=${statusId}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };

  // API for Notifications

  getNotifications = async (page: number, size: number) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `Account/Notifications?page=${page}&size=${size}`;
    try {
      const authedApi = await this.getAuthedApi();
      const notifications = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return notifications;
    } catch (error) {
      return null;
    }
  };

  // API for chat

  getChatList = async (page: number, size: number) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `Account/CustomerChatLawyerWise?page=${page}&size=${size}`;
    try {
      const authedApi = await this.getAuthedApi();
      const chat = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return chat;
    } catch (error) {
      return null;
    }
  };

  getChat = async (id: string, userId: string) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `MasterRequestApproved/MasterRequestApprovedGetById?UserId=${userId}&MasterRequestApprovedId=${id}`;
    try {
      const authedApi = await this.getAuthedApi();
      const chat = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return chat;
    } catch (error) {
      return null;
    }
  };

  postMessage = async (
    id: string,
    message: string,
    MarkCompleted = false,
    Files?: string | string[]
  ) => {
    const data = new FormData();
    data.append("MasterRequestApprovedId", id);
    data.append("Message", message);
    data.append("MarkCompleted", String(MarkCompleted));

    const accessToken = await this.cookies.get("token");
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: `${BASE_URL}MasterRequestApproved/MasterRequestApprovedChatMessage`,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axios.request(config);
    return res;
  };

  // API for APPOINTMENTS DETAIL

  getAppointmentsDetail = async (appointmentId: string) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/${appointmentId}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };
  cancelNewRequest = async (masterRequestId: string) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/CancelMasterRequest/?MasterRequestId=${masterRequestId}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .put()
        .json<CountPayload>();

      return user;
    } catch (error) {
      return null;
    }
  };

  getLawyerDetails = async (lawyerId: string) => {
    const selectedLanguage = await this.cookies.get("NEXT_LOCALE");
    let url = `B2b/GetLawyerDetailsWithCategory/${lawyerId}`;
    try {
      const authedApi = await this.getAuthedApi();
      const user = await authedApi
        .url(url)
        .headers({
          "Accept-Language": selectedLanguage === "en" ? "en-US" : "ar-SA",
        })
        .get()
        .json<CountPayload>();
      return user;
    } catch (error) {
      return null;
    }
  };
}
