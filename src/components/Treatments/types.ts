type TreatmentProps = {
  id: number;
  title: string;
  image: string;
};

type TreatmentListProps = {
  treatments: TreatmentProps[];
};

type TreatmentPreviewProps = {
  image: string;
};

type TreatmentDetailsProps = {
  title: string;
  description: string[];
};

export type {
  TreatmentProps,
  TreatmentListProps,
  TreatmentPreviewProps,
  TreatmentDetailsProps,
};
