import React, { useRef, useState } from "react";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  type = "text",
  validate = false,
}) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [hasContent, setHasContent] = useState<boolean>(false);

  const handleChange = () => {
    if (inputRef.current) {
      setHasContent(inputRef.current.value !== "");
    }
  };

  const renderInputField = () => {
    const inputClassName = `input__box ${hasContent ? "input__stay" : ""}`;

    if (type === "textarea") {
      return (
        <textarea
          id={id}
          name={name}
          className={inputClassName}
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          onChange={handleChange}
          required={validate}
        />
      );
    }

    return (
      <input
        id={id}
        name={name}
        type={type}
        className={inputClassName}
        ref={inputRef as React.RefObject<HTMLInputElement>}
        onChange={handleChange}
        required={validate}
      />
    );
  };

  return (
    <div className={`input ${name}-${type}__${id}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {renderInputField()}
    </div>
  );
};

export default Input;
