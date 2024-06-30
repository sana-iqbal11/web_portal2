import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { backend } from "./backend";

export function useRegisterWithOtp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: backend.registerWithOtp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["USER"],
      });
    },
  });
}

export function useRequestOtp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: backend.requestOtp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PHONE"],
      });
    },
  });
}

export function useLoginWithOtp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: backend.loginWithOtp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["USER"],
      });
    },
  });
}

export function useUser() {
  return useQuery({
    queryKey: ["USER"],
    queryFn: backend.getMe,
    retry: false,
  });
}

export function useMobileRequestCategoryLanguageWise() {
  return useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: () => backend.mobileRequestCategoryLanguageWise(),
    retry: false,
  });
}

export function useRequestCount() {
  return useQuery({
    queryKey: ["REQUEST_COUNT"],
    queryFn: () => backend.getRequestCount(),
    retry: false,
  });
}

export function useUpcomingCount() {
  return useQuery({
    queryKey: ["UPCOMING_COUNT"],
    queryFn: () => backend.getUpcomingCount(),
    retry: false,
  });
}

export function useCreateMAsterRequestAqood() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: backend.masterRequestAqood,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["MASTER_REQUEST_AQOOD"],
      });
    },
  });
}

export function useUploadFiles() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: backend.uploadFiles,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["UPLOAD_FILES"],
      });
    },
  });
}

export function useCreateMAsterRequestMuzakirat() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: backend.masterRequestMuzakirat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["MASTER_REQUEST_MUZAKIRAT"],
      });
    },
  });
}

export function useCreateMAsterRequestOthers() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: backend.masterRequestOthers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["MASTER_REQUEST_OTHERS"],
      });
    },
  });
}

export function useGetPackageLanguageWise() {
  return useQuery({
    queryKey: ["GET_PACKAGES"],
    queryFn: () => backend.getPackageLanguageWise(),
    retry: false,
  });
}

export function getScheduleAvailability(
  isSelectedPackage: boolean,
  categoryId: string,
  packageId: string,
  date: string
) {
  return useQuery({
    queryKey: ["SCHEDULE_AVAILABILITY"],
    queryFn: () =>
      backend.getScheduleAvailability(
        isSelectedPackage,
        categoryId,
        packageId,
        date
      ),
    retry: false,
  });
}

// ------------REQUEST TABS API-------------

// API For new request and offers varies on RequestType

export function getNewRequestAndOffers(
  status: number,
  size: number,
  requestType: number,
  page: number
) {
  return useQuery({
    queryKey: ["REQUEST_OFFERS"],
    queryFn: () =>
      backend.getNewRequestAndOffers(status, size, requestType, page),
    retry: false,
  });
}

export function getCompletedAndUnderImplementationRequest(
  status: number,
  size: number
) {
  return useQuery({
    queryKey: ["REQUEST_OFFERS"],
    queryFn: () =>
      backend.getCompletedAndUnderImplementationRequest(status, size),
    retry: false,
  });
}

// Request Details New

export function getNewRequestDetail(masterRequestId: string) {
  return useQuery({
    queryKey: ["REQUEST_DETAILS_NEW"],
    queryFn: () => backend.getNewRequestDetail(masterRequestId),
    retry: false,
  });
}

//Request Detail UnderImplementation and Complete

export function getCompletedAndProcessingRequestDetail(
  masterRequestId: string
) {
  return useQuery({
    queryKey: ["REQUEST_DETAILS_COMPLETED"],
    queryFn: () =>
      backend.getCompletedAndProcessingRequestDetail(masterRequestId),
    retry: false,
  });
}

// ------------Appointments TABS API-------------

// API For Appointments varies on StatusId

export function getAppointments(page: number, size: number, statusId: number) {
  return useQuery({
    queryKey: ["Appointments"],
    queryFn: () => backend.getAppointments(page, size, statusId),
    retry: false,
  });
}

// API for Notifications

export function getNotifications(page: number, size: number) {
  return useQuery({
    queryKey: ["Notifications", page],
    queryFn: () => backend.getNotifications(page, size),
    retry: false,
  });
}

// API for chat

export function getChatList(page: number, size: number) {
  return useQuery({
    queryKey: ["Chat-list", page],
    queryFn: () => backend.getChatList(page, size),
    retry: false,
  });
}
export function getChat(id: string, userId: string) {
  return useQuery({
    queryKey: ["Chat-messages", id, userId],
    queryFn: () => backend.getChat(id, userId),
    retry: false,
    enabled: Boolean(id) && Boolean(userId),
  });
}

export function postChat() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["post-chat-messages"],
    mutationFn: ({
      id,
      message,
      MarkCompleted = false,
      Files,
    }: {
      id: string;
      message: string;
      MarkCompleted: boolean;
      Files?: string | string[];
    }) => {
      return backend.postMessage(id, message, MarkCompleted, Files);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Chat-messages"] });
    },
  });
}

// API for APPOINTMENTS DETAIL

export function getAppointmentsDetail(appointmentId: string) {
  return useQuery({
    queryKey: ["Appointments Detail"],
    queryFn: () => backend.getAppointmentsDetail(appointmentId),
    retry: false,
  });
}

export function cancelNewRequest(masterRequestId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => backend.cancelNewRequest(masterRequestId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["CANCEL_REQUEST"],
      }),
    retry: false,
  });
}

export function getLawyerDetail(lawyerId: string) {
  return useQuery({
    queryKey: ["LAWYER_DETAILS_NEW"],
    queryFn: () => backend.getLawyerDetails(lawyerId),
    retry: false,
  });
}
