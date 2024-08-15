import React from "react";
import TreatmentList from "./TreatmentList";
import TreatmentPreview from "./TreatmentPreview";
import TreatmentDetails from "./TreatmentDetails";
import treatments from "@/data/treatments.json";
import { FullTreatmentProps, TreatmentProps } from "./types";

const Treatments: React.FC = (): JSX.Element => {
  const [selected, setSelected] = React.useState<FullTreatmentProps>(
    treatments[0],
  );

  const handleHover = (treatment: TreatmentProps) => {
    const fullTreatment = treatments.find((t) => t.id === treatment.id);
    if (fullTreatment) setSelected(fullTreatment);
  };

  const handleClick = (treatment: TreatmentProps) => {
    const fullTreatment = treatments.find((t) => t.id === treatment.id);
    if (fullTreatment) setSelected(fullTreatment);
  };

  return (
    <section id="treatments" className="treatments">
      <h2 className="treatments__title">
        Our <strong>Treatments</strong>
      </h2>
      <TreatmentList
        treatments={treatments.map(({ id, title, image }) => ({
          id,
          title,
          image,
        }))}
        onHover={handleHover}
        onClick={handleClick}
      />
      <div className="treatments__content">
        <TreatmentPreview image={selected.image} />
        <TreatmentDetails
          id={selected.id}
          title={selected.title}
          description={selected.description}
        />
      </div>
    </section>
  );
};

export default Treatments;
