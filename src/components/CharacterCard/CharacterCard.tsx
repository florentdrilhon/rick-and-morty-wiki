import React from "react";
import styles from "./CharacterCard.module.scss";
import { StatusT, Location } from "../../helpers/types";
import { getStatusBadge } from "helpers/characterHelpers";

type Props = {
  image: string;
  name: string;
  location: Location;
  status: StatusT | null;
};

const CharacterCard = ({
  image,
  name,
  status,
  location,
}: Props): React.ReactElement => {
  const statusBadge = getStatusBadge(status);

  return (
    <>
      <div
        className={`${styles.card} d-flex flex-column justify-content-center`}
      >
        <img className={`${styles.img} img-fluid`} src={image} alt="" />
        <div className={`${styles.content}`}>
          <div className="fs-5 fw-bold mb-4">{name}</div>
          <div className="">
            <div className="fs-6 fw-normal">Last Location</div>
            <div className="fs-5">{location.name}</div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.badge} position-absolute badge bg-${statusBadge}`}
      >
        {status}
      </div>
    </>
  );
};

export default CharacterCard;
