import { StatusT } from "./types";

export const getStatusBadge = (status: StatusT | null) => {
  switch (status) {
    case "Dead":
      return "danger";
    case "Alive":
      return "success";
    default:
      return "secondary";
  }
};
