import React from "react";
// @ts-ignore
import Spinner from "@/app/[locale]/components/atoms/Spinner";

const Loading = () => {
  return (
    <div className="loading-container">
      <Spinner />
    </div>
  );
};

export default Loading;
