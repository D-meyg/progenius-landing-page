import { Dispatch, SetStateAction } from "react";

export const Input = ({
  label,
  placeholder,
  type,
  change,
  value,
  select,
  options
}: {
  label: string;
  placeholder: string;
  type?: string;
  change: Dispatch<SetStateAction<string>>;
  value: string;
  select?: boolean;
  options?: Array<string>;
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (label === "Phone") {
      const value = e.target.value.replace(/[^0-9]/g, "");
      change(e.target.value);
    } else {
      change(e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-[7px]">
      <div className="text-white text-base tracking-[-0.2px]">
        <label htmlFor="">{label}</label>
      </div>
      <span>
        {select ? (
          <select
            required
            className="px-[16px] h-[48px] border-[1px] md:w-[391px] border-white/[0.2] rounded-[24px] bg-transparent outline-none w-full text-white"
            onChange={handleChange}
            defaultValue={placeholder}
          >
            <option value={`${placeholder}`} disabled>
              {placeholder}
            </option>
            {options?.map((option, index) => {
              return(
                <option key={index} value={option} style={{ color: "black" }}>
              {option}
            </option>
              )
            })}
          </select>
        ) : (
          <input
            name={label}
            id={label}
            type={type === "email" ? "email" : "text"}
            className="px-[16px] h-[48px] border-[1px] md:w-[391px] border-white/[0.2] rounded-[24px] bg-transparent outline-none w-full text-white ::placeholder:text-white/[0.5] py-[20px]"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required
          />
        )}
      </span>
    </div>
  );
};

export const TextArea = ({
  label,
  placeholder,
  value,
  change,
}: {
  label: string;
  placeholder: string;
  change: Dispatch<SetStateAction<string>>;
  value: string;
}) => {
  return (
    <div className="flex flex-col gap-[7px]">
      <div className="text-white text-base tracking-[-0.2px]">
        <label htmlFor="">{label}</label>
      </div>
      <span>
        <textarea
          name={label}
          id={label}
          className="px-[16px] h-[158px] border-[1px] p-[5px] border-white/[0.2] rounded-[24px] bg-transparent outline-none w-full text-white"
          placeholder={placeholder}
          value={value}
          onChange={(e) => change(e.target.value)}
        />
      </span>
    </div>
  );
};
