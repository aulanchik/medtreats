import React from "react";
import { getImagePath } from "@/utils";
import { TreatmentProps } from "./types";

const Treatment: React.FC<TreatmentProps> = ({
  id,
  image,
  title,
}: TreatmentProps): JSX.Element => {
  return (
    <div key={id} className="treatments__item">
      <img src={getImagePath(image)} alt={title} />
    </div>
  );
};

export default Treatment;
