import FilterBTN from "../FilterBTN";

type Props = {
  setSpecies: (species: string) => void;
  setPageNumber: (pageNumber: number) => void;
};

const Species = ({ setSpecies, setPageNumber }: Props): React.ReactElement => {
  // TODO: define enum or types for species
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
    "Unknown",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsetTwo"
          aria-expanded="false"
          aria-controls="collapsetTwo"
        >
          {" "}
          Species{" "}
        </button>
      </h2>
      <div
        id="collapsetTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="headingtTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="species"
              task={setSpecies}
              setPageNumber={setPageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
