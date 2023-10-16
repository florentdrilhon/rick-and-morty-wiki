import React from "react";
import styles from "./CharacterCard.module.scss";

const getStatusBadge = (status) => {
  switch (status) {
    case "Dead":
      return "danger";
    case "Alive":
      return "success";
    default:
      return "secondary";
  }
};

const CharacterCard = ({ id, image, name, status, location }) => {
  const statusBadge = getStatusBadge(status);

  return (
    <div
      key={id}
      className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
    >
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
    </div>
  );
};

export default CharacterCard;
