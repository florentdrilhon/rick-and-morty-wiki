import React from "react";

type Props = { children?: React.ReactElement };

const Locations = ({ children }: Props): React.ReactElement => {
  return <div>{children}</div>;
};

export default Locations;
