import React from "react";

type Props<T extends string | number> = {
  label: string;
  onChange: (value: T) => void;
  values: Array<T>;
};

function InputSelector<T extends string | number>({
  label,
  onChange,
  values,
}: Props<T>): React.ReactElement {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => onChange(e.target.value as T)}
        className="form-select"
        id={label}
      >
        {values.map((value) => (
          <option value={value}>{`${label} - ${value}`}</option>
        ))}
      </select>
    </div>
  );
}

export default InputSelector;
