"use client";
import "regenerator-runtime/runtime";
import React, { useState, useRef, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useLocale, useTranslations } from "next-intl";
import micSvg from "/public/speech/mic.svg";
import Image from "next/image";
import { useUploadFiles } from "../../../../../lib/auth";

const SpeechToText = ({
  placeHolder,
  handleResult,
  setText,
  text,
}: {
  placeHolder?: string;
  handleResult?: any;
  setText: any;
  text: string;
}) => {
  const t = useTranslations("speechToText");
  const [mounted, setMounted] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const inputRef = useRef<any>(null);
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [audio, setAudio] = useState<null | string>();
  const {
    mutate: uploadFiles,
    isPending,
    error: uploadError,
  } = useUploadFiles();

  const startRecording = () => {
    setAudio(null);
    setText("");
    resetTranscript();

    SpeechRecognition.startListening({ continuous: true });

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setMediaStream(stream);
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        const audioChunks: Blob[] = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const url = URL.createObjectURL(audioBlob);
          setAudio(url);
          uploadFiles(
            { files: audioBlob },
            {
              onSuccess: (data) => {
                console.log("transcript", transcript);
                console.log("text", text);
                if (handleResult) {
                  handleResult(transcript, data);
                }
              },
              onError: (error) => {
                console.log(error);
              },
            }
          );
        };

        mediaRecorder.start();
      })
      .catch((error) => {
        console.error("Error accessing the microphone:", error);
      });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";

      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      if (inputRef.current.scrollHeight > 176) {
        inputRef.current.style.overflow = "auto";
      } else {
        inputRef.current.style.overflow = "hidden";
      }
    }
  }, [text]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition() && mounted) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    mounted && (
      <main className="">
        <div className="flex gap-4 w-full input-bordered px-3.5 py-[3.8px] max-w-x border rounded-lg">
          <textarea
            placeholder={placeHolder ?? t("placeHolder")}
            ref={inputRef}
            rows={1}
            className="p-3 text-[12px] rounded-xl max-h-44 overflow-hidden resize-none outline-none flex-1 px-2 text-[#DDB669]"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button
            disabled={isPending}
            onClick={!listening ? startRecording : stopRecording}
          >
            <Image
              src={micSvg}
              alt="mic"
              className={`${
                listening && "ring-2 "
              } rounded-full ring-yellow-400 transition-all duration-300`}
            />
          </button>
        </div>

        {audio && (
          <div className="py-2">
            <audio controls src={audio} />
          </div>
        )}
      </main>
    )
  );
};

export default SpeechToText;
