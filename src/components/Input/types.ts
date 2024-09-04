type InputProps = {
  id: string;
  name: string;
  label: string;
  validate?: boolean;
  type: "number" | "text" | "password" | "email" | "textarea" | "tel";
};

export type { InputProps };
