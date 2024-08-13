import React from "react";
import { TreatmentDetailsProps } from "./types";

const TreatmentDetails: React.FC<TreatmentDetailsProps> = ({
  title,
  description,
}) => {
  return (
    <div className="treatments__details">
      <h3 className="treatments__details__title">{title}</h3>
      {description.map((detail: string, index: number) => (
        <p key={index} className="treatments__details__description">
          {detail}
        </p>
      ))}
    </div>
  );
};

export default TreatmentDetails;
