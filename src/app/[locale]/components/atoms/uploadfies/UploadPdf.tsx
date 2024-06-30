import { Grid, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useUploadFiles } from "../../../../../../lib/auth";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

interface UploadProps {
  setUploadFileArray: any;
}

const UploadPdf: React.FC<UploadProps> = ({ setUploadFileArray }) => {
  const { mutate: uploadFiles, isPending } = useUploadFiles();
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      try {
        let data = {
          files: files[files.length - 1],
        };
        uploadFiles(data, {
          onSuccess: (data) => {
            // setIsLoading(false);
            // @ts-ignore
            setUploadFileArray((prevState) => [...prevState, data[0]]);
            setSelectedFile((prevFiles) => [
              ...prevFiles,
              ...Array.from(files),
            ]);
          },
          onError(error, variables, context) {
            // setIsLoading(false);
            // toast.error(data?.errors[0]);
            console.log({
              error,
              variables,
              context,
            });
          },
        });
      } catch (error) {}
    }
  };

  const handleFileInputClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleRemoveFile = (fileIndex: number) => {
    setSelectedFile((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  const getFileIcon = (file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return (
          <div className="p-2 border-0 rounded-md bg-[#DDB669] text-white">
            <p>{extension}</p>
          </div>
        );
      case "jpg":
      case "jpeg":
      case "png":
        return (
          <img
            src={URL.createObjectURL(file)}
            alt="Image Preview"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
        );
      case "doc":
      case "docx":
        return (
          <div className="p-2 border-0 rounded-md bg-[#DDB669] text-white">
            <p>{extension}</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646] ">
            {t("supporting")}
            <span className="mr-2 text-[#BCBDBF]">{t("optional")}</span>
          </Typography>
          <Typography className="text-font mt-[1.5px]  mr-3 text-xs text-[#808283]">
            {t("from_here")}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <div>
            {selectedFile?.map((file, index) => (
              <>
                <div className="flex mt-3 items-start justify-between w-60 px-[7px] py-[6px] border border-[#EBEDEF] rounded-md ">
                  <button onClick={() => handleRemoveFile(index)}>
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.553711"
                        width="32"
                        height="32"
                        rx="4"
                        fill="#F4F2EC"
                      />
                      <g clip-path="url(#clip0_2047_7886)">
                        <path
                          d="M23.5537 10.41L22.1437 9L16.5537 14.59L10.9637 9L9.55371 10.41L15.1437 16L9.55371 21.59L10.9637 23L16.5537 17.41L22.1437 23L23.5537 21.59L17.9637 16L23.5537 10.41Z"
                          fill="#DDB669"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2047_7886">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(4.55371 4)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <Typography className="text-font mt-2 text-xs mr-3 text-[#808283] text-center ml-3 truncate overflow-ellipsis">
                    {file.name}
                  </Typography>

                  {getFileIcon(file)}
                </div>
              </>
            ))}

           
          </div>
         
          <div
            className="text-font input mt-5 text-[10px] input-bordered w-full max-w-x text-start h-12 rounded-lg placeholder-[#BCBDBF] px-3.5 py-[6.8px] max-w-x border"
            style={{
              flex: "1",
              textAlign: "center",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center horizontally
              cursor: "pointer",
            }}
            onClick={handleFileInputClick}
          >
            <input
              type="file"
              id="fileInput"
              // accept="application/pdf"
              onChange={handleFileInputChange}
              style={{ display: "none" }}
            />
            {isPending ? (
              <div className="justify-start flex mt-6 mb-4">
                <Spinner />
              </div>
            ) : (
              <div className="absolute flex justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "auto", marginRight: "10px" }}
                >
                  <path
                    d="M23.35 14.04C22.67 10.59 19.64 8 16 8C13.11 8 10.6 9.64 9.35 12.04C6.34 12.36 4 14.91 4 18C4 21.31 6.69 24 10 24H23C25.76 24 28 21.76 28 19C28 16.36 25.95 14.22 23.35 14.04ZM23 22H10C7.79 22 6 20.21 6 18C6 15.95 7.53 14.24 9.56 14.03L10.63 13.92L11.13 12.97C12.08 11.14 13.94 10 16 10C18.62 10 20.88 11.86 21.39 14.43L21.69 15.93L23.22 16.04C24.78 16.14 26 17.45 26 19C26 20.65 24.65 22 23 22ZM12 17H14.55V20H17.45V17H20L16 13L12 17Z"
                    fill="#F0E8D7"
                  />
                </svg>
                <Typography
                  className={`text-font mt-2 text-xs text-[#DDB669] 
              text-end ${selectedLocale === "ar" ? "mr-3" : "mr-0"} `}
                >
                  {t("upload_files")}
                </Typography>
              </div>
            )}
          </div>

          
        </Grid>
      </Grid>
    </div>
  );
};

export default UploadPdf;
