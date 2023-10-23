type Props = {
  input: string;
  task: (inputValue: any) => void;
  setPageNumber: (value: number) => void;
  index: number;
  name: string;
};

const FilterBTN = ({
  input,
  task,
  setPageNumber,
  index,
  name,
}: Props): React.ReactElement => {
  return (
    <div>
      <style>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            setPageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {" "}
          {input}{" "}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
