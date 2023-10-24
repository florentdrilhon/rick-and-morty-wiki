import React from "react";

type SelectorValue = {
  id: number;
  label: string;
};

type Props = {
  label: string;
  onChange: (newId: number) => void;
  values: Array<SelectorValue>;
};

function InputSelector({ label, onChange, values }: Props): React.ReactElement {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => onChange(Number(e.target.value))}
        className="form-select"
        id={label}
      >
        {values.map((value) => (
          <option
            key={value.id}
            value={value.id}
          >{`${label} - ${value.label}`}</option>
        ))}
      </select>
    </div>
  );
}

export default InputSelector;
