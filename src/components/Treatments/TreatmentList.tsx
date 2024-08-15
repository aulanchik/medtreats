import React from "react";
import Treatment from "./Treatment";
import { TreatmentListProps, TreatmentProps } from "./types";

const TreatmentList: React.FC<TreatmentListProps> = ({
  treatments,
  onHover,
  onClick,
}): JSX.Element => {
  return (
    <ul className="treatments__list">
      {treatments.map((treatment: TreatmentProps) => (
        <li
          key={treatment.id}
          onClick={() => onClick(treatment)}
          onMouseEnter={() => onHover(treatment)}
        >
          <Treatment
            id={treatment.id}
            title={treatment.title}
            image={treatment.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default TreatmentList;
