import React from "react";
import TreatmentList from "./TreatmentList";
import TreatmentPreview from "./TreatmentPreview";
import TreatmentDetails from "./TreatmentDetails";
import treatments from "@/data/treatments.json";

const Treatments: React.FC = (): JSX.Element => {
  return (
    <section id="#treatments" className="treatments">
      <h2 className="treatments__title">
        Our <strong>Treatments</strong>
      </h2>
      <TreatmentList treatments={treatments} />
      <div className="treatments__content">
        <TreatmentPreview image={treatments[0].image} />
        <TreatmentDetails
          title={treatments[0].title}
          description={treatments[0].description}
        />
      </div>
    </section>
  );
};

export default Treatments;
