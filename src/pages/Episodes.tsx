import React from "react";

type Props = { children?: React.ReactElement };

const Episodes = ({ children }: Props): React.ReactElement => {
  return <div>{children}</div>;
};

export default Episodes;
