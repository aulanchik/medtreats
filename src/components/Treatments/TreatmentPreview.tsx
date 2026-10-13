import React from "react";
import { TreatmentPreviewProps } from "./types";
import { getImagePath } from "@/utils";

const TreatmentPreview: React.FC<TreatmentPreviewProps> = ({
  image,
}): JSX.Element => {
  return (
    <div className="treatments__preview">
      <img src={getImagePath(image)} alt="Treatment preview" />
    </div>
  );
};

export default TreatmentPreview;
