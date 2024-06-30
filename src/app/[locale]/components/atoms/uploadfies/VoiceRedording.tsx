import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MicIcon from "/public/MicIcon.png";
import Image from "next/image";
import { FaPause, FaPlay, FaRegPauseCircle } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useTranslations } from "next-intl";
import { FaRegCirclePause } from "react-icons/fa6";
// @ts-ignore

export default function VoiceRedording() {
  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
  };

  const t = useTranslations("Appointments");
  const [activeAudio, setActiveAudio] = useState("");
  const [audioPlaying, setAudioPlaying] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<any>([]);
  const mediaRecorderRef = useRef<any>(null);

  let startTime: any;
  let endTime: any;

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const chunks: any = [];

        mediaRecorderRef.current = mediaRecorder;
        startTime = Date.now();
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
          endTime = Date.now();
        };

        mediaRecorder.onstop = async () => {
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          const audioURL = window.URL.createObjectURL(blob);

          const durationInSeconds = (endTime - startTime) / 1000;

          setRecordedAudio([
            ...recordedAudio,
            {
              audioSrc: audioURL,
              audioLength: formatTime(durationInSeconds),
            },
          ]);
        };

        setTimeout(() => {
          if (mediaRecorder.state !== "inactive") {
            mediaRecorder.stop();
            setIsRecording(false);
          }
        }, 1000 * 60);

        mediaRecorder.start();
        setIsRecording(true);
      })
      .catch((error) => {
        alert("Error accessing microphone:");
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    }
  };

  function toggleAudioPlayHandler(id: string) {
    const audioElement = document.getElementById(id) as HTMLAudioElement | null;
    if (audioPlaying) {
      audioElement?.pause();
      setAudioPlaying(false);
    } else {
      audioElement?.play();
      setAudioPlaying(true);
    }
    setActiveAudio(id);
  }
  function deleteAudioHandler(id: any) {
    setRecordedAudio(recordedAudio.filter((data: any) => data != id));
  }

  return (
    <div className="border border-[#87959A] rounded-[6px] px-4 py-2 mb-6 flex justify-between  flex-col ">
      <Box
        display={"flex"}
        flexDirection={"row-reverse"}
        alignItems={"center"}
        width={"100%"}
        // gap={4}
        justifyContent={"space-between"}
      >
        {/* {isRecording &&
     <div className="bg-gray-300 mt-2 h-5 flex items-end px-2 rounded-lg">
     <p className="animate-bounce text-white">.......</p>
     </div>
     } */}

        {!isRecording ? (
          <Stack
            onClick={startRecording}
            className=" rounded-full cursor-pointer"
            justifyContent={"center"}
            alignItems={"center"}
            width={"40px"}
            height={"40px"}
            bgcolor={"#F4F2EC"}
          >
            <Image
              style={{
                width: "14px",
                height: "19px",
              }}
              src={MicIcon}
              alt="Mic"
            />
          </Stack>
        ) : (
          <IconButton
            className=" rounded-full cursor-pointer"
            sx={{
              width: "40px",
              height: "40px",
            }}
            onClick={stopRecording}
          >
            <FaRegCirclePause size={22} color="var(--tertiary-color)" />
          </IconButton>
        )}

        <Typography
          color={"var(--tertiary-color)"}
          fontSize={"14px"}
          //  className="md:mt-2"
        >
          {t("You_will_find_all_the_information_in_the_audio_recording")}
        </Typography>
      </Box>

      <Box>
        {recordedAudio &&
          recordedAudio.map((data: any, ind: number) => {
            return (
              <div key={ind}>
                <audio
                  className=" hidden"
                  id={data}
                  src={data.audioSrc}
                  onEnded={() => setAudioPlaying(false)}
                  key={ind}
                  controls
                />

                <Box
                  my={2}
                  height={"47px"}
                  className="flex justify-between items-center border border-[var(--tertiary-color)] rounded-[8px] gap-2 px-1 w-[100%] md:w-[300px]"
                >
                  <Typography fontSize={"11px"}>المقطع {ind + 1}</Typography>

                  <IconButton
                    onClick={() => toggleAudioPlayHandler(data)}
                    sx={{
                      width: 30,
                      height: 30,
                    }}
                  >
                    {audioPlaying && activeAudio == data ? (
                      <FaPause size={22} color="var(--tertiary-color)" />
                    ) : (
                      <FaPlay
                        style={{ transform: "rotate(180deg)" }}
                        size={22}
                        color="var(--tertiary-color)"
                      />
                    )}
                  </IconButton>

                  <Box className="wave-container">
                    <div
                      className={`wave ${
                        audioPlaying && activeAudio == data ? "block" : "hidden"
                      }`}
                    ></div>
                  </Box>
                  <Typography fontSize={"11px"}>{data.audioLength}</Typography>
                  <IconButton
                    onClick={() => deleteAudioHandler(data)}
                    sx={{
                      width: 40,
                      height: 40,
                    }}
                  >
                    <ImCancelCircle size={26} color="var(--tertiary-color)" />
                  </IconButton>
                </Box>
              </div>
            );
          })}
      </Box>
    </div>
  );
}

// "https://www.kozco.com/tech/piano2.wav"
