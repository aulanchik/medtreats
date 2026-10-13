type TreatmentProps = {
  id: number;
  title: string;
  image: string;
};

type FullTreatmentProps = TreatmentProps & {
  description: string[];
};

type TreatmentListProps = {
  treatments: TreatmentProps[];
  onHover: (treatment: TreatmentProps) => void;
  onClick: (treatment: TreatmentProps) => void;
};

type TreatmentPreviewProps = {
  image: string;
};

type TreatmentDetailsProps = FullTreatmentProps;

export type {
  TreatmentProps,
  TreatmentListProps,
  TreatmentPreviewProps,
  TreatmentDetailsProps,
  FullTreatmentProps,
};
