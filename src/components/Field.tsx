type Props = {
  name: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
};

const control =
  "mt-2 w-full rounded-xl border border-transparent bg-white px-4 py-3 text-base text-brand-900 outline-none transition focus:ring-4 focus:ring-brand-500/40 user-invalid:border-rose-500 user-invalid:ring-4 user-invalid:ring-rose-500/30";

export default function Field({
  name,
  label,
  type,
  autoComplete,
  required = true,
}: Props) {
  const id = `enquiry-${name}`;
  const isTextarea = type === "textarea";

  return (
    <div className={isTextarea ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="text-sm font-medium text-cream/80">
        {label}
        {!required && <span className="text-cream/50"> (optional)</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required={required}
          autoComplete={autoComplete}
          className={`${control} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={control}
        />
      )}
    </div>
  );
}
