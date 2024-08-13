import React from "react";
import Treatment from "./Treatment";
import { TreatmentListProps, TreatmentProps } from "./types";

const TreatmentList: React.FC<TreatmentListProps> = ({
  treatments,
}): JSX.Element => {
  return (
    <ul className="treatments__list">
      {treatments.map(({ id, title, image }: TreatmentProps) => (
        <Treatment id={id} key={id} title={title} image={image} />
      ))}
    </ul>
  );
};

export default TreatmentList;
