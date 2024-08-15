import React from "react";
import { FullTreatmentProps } from "./types";

const TreatmentDetails: React.FC<Omit<FullTreatmentProps, "image">> = ({
  id,
  title,
  description,
}) => {
  return (
    <div key={id} className="treatments__details">
      <h3 className="treatments__details__title">{title}</h3>
      <ul className="treatments__details__description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentDetails;
