import React, { useState } from "react";
import { InputProps } from "@/components/Input/types";
import { Input } from "@/components";
import data from "@/data/enquiry.json";

const Enquiry: React.FC = (): JSX.Element => {
  const [validate, setValidate] = useState<boolean>(false);

  const { title, form, action } = data[0];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setValidate(true);
    alert("DEMO");
  };

  return (
    <section id="enquiry" className="enquiry">
      <h2
        className="enquiry__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <form className="enquiry__form" onSubmit={(e) => handleSubmit(e)}>
        {form.map((field) => (
          <div key={field.name} className="enquiry__form__field">
            <Input
              id={field.name}
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type as InputProps["type"]}
              validate={validate}
            />
          </div>
        ))}
        <div className="enquiry__form__submit">
          <button type="submit" className="enquiry__btn">
            {action.label}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Enquiry;
